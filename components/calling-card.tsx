import { Mail, Phone } from "lucide-react"

const services = [
  "Data analysis & annotation",
  "Website & app building",
  "AI work",
]

export function CallingCard() {
  return (
    <article className="w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <img
        src="/images/cover.jpg"
        alt="Moai stone statues on a green hillside under a blue sky"
        className="h-40 w-full object-cover grayscale sm:h-48"
      />
      <div className="p-8 sm:p-10">
      <header className="flex items-center gap-4">
        <div
          aria-hidden="true"
          className="flex size-14 shrink-0 items-center justify-center rounded-full bg-foreground text-lg font-semibold tracking-tight text-background"
        >
          DC
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground text-balance">
            DC&apos;s Tech Support
          </h1>
          <p className="text-sm text-muted-foreground">Digant Chhetri · Data · Web · AI</p>
          <p className="mt-1 text-sm font-medium text-foreground">Now on GitHub</p>
        </div>
      </header>

      <section className="mt-8">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          What I do
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {services.map((service) => (
            <li
              key={service}
              className="rounded-full border border-border bg-muted px-3 py-1 text-sm text-foreground"
            >
              {service}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          A little more
        </h2>
        <p className="mt-3 text-pretty leading-relaxed text-foreground/90">
          I have handled multiple data analysis projects for brands, helping
          with their sales, branding, and upscaling their revenue.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          How to reach me
        </h2>
        <div className="mt-3 flex flex-col gap-3">
          <a
            href="mailto:chhrtriyogesh358@gmil.com"
            className="group flex items-center gap-3 rounded-lg border border-border bg-muted/40 px-4 py-3 transition-colors hover:bg-muted"
          >
            <Mail
              className="size-5 shrink-0 text-muted-foreground group-hover:text-foreground"
              aria-hidden="true"
            />
            <span className="text-sm text-foreground">chhrtriyogesh358@gmil.com</span>
          </a>
          <a
            href="tel:8918522355"
            className="group flex items-center gap-3 rounded-lg border border-border bg-muted/40 px-4 py-3 transition-colors hover:bg-muted"
          >
            <Phone
              className="size-5 shrink-0 text-muted-foreground group-hover:text-foreground"
              aria-hidden="true"
            />
            <span className="text-sm text-foreground">8918522355</span>
          </a>
        </div>
      </section>
      </div>
    </article>
  )
}
