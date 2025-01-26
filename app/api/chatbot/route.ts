import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function hander(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ message: 'Input is required' });
  }

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      message: [{ role: 'user', content: message }],
    });

    const reply = response.data.choice[0].message.content;
    res.status(200).json({ reply });
  } catch (error) {
    console.error('Error with OpenAI API: ', error);
    res.status(500).json({ message: 'Something went wrong in the OpenAI API' });
  }
}
