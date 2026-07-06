interface ErrorBannerProps {
  error: string;
}

export function ErrorBanner({ error }: ErrorBannerProps) {
  return (
    <div className="rounded-3xl border border-rose-400/20 bg-rose-500/10 px-5 py-4 text-sm leading-6 text-rose-100">
      {error}
    </div>
  );
}