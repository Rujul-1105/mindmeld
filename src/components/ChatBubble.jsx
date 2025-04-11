import '../styles/chatStyle.css';

const ChatBubble = ({ message }) => {
  const isUser = message.role === 'user';
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  }).format(message.timestamp);

  return (
    <div className={`chat-bubble ${isUser ? 'user-bubble' : 'assistant-bubble'}`}>
      <div className="bubble-header">
        <span className="bubble-sender">{isUser ? 'You' : 'MindMeld'}</span>
        <span className="bubble-time">{formattedTime}</span>
      </div>
      <div className="bubble-content">
        {message.content.split('\n').map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default ChatBubble;