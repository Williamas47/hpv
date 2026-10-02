"use client";
import { useState } from "react";
import { myths, questions } from "@/lib/data";

const btn =
  "rounded-2xl px-5 py-3 font-bold text-white transition active:scale-95 disabled:opacity-50";

function Shell<T>({ title, items, render }: {
  title: string;
  items: T[];
  render: (item: T, done: (ok: boolean) => void, next: () => void, answered: boolean) => React.ReactNode;
}) {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const end = i >= items.length;
  const reset = () => { setI(0); setScore(0); setAnswered(false); };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-white/20">
      <div className="mb-4 flex items-center justify-between text-sm font-semibold text-purple-700">
        <span>{title}</span>
        <span aria-live="polite">{score}/{items.length}</span>
      </div>
      {end ? (
        <div className="py-6 text-center">
          <p className="text-2xl font-extrabold text-purple-800">
            {score === items.length ? "Excelente desempenho!" : score >= items.length / 2 ? "Bom resultado!" : "Vale revisar o conteúdo."}
          </p>
          <p className="mt-2 text-zinc-600">Você acertou {score} de {items.length}.</p>
          <button onClick={reset} className={`${btn} mt-5 bg-purple-600 hover:bg-purple-700`}>Jogar de novo</button>
        </div>
      ) : (
        render(
          items[i],
          (ok) => { setAnswered(true); if (ok) setScore((s) => s + 1); },
          () => { setAnswered(false); setI((n) => n + 1); },
          answered,
        )
      )}
    </div>
  );
}

function Feedback({ ok, why, next }: { ok: boolean; why: string; next: () => void }) {
  return (
    <div role="status" className={`mt-4 rounded-2xl p-4 ${ok ? "bg-green-50 text-green-900" : "bg-red-50 text-red-900"}`}>
      <p className="font-bold">{ok ? "✅ Resposta correta" : "❌ Resposta incorreta"}</p>
      <p className="mt-1">{why}</p>
      <button onClick={next} className={`${btn} mt-3 bg-purple-600 hover:bg-purple-700`}>Próxima →</button>
    </div>
  );
}

export function MitoOuVerdade() {
  const [pick, setPick] = useState<boolean | null>(null);
  return (
    <Shell
      title="Mito ou verdade?"
      items={myths}
      render={(m, done, next, answered) => (
        <>
          <p className="text-xl font-bold text-zinc-900">“{m.text}”</p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <button disabled={answered} onClick={() => { setPick(false); done(!m.truth); }} className={`${btn} bg-rose-500 hover:bg-rose-600`}>Mito</button>
            <button disabled={answered} onClick={() => { setPick(true); done(m.truth); }} className={`${btn} bg-emerald-500 hover:bg-emerald-600`}>Verdade</button>
          </div>
          {answered && <Feedback ok={pick === m.truth} why={m.why} next={() => { setPick(null); next(); }} />}
        </>
      )}
    />
  );
}

export function Quiz() {
  const [pick, setPick] = useState<number | null>(null);
  return (
    <Shell
      title="Quiz"
      items={questions}
      render={(q, done, next, answered) => (
        <>
          <p className="text-xl font-bold text-zinc-900">{q.q}</p>
          <div className="mt-4 grid gap-2">
            {q.options.map((o, idx) => (
              <button
                key={o}
                disabled={answered}
                onClick={() => { setPick(idx); done(idx === q.answer); }}
                className={`rounded-2xl border-2 px-4 py-3 text-left font-semibold transition disabled:cursor-default ${
                  answered && idx === q.answer ? "border-green-500 bg-green-50"
                  : answered && idx === pick ? "border-red-400 bg-red-50"
                  : "border-purple-100 hover:border-purple-400"}`}
              >{o}</button>
            ))}
          </div>
          {answered && <Feedback ok={pick === q.answer} why={q.why} next={() => { setPick(null); next(); }} />}
        </>
      )}
    />
  );
}
