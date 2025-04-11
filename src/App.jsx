import { useState, useEffect } from 'react';
import useChat from './hooks/useChat';
import ConversationWindow from './components/ConversationWindow';
import ChatInput from './components/ChatInput';
import { BsSun, BsMoon } from 'react-icons/bs';
import './styles/global.css';

const App = () => {
  const { messages, isLoading, error, sendMessage, clearChat } = useChat();
  const [theme, setTheme] = useState('light');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <button 
          className="theme-toggle-button"
          onClick={toggleTheme}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <BsMoon /> : <BsSun />} 
        </button>
        <h1 className="app-title">MindMeld</h1>
        <p className="app-subtitle">Your intelligent AI companion powered by Perplexity</p>
      </header>

      {error && <div className="error-message">{error}</div>}

      <div className="chat-container">
        <ConversationWindow 
          messages={messages} 
          isLoading={isLoading} 
        />
        <ChatInput 
          onSendMessage={sendMessage} 
          onClearChat={clearChat}
          isLoading={isLoading} 
        />
      </div>
    </div>
  );
};

export default App;