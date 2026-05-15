import type { SVGProps } from "react";

function IconShell({ children, ...props }: SVGProps<SVGSVGElement> & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconShell {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 7.5v5l3.25 2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </IconShell>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconShell {...props}>
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </IconShell>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconShell {...props}>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </IconShell>
  );
}

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconShell {...props}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconShell>
  );
}

export function ChevronUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconShell {...props}>
      <path d="M6 15l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconShell>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconShell {...props}>
      <path d="M5 12h13M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconShell>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconShell {...props}>
      <path d="M12 3a9 9 0 0 0-7.8 13.4L3 21l4.75-1.14A9 9 0 1 0 12 3Z" fill="currentColor" />
      <path d="M9.8 8.2c.2-.44.4-.45.75-.45h.62c.22 0 .52-.08.8.55.3.64 1.02 2.2 1.11 2.36.1.16.17.35.03.57-.14.22-.21.36-.41.56-.2.2-.43.45-.62.6-.21.17-.42.35-.18.78.24.43 1.06 1.77 2.28 2.86 1.57 1.39 2.16 1.65 2.48 1.83.32.18.5.15.69-.09.19-.24.82-.96 1.03-1.3.21-.34.43-.28.72-.17.29.11 1.81.86 2.12 1.02.31.16.51.24.59.38.08.14.08.84-.19 1.65-.27.81-1.57 1.56-2.15 1.64-.58.08-1.08.12-3.09-.75-2.02-.87-5.08-3.32-7.14-6.49C6.82 10.63 7.1 8.6 7.39 8c.29-.6.62-.5.86-.53h1.55Z" fill="#fff" opacity="0.12" />
    </IconShell>
  );
}