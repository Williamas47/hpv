import { MitoOuVerdade, Quiz } from "@/components/Games";
import { sources } from "@/lib/data";

const nav = [["O que é", "#o-que-e"], ["Vacina", "#vacina"], ["Prevenção", "#prevencao"], ["Jogos", "#jogos"], ["Dúvidas", "#duvidas"]];

const stats = [
  ["+200", "tipos de HPV conhecidos", "bg-pink-500"],
  ["~99%", "dos casos de câncer do colo do útero têm HPV por trás (OMS)", "bg-violet-500"],
  ["9–14", "anos: idade da vacina de rotina no SUS", "bg-sky-500"],
  ["1 dose", "é o esquema atual para esse público", "bg-amber-500"],
];

const basics = [
  ["🧬", "O que é", "HPV é a sigla de Papilomavírus Humano, um grupo de vírus que infecta pele e mucosas. É a infecção sexualmente transmissível (IST) mais comum do mundo.", "from-pink-500 to-rose-500"],
  ["🤝", "Como pega", "Pelo contato pele a pele na região genital, anal ou oral, com ou sem penetração. A transmissão pode ocorrer mesmo sem sintomas.", "from-violet-500 to-purple-600"],
  ["👀", "Sintomas", "Na maioria das vezes, nenhum. Em alguns casos aparecem verrugas genitais. Outros tipos causam lesões silenciosas que, sem acompanhamento, podem virar câncer anos depois.", "from-sky-500 to-cyan-500"],
  ["🎗️", "Riscos", "Os tipos de alto risco (como 16 e 18) estão ligados ao câncer do colo do útero, e também a cânceres de vulva, vagina, pênis, ânus e garganta.", "from-amber-500 to-orange-500"],
];

const vaccine = [
  ["Quem", "Meninas e meninos de 9 a 14 anos. Também há indicação para grupos específicos, como pessoas vivendo com HIV, transplantadas ou em tratamento oncológico (9 a 45 anos), e vítimas de violência sexual."],
  ["Quantas doses", "Dose única para o público de 9 a 14 anos. Grupos específicos podem precisar de mais doses."],
  ["Contra o quê", "A vacina disponível no SUS é quadrivalente: protege contra os tipos 6 e 11 (verrugas genitais) e 16 e 18 (principais causadores de câncer)."],
  ["Onde", "Gratuita nas UBS (postos de saúde) e, em campanhas, nas escolas. Leve a caderneta de vacinação e um documento."],
  ["É segura?", "Sim. É usada há mais de 15 anos em dezenas de países, com acompanhamento constante. Os efeitos mais comuns são leves: dor no braço, vermelhidão, febre baixa."],
  ["Passou da idade?", "Quem tem mais de 14 anos e não foi vacinado deve consultar a UBS: o Ministério da Saúde faz campanhas de resgate e há regras para quem se enquadra."],
];

const prevention = [
  ["💉", "Vacina", "A principal forma de prevenção. O ideal é vacinar-se antes de qualquer exposição ao vírus.", "border-pink-400 bg-pink-50"],
  ["🛡️", "Preservativo", "Reduz o risco de HPV e protege contra outras ISTs, como HIV, sífilis e gonorreia. A proteção não é total, pois o vírus também pode estar na pele ao redor.", "border-violet-400 bg-violet-50"],
  ["🩺", "Preventivo (Papanicolau)", "Quem tem colo do útero deve realizar o exame periodicamente na vida adulta (no SUS, a partir dos 25 anos). Ele detecta lesões precocemente, quando o tratamento é mais simples.", "border-sky-400 bg-sky-50"],
  ["💬", "Diálogo e informação", "Esclarecer dúvidas com responsáveis, professores e profissionais de saúde faz parte da prevenção. Prefira sempre fontes confiáveis.", "border-amber-400 bg-amber-50"],
];

const faq = [
  ["A aplicação causa dor?", "A vacina é aplicada no braço, como as demais. O local pode ficar dolorido por um ou dois dias."],
  ["É necessária autorização dos responsáveis?", "Menores de 18 anos devem comparecer acompanhados de um responsável ou apresentar autorização, conforme a regra da unidade de saúde. Confirme na UBS ou na escola."],
  ["Quem já iniciou a vida sexual ainda pode se vacinar?", "Sim. A vacina é mais eficaz antes do contato com o vírus, mas ainda pode proteger contra tipos com os quais a pessoa não teve contato."],
  ["A infecção por HPV tem cura?", "Na maioria dos casos, o organismo elimina o vírus em cerca de dois anos. Verrugas e lesões têm tratamento. É importante buscar acompanhamento com um profissional de saúde."],
  ["Pode ser aplicada junto com outras vacinas?", "Sim, pode ser administrada com as demais vacinas do calendário. Em caso de dúvida, a equipe da UBS fornece orientação."],
  ["Quem se vacinou ainda precisa se prevenir?", "A vacina reduz significativamente o risco, mas não o elimina. Por isso, o uso de preservativo e, na vida adulta, o exame preventivo continuam necessários."],
];

