const { useState } = React;

function PromptInput({ setResponses, onOrder66 }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!input.trim()) return;

    if (input.toLowerCase().includes("order 66")) onOrder66();

    setLoading(true);
    new Audio("sounds/lightsaber.mp3").play();

    try {
      const res = await fetch("/api/prompt", {
        method : "POST",
        headers: { "Content-Type": "application/json" },
        body   : JSON.stringify({ userPrompt: input })
      });
      const data = await res.json();
      setResponses(data);
    } catch {
      setResponses({
        sith: "⚠️  Holocron error. Check console.",
        jedi: "Patience. The Force will debug."
      });
    } finally { setLoading(false); }
  }

  return (
    <div className="w-full max-w-2xl space-y-4 px-4">
      <textarea
        className="w-full h-32 p-4 bg-gray-900 bg-opacity-70 rounded-xl resize-none outline-none ring-2 ring-gray-700 focus:ring-jedi transition placeholder-gray-400 shadow-xl"
        style={{ fontFamily: "Roboto Mono, monospace" }}
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type a prompt worthy of the Council..."
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`relative overflow-hidden px-10 py-3 rounded-full font-bold tracking-wider
          ${loading ? "bg-gray-700" : "bg-sky-500 hover:bg-sky-600"}
          transition transform active:scale-95 shadow-lg`}
      >
        {loading
          ? <span className="hyperspace inline-block">Jumping to hyperspace…</span>
          : "Ignite Prompt"}
      </button>
    </div>
  );
}
