import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-[72px] font-semibold tracking-[-4px] text-black leading-none mb-4">
          404
        </h1>
        <p className="text-[18px] text-[#6b6b6b] mb-8">
          This page doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 text-sm font-semibold text-white bg-black rounded-full hover:bg-neutral-800 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
