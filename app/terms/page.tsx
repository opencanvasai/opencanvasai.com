import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — OpenCanvas AI",
  description:
    "Terms of Service for OpenCanvas AI, a product of Vector Studio.",
};

export default function TermsOfService() {
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
          Terms of Service
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
          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using OpenCanvas AI (&quot;the Software&quot;),
              you agree to be bound by these Terms of Service
              (&quot;Terms&quot;). OpenCanvas AI is a product of Vector Studio
              (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). If you do
              not agree to these Terms, do not use the Software.
            </p>
          </Section>

          <Section title="2. Description of Service">
            <p>
              OpenCanvas AI is an open-source, node-based visual AI workflow
              builder that allows users to create, edit, and share AI-powered
              creative workflows. The Software runs locally on your machine and
              connects to third-party AI providers using your own API keys.
            </p>
          </Section>

          <Section title="3. Open Source License">
            <p>
              OpenCanvas AI is released under an open-source license. The source
              code is available at{" "}
              <a
                href="https://github.com/opencanvasai/OpenCanvas"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", textDecoration: "underline" }}
              >
                github.com/opencanvasai/OpenCanvas
              </a>
              . Your use of the source code is subject to the applicable
              open-source license terms in addition to these Terms.
            </p>
          </Section>

          <Section title="4. API Keys & Third-Party Services">
            <p>
              OpenCanvas AI requires API keys from third-party providers such as
              fal.ai, Replicate, and others to function. You are responsible
              for:
            </p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li>Obtaining your own API keys from these providers</li>
              <li>
                Complying with each provider&apos;s terms of service and usage
                policies
              </li>
              <li>
                Any costs incurred through your use of third-party API services
              </li>
              <li>Keeping your API keys secure and confidential</li>
            </ul>
            <p style={{ marginTop: 12 }}>
              We do not store, transmit, or have access to your API keys. All
              keys are stored locally on your device.
            </p>
          </Section>

          <Section title="5. User Responsibilities">
            <p>You agree to:</p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li>Use the Software in compliance with all applicable laws</li>
              <li>
                Not use the Software to generate illegal, harmful, or abusive
                content
              </li>
              <li>
                Not attempt to reverse engineer, decompile, or disable any
                security features
              </li>
              <li>
                Not redistribute modified versions of the Software without
                proper attribution and license compliance
              </li>
            </ul>
          </Section>

          <Section title="6. Generated Content">
            <p>
              You retain ownership of all content you create using OpenCanvas
              AI, subject to the terms and conditions of the underlying AI model
              providers. We make no claim to any content generated through the
              Software due to your inputs.
            </p>
          </Section>

          <Section title="7. Privacy & Data">
            <p>
              OpenCanvas AI runs locally on your device. We do not collect,
              store, or transmit your personal data, workflows, API keys, or
              generated content. For more details, please review our{" "}
              <Link
                href="/privacy"
                style={{ color: "#fff", textDecoration: "underline" }}
              >
                Privacy Policy
              </Link>
              .
            </p>
          </Section>

          <Section title="8. Disclaimer of Warranties">
            <p>
              THE SOFTWARE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
              AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SOFTWARE WILL BE
              UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.
            </p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, VECTOR STUDIO AND ITS
              AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT
              LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR
              RELATED TO YOUR USE OF THE SOFTWARE.
            </p>
          </Section>

          <Section title="10. Modifications to Terms">
            <p>
              We reserve the right to modify these Terms at any time. Changes
              will be effective upon posting to our website at{" "}
              <a
                href="https://opencanvasai.com"
                style={{ color: "#fff", textDecoration: "underline" }}
              >
                opencanvasai.com
              </a>
              . Your continued use of the Software after any changes constitutes
              acceptance of the modified Terms.
            </p>
          </Section>

          <Section title="11. Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with
              applicable laws, without regard to conflict of law principles.
            </p>
          </Section>

          <Section title="12. Contact">
            <p>
              If you have any questions about these Terms, please contact us at:
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
          href="/privacy"
          style={{ color: "#888", textDecoration: "none" }}
        >
          Privacy Policy
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
