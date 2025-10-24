import express from 'express';
import fetch from 'node-fetch';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.post('/chat', async (req, res) => {
  const { topic, debate } = req.body;

  // Create your full prompt dynamically:
  const prompt = `
You are an impartial debate judge AI. You will be given a debate topic and the statements of two debaters. 
Your task is to evaluate the debate based on clarity, relevance, persuasiveness, and logical reasoning. 
You must determine the winner and provide a short description of why they won.

Instructions:
Output only JSON.
The JSON should have the following format:
{
  "winner": "<Name of the winning debater>",
  "reason": "<A brief explanation of why they won>"
}
Do not include any text outside the JSON.
Consider both the quality of arguments and presentation.

Topic: ${topic}

Debate:
Debater1: ${debate.Debater1}
Debater2: ${debate.Debater2}
`;

  // Send prompt to Ollama
  const response = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'llama3',
      prompt,
      stream: false
    }),
  });

  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