export default function Home() {
  return (
    <main className="flex-1 bg-white text-zinc-800">
      <header className="sticky top-0 z-20 border-b border-white/20 bg-purple-950/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 overflow-x-auto px-5 py-3 text-sm font-semibold text-white">
          <a href="#" className="shrink-0 text-lg font-extrabold">💜 Informa<span className="text-pink-400">HPV</span></a>
          <ul className="flex gap-5">
            {nav.map(([l, h]) => <li key={h}><a href={h} className="whitespace-nowrap hover:text-pink-300">{l}</a></li>)}
          </ul>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-fuchsia-700 to-pink-500 text-white">
        <div className="pointer-events-none absolute -left-20 -top-20 size-80 rounded-full bg-sky-400/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-0 size-96 rounded-full bg-amber-300/30 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:py-28">
          <span className="rounded-full bg-white/20 px-4 py-1 text-sm font-bold">Informação para adolescentes</span>
          <h1 className="mt-5 text-5xl font-black leading-tight sm:text-7xl">Vacinação contra o <span className="text-amber-300">HPV</span></h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90 sm:text-xl">
            Conheça o vírus, saiba como a vacina protege e quais são as formas de prevenção. Em seguida, teste seus conhecimentos nos jogos.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#o-que-e" className="rounded-full bg-white px-7 py-3 font-bold text-purple-800 shadow-lg transition hover:scale-105">Saiba mais</a>
            <a href="#jogos" className="rounded-full bg-amber-400 px-7 py-3 font-bold text-purple-950 shadow-lg transition hover:scale-105">Ir para os jogos</a>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-10 grid max-w-6xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([n, t, c]) => (
          <div key={n} className={`${c} relative rounded-3xl p-6 text-white shadow-xl`}>
            <p className="text-4xl font-black">{n}</p>
            <p className="mt-1 text-sm font-medium text-white/90">{t}</p>
          </div>
        ))}
      </section>

      <section id="o-que-e" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20">
        <h2 className="text-center text-3xl font-black text-purple-900 sm:text-4xl">O básico sobre o HPV</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-zinc-600">Informações essenciais sobre o vírus.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {basics.map(([i, t, d, g]) => (
            <article key={t} className={`rounded-3xl bg-gradient-to-br ${g} p-7 text-white shadow-lg`}>
              <div className="text-4xl" aria-hidden>{i}</div>
              <h3 className="mt-3 text-2xl font-extrabold">{t}</h3>
              <p className="mt-2 text-white/95">{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="vacina" className="scroll-mt-16 bg-gradient-to-b from-sky-50 to-violet-50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-3xl font-black text-purple-900 sm:text-4xl">Sobre a vacina</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-zinc-600">Gratuita, segura e disponível no SUS.</p>
          <dl className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {vaccine.map(([t, d], idx) => (
              <div key={t} className="rounded-3xl bg-white p-6 shadow ring-1 ring-purple-100">
                <span className="grid size-10 place-items-center rounded-full bg-purple-600 font-black text-white">{idx + 1}</span>
                <dt className="mt-3 text-xl font-extrabold text-purple-800">{t}</dt>
                <dd className="mt-1 text-zinc-600">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="prevencao" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20">
        <h2 className="text-center text-3xl font-black text-purple-900 sm:text-4xl">Como se proteger</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-zinc-600">As medidas de prevenção se complementam.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {prevention.map(([i, t, d, c]) => (
            <article key={t} className={`flex gap-4 rounded-3xl border-l-8 p-6 ${c}`}>
              <div className="text-4xl" aria-hidden>{i}</div>
              <div><h3 className="text-xl font-extrabold text-zinc-900">{t}</h3><p className="mt-1 text-zinc-700">{d}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section id="jogos" className="scroll-mt-16 bg-gradient-to-br from-purple-950 via-purple-800 to-fuchsia-700 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-3xl font-black text-white sm:text-4xl">Teste seus conhecimentos</h2>
          <p className="mx-auto mt-2 mb-10 max-w-2xl text-center text-white/80">Em caso de dúvida, revise as seções acima. Cada resposta traz uma explicação.</p>
          <div className="mx-auto grid max-w-2xl gap-6">
            <MitoOuVerdade />
            <Quiz />
          </div>
        </div>
      </section>

      <section id="duvidas" className="mx-auto max-w-3xl scroll-mt-16 px-5 py-20">
        <h2 className="text-center text-3xl font-black text-purple-900 sm:text-4xl">Dúvidas frequentes</h2>
        <div className="mt-10 space-y-3">
          {faq.map(([q, a]) => (
            <details key={q} className="group rounded-2xl bg-purple-50 p-5 open:bg-pink-50">
              <summary className="cursor-pointer list-none font-bold text-purple-900 after:float-right after:text-pink-600 after:content-['+'] group-open:after:content-['–']">{q}</summary>
              <p className="mt-3 text-zinc-700">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-20">
        <div className="rounded-3xl bg-gradient-to-r from-pink-500 to-amber-400 p-10 text-center text-purple-950 shadow-xl">
          <h2 className="text-3xl font-black">Procure a vacinação</h2>
          <p className="mx-auto mt-2 max-w-xl font-medium">Dirija-se à UBS mais próxima com a caderneta de vacinação e um documento. Compartilhe a informação com familiares e amigos.</p>
        </div>
      </section>

      <footer className="bg-purple-950 px-5 py-10 text-center text-sm text-white/70">
        <p>Conteúdo educativo, não substitui orientação de profissionais de saúde. Confirme regras e idades de vacinação na sua UBS.</p>
        <ul className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-1">
          {sources.map((s) => <li key={s.href}><a className="underline hover:text-white" href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}
        </ul>
      </footer>
    </main>
  );
}
