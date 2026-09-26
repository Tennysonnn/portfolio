"use client";

import { useRef, useState } from "react";
import { examplePrompts, getMockResults } from "@/data/searchMocks";
import { SearchResult } from "@/lib/types";

type Status = "idle" | "loading" | "done";

const LOADING_STAGES = [
  "Understanding your query...",
  "Searching...",
  "Finding relevant results...",
];

const STAGE_DURATION_MS = 650;

export default function AISearch() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [stageIndex, setStageIndex] = useState(0);
  const [results, setResults] = useState<SearchResult[]>([]);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  function clearTimers() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }

  function runMockSearch(q: string) {
    clearTimers();
    setStatus("loading");
    setStageIndex(0);
    setResults([]);

    LOADING_STAGES.forEach((_, i) => {
      const t = setTimeout(() => setStageIndex(i), i * STAGE_DURATION_MS);
      timers.current.push(t);
    });

    const finalTimer = setTimeout(() => {
      setResults(getMockResults(q));
      setStatus("done");
    }, LOADING_STAGES.length * STAGE_DURATION_MS);
    timers.current.push(finalTimer);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    runMockSearch(q);
  }

  function handleExampleClick(prompt: string) {
    setQuery(prompt);
    runMockSearch(prompt);
  }

  return (
    <section id="ai-search" className="border-y border-line bg-paper-dim">
      <div className="section py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-ink-soft">Ask or search anything</p>
          <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
            Search this site, or ask a question
          </h2>
          <p className="mt-3 text-sm text-ink-faint">
            This runs on mock data for now — see the note at the bottom for how a
            real search and AI backend will connect here.
          </p>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col gap-3 border border-line bg-paper p-2 sm:flex-row sm:items-center sm:rounded-[3px]">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask or search anything..."
                className="flex-1 bg-transparent px-4 py-3 text-base text-ink placeholder:text-ink-faint focus:outline-none"
                aria-label="Ask or search anything"
              />
              <button
                type="submit"
                className="btn-primary shrink-0 sm:mr-1"
                disabled={status === "loading"}
              >
                Search
              </button>
            </div>
          </form>

          <div className="mt-4 flex flex-wrap gap-2">
            {examplePrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => handleExampleClick(prompt)}
                className="rounded-[3px] border border-line bg-paper px-3 py-1.5 text-sm text-ink-soft transition-colors hover:border-ink/30 hover:text-ink"
              >
                {prompt}
              </button>
            ))}
          </div>

          <div className="mt-8 min-h-[3rem]">
            {status === "loading" && (
              <p className="flex items-center gap-2 text-sm text-ink-soft" role="status" aria-live="polite">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal animate-blink" />
                {LOADING_STAGES[stageIndex]}
              </p>
            )}

            {status === "done" && (
              <ul className="space-y-4">
                {results.map((result, i) => (
                  <li
                    key={`${result.title}-${i}`}
                    className="animate-fade-up border border-line bg-paper p-5"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-ink-faint">
                          {result.source}
                        </p>
                        <h3 className="mt-1 font-display text-lg text-ink">
                          {result.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                          {result.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      {result.url.startsWith("#") ? (
                        <a
                          href={result.url}
                          className="text-sm text-teal-dim underline underline-offset-4 hover:text-teal"
                        >
                          Open result
                        </a>
                      ) : (
                        <a
                          href={result.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-teal-dim underline underline-offset-4 hover:text-teal"
                        >
                          Open result
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
