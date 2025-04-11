import { useState } from 'react';
import { sendChatRequest } from '../services/apiService';

export const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = async (content) => {
    if (!content.trim()) return;

    // Create a new user message
    const userMessage = {
      role: 'user',
      content,
      timestamp: new Date()
    };

    // Update state with user message
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      // Get the current messages including the new one
      const currentMessages = [...messages, userMessage];
      
      // Send request to API
      const response = await sendChatRequest(currentMessages);
      
      // Create assistant message from response
      const assistantMessage = {
        role: 'assistant',
        content: response.choices[0].message.content,
        timestamp: new Date()
      };

      // Update state with assistant response
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);

    } catch (error) {
      console.error('Error in chat:', error);
      setError('Failed to get response from AI. Please try again.');
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setIsLoading(false);
    setError(null);
  };

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearChat
  };
};

export default useChat;