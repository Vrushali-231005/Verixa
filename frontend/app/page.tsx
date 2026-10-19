import Link from "next/link";
import { Brand } from "@/components/ui/brand";
import { Icon } from "@/components/ui/icon";
import { LinkButton } from "@/components/ui/link-button";

const features = [
  {
    n: "01",
    title: "Evidence Engine",
    text: "Register sources, inspect exact passages, map competing claims and record the limits of what is known.",
    icon: "book",
  },
  {
    n: "02",
    title: "Evidence-Aware Writer",
    text: "Draft freely with linked claims, visible citations and guidance when a statement needs stronger support.",
    icon: "edit",
  },
  {
    n: "03",
    title: "Living Knowledge Visuals",
    text: "Build timelines and relationship maps that stay connected to reviewed project records.",
    icon: "graph",
  },
] as const;

const steps = [
  "Frame the inquiry",
  "Gather sources",
  "Review the evidence",
  "Develop your account",
  "Share with context",
];

export default function HomePage() {
  return (
    <div className="landing">
      <header className="site-header shell">
        <Brand />
        <nav className="landing-nav" aria-label="Main navigation">
          <a href="#approach">Approach</a>
          <a href="#workflow">Workflow</a>
          <a href="#principles">Principles</a>
        </nav>
        <div className="header-actions">
          <LinkButton href="/login" variant="ghost">
            Sign in
          </LinkButton>
          <LinkButton href="/register">Start a project</LinkButton>
        </div>
      </header>

      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">Historical research, grounded in evidence</p>
            <h1>
              Follow every historical claim back to its <em>evidence.</em>
            </h1>
            <p className="hero-text">
              Bring sources, competing accounts, writing and historical timelines into one
              connected workspace. See what the evidence supports, where accounts disagree, and
              what still needs review.
            </p>
            <div className="hero-actions">
              <LinkButton href="/register" icon="arrow">
                Create a research project
              </LinkButton>
              <LinkButton href="#review-preview" variant="secondary">
                Explore evidence review
              </LinkButton>
            </div>
            <div className="principle">
              <span>
                <Icon name="check" size={14} />
              </span>{" "}
              Built for careful inquiry, not automatic certainty
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract archival source mark">
            <div className="folio folio-one">
              <span>Source 01</span>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className="folio folio-two">
              <span>Passage 04</span>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className="seal">
              <svg viewBox="0 0 220 220" role="img" aria-label="VERIXA evidence seal">
                <defs>
                  <path id="sealpath" d="M110,110 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
                </defs>
                <circle cx="110" cy="110" r="91" />
                <circle cx="110" cy="110" r="72" />
                <text>
                  <textPath href="#sealpath" startOffset="5%">
                    SOURCE • CLAIM • CONTEXT • REVIEW •
                  </textPath>
                </text>
                <path d="M82 82h56v56H82zM94 96h32M94 108h32M94 120h21" />
                <text x="110" y="153" textAnchor="middle" className="seal-year">
                  EST. MMXXV
                </text>
              </svg>
            </div>
            <div className="annotation">Evidence remains connected</div>
          </div>
        </section>

        <section className="feature-section" id="approach">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">One connected inquiry</p>
              <h2>From source material to considered expression</h2>
              <p>
                VERIXA keeps evidence visible as your research moves from reading to
                interpretation to writing.
              </p>
            </div>
            <div className="feature-grid">
              {features.map((f) => (
                <article className="feature-card" key={f.title}>
                  <div className="feature-top">
                    <span>{f.n}</span>
                    <Icon name={f.icon} size={24} />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                  <Link href="/register">
                    Explore capability <Icon name="arrow" size={15} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="workflow shell" id="workflow">
          <div className="section-heading left">
            <p className="eyebrow">A deliberate workflow</p>
            <h2>Research with the record in view</h2>
          </div>
          <div className="steps">
            {steps.map((step, i) => (
              <div className="step" key={step}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div className="step-line" />
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="preview-section" id="review-preview">
          <div className="shell preview-wrap">
            <div className="preview-copy" id="principles">
              <p className="eyebrow">Evidence review</p>
              <h2>See agreement, tension and uncertainty—without flattening the record.</h2>
              <p>
                Compare source passages in context, record your interpretation and keep repeated
                or dependent accounts from appearing as independent corroboration.
              </p>
              <LinkButton href="/register" variant="secondary" icon="arrow">
                Open sample review
              </LinkButton>
            </div>
            <div className="mini-review">
              <div className="mini-bar">
                <span>Claim review</span>
                <span className="tag tag-rust">Conflicting evidence</span>
              </div>
              <div className="mini-claim">
                <small>SELECTED CLAIM · C-014</small>
                <strong>The structure was commissioned during the ruler’s first campaign.</strong>
              </div>
              <div className="mini-sources">
                <div>
                  <span className="tag tag-green">Supports</span>
                  <p>“The later account attributes the commission to…”</p>
                  <small>Source A · Passage 3</small>
                </div>
                <div>
                  <span className="tag tag-rust">Qualifies</span>
                  <p>“The record establishes presence, but not patronage…”</p>
                  <small>Source B · Passage 7</small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <Brand />
        <p>Evidence-first tools for historical inquiry.</p>
        <span>Research states are not universal truth scores.</span>
      </footer>
    </div>
  );
}
