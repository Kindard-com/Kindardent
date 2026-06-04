import { ReactNode } from "react";

interface PageShellProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  wide?: boolean;
}

export default function PageShell({ title, subtitle, children, wide = false }: PageShellProps) {
  return (
    <main>
      <div className="page-header-bar">
        <h1
          className="heading-condensed"
          style={{ fontSize: "1.15rem", letterSpacing: "0.06em" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="label-caps" style={{ color: "var(--mid)" }}>
            {subtitle}
          </p>
        )}
      </div>
      <div className={wide ? "page-body-wide" : "page-body"}>
        {children}
      </div>
    </main>
  );
}
