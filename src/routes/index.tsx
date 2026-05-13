import { createFileRoute } from "@tanstack/react-router";
import {
  Calculator,
  TrendingUp,
  NotebookPen,
  ChefHat,
  Bell,
  Check,
  X,
  Star,
  ShieldCheck,
  Sparkles,
  Rocket,
  Smartphone,
  Menu,
  ArrowRight,
  Flame,
  Instagram,
  MessageCircle,
  Zap,
  Target,
  DollarSign,
} from "lucide-react";
import { useState } from "react";
import appMockup from "@/assets/app-mockup.png";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LucraChef — Do zero aos R$ 5 mil/mês com a sua cozinha 🍰" },
      {
        name: "description",
        content:
          "App + trilha completa para confeiteiros e cozinheiros. Precifique receitas, controle vendas e aprenda a vender no iFood, WhatsApp e Instagram.",
      },
      { property: "og:title", content: "LucraChef — Transforme sua cozinha em renda" },
      {
        property: "og:description",
        content: "Calculadora de lucro, controle financeiro e 7 módulos práticos.",
      },
    ],
  }),
  component: LandingPage,
});

const HOTMART_URL = "https://pay.hotmart.com/I105551667L?off=nwyzwlk1&checkoutMode=10";

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Problema />
        <Solucao />
        <Depoimentos />
        <Modulos />
        <ParaQuem />
        <Garantia />
        <Planos />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}

