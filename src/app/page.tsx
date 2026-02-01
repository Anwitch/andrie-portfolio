const email = "andrie.wijaya.contact@gmail.com";
const linkedin = "https://www.linkedin.com/in/andrie-wijaya";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-semibold tracking-wider text-zinc-900">
      {children}
    </h2>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <main className="mx-auto w-full max-w-3xl px-6 py-14">
        {/* HERO */}
        <header className="space-y-5">
          <p className="text-xs font-medium tracking-widest text-zinc-500">
            WEB / APP DEV · AI AUTOMATION
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight">
            Andrie Wijaya
          </h1>
          <p className="text-lg leading-relaxed text-zinc-600">
            Automation Engineer (n8n + custom code). I build web apps and AI
            automations that reduce manual work and help teams move faster.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
              href={`mailto:${email}`}
            >
              Email me
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
              href={linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </header>

        {/* OFFERS */}
        <section className="mt-12 space-y-4">
          <SectionTitle>OFFERS</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <h3 className="text-base font-semibold">AI Automation Sprint</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                48h–5d delivery. n8n workflows + integrations (Sheets/CRM/email),
                optional AI steps (classification, summarization, auto-replies).
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                <li>Discovery → build → handover docs</li>
                <li>White-label friendly for agencies</li>
                <li>Pricing: by quote</li>
              </ul>
            </Card>
            <Card>
              <h3 className="text-base font-semibold">Website + Automation</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Landing/catalog + lead capture + automated follow-up. Built for
                conversion and operations.
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                <li>Fast UI + clean UX</li>
                <li>Analytics + forms + integrations</li>
                <li>Pricing: by quote</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* PROOF / PROJECTS */}
        <section className="mt-12 space-y-4">
          <SectionTitle>SELECTED WORK</SectionTitle>
          <div className="space-y-4">
            <Card>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold">DapurSanti</h3>
                  <p className="mt-1 text-sm text-zinc-600">
                    E-commerce catalog + WhatsApp ordering (React + FastAPI +
                    PostgreSQL). Built for small businesses and easy agency
                    delivery.
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                  flagship
                </span>
              </div>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                <li>Product catalog + ordering flow designed to reduce friction</li>
                <li>Backend API ready for integrations (payments, CRM, inventory)</li>
                <li>Ideal base for “Website + Automation” client projects</li>
              </ul>
              <p className="mt-4 text-xs text-zinc-500">
                Demo link & screenshots: coming next (deploy to Vercel with dummy
                data).
              </p>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <h3 className="text-base font-semibold">Phosor</h3>
                <p className="mt-2 text-sm text-zinc-600">
                  AI photo organization with face recognition (FastAPI +
                  Alpine.js).
                </p>
                <p className="mt-3 text-xs text-zinc-500">
                  Great proof for AI automation capability.
                </p>
              </Card>
              <Card>
                <h3 className="text-base font-semibold">CodeDevour</h3>
                <p className="mt-2 text-sm text-zinc-600">
                  Intelligent codebase bundler (Flask + Tailwind). Strong
                  developer tooling credibility.
                </p>
                <p className="mt-3 text-xs text-zinc-500">Has public stars.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="mt-12 space-y-4">
          <SectionTitle>PROCESS</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-3">
            <Card>
              <h3 className="text-sm font-semibold">1) Scope</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Clarify goal, inputs/outputs, edge cases, and success metrics.
              </p>
            </Card>
            <Card>
              <h3 className="text-sm font-semibold">2) Build</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Implement with clean, testable code + n8n workflows.
              </p>
            </Card>
            <Card>
              <h3 className="text-sm font-semibold">3) Handover</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Documented setup + training so your team can own it.
              </p>
            </Card>
          </div>
        </section>

        {/* ABOUT */}
        <section className="mt-12 space-y-4">
          <SectionTitle>ABOUT</SectionTitle>
          <Card>
            <p className="text-sm leading-relaxed text-zinc-700">
              I build production-grade systems across web, AI, and automation.
              Comfortable shipping end-to-end: UI, backend APIs, databases,
              integrations, and deployment.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-700">
              <li>Stack: Next.js / React / FastAPI / Express / PostgreSQL</li>
              <li>Automation: n8n + webhooks + custom services</li>
              <li>AI: Gemini / embeddings / practical AI features</li>
            </ul>
          </Card>
        </section>

        {/* FOOTER CTA */}
        <footer className="mt-14 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-base font-semibold">Want help this week?</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Send a quick summary of your workflow/problem and I’ll reply with a
            plan and a quote.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
              href={`mailto:${email}`}
            >
              {email}
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
              href={linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
