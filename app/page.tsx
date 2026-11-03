import type { ReactNode } from "react";
import { Cell, Megaphone, Shield, Sparks, Vial, Virus } from "@/components/Art";
import { TrueFalse } from "@/components/Games";
import { myths, questions, sources } from "@/lib/data";

const nav = [
  ["O que é", "#o-que-e"],
  ["Vacina", "#vacina"],
  ["Prevenção", "#prevencao"],
  ["Fake news", "#fake-news"],
  ["Jogos", "#jogos"],
  ["Dúvidas", "#duvidas"],
];

const stats = [
  ["+200", "tipos de HPV conhecidos", "bg-blush"],
  [
    "~99%",
    "dos casos de câncer do colo do útero têm HPV por trás (OMS)",
    "bg-lilac",
  ],
  ["9–14", "anos: idade da vacina de rotina no SUS", "bg-mist"],
  ["1 dose", "é o esquema atual para esse público", "bg-peach"],
];

const basics = [
  [
    "🧬",
    "O que é",
    "HPV é a sigla de Papilomavírus Humano, um grupo de vírus que infecta pele e mucosas. É a infecção sexualmente transmissível (IST) mais comum do mundo.",
    "bg-blush",
  ],
  [
    "🤝",
    "Como pega",
    "Pelo contato pele a pele na região genital, anal ou oral, com ou sem penetração. A transmissão pode ocorrer mesmo sem sintomas.",
    "bg-lilac",
  ],
  [
    "👀",
    "Sintomas",
    "Na maioria das vezes, nenhum. Em alguns casos aparecem verrugas genitais. Outros tipos causam lesões silenciosas que, sem acompanhamento, podem virar câncer anos depois.",
    "bg-mist",
  ],
  [
    "🎗️",
    "Riscos",
    "Os tipos de alto risco (como 16 e 18) estão ligados ao câncer do colo do útero, e também a cânceres de vulva, vagina, pênis, ânus e garganta.",
    "bg-peach",
  ],
];

const vaccine = [
  [
    "Quem",
    "Meninas e meninos de 9 a 14 anos. Também há indicação para grupos específicos, como pessoas vivendo com HIV, transplantadas ou em tratamento oncológico (9 a 45 anos), e vítimas de violência sexual.",
  ],
  [
    "Quantas doses",
    "Dose única para o público de 9 a 14 anos. Grupos específicos podem precisar de mais doses.",
  ],
  [
    "Contra o quê",
    "A vacina disponível no SUS é quadrivalente: protege contra os tipos 6 e 11 (verrugas genitais) e 16 e 18 (principais causadores de câncer).",
  ],
  [
    "Onde",
    "Gratuita nas UBS (postos de saúde) e, em campanhas, nas escolas. Leve a caderneta de vacinação e um documento.",
  ],
  [
    "É segura?",
    "Sim. É usada há mais de 15 anos em dezenas de países, com acompanhamento constante. Os efeitos mais comuns são leves: dor no braço, vermelhidão, febre baixa.",
  ],
  [
    "Passou da idade?",
    "Quem tem mais de 14 anos e não foi vacinado deve consultar a UBS: o Ministério da Saúde faz campanhas de resgate e há regras para quem se enquadra.",
  ],
];

const prevention = [
  [
    "💉",
    "Vacina",
    "A principal forma de prevenção. O ideal é vacinar-se antes de qualquer exposição ao vírus.",
    "bg-blush",
  ],
  [
    "🛡️",
    "Preservativo",
    "Reduz o risco de HPV e protege contra outras ISTs, como HIV, sífilis e gonorreia. A proteção não é total, pois o vírus também pode estar na pele ao redor.",
    "bg-lilac",
  ],
  [
    "🩺",
    "Preventivo (Papanicolau)",
    "Quem tem colo do útero deve realizar o exame periodicamente na vida adulta (no SUS, a partir dos 25 anos). Ele detecta lesões precocemente, quando o tratamento é mais simples.",
    "bg-mist",
  ],
  [
    "💬",
    "Diálogo e informação",
    "Esclarecer dúvidas com responsáveis, professores e profissionais de saúde faz parte da prevenção. Prefira sempre fontes confiáveis.",
    "bg-peach",
  ],
];

