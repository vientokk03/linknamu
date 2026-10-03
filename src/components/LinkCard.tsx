import type { ReactNode } from "react";

type LinkCardProps = {
  title: string;
  url: string;
  icon: ReactNode;
};

export default function LinkCard({ title, url, icon }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-foreground transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <span className="shrink-0">{icon}</span>
      <span className="font-medium">{title}</span>
    </a>
  );
}