/* ------------------------- HEADER ------------------------- */
function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#problema", label: "Problema" },
    { href: "#solucao", label: "Solução" },
    { href: "#modulos", label: "Conteúdo" },
    { href: "#planos", label: "Planos" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="flex items-center gap-2 font-display text-xl font-extrabold">
          <img src={logo} alt="LucraChef" className="h-10 w-10 object-contain" />
          LucraChef
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-[var(--color-primary-dark)] hover:shadow-lg"
          >
            Começar agora <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col px-5 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={HOTMART_URL}
              target="_blank"
              rel="noopener"
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Começar agora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ------------------------- HERO ------------------------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[var(--color-primary-soft)] via-background to-background"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-soft)_0%,_transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-12 pb-20 md:grid-cols-2 md:pt-20 md:pb-28">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary-soft px-3.5 py-1.5 text-xs font-semibold text-accent-foreground">
            <Sparkles className="h-3.5 w-3.5" /> LUCRE VENDENDO O QUE COZINHA
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-foreground md:text-6xl">
            Do zero aos{" "}
            <span className="relative whitespace-nowrap text-primary">
              R$ 5 mil/mês
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 5 Q 50 1, 100 4 T 198 3"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            com a sua cozinha 🍰
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            O app que ajuda confeiteiros e cozinheiros caseiros a precificar receitas,
            controlar vendas e aprender a vender de verdade — direto do celular.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={HOTMART_URL}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:bg-[var(--color-primary-dark)] hover:shadow-xl hover:shadow-primary/40"
            >
              Quero começar agora
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#solucao"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-border bg-background px-7 py-4 text-base font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Ver como funciona
            </a>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" /> Garantia de 7 dias
            </span>
            <span className="flex items-center gap-1.5">
              <Smartphone className="h-4 w-4 text-primary" /> Funciona em qualquer celular
            </span>
          </div>
        </div>

        {/* Mockup */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -left-4 top-8 z-10 flex items-center gap-2 rounded-2xl bg-background px-3.5 py-2 shadow-xl ring-1 ring-border">
            <span className="text-lg">🤑</span>
            <div>
              <div className="text-[10px] font-medium text-muted-foreground">Esta semana</div>
              <div className="text-sm font-bold text-primary">+ R$ 1.840</div>
            </div>
          </div>
          <div className="absolute -right-2 top-32 z-10 flex items-center gap-2 rounded-2xl bg-background px-3.5 py-2 shadow-xl ring-1 ring-border">
            <Flame className="h-4 w-4 text-orange-500" />
            <span className="text-xs font-semibold">Brigadeiros lucrativos</span>
          </div>
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div className="absolute inset-0 -z-10 translate-y-6 scale-95 rounded-[3rem] bg-primary/20 blur-3xl" />
      <div className="relative aspect-[9/16] w-full rounded-[2.75rem] border-[10px] border-foreground bg-foreground shadow-2xl">
        <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-foreground" />
        <div className="h-full w-full overflow-hidden rounded-[2rem] bg-background">
          <img
            src={appMockup}
            alt="Tela inicial do app LucraChef"
            className="h-full w-full object-contain"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}

/* ------------------------- PROBLEMA ------------------------- */
function Problema() {
  const dores = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      t: "Você vende, mas não sabe se está tendo lucro de verdade",
      d: "No fim do mês o dinheiro some e você não entende para onde foi.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      t: "Coloca preço no chute e ainda acha que está caro",
      d: "Sem fórmula, você acaba vendendo barato e trabalhando de graça.",
    },
    {
      icon: <NotebookPen className="h-6 w-6" />,
      t: "Anota pedidos no caderno e perde o controle",
      d: "Pedidos esquecidos, clientes irritados e contas que não fecham.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      t: "Cansada do orçamento apertado e quer uma renda extra",
      d: "Sabe que tem talento na cozinha, mas falta um caminho claro para vender.",
    },
  ];
  return (
    <section id="problema" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">
            Reconhece isso?
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold md:text-5xl">
            Cozinhar você já sabe.
            <br />
            <span className="text-muted-foreground">Vender com lucro é outra história.</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {dores.map((d, i) => (
            <div
              key={i}
              className="group rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg md:p-7"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-red-50 text-red-500">
                {d.icon}
              </div>
              <h3 className="text-lg font-bold leading-snug">{d.t}</h3>
              <p className="mt-2 text-muted-foreground">{d.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- SOLUÇÃO ------------------------- */
function Solucao() {
  const features = [
    {
      icon: <Calculator className="h-5 w-5" />,
      t: "Calculadora de precificação",
      d: "Custo + margem + preço de venda em segundos. Chega de chute.",
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      t: "Controle financeiro",
      d: "Registre cada venda. Veja receita, lucro e projeção mensal automaticamente.",
    },
    {
      icon: <NotebookPen className="h-5 w-5" />,
      t: "Anotações de pedidos",
      d: "Cada pedido organizado. Cada receita salva. Tudo no celular.",
    },
    {
      icon: <ChefHat className="h-5 w-5" />,
      t: "Receitas lucrativas",
      d: "Catálogo pronto com receitas testadas que vendem e dão lucro.",
    },
    {
      icon: <Bell className="h-5 w-5" />,
      t: "Notificações e histórico",
      d: "Lembrete de produção, entregas e relatório financeiro completo.",
    },
  ];
  return (
    <section id="solucao" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">
            A solução
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold md:text-5xl">
            Tudo o que falta para
            <br />a sua cozinha virar negócio 📊
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            O LucraChef junta as ferramentas que você precisa com o conhecimento que ninguém te
            ensinou.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <div className="grid gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-bold">{f.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <CalcMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function CalcMockup() {
  return (
    <div className="mx-auto w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-xl">
      <div className="mb-4 flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-primary-foreground">
          <TrendingUp className="h-5 w-5" />
        </div>
        <div>
          <div className="font-bold">Simulador rápido</div>
          <div className="text-xs text-muted-foreground">Preencha os 3 campos abaixo</div>
        </div>
      </div>
      {[
        { l: "Custo total dos ingredientes (R$)", v: "25,00" },
        { l: "Quantidade produzida", v: "10" },
        { l: "Preço de venda por unidade (R$)", v: "8,00" },
      ].map((f, i) => (
        <div key={i} className="mb-3">
          <label className="text-xs font-medium text-muted-foreground">{f.l}</label>
          <div className="mt-1 rounded-xl bg-secondary px-4 py-2.5 text-sm font-medium">
            {f.v}
          </div>
        </div>
      ))}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-secondary p-3">
          <div className="text-xs text-muted-foreground">Custo / un.</div>
          <div className="text-lg font-bold">R$ 2,50</div>
        </div>
        <div className="rounded-xl bg-primary p-3 text-primary-foreground">
          <div className="text-xs opacity-90">Lucro / un.</div>
          <div className="text-lg font-bold">R$ 5,50</div>
        </div>
        <div className="rounded-xl bg-primary p-3 text-primary-foreground">
          <div className="text-xs opacity-90">Lucro total</div>
          <div className="text-lg font-bold">R$ 55,00</div>
        </div>
        <div className="rounded-xl bg-secondary p-3">
          <div className="text-xs text-muted-foreground">Margem</div>
          <div className="text-lg font-bold">68,7%</div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------- DEPOIMENTOS ------------------------- */
function Depoimentos() {
  const items = [
    {
      n: "Juliana",
      i: "J",
      l: "Belo Horizonte, 32",
      r: "+40% de lucro no 1º mês",
      t: "Eu vendia brigadeiro há 2 anos achando que ganhava bem. Quando rodei a calculadora, vi que estava perdendo dinheiro em metade dos pedidos. Ajustei o preço e meu lucro subiu 40%.",
    },
    {
      n: "Patrícia",
      i: "P",
      l: "Recife, 28",
      r: "De R$ 800 para R$ 4.200/mês",
      t: "O módulo do Instagram mudou meu jogo. Aprendi a postar, atrair cliente e fechar venda no direct. Em 3 meses saí de R$ 800 para R$ 4.200 vendendo brigadeiro gourmet.",
    },
    {
      n: "Camila",
      i: "C",
      l: "Curitiba, 41",
      r: "Parou de trabalhar de graça",
      t: "Eu estava exausta e com a sensação de não sair do lugar. Hoje sei exatamente quanto entra, quanto sai e quanto sobra. Finalmente sinto que tenho um negócio.",
    },
  ];
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">
            Quem já está usando
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold md:text-5xl">
            Resultados de verdade,
            <br />de cozinheiras como você 💚
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={i}
              className="flex flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-3 flex gap-0.5 text-yellow-400">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div className="mb-4 inline-flex w-fit rounded-full bg-primary-soft px-3 py-1 text-xs font-bold text-accent-foreground">
                {it.r}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-foreground/90">"{it.t}"</p>
              <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary font-bold text-primary-foreground">
                  {it.i}
                </div>
                <div>
                  <div className="text-sm font-bold">{it.n}</div>
                  <div className="text-xs text-muted-foreground">{it.l}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- MÓDULOS ------------------------- */
function Modulos() {
  const mods = [
    {
      i: <Rocket className="h-5 w-5" />,
      t: "Fundamentos do Negócio",
      d: "Entenda o mercado e dê o primeiro passo com segurança.",
      time: "10 min",
    },
    {
      i: <ChefHat className="h-5 w-5" />,
      t: "Receitas Rápidas e Lucrativas",
      d: "Como escolher os produtos que geram mais lucro em menos tempo.",
      time: "15 min",
    },
    {
      i: <Calculator className="h-5 w-5" />,
      t: "Precificação e Custos",
      d: "Calcule o preço certo e garanta lucro real em cada venda.",
      time: "15 min",
    },
    {
      i: <Smartphone className="h-5 w-5" />,
      t: "iFood — Do Zero ao Primeiro Pedido",
      d: "Cadastro, cardápio, fotos e estratégias para começar a vender.",
      time: "20 min",
    },
    {
      i: <MessageCircle className="h-5 w-5" />,
      t: "WhatsApp e Vendas por Retirada",
      d: "Atenda, organize pedidos e fidelize clientes pelo WhatsApp.",
      time: "18 min",
    },
    {
      i: <Instagram className="h-5 w-5" />,
      t: "Instagram e Presença Digital",
      d: "Como postar, atrair seguidores certos e transformar em clientes.",
      time: "25 min",
    },
    {
      i: <TrendingUp className="h-5 w-5" />,
      t: "Meta Ads — Escalando suas Vendas",
      d: "Crie anúncios que vendem todos os dias e escale seu faturamento.",
      time: "30 min",
    },
  ];
  return (
    <section id="modulos" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">
            Trilha completa
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold md:text-5xl">
            Do zero aos R$ 5 mil/mês
            <br />
            em 7 módulos práticos 🚀
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Aulas curtas, diretas e aplicáveis. Sem enrolação, sem teoria solta.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {mods.map((m, i) => (
            <div
              key={i}
              className="group flex gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex flex-col items-center">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                  {m.i}
                </div>
                <div className="mt-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Módulo {i + 1}
                </div>
                <h3 className="mt-0.5 font-bold">{m.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.d}</p>
                <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-primary-soft px-2.5 py-0.5 text-[11px] font-medium text-accent-foreground">
                  📖 {m.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- PARA QUEM ------------------------- */
function ParaQuem() {
  const sim = [
    "Você cozinha bem e quer transformar isso em renda",
    "Já vende e quer organizar finanças e aumentar o lucro",
    "Quer começar do zero, mesmo sem experiência em vendas",
    "Procura uma renda extra de casa, sem chefe",
    "Está disposta a seguir um passo a passo simples",
  ];
  const nao = [
    "Quer ficar rica da noite para o dia, sem esforço",
    "Não pretende cozinhar nem vender nada",
    "Não topa colocar a mão na massa por 30 minutos por dia",
    "Procura mágica, não método",
    "Acha que aprender precificação é frescura",
  ];
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold md:text-5xl">
            O LucraChef é pra você?
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">Vamos ser bem honestos.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border-2 border-primary/30 bg-primary-soft p-7">
            <h3 className="mb-5 flex items-center gap-2 text-xl font-extrabold text-accent-foreground">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-5 w-5" />
              </span>
              Para quem é
            </h3>
            <ul className="space-y-3">
              {sim.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-7">
            <h3 className="mb-5 flex items-center gap-2 text-xl font-extrabold">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-red-100 text-red-500">
                <X className="h-5 w-5" />
              </span>
              Para quem não é
            </h3>
            <ul className="space-y-3">
              {nao.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- PLANOS ------------------------- */
function Planos() {
  const items = [
    "App completo (PWA) para celular",
    "Calculadora de precificação ilimitada",
    "Controle financeiro de vendas",
    "Anotações de pedidos e receitas",
    "Catálogo de receitas lucrativas",
    "Acesso aos 7 módulos da trilha",
    "Atualizações e novos módulos inclusos",
    "Suporte por e-mail",
  ];
  return (
    <section id="planos" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">
            Plano único
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold md:text-5xl">
            Tudo o que você precisa
            <br />
            por menos que um lanche 🍔
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-md">
          <div className="relative rounded-3xl border-2 border-primary bg-card p-8 shadow-2xl shadow-primary/15">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
              ⭐ Oferta especial
            </div>
            <div className="text-center">
              <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                LucraChef
              </div>
              <div className="mt-1 font-display text-3xl font-extrabold">Plano Pro</div>

              {/* Âncoras de preço */}
              <div className="mt-5 space-y-1">
                <div className="text-sm text-muted-foreground line-through">de R$ 297,00</div>
                <div className="text-base text-muted-foreground line-through">por R$ 69,90</div>
              </div>

              {/* Bloco do cupom */}
              <div className="mt-4 rounded-2xl border-2 border-yellow-400 bg-yellow-400/10 p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-yellow-700">
                  🏷️ Com seu cupom exclusivo
                </div>
                <div className="mt-2 rounded-lg bg-yellow-400/20 py-2 font-mono text-lg font-extrabold tracking-widest text-yellow-800">
                  LUCRACHEFEPRO
                </div>
                <div className="mt-3 font-display text-5xl font-extrabold text-foreground">
                  R$ 29,90
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  menos de <span className="font-bold text-foreground">R$ 1 por dia</span> — acesso vitalício
                </div>
              </div>
            </div>

            <ul className="mt-7 space-y-3">
              {items.map((it, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span>{it}</span>
                </li>
              ))}
            </ul>

            <a
              href={HOTMART_URL}
              target="_blank"
              rel="noopener"
              className="mt-7 flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:bg-[var(--color-primary-dark)] hover:shadow-xl"
            >
              Quero usar meu cupom agora <ArrowRight className="h-5 w-5" />
            </a>

            {/* Urgência */}
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-center">
              <p className="text-xs font-semibold text-red-600">
                ⏱️ Cupom disponível por tempo limitado — pode ser desativado a qualquer momento
              </p>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Pagamento seguro Hotmart
              </span>
              <span className="flex items-center gap-1">
                <Zap className="h-3.5 w-3.5 text-primary" /> Acesso imediato
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- GARANTIA ------------------------- */
function Garantia() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <div className="flex flex-col items-center gap-6 rounded-3xl border-2 border-primary/30 bg-card p-8 text-center shadow-lg md:flex-row md:text-left md:p-12">
          <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
            <ShieldCheck className="h-12 w-12" />
          </div>
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-primary">
              Risco zero
            </span>
            <h2 className="mt-2 font-display text-2xl font-extrabold md:text-3xl">
              Garantia incondicional de 7 dias
            </h2>
            <p className="mt-3 text-muted-foreground">
              Acesse o LucraChef, explore tudo, aplique nas suas receitas. Se em 7 dias você não
              estiver satisfeita por qualquer motivo, é só mandar um e-mail e devolvemos{" "}
              <strong className="text-foreground">100% do seu dinheiro</strong> — sem perguntas,
              sem burocracia.
            </p>
            <p className="mt-3 text-sm font-semibold text-primary">
              Você não tem nada a perder. Só a lucrar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- FAQ ------------------------- */
function FAQ() {
  const qa = [
    {
      q: "Funciona no meu celular?",
      a: "Sim! O LucraChef é um app web (PWA) que funciona em qualquer celular Android ou iPhone. Você instala direto na tela inicial em 1 clique e usa offline.",
    },
    {
      q: "Preciso ter experiência vendendo comida?",
      a: "Não. A trilha começa do zero, com o módulo de Fundamentos. Se você já vende, vai ganhar tempo pulando direto para precificação, iFood, WhatsApp ou Instagram.",
    },
    {
      q: "Como recebo o acesso depois da compra?",
      a: "Logo após o pagamento aprovado pela Hotmart, você recebe um e-mail com seu login e a instrução para instalar o app. Acesso é imediato.",
    },
    {
      q: "Em quanto tempo eu vejo resultado?",
      a: "Quem aplica precificação no primeiro dia já vê diferença na próxima venda. Para chegar perto dos R$ 5 mil/mês a maioria leva entre 60 e 120 dias seguindo a trilha.",
    },
    {
      q: "Tem garantia se eu não gostar?",
      a: "Sim. Você tem 7 dias de garantia incondicional. Se não curtir, é só pedir reembolso por e-mail e devolvemos 100% do valor — sem perguntas.",
    },
  ];
  return (
    <section id="faq" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">
            Dúvidas frequentes
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold md:text-5xl">
            Antes de começar 💬
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {qa.map((it, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-border bg-card p-5 transition-all open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                {it.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary-soft text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-muted-foreground">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- CTA FINAL ------------------------- */
function CTAFinal() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary to-[var(--color-primary-dark)] p-8 text-center text-primary-foreground shadow-2xl md:p-14">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="relative">
            <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider">
              Última chamada
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-5xl">
              Sua próxima venda lucrativa
              <br />
              começa hoje 🍰
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
              Cada dia sem método é dinheiro deixado na mesa. Use seu cupom exclusivo e comece
              agora com 7 dias de garantia total.
            </p>

            {/* Cupom em destaque no CTA Final */}
            <div className="mx-auto mt-6 max-w-xs rounded-2xl border-2 border-yellow-400 bg-yellow-400/15 p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-yellow-300">
                🏷️ Seu cupom exclusivo
              </div>
              <div className="mt-1 font-mono text-xl font-extrabold tracking-widest text-yellow-300">
                LUCRACHEFEPRO
              </div>
              <div className="mt-1 text-sm text-white/80">
                <span className="line-through">R$ 69,90</span>
                {"  "}→{"  "}
                <span className="font-bold text-white">R$ 29,90</span>
              </div>
            </div>

            <a
              href={HOTMART_URL}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-base font-bold text-primary shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl"
            >
              Quero usar meu cupom agora <ArrowRight className="h-5 w-5" />
            </a>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
                <ShieldCheck className="h-4 w-4" /> Garantia de 7 dias
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
                <Zap className="h-4 w-4" /> Acesso imediato
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- FOOTER ------------------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 md:flex-row">
        <div className="flex items-center gap-2 font-display font-extrabold">
          <img src={logo} alt="LucraChef" className="h-8 w-8 object-contain" />
          LucraChef
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href="#problema" className="hover:text-foreground">
            Problema
          </a>
          <a href="#solucao" className="hover:text-foreground">
            Solução
          </a>
          <a href="#modulos" className="hover:text-foreground">
            Conteúdo
          </a>
          <a href="#planos" className="hover:text-foreground">
            Planos
          </a>
          <a href="#faq" className="hover:text-foreground">
            FAQ
          </a>
        </div>
        <div className="text-xs text-muted-foreground">
          © 2026 LucraChef · App PWA
        </div>
      </div>
    </footer>
  );
}
