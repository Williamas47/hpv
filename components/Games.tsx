"use client";
import { useState } from "react";
import type { Statement } from "@/lib/data";

const btn =
  "rounded-2xl px-5 py-3 font-display text-lg text-white transition active:scale-95 disabled:opacity-50";

export function TrueFalse({ title, items, labels: [no, yes], bg }: {
  title: string;
  items: Statement[];
  labels: [string, string];
  bg: string;
}) {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [pick, setPick] = useState<boolean | null>(null);
  const end = i >= items.length;
  const item = items[i];
  const answered = pick !== null;

  const answer = (v: boolean) => { setPick(v); if (v === item.truth) setScore((s) => s + 1); };
  const next = () => { setPick(null); setI((n) => n + 1); };
  const reset = () => { setI(0); setScore(0); setPick(null); };

  return (
    <div className={`rounded-2xl p-6 ${bg}`}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="font-display text-2xl">{title}</h3>
        <span aria-live="polite" className="shrink-0 text-sm font-extrabold">
          {end ? items.length : i + 1} de {items.length} · {score} {score === 1 ? "acerto" : "acertos"}
        </span>
      </div>
      {end ? (
        <div className="py-6 text-center">
          <p className="font-display text-3xl">
            {score === items.length ? "Excelente desempenho!" : score >= items.length / 2 ? "Bom resultado!" : "Vale revisar o conteúdo."}
          </p>
          <p className="mt-2 font-semibold">Você acertou {score} de {items.length}.</p>
          <button onClick={reset} className={`${btn} mt-5 bg-ink hover:bg-plum`}>Jogar de novo</button>
        </div>
      ) : (
        <>
          <p className="text-xl font-extrabold">“{item.text}”</p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <button disabled={answered} onClick={() => answer(false)} className={`${btn} bg-stop hover:brightness-90`}>✕ {no}</button>
            <button disabled={answered} onClick={() => answer(true)} className={`${btn} bg-go hover:brightness-90`}>✓ {yes}</button>
          </div>
          {answered && (
            <div role="status" className="mt-4 rounded-2xl bg-white p-4">
              <p className="flex flex-wrap items-center gap-2 font-extrabold">
                {pick === item.truth ? "Você acertou!" : "Não foi dessa vez."}
                <span className={`tag ${item.truth ? "bg-go" : "bg-stop"}`}>{item.truth ? yes : no}</span>
              </p>
              <p className="mt-2 font-semibold">{item.why}</p>
              <button onClick={next} className={`${btn} mt-3 bg-ink hover:bg-plum`}>Próxima →</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