const faq = [
  [
    "A aplicação causa dor?",
    "A vacina é aplicada no braço, como as demais. O local pode ficar dolorido por um ou dois dias.",
  ],
  [
    "É necessária autorização dos responsáveis?",
    "Menores de 18 anos devem comparecer acompanhados de um responsável ou apresentar autorização, conforme a regra da unidade de saúde. Confirme na UBS ou na escola.",
  ],
  [
    "Quem já iniciou a vida sexual ainda pode se vacinar?",
    "Sim. A vacina é mais eficaz antes do contato com o vírus, mas ainda pode proteger contra tipos com os quais a pessoa não teve contato.",
  ],
  [
    "A infecção por HPV tem cura?",
    "Na maioria dos casos, o organismo elimina o vírus em cerca de dois anos. Verrugas e lesões têm tratamento. É importante buscar acompanhamento com um profissional de saúde.",
  ],
  [
    "Pode ser aplicada junto com outras vacinas?",
    "Sim, pode ser administrada com as demais vacinas do calendário. Em caso de dúvida, a equipe da UBS fornece orientação.",
  ],
  [
    "Quem se vacinou ainda precisa se prevenir?",
    "A vacina reduz significativamente o risco, mas não o elimina. Por isso, o uso de preservativo e, na vida adulta, o exame preventivo continuam necessários.",
  ],
];

const fakes: [string, boolean, string][] = [
  [
    "A vacina contra o HPV causa HPV.",
    false,
    "A vacina não contém o vírus capaz de causar a infecção.",
  ],
  [
    "Meninos também precisam se vacinar contra o HPV.",
    true,
    "A vacina protege meninos e meninas contra os tipos de HPV incluídos nela.",
  ],
  [
    "É possível ter HPV sem sintomas.",
    true,
    "Nem sempre a infecção apresenta sinais visíveis.",
  ],
  [
    "Só precisamos nos preocupar com o HPV quando ficamos adultos.",
    false,
    "A vacina é indicada a partir dos 9 anos. Cuide-se desde cedo!",
  ],
];

const cells = [
  ["célula normal", "normal"],
  ["alterações nas células", "altered"],
  ["possível evolução para câncer", "cancer"],
] as const;

const steps: [string, string, ReactNode, ReactNode][] = [
  [
    "bg-plum",
    "bg-lilac",
    <>
      É um vírus muito comum que pode infectar a <b>pele</b> e as{" "}
      <b>mucosas</b>.
    </>,
    <div className="flex gap-3 text-center text-xs font-extrabold">
      <span className="rounded-xl bg-white px-4 py-2">✋ pele</span>
      <span className="rounded-xl bg-white px-4 py-2">👄 mucosas</span>
    </div>,
  ],
  [
    "bg-ocean",
    "bg-mist",
    <>
      Existem <b>vários tipos</b> de HPV.
    </>,
    <div>
      <div className="flex items-center gap-1">
        <Virus className="size-9" color="#c8506e" dot="#f7c04a" />
        <Virus className="size-14" />
        <Virus className="size-10" color="#2f6fb0" dot="#7fd0c0" />
        <Virus className="size-8" color="#1c7a55" dot="#f7c04a" />
      </div>
      <p className="mt-2 inline-block rounded-full bg-ocean px-3 py-1 text-xs font-extrabold text-white">
        São mais de 200 tipos!
      </p>
    </div>,
  ],
  [
    "bg-ember",
    "bg-peach",
    <>
      Alguns tipos podem causar <b>verrugas</b>.
    </>,
    <p className="text-4xl" aria-hidden>
      🖐️
    </p>,
  ],
  [
    "bg-stop",
    "bg-blush",
    <>
      Outros podem provocar alterações nas células que, com o tempo, podem
      evoluir para <b>câncer</b>.
    </>,
    <ol className="flex items-start justify-between text-center text-xs font-extrabold leading-tight">
      {cells.map(([label, stage], idx) => (
        <li key={stage} className="contents">
          {idx > 0 && (
            <span className="mt-5 font-display text-2xl text-stop" aria-hidden>
              →
            </span>
          )}
          <div className="w-20">
            <Cell stage={stage} className="mx-auto mb-1 size-16" />
            {label}
          </div>
        </li>
      ))}
    </ol>,
  ],
  [
    "bg-go",
    "bg-mint",
    <>
      A boa notícia é que existe uma <b>vacina</b> que ajuda a <b>prevenir</b>{" "}
      os principais problemas causados pelo HPV!
    </>,
    <div className="flex items-center gap-3">
      <Vial className="h-16 w-auto" />
      <Shield className="h-16 w-auto" />
      <span className="-rotate-2 rounded-lg bg-go px-3 py-1 font-hand text-lg leading-tight text-white">
        Prevenção é proteção!
      </span>
    </div>,
  ],
];

