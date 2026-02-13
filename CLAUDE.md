# Owly Website - Development Instructions

## Figma Implementation Workflow

When the user provides a Figma link, follow this comprehensive workflow:

### Step 1: Get Full Design Context
```
mcp__local-mcp-server__get_design_context
```
- Extract nodeId from URL (e.g., `node-id=35-255` → `35:255`)
- This returns generated code, styling, and structure

### Step 2: Get Screenshot for Visual Reference
```
mcp__local-mcp-server__get_screenshot
```
- Always get a screenshot to visually verify the design
- Use this to compare your implementation

### Step 3: Get Variable Definitions (Colors, Tokens)
```
mcp__local-mcp-server__get_variable_defs
```
- Extract design tokens, colors, spacing values
- Use exact hex values from Figma

### Step 4: Download Assets (Icons, Images)
The design context returns image URLs like:
```
const imgFrame = "http://localhost:3845/assets/xxx.svg"
```

**For each asset URL:**
1. Use WebFetch to download the SVG/image content
2. Save to `/public/images/` with descriptive names
3. Reference in code using `/images/filename.svg`

### Step 5: Check Code Connect (Existing Components)
```
mcp__local-mcp-server__get_code_connect_map
```
- Check if Figma components map to existing code components
- Reuse existing components when available

### Step 6: Get Metadata for Complex Layouts
```
mcp__local-mcp-server__get_metadata
```
- Use for understanding nested structure
- Helps with complex multi-layer designs

## Asset Download Process

When Figma MCP returns localhost asset URLs (WebFetch doesn't support localhost):

1. **Create asset folder:**
   ```bash
   mkdir -p public/images/[component-name]
   ```

2. **Download assets using curl (Bash tool):**
   ```bash
   curl -s "http://localhost:3845/assets/[hash].svg" -o public/images/[component-name]/[descriptive-name].svg
   ```

3. **Batch download example:**
   ```bash
   cd public/images/input-bar && \
   curl -s "http://localhost:3845/assets/xxx.svg" -o icon1.svg && \
   curl -s "http://localhost:3845/assets/yyy.svg" -o icon2.svg
   ```

4. **Use in code:**
   ```tsx
   <img src="/images/[component-name]/[descriptive-name].svg" alt="Description" className="w-4 h-4" />
   // or with Next.js Image
   import Image from 'next/image'
   <Image src="/images/..." width={16} height={16} alt="..." />
   ```

**Important:** The SVGs from Figma use CSS variables for colors (e.g., `stroke="var(--stroke-0, #27FDA7)"`).
The fallback color after the comma will be used by default.

## Project Structure

```
owly-website/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── ui/               # Reusable UI components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── InteractiveProduct.tsx
│   ├── TeamsSection.tsx
│   ├── FeaturesSection.tsx
│   └── VideoTypesSection.tsx
├── public/
│   └── images/           # All image assets
│       ├── hero/
│       ├── interactive-product/
│       ├── shine/
│       └── gallery/
└── lib/
    └── utils.ts
```

## Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React + Custom SVGs from Figma

## Key Design Tokens

```css
/* Colors */
--background: #ffffff
--foreground: #0a0a0a
--muted: #6b6b6b
--accent-green: #27fda7
--surface-dark: #181818
--surface-darker: #111111

/* Border Radius */
--radius-sm: 8px
--radius-md: 15px
--radius-lg: 30px

/* Shadows */
--shadow-card: 0px 4px 18px rgba(0,0,0,0.17)
```

## Development Commands

```bash
npm run dev     # Start dev server
npm run build   # Production build
npm run lint    # Run linter
```

## Visual Verification with Playwright Screenshots

**IMPORTANT:** After implementing UI changes, ALWAYS take screenshots to verify the implementation and catch visual issues.

### Screenshot Process

1. **Take a screenshot after implementation:**
   ```bash
   npx playwright screenshot --wait-for-timeout=2000 --viewport-size=1280,900 http://localhost:3002/[page] /tmp/[descriptive-name].png
   ```

2. **Read the screenshot to analyze:**
   ```
   Use the Read tool with the screenshot path to visually inspect the implementation
   ```

3. **Check for common issues:**
   - Colors matching design specs (no brand color violations)
   - Elements properly aligned and attached (e.g., connection lines to badges)
   - Correct backgrounds (white vs black)
   - Text readability and contrast
   - Responsive scaling
   - Missing or floating elements

4. **Fix issues and re-screenshot:**
   - Make corrections based on visual inspection
   - Take another screenshot to verify fixes
   - Repeat until all issues are resolved

### Example Workflow

```bash
# After making changes, take screenshot
npx playwright screenshot --wait-for-timeout=2000 --viewport-size=1280,900 http://localhost:3002/features /tmp/features-check.png

# For full page screenshots
npx playwright screenshot --wait-for-timeout=2000 --full-page http://localhost:3002/features /tmp/features-fullpage.png

# For specific viewport sizes (mobile)
npx playwright screenshot --wait-for-timeout=2000 --viewport-size=375,812 http://localhost:3002/features /tmp/features-mobile.png
```

### Bug Bash Checklist
After taking screenshots, verify:
- [ ] Background colors correct (white/black as specified)
- [ ] No brand color violations (e.g., no green if not in brand palette)
- [ ] Text labels present/removed as requested
- [ ] Connection lines attached to elements (not floating)
- [ ] Icons visible and correctly colored
- [ ] Animations rendering (particles, rings, etc.)
- [ ] Responsive at different viewport sizes
