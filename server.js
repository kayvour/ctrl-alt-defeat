/* ----------  server.js  (root)  -----------------
   Backend for “Prompt Side of the Force”
   • Uses OpenRouter’s OpenAI‑compatible endpoint
   • npm install express cors dotenv openai
   • .env must contain:
       OPENAI_API_KEY=sk-or-XXXXXXXXXXXXXXXX
       OPENAI_BASE_URL=https://openrouter.ai/api/v1
       # (optional) OPENAI_MODEL=mistralai/mistral-7b-instruct
   • package.json →  "type": "module"
--------------------------------------------------*/

import express from "express";
import cors    from "cors";
import dotenv  from "dotenv";
import path    from "path";
import { fileURLToPath } from "url";
import OpenAI  from "openai";

dotenv.config();

/* ---------- OpenRouter via OpenAI SDK ---------- */
const openai = new OpenAI({
  apiKey : process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL || "https://openrouter.ai/api/v1"
});

/* ---------- Express setup ---------- */
const app = express();
app.use(cors());
app.use(express.json());

/* ---------- Chat completion route ---------- */
app.post("/api/prompt", async (req, res) => {
  const { userPrompt } = req.body;
  if (typeof userPrompt !== "string" || !userPrompt.trim()) {
    return res.status(400).json({ error: "Prompt missing or invalid" });
  }

  // Default to a free‑tier model that almost every key has
  const modelName = process.env.OPENAI_MODEL || "mistralai/mistral-7b-instruct";

  try {
    const [sithRes, jediRes] = await Promise.all([
      openai.chat.completions.create({
        model: modelName,
        messages: [
          { role: "system", content: "You are a Sith Lord roasting people mercilessly." },
          { role: "user",   content: userPrompt }
        ]
      }),
      openai.chat.completions.create({
        model: modelName,
        messages: [
          { role: "system", content: "You are a wise Jedi Master improving prompts thoughtfully." },
          { role: "user",   content: userPrompt }
        ]
      })
    ]);

    res.json({
      sith: sithRes.choices?.[0]?.message?.content?.trim() || "(no Sith reply)",
      jedi: jediRes.choices?.[0]?.message?.content?.trim() || "(no Jedi reply)"
    });
  } catch (err) {
    console.error("⚠️  OpenRouter error:", err);
    res.status(500).json({ error: "AI generation failed" });
  }
});

/* ---------- Serve static front‑end ---------- */
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(__dirname));
app.get("*", (_, res) => res.sendFile(path.join(__dirname, "index.html")));

/* ---------- Launch ---------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀  Server ready → http://localhost:${PORT}`));