function Sheet({
  id,
  title,
  sub,
  children,
}: {
  id: string;
  title: string;
  sub: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-20 rounded-lg bg-white p-5 shadow-lg sm:p-8"
    >
      <div className="text-center">
        <div className="flex items-center justify-center gap-2">
          <Sparks className="h-8 w-auto shrink-0" />
          <h2 className="brush text-3xl sm:text-4xl">{title}</h2>
          <Sparks className="h-8 w-auto shrink-0 -scale-x-100" />
        </div>
        <p className="mt-3 font-bold">{sub}</p>
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Sticky({ children }: { children: ReactNode }) {
  return (
    <p className="rotate-2 bg-sun p-4 text-center font-hand text-2xl leading-tight shadow-md">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      <header className="sticky top-0 z-20 bg-ink shadow-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-5 overflow-x-auto px-4 py-3 font-extrabold text-white">
          <a href="#" className="shrink-0 font-display text-xl tracking-wide">
            Descomplica <span className="text-sun">HPV</span>
          </a>
          <ul className="flex gap-5 text-sm">
            {nav.map(([l, h]) => (
              <li key={h}>
                <a href={h} className="whitespace-nowrap hover:text-sun">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section className="rounded-lg bg-white p-4 shadow-lg sm:p-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 rounded-md bg-gradient-to-r from-mist to-lilac p-5 sm:p-7">
            <h1 className="font-display uppercase leading-none">
              <span className="block text-3xl sm:text-4xl">Afinal, o que é</span>
              <span className="block text-7xl sm:text-8xl">HPV?</span>
            </h1>
            <p className="max-w-52 font-extrabold leading-relaxed">
              <span className="marker">
                HPV é a sigla para Papilomavírus Humano.
              </span>
            </p>
            <div className="ml-auto flex items-center">
              <Virus className="size-24 sm:size-32" />
              <Virus
                className="-ml-3 size-14 self-end sm:size-20"
                color="#2f6fb0"
                dot="#7fd0c0"
              />
              <span className="-ml-2 -rotate-6 self-start font-hand text-2xl">
                É um vírus!
              </span>
            </div>
          </div>

          <ol className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map(([badge, bg, text, art], idx) => (
              <li
                key={badge}
                className={`flex flex-col gap-3 rounded-xl p-4 ${bg}`}
              >
                <div className="flex gap-3">
                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-full font-display text-xl text-white ${badge}`}
                  >
                    {idx + 1}
                  </span>
                  <p className="font-semibold">{text}</p>
                </div>
                <div className="mt-auto">{art}</div>
              </li>
            ))}
            <li className="grid place-items-center p-3">
              <Sticky>
                Informação de verdade também é proteção! ♡
              </Sticky>
            </li>
          </ol>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-md bg-ink px-5 py-4 text-white">
            <p className="font-display text-2xl tracking-wide">
              🧪 Descomplica <span className="text-sun">HPV</span>
            </p>
            <p className="font-bold">
              Seja um <span className="text-sun">cientista júnior</span> e
              dissemine informações!
            </p>
            <a
              href="#jogos"
              className="rounded-full bg-sun px-5 py-2 font-display text-ink transition hover:scale-105"
            >
              Ir para o quiz
            </a>
          </div>
        </section>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([n, t, c]) => (
            <li key={n} className={`${c} rounded-xl p-5 shadow-md`}>
              <p className="font-display text-4xl">{n}</p>
              <p className="mt-1 text-sm font-bold">{t}</p>
            </li>
          ))}
        </ul>

        <Sheet
          id="o-que-e"
          title="O básico sobre o HPV"
          sub="Informações essenciais sobre o vírus."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {basics.map(([i, t, d, c]) => (
              <article key={t} className={`rounded-xl p-6 ${c}`}>
                <div className="text-4xl" aria-hidden>
                  {i}
                </div>
                <h3 className="mt-2 font-display text-2xl">{t}</h3>
                <p className="mt-1 font-semibold">{d}</p>
              </article>
            ))}
          </div>
        </Sheet>

        <Sheet
          id="vacina"
          title="Sobre a vacina"
          sub="Gratuita, segura e disponível no SUS."
        >
          <dl className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {vaccine.map(([t, d], idx) => (
              <div key={t} className="rounded-xl bg-mist p-5">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-ocean font-display text-xl text-white">
                    {idx + 1}
                  </span>
                  <dt className="font-display text-xl">{t}</dt>
                </div>
                <dd className="mt-2 font-semibold">{d}</dd>
              </div>
            ))}
          </dl>
        </Sheet>

        <Sheet
          id="prevencao"
          title="Como se proteger"
          sub="As medidas de prevenção se complementam."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {prevention.map(([i, t, d, c]) => (
              <article key={t} className={`flex gap-4 rounded-xl p-5 ${c}`}>
                <div className="text-4xl" aria-hidden>
                  {i}
                </div>
                <div>
                  <h3 className="font-display text-xl">{t}</h3>
                  <p className="mt-1 font-semibold">{d}</p>
                </div>
              </article>
            ))}
          </div>
        </Sheet>

        <section
          id="fake-news"
          className="scroll-mt-20 rounded-lg bg-white p-5 shadow-lg sm:p-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-md bg-lilac p-5">
            <Megaphone className="h-20 w-auto" />
            <div className="text-center">
              <h2 className="brush text-5xl uppercase tracking-wide sm:text-7xl">
                Fake <span className="text-sun">news</span>
              </h2>
              <p className="mt-3 font-extrabold">
                <span className="marker">
                  Vamos separar o que é mito do que é verdade?
                </span>
              </p>
            </div>
          </div>

          <ul className="mt-5 grid gap-4 md:grid-cols-2">
            {fakes.map(([text, truth, why]) => (
              <li
                key={text}
                className={`rounded-xl p-5 ${truth ? "bg-mint" : "bg-blush"}`}
              >
                <span className={`tag text-xl ${truth ? "bg-go" : "bg-stop"}`}>
                  {truth ? "✓ Verdade" : "✕ Mito"}
                </span>
                <p className="mt-3 text-lg font-extrabold">“{text}”</p>
                <p className="mt-2 font-semibold">{why}</p>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-md bg-lilac p-5">
            <p className="max-w-56 rounded-2xl rounded-bl-none bg-sun p-3 font-bold">
              Tem mercúrio na vacina?{" "}
              <span className="tag ml-1 bg-stop">Mito</span>
            </p>
            <p className="brush text-2xl sm:text-3xl">Não espalhe fake news!</p>
            <p className="flex items-center gap-2 font-hand text-xl leading-tight">
              <Shield className="h-12 w-auto shrink-0" />
              <span>
                Vacinação é ciência,
                <br />é saúde, é futuro! ♡
              </span>
            </p>
          </div>
        </section>

        <Sheet
          id="jogos"
          title="Teste seus conhecimentos"
          sub="Em caso de dúvida, revise as seções acima. Cada resposta traz uma explicação."
        >
          <div className="grid items-start gap-5 lg:grid-cols-2">
            <TrueFalse
              title="Quiz: verdadeiro ou falso?"
              items={questions}
              labels={["Falso", "Verdadeiro"]}
              bg="bg-mist"
            />
            <TrueFalse
              title="Mito ou verdade?"
              items={myths}
              labels={["Mito", "Verdade"]}
              bg="bg-lilac"
            />
          </div>
        </Sheet>

        <Sheet
          id="duvidas"
          title="Dúvidas frequentes"
          sub="Toque em uma pergunta para ver a resposta."
        >
          <div className="mx-auto max-w-3xl space-y-3">
            {faq.map(([q, a]) => (
              <details
                key={q}
                className="group rounded-xl bg-lilac p-4 open:bg-peach"
              >
                <summary className="cursor-pointer list-none font-extrabold after:float-right after:font-display after:text-xl after:content-['+'] group-open:after:content-['–']">
                  {q}
                </summary>
                <p className="mt-2 font-semibold">{a}</p>
              </details>
            ))}
          </div>
        </Sheet>

        <section className="rounded-lg bg-sun p-8 text-center shadow-lg">
          <h2 className="font-display text-3xl">Procure a vacinação</h2>
          <p className="mx-auto mt-2 max-w-xl font-bold">
            Dirija-se à UBS mais próxima com a caderneta de vacinação e um
            documento. Compartilhe a informação com familiares e amigos.
          </p>
        </section>
      </div>

      <footer className="bg-ink px-5 py-10 text-center text-sm text-white/80">
        <p>
          Conteúdo educativo, não substitui orientação de profissionais de
          saúde. Confirme regras e idades de vacinação na sua UBS.
        </p>
        <ul className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-1">
          {sources.map((s) => (
            <li key={s.href}>
              <a
                className="underline hover:text-white"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </main>
  );
}
