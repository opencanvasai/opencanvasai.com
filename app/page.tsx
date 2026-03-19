import { type ReactNode } from "react";
import { Navbar } from "./components/Navbar";
import { FadeIn } from "./components/FadeIn";
import { DownloadButton, DownloadSubtitle } from "./components/DownloadButton";
import {
  GitHubIcon,
  XIcon,
  YouTubeIcon,
  RedditIcon,
  LinkedInIcon,
  InstagramIcon,
  StarIcon,
  ForkIcon,
  UsersIcon,
} from "./components/Icons";

/* ─── Static Data ────────────────────────────────────────── */
const features = [
  {
    icon: "🎨",
    title: "Visual Node Editor",
    desc: "Drag, connect, and build AI workflows visually. No code required.",
  },
  {
    icon: "🔑",
    title: "Bring Your Own Keys",
    desc: "Connect fal.ai, Replicate, and more. Pay only for what you use.",
  },
  {
    icon: "⚡",
    title: "Run Locally",
    desc: "Runs entirely on your computer. Your data never leaves your machine.",
  },
  {
    icon: "🎬",
    title: "Image & Video Nodes",
    desc: "Generate images, videos, upscale, inpaint, and more in one workflow.",
  },
  {
    icon: "📤",
    title: "Share Workflows",
    desc: "Export workflows as JSON or ZIP. Share with anyone, import anywhere.",
  },
  {
    icon: "🆓",
    title: "Free Forever",
    desc: "No subscriptions. No commissions. Open source and free for everyone.",
  },
];

const nodes = [
  { icon: "🖼️", name: "Text to Image", desc: "Generate images from text prompts using top AI models" },
  { icon: "🔄", name: "Image to Image", desc: "Transform and restyle existing images with AI" },
  { icon: "🔍", name: "Upscale", desc: "Enhance resolution and detail of any image" },
  { icon: "✂️", name: "Background Remove", desc: "Instantly remove backgrounds with precision" },
  { icon: "🎥", name: "Image to Video", desc: "Animate still images into dynamic videos" },
  { icon: "🎭", name: "Face Swap", desc: "Swap faces seamlessly across images" },
  { icon: "🖌️", name: "Inpaint", desc: "Edit specific regions of an image with AI" },
  { icon: "✨", name: "Prompt Enhancer", desc: "Improve your prompts for better results" },
];

const socials: { icon: ReactNode; name: string; handle: string; desc: string; url: string }[] = [
  { icon: <XIcon size={22} />, name: "Twitter / X", handle: "@opencanvasai", desc: "Follow for updates", url: "https://x.com/opencanvasai" },
  { icon: <YouTubeIcon size={22} />, name: "YouTube", handle: "@OpenCanvasAI", desc: "Watch tutorials", url: "https://youtube.com/@OpenCanvasAI" },
  { icon: <RedditIcon size={22} />, name: "Reddit", handle: "r/OpenCanvasAI", desc: "Join the community", url: "https://reddit.com/r/OpenCanvasAI" },
  { icon: <LinkedInIcon size={22} />, name: "LinkedIn", handle: "OpenCanvas AI", desc: "Professional updates", url: "https://linkedin.com/company/opencanvasai" },
  { icon: <InstagramIcon size={22} />, name: "Instagram", handle: "@opencanvas_ai", desc: "Workflow inspiration", url: "https://instagram.com/opencanvas_ai" },
  { icon: <GitHubIcon size={22} />, name: "GitHub", handle: "opencanvasai", desc: "Star & contribute", url: "https://github.com/opencanvasai/OpenCanvas" },
];

/* ═══════════════════════════════════════════════════════════
   PAGE — Server Component
   ═══════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <div>
      {/* ──────────── 1. NAVBAR ──────────── */}
      <Navbar />

      {/* ──────────── 2. HERO ──────────── */}
      <section className="hero">
        <FadeIn>
          <span className="hero-badge">Open Source • Free Forever</span>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1>The Visual AI Workflow Builder for Creators</h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="hero-sub">
            Open-source node-based AI editor. Bring your own API keys. No
            subscriptions. No markups. Just pure creativity.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="hero-buttons">
            <DownloadButton />
            <a
              href="https://github.com/opencanvasai/OpenCanvas"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <GitHubIcon />
              View on GitHub
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="hero-proof">
            ★ Free &amp; Open Source &nbsp;•&nbsp; Mac, Windows &amp; Linux
            &nbsp;•&nbsp; Powered by fal.ai &amp; Replicate
          </p>
        </FadeIn>
      </section>

      {/* ──────────── DEMO VIDEO ──────────── */}
      <section className="video-section">
        <FadeIn>
          <p className="video-label">See it in action →</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/tRNvnkt2O58?rel=0&modestbranding=1&color=white"
              title="OpenCanvas AI Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </FadeIn>
      </section>

      {/* ──────────── 3. FEATURES ──────────── */}
      <section className="features" id="features">
        <FadeIn>
          <p className="section-label">WHY OPENCANVAS AI</p>
        </FadeIn>
        <FadeIn>
          <h2 className="section-title">
            Everything you need. Nothing you don&apos;t.
          </h2>
        </FadeIn>
        <div className="features-grid">
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="glass-card feature-card">
                <span className="feature-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ──────────── 4. HOW IT WORKS ──────────── */}
      <section className="how-it-works">
        <FadeIn>
          <p className="section-label">GET STARTED</p>
        </FadeIn>
        <FadeIn>
          <h2 className="section-title">Up and running in 3 steps</h2>
        </FadeIn>
        <div className="steps">
          {[
            {
              num: "01",
              title: "Download the app",
              desc: "Install OpenCanvas AI on your Mac, Windows, or Linux machine.",
            },
            {
              num: "02",
              title: "Add your API keys",
              desc: "Connect fal.ai or Replicate in settings. Use your own keys.",
            },
            {
              num: "03",
              title: "Start creating",
              desc: "Build workflows and generate images & videos instantly.",
            },
          ].map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="glass-card step-card">
                <div className="step-number">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ──────────── 5. NODE SHOWCASE ──────────── */}
      <section className="node-showcase">
        <FadeIn>
          <p className="section-label">NODES</p>
        </FadeIn>
        <FadeIn>
          <h2 className="section-title">
            Powerful nodes for every creative need
          </h2>
        </FadeIn>
        <FadeIn>
          <div className="node-scroll">
            {nodes.map((n, i) => (
              <div key={i} className="glass-card node-card">
                <span className="node-icon">{n.icon}</span>
                <h3>{n.name}</h3>
                <p>{n.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ──────────── 6. WORKFLOW SHARE ──────────── */}
      <section className="workflow-share">
        <FadeIn>
          <p className="section-label">SHARE</p>
        </FadeIn>
        <FadeIn>
          <h2 className="section-title">Build once. Share forever.</h2>
        </FadeIn>
        <FadeIn>
          <p className="section-subtitle">
            Export your entire workflow as JSON or ZIP. Share it with the
            community. Import anyone&apos;s workflow in one click.
          </p>
        </FadeIn>
        <div className="share-cards">
          <FadeIn>
            <div className="glass-card share-card">
              <span className="share-card-icon">📦</span>
              <h3>Export Workflows</h3>
              <p>
                Save your workflows as portable JSON or ZIP files. Every node,
                connection, and setting preserved perfectly.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="glass-card share-card">
              <span className="share-card-icon">📥</span>
              <h3>Import in One Click</h3>
              <p>
                Load any shared workflow file instantly. All nodes and
                connections restore exactly as the creator intended.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ──────────── 7. OPEN SOURCE ──────────── */}
      <section className="open-source">
        <FadeIn>
          <p className="section-label">OPEN SOURCE</p>
        </FadeIn>
        <FadeIn>
          <h2 className="section-title">
            Built in the open. For everyone.
          </h2>
        </FadeIn>
        <FadeIn>
          <p className="section-subtitle">
            OpenCanvas AI is fully open source. Star us on GitHub, contribute
            nodes, and shape the future of AI creative tools.
          </p>
        </FadeIn>
        <FadeIn>
          <div className="github-badges">
            <span className="github-badge">
              <StarIcon /> Stars
            </span>
            <span className="github-badge">
              <ForkIcon /> Forks
            </span>
            <span className="github-badge">
              <UsersIcon /> Contributors
            </span>
          </div>
        </FadeIn>
        <FadeIn>
          <div style={{ marginTop: 8 }}>
            <a
              href="https://github.com/opencanvasai/OpenCanvas"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <GitHubIcon />
              View on GitHub
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ──────────── 8. DOWNLOAD CTA ──────────── */}
      <section className="download-cta" id="download">
        <FadeIn>
          <h2>Start creating for free today.</h2>
        </FadeIn>
        <FadeIn>
          <p className="section-subtitle">
            <DownloadSubtitle />
          </p>
        </FadeIn>
        <FadeIn>
          <div style={{ marginTop: 40 }}>
            <DownloadButton variant="cta" />
          </div>
        </FadeIn>
        <FadeIn>
          <p className="download-meta">
            v1.0 &nbsp;•&nbsp; Signed &amp; Notarized
          </p>
        </FadeIn>
      </section>

      {/* ──────────── 9. COMMUNITY ──────────── */}
      <section className="community">
        <FadeIn>
          <p className="section-label">COMMUNITY</p>
        </FadeIn>
        <FadeIn>
          <h2 className="section-title">
            Join the OpenCanvas AI community
          </h2>
        </FadeIn>
        <FadeIn>
          <p className="section-subtitle">
            Follow us for updates, tutorials, and workflow inspiration.
          </p>
        </FadeIn>
        <div className="community-grid">
          {socials.map((s, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card social-card"
              >
                <span className="social-icon">{s.icon}</span>
                <h3>{s.name}</h3>
                <p className="social-handle">{s.handle}</p>
                <p className="social-desc">{s.desc}</p>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ──────────── 10. FOOTER ──────────── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <h3>OpenCanvas AI</h3>
              <p>Building tools that empower creativity.</p>
            </div>

            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#download">Download</a></li>
                <li>
                  <a href="https://github.com/opencanvasai/OpenCanvas" target="_blank" rel="noopener noreferrer">
                    Open Source
                  </a>
                </li>
                <li>
                  <a href="https://opencanvas.pro" target="_blank" rel="noopener noreferrer">
                    OpenCanvas Pro
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Community</h4>
              <ul>
                <li>
                  <a href="https://github.com/opencanvasai/OpenCanvas" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://reddit.com/r/OpenCanvasAI" target="_blank" rel="noopener noreferrer">
                    Reddit
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com/@OpenCanvasAI" target="_blank" rel="noopener noreferrer">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="https://x.com/opencanvasai" target="_blank" rel="noopener noreferrer">
                    Twitter / X
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/opencanvas_ai" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/company/opencanvasai" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="mailto:hello@opencanvasai.com">hello@opencanvasai.com</a></li>
                <li><a href="mailto:support@opencanvasai.com">support@opencanvasai.com</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Vector Studio. All rights reserved.</p>
            <p>
              OpenCanvas AI is a product of{" "}
              <a href="https://vectorstudio.app" target="_blank" rel="noopener noreferrer">
                Vector Studio →
              </a>
            </p>
          </div>

          <div className="footer-socials">
            <a href="https://x.com/opencanvasai" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X"><XIcon size={16} /></a>
            <a href="https://youtube.com/@OpenCanvasAI" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><YouTubeIcon size={16} /></a>
            <a href="https://reddit.com/r/OpenCanvasAI" target="_blank" rel="noopener noreferrer" aria-label="Reddit"><RedditIcon size={16} /></a>
            <a href="https://linkedin.com/company/opencanvasai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon size={16} /></a>
            <a href="https://instagram.com/opencanvas_ai" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon size={16} /></a>
            <a href="https://github.com/opencanvasai/OpenCanvas" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon size={16} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
