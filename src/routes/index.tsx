import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/fablibras-hero.jpg";
import { Button } from "@/components/ui/button";
import { HandHeart, Brain, GraduationCap, Sparkles, ArrowRight, PlayCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FabLibras — Aprenda Libras e transforme vidas" },
      { name: "description", content: "Plataforma educacional brasileira dedicada ao ensino da Língua Brasileira de Sinais. Conteúdo gratuito para surdos, ouvintes, intérpretes e educadores." },
      { property: "og:title", content: "FabLibras — Aprenda Libras e transforme vidas" },
      { property: "og:description", content: "Aprenda Libras com a FabLibras. Inclusão real, educação de qualidade e gratuita." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const SITE_URL = "https://fablibras.com";
const COURSE_URL = "https://fablibras.com/curso";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <a href={SITE_URL} className="flex items-center gap-2 font-bold text-lg">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[image:var(--gradient-hero)] text-primary-foreground">
              <HandHeart className="h-4 w-4" />
            </span>
            FabLibras
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#beneficios" className="hover:text-foreground transition-colors">Benefícios</a>
            <a href="#curso" className="hover:text-foreground transition-colors">Curso</a>
            <a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a>
          </nav>
          <Button asChild size="sm" className="bg-foreground text-background hover:bg-foreground/90">
            <a href={SITE_URL}>Ir para fablibras.com <ArrowRight className="ml-1 h-3.5 w-3.5" /></a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-soft)]" aria-hidden />
        <div className="container relative mx-auto grid gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28 lg:items-center">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Educação inclusiva, gratuita e online
            </span>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Aprenda <span className="bg-[image:var(--gradient-hero)] bg-clip-text text-transparent">Libras</span> e transforme vidas através da inclusão.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              A FabLibras é a plataforma educacional brasileira dedicada ao ensino da Língua Brasileira de Sinais — para surdos, ouvintes, intérpretes e educadores que acreditam na comunicação inclusiva.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-elegant)] hover:opacity-95">
                <a href={COURSE_URL}>
                  Explorar curso <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={SITE_URL}>
                  <PlayCircle className="mr-2 h-4 w-4" /> Conhecer a FabLibras
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
              <div><strong className="text-foreground text-lg">+10M</strong><br/>brasileiros surdos</div>
              <div className="h-8 w-px bg-border" />
              <div><strong className="text-foreground text-lg">ODS 4, 10 e 11</strong><br/>alinhado à ONU</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[image:var(--gradient-hero)] opacity-20 blur-2xl" aria-hidden />
            <img
              src={heroImage}
              alt="FabLibras — Aprenda Libras e transforme vidas"
              width={1280}
              height={500}
              className="relative rounded-3xl shadow-[var(--shadow-elegant)] object-contain w-full bg-background"
            />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Por que aprender Libras?</h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Mais do que uma língua, Libras é uma ponte para a inclusão e o respeito à diversidade.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: HandHeart, title: "Inclusão real", desc: "Conecte-se com mais de 10 milhões de brasileiros surdos e crie ambientes acessíveis." },
            { icon: Brain, title: "Nova forma de pensar", desc: "Desenvolva expressão corporal, memória visual e empatia ao aprender uma língua viso-espacial." },
            { icon: GraduationCap, title: "Educação de qualidade", desc: "Conteúdo gratuito, em vídeo e alinhado às ODS 4 e 10 da ONU." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Curso destaque */}
      <section id="curso" className="container mx-auto px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-[image:var(--gradient-hero)] p-10 md:p-16 text-primary-foreground shadow-[var(--shadow-elegant)]">
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
                ★ Curso em destaque
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">Libras para Iniciantes</h2>
              <p className="mt-4 max-w-xl text-primary-foreground/90 text-lg">
                Aprenda os fundamentos da Língua Brasileira de Sinais e inicie sua jornada de comunicação inclusiva. 1h30 de conteúdo, totalmente gratuito.
              </p>
              <Button asChild size="lg" className="mt-7 bg-background text-foreground hover:bg-background/90">
                <a href={COURSE_URL}>
                  Acessar curso <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <ul className="space-y-3 text-primary-foreground/95">
              {["Alfabeto manual e cumprimentos", "Vocabulário do dia a dia", "Expressões e classificadores", "Cultura surda brasileira"].map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur">
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white/30 text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="sobre" className="container mx-auto px-6 pb-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mx-auto">
          Pronto para dar o primeiro sinal?
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
          Acesse a FabLibras e comece sua jornada de aprendizado hoje mesmo.
        </p>
        <Button asChild size="lg" className="mt-8 bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-elegant)] hover:opacity-95">
          <a href={SITE_URL}>Ir para fablibras.com <ArrowRight className="ml-2 h-4 w-4" /></a>
        </Button>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} FabLibras · <a href={SITE_URL} className="underline hover:text-foreground">fablibras.com</a>
      </footer>
    </div>
  );
}
