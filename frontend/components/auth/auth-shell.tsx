import Link from "next/link";
import type { ReactNode } from "react";
import { Brand } from "@/components/ui/brand";
import { Icon } from "@/components/ui/icon";

export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="auth-screen">
      <aside className="auth-aside">
        <Brand />
        <div className="auth-aside-copy">
          <p className="eyebrow">Historical research, grounded in evidence</p>
          <h2>Research with the record in view.</h2>
          <p>
            Keep every claim connected to its source passages, see where accounts disagree, and
            decide for yourself what the evidence supports.
          </p>
          <div className="mini-review">
            <div className="mini-bar">
              <span>Claim review</span>
              <span className="tag tag-rust">Conflicting evidence</span>
            </div>
            <div className="mini-claim">
              <small>SELECTED CLAIM · C-014</small>
              <strong>The structure was commissioned during the ruler’s first campaign.</strong>
            </div>
          </div>
        </div>
        <p className="auth-aside-foot">AI recommends, evidence supports, and the user decides.</p>
      </aside>

      <div className="auth-main">
        <div className="auth-top">
          <Brand />
          <Link href="/" className="auth-back">
            <Icon name="chevron" size={14} />
            Back to home
          </Link>
        </div>
        <div className="auth-center">
          <div className="auth-card">{children}</div>
        </div>
      </div>
    </div>
  );
}
