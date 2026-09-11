import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';

interface ChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  messages: ChatMessage[];
  onSendMessage: (text: string) => void;
  targetShelterName?: string;
}

export const ChatDrawer: React.FC<ChatDrawerProps> = ({
  isOpen,
  onClose,
  messages,
  onSendMessage,
  targetShelterName = 'Austin Pets Alive!',
}) => {
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = () => {
    const text = inputText.trim();
    if (!text) return;
    onSendMessage(text);
    setInputText('');

    // Simulate coordinator typing & response
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 1200);
  };

  const quickQuestions = [
    'Are adoption fees tax-deductible?',
    'Can we do a cat-testing meet?',
    'What are your weekend visiting hours?',
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-[#dde4df] animate-in slide-in-from-bottom-5 duration-300">
      {/* Header */}
      <div className="bg-[#a83301] p-4 text-white flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-[12px]">
            APA
          </div>
          <div>
            <div className="font-bold text-[14px] leading-tight">{targetShelterName}</div>
            <div className="text-[11px] text-white/85 flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-[#b1f0ce]"></span> Online • Adoption Desk
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          aria-label="Close shelter chat"
          className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="h-72 overflow-y-auto p-4 space-y-3 bg-[#f4fbf6] text-[13px]">
        {messages.map((msg) => {
          const isMe = msg.sender === 'user';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-2 ${isMe ? 'justify-end' : 'justify-start'}`}
            >
              {!isMe && (
                <div className="w-7 h-7 rounded-full bg-[#ffdbd0] text-[#a83301] text-[10px] font-bold flex items-center justify-center shrink-0">
                  {msg.senderInitials}
                </div>
              )}
              <div
                className={`p-3 rounded-2xl max-w-[82%] shadow-xs leading-relaxed ${
                  isMe
                    ? 'bg-[#a83301] text-white rounded-tr-none text-right'
                    : 'bg-white text-[#161d1a] rounded-tl-none border border-[#dde4df]/60'
                }`}
              >
                <div>{msg.text}</div>
                <div
                  className={`text-[10px] mt-1 ${
                    isMe ? 'text-white/70 text-right' : 'text-[#59413a]'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center gap-2 text-[#59413a] text-[12px] italic">
            <span className="w-2 h-2 rounded-full bg-[#a83301] animate-bounce"></span>
            <span className="w-2 h-2 rounded-full bg-[#a83301] animate-bounce [animation-delay:0.2s]"></span>
            <span className="w-2 h-2 rounded-full bg-[#a83301] animate-bounce [animation-delay:0.4s]"></span>
            <span>Coordinator is replying...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts */}
      <div className="px-3 py-1.5 bg-[#eef5f0] border-t border-[#dde4df] flex gap-1.5 overflow-x-auto text-[11px]">
        {quickQuestions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => onSendMessage(q)}
            className="px-2.5 py-1 bg-white hover:bg-[#e8f0ea] text-[#59413a] rounded-full shrink-0 border border-[#dde4df] transition-colors cursor-pointer"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <div className="p-3 bg-white flex items-center gap-2 border-t border-[#dde4df]">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSend();
          }}
          placeholder="Ask a question..."
          className="flex-grow px-4 py-2 bg-[#eef5f0] rounded-full text-[#161d1a] text-[13px] placeholder:text-[#8d7168] focus:outline-none focus:ring-2 focus:ring-[#a83301]"
        />
        <button
          onClick={handleSend}
          aria-label="Send message"
          className="w-9 h-9 rounded-full bg-[#a83301] text-white flex items-center justify-center hover:bg-[#ca4a1c] transition-colors shrink-0 shadow-xs cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">send</span>
        </button>
      </div>
    </div>
  );
};
