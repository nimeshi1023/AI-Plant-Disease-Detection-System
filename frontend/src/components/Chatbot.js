// Chatbot.jsx
import { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: '👋 Hi! Welcome to DT Property Cleaning. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (text = input) => {
    if (!text.trim() || isLoading) return;

    // add user message
    setMessages(prev => [...prev, { sender: 'user', text }]);
    setInput('');

    // show "calling" cover
    setIsLoading(true);

    // DEMO delay (replace with n8n call)
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text:
            'Thanks for reaching out! Our team offers professional cleaning services. Would you like a free quote?'
        }
      ]);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-6 right-6 bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-full shadow-xl z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[90vw] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-800 to-cyan-600 text-white p-4">
            <h3 className="font-bold text-lg">DT Property Cleaning</h3>
            <p className="text-sm opacity-90">AI Assistant</p>
          </div>

          {/* Messages */}
          <div className="p-4 flex-1 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={msg.sender === 'user' ? 'text-right' : 'text-left'}
              >
                <span
                  className={`inline-block max-w-[80%] px-4 py-2 rounded-xl text-sm ${
                    msg.sender === 'user'
                      ? 'bg-blue-700 text-white'
                      : 'bg-white border text-gray-800'
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}

            {/* CALLING / LOADING COVER */}
            {isLoading && (
              <div className="text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border text-gray-600 text-sm">
                  <span className="animate-pulse">🤖 Calling our assistant</span>
                  <span className="flex gap-1">
                    <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce"></span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce delay-150"></span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce delay-300"></span>
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex border-t bg-white">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-1 px-4 py-3 outline-none text-sm"
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              disabled={isLoading}
            />
            <button
              className={`px-5 text-white ${
                isLoading ? 'bg-gray-400' : 'bg-blue-700 hover:bg-blue-800'
              }`}
              onClick={() => handleSend()}
              disabled={isLoading}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;