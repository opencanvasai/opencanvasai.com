import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — OpenCanvas AI",
  description: "Privacy Policy for OpenCanvas AI, a product of Vector Studio.",
};

export default function PrivacyPolicy() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
      }}
    >
      {/* Nav */}
      <nav
        style={{
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 800,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: "-0.02em",
            }}
          >
            OpenCanvas AI
          </Link>
          <Link
            href="/"
            style={{
              color: "#888",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "80px 24px 120px",
        }}
      >
        <p
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#888",
            marginBottom: 16,
          }}
        >
          Legal
        </p>
        <h1
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            margin: "0 0 16px",
          }}
        >
          Privacy Policy
        </h1>
        <p style={{ color: "#555", fontSize: 14, marginBottom: 60 }}>
          Last updated: March 19, 2026
        </p>

        <article
          style={{
            color: "#ccc",
            fontSize: 15,
            lineHeight: 1.8,
          }}
        >
          <Section title="1. Introduction">
            <p>
              This Privacy Policy describes how Vector Studio
              (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) handles
              information in connection with OpenCanvas AI (&quot;the
              Software&quot;). We are committed to protecting your privacy and
              being transparent about our practices.
            </p>
          </Section>

          <Section title="2. Our Privacy-First Approach">
            <p>
              OpenCanvas AI is designed with privacy at its core. The Software
              runs entirely on your local machine. We have built OpenCanvas AI
              so that:
            </p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li>
                <strong style={{ color: "#fff" }}>No data collection</strong> —
                We do not collect, store, or transmit any personal data
              </li>
              <li>
                <strong style={{ color: "#fff" }}>Local processing</strong> —
                All workflows and operations run on your device
              </li>
              <li>
                <strong style={{ color: "#fff" }}>No telemetry</strong> — We do
                not track usage patterns or analytics
              </li>
              <li>
                <strong style={{ color: "#fff" }}>No accounts required</strong>{" "}
                — You can use the Software without creating an account
              </li>
            </ul>
          </Section>

          <Section title="3. Information We Do NOT Collect">
            <p>To be clear, we do not collect or have access to:</p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li>Your name, email address, or personal identifiers</li>
              <li>Your API keys for third-party services</li>
              <li>Your workflow files or configurations</li>
              <li>Images, videos, or other content you generate</li>
              <li>Your prompts or creative inputs</li>
              <li>Usage analytics, crash reports, or telemetry data</li>
              <li>Device identifiers or IP addresses</li>
            </ul>
          </Section>

          <Section title="4. API Keys & Third-Party Services">
            <p>
              OpenCanvas AI connects to third-party AI providers (such as
              fal.ai, Replicate, and others) using API keys that you provide.
              Important information about API key handling:
            </p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li>
                API keys are stored <strong style={{ color: "#fff" }}>locally on your device only</strong>
              </li>
              <li>
                Keys are never transmitted to our servers (we don&apos;t have servers
                that receive user data)
              </li>
              <li>
                When you use the Software, API calls go directly from your
                machine to the third-party provider
              </li>
              <li>
                Each third-party provider has its own privacy policy that
                governs how they handle your data
              </li>
            </ul>
            <p style={{ marginTop: 12 }}>
              We recommend reviewing the privacy policies of any third-party AI
              providers you connect to through OpenCanvas AI.
            </p>
          </Section>

          <Section title="5. Locally Stored Data">
            <p>
              The following data is stored locally on your device and is never
              transmitted to us:
            </p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li>Application settings and preferences</li>
              <li>Third-party API keys you configure</li>
              <li>Workflow files (JSON/ZIP exports)</li>
              <li>Generated images, videos, and other media</li>
              <li>Custom node configurations</li>
            </ul>
            <p style={{ marginTop: 12 }}>
              You have full control over this data and can delete it at any time
              by removing the application and its associated files from your
              device.
            </p>
          </Section>

          <Section title="6. Website & Downloads">
            <p>
              When you visit our website at{" "}
              <a
                href="https://opencanvasai.com"
                style={{ color: "#fff", textDecoration: "underline" }}
              >
                opencanvasai.com
              </a>{" "}
              or download the Software:
            </p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li>
                Standard web server logs may record your IP address and browser
                information (this is handled by our hosting provider)
              </li>
              <li>
                We may use privacy-respecting analytics to understand general
                website traffic patterns
              </li>
              <li>
                Download counts may be tracked in aggregate (not linked to
                individual users)
              </li>
            </ul>
          </Section>

          <Section title="7. Open Source Transparency">
            <p>
              OpenCanvas AI is open source. You can verify our privacy practices
              by reviewing our source code at{" "}
              <a
                href="https://github.com/opencanvasai/OpenCanvas"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", textDecoration: "underline" }}
              >
                github.com/opencanvasai/OpenCanvas
              </a>
              . Our codebase is publicly auditable, ensuring complete
              transparency about how the Software handles your data.
            </p>
          </Section>

          <Section title="8. Children's Privacy">
            <p>
              OpenCanvas AI is not directed at children under 13. We do not
              knowingly collect personal information from children. Since we
              don&apos;t collect personal information from any users, this is
              inherently the case.
            </p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated &quot;Last updated&quot;
              date. We encourage you to review this page periodically.
            </p>
          </Section>

          <Section title="10. Contact Us">
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us:
            </p>
            <ul
              style={{ paddingLeft: 24, marginTop: 12, listStyle: "none" }}
            >
              <li>
                📧{" "}
                <a
                  href="mailto:hello@opencanvasai.com"
                  style={{ color: "#fff", textDecoration: "underline" }}
                >
                  hello@opencanvasai.com
                </a>
              </li>
              <li>
                🛟{" "}
                <a
                  href="mailto:support@opencanvasai.com"
                  style={{ color: "#fff", textDecoration: "underline" }}
                >
                  support@opencanvasai.com
                </a>
              </li>
            </ul>
          </Section>
        </article>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "32px 24px",
          textAlign: "center",
          fontSize: 13,
          color: "#555",
        }}
      >
        © 2026 Vector Studio. All rights reserved. &nbsp;•&nbsp;{" "}
        <Link
          href="/terms"
          style={{ color: "#888", textDecoration: "none" }}
        >
          Terms of Service
        </Link>
      </footer>
    </div>
  );
}

/* ── Reusable section wrapper ──────────────────────── */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 600,
          letterSpacing: "-0.01em",
          marginBottom: 16,
          color: "#fff",
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
