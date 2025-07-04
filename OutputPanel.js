function OutputPanel({ responses }) {
  if (!responses) return null;

  return (
    <div className="grid lg:grid-cols-2 gap-8 w-full max-w-5xl mt-12 px-4">
      {/* Sith */}
      <article className="tilt-card backdrop-blur-sm bg-gray-900/70 ring-2 ring-red-700 rounded-2xl p-6 shadow-xl hover:shadow-red-600/60 transition">
        <h2 className="text-2xl font-bold mb-4 glow-sith">💢 Sith Roasts</h2>
        <p className="whitespace-pre-line leading-relaxed" style={{ fontFamily: "Roboto Mono, monospace" }}>
          {responses.sith}
        </p>
      </article>

      {/* Jedi */}
      <article className="tilt-card backdrop-blur-sm bg-gray-900/70 ring-2 ring-cyan-400 rounded-2xl p-6 shadow-xl hover:shadow-cyan-400/60 transition">
        <h2 className="text-2xl font-bold mb-4 glow-jedi">🌟 Jedi Wisdom</h2>
        <p className="whitespace-pre-line leading-relaxed" style={{ fontFamily: "Roboto Mono, monospace" }}>
          {responses.jedi}
        </p>
      </article>
    </div>
  );
}
