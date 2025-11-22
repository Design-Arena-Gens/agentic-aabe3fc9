"use client";

import { useMemo, useState } from "react";

type PromptOptions = {
  moods: string[];
  subjects: string[];
  twists: string[];
  formats: string[];
};

const OPTIONS: PromptOptions = {
  moods: [
    "surreal and dreamlike",
    "hopeful yet bittersweet",
    "noir-inspired suspense",
    "whimsical wonder",
    "gritty and grounded",
    "playfully mischievous",
    "ethereal serenity"
  ],
  subjects: [
    "a time-traveling cartographer",
    "an AI that refuses to be upgraded",
    "a forgotten folk hero",
    "a city built on floating islands",
    "a botanist uncovering sentient flora",
    "an archivist of impossible memories",
    "a pair of estranged siblings reunited by a puzzle box"
  ],
  twists: [
    "but prophecy and free will collide dramatically",
    "while the laws of physics bend under emotional pressure",
    "as an ancient secret leaks into the public",
    "yet the antagonist turns out to be a misunderstood ally",
    "and every choice creates a visible echo",
    "while a chorus of unreliable narrators meddles constantly",
    "as a deadline counted in heartbeats looms large"
  ],
  formats: [
    "write it as a microfiction of 300 words or less",
    "pitch it like a streaming series pilot synopsis",
    "outline it as a three-act stage play",
    "render it as a cinematic storyboard description",
    "craft it as a lyrical poem with repeating refrains",
    "shape it into a choose-your-own-adventure opener",
    "tell it as a folklore tale passed between generations"
  ]
};

const randomIndex = (length: number) => Math.floor(Math.random() * length);

const buildPrompt = (options: PromptOptions) => {
  const mood = options.moods[randomIndex(options.moods.length)];
  const subject = options.subjects[randomIndex(options.subjects.length)];
  const twist = options.twists[randomIndex(options.twists.length)];
  const format = options.formats[randomIndex(options.formats.length)];

  return `Craft a ${mood} story about ${subject}, ${twist}, and ${format}.`;
};

export default function HomePage() {
  const [prompt, setPrompt] = useState(() => buildPrompt(OPTIONS));
  const tips = useMemo(
    () => [
      "Click again until one ignites an idea. There is no wrong answer.",
      "Layer in sensory detail to amplify the mood you select.",
      "Let the format inspire constraints that push creativity further."
    ],
    []
  );

  return (
    <main className="page">
      <header className="hero">
        <p className="tag">Prompt Forge</p>
        <h1>Strike a spark in one click.</h1>
        <p>
          Build an evocative creative brief instantly. Each prompt combines a mood, subject, twist,
          and delivery format to get you writing fast.
        </p>
      </header>

      <section className="prompt-card" aria-live="polite" role="status">
        <p>{prompt}</p>
        <button
          type="button"
          onClick={() => setPrompt(buildPrompt(OPTIONS))}
          className="button"
          aria-label="Generate a fresh prompt"
        >
          Generate again
        </button>
      </section>

      <section className="tips">
        <h2>Make it yours</h2>
        <ul>
          {tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
