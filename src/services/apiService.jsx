import axios from 'axios';

const API_KEY = import.meta.env.VITE_PERPLEXITY_API_KEY;

export const sendChatRequest = async (messages) => {
  try {
    // Format messages for API (removing timestamp)
    const apiMessages = messages.map(({ role, content }) => ({
      role,
      content
    }));

    const response = await axios.post(
      'https://api.perplexity.ai/chat/completions',
      {
        model: 'sonar',
        messages: apiMessages,
        max_tokens: 2000
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error calling Perplexity API:', error);
    throw error;
  }
};