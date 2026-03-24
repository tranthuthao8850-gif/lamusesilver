import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Sparkles, Loader2, MessageCircle, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { getGeminiResponse } from '../services/gemini';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export default function ChatInterface() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'model',
      text: 'Chào bạn! Lamuse Silver rất vui được đón tiếp bạn. Bạn đang tìm kiếm món trang sức nào cho mình hay làm quà tặng cho người thương?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map((m) => ({
        role: m.role,
        parts: [{ text: m.text }],
      }));

      const responseText = await getGeminiResponse(input, history);
      
      const modelMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText || 'Xin lỗi, tôi gặp chút trục trặc. Bạn có thể thử lại không?',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, modelMsg]);
    } catch (error) {
      console.error('Chat error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        id="chat-toggle-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-black text-white rounded-full shadow-2xl flex items-center justify-center z-50 cursor-pointer"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chat-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[400px] max-w-[calc(100vw-48px)] h-[600px] max-h-[calc(100vh-120px)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-neutral-100"
          >
            {/* Header */}
            <div className="bg-black p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center">
                  <Sparkles size={20} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Lamuse Silver AI</h3>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-widest">Tư vấn trang sức cao cấp</p>
                </div>
              </div>
              <a 
                href="http://lamusesilver.id.vn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-neutral-800 rounded-full transition-colors"
                title="Visit Website"
              >
                <ExternalLink size={18} />
              </a>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                      msg.role === 'user'
                        ? 'bg-black text-white rounded-tr-none'
                        : 'bg-white text-neutral-800 shadow-sm border border-neutral-100 rounded-tl-none'
                    }`}
                  >
                    <div className="prose prose-sm max-w-none">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                    <p className={`text-[10px] mt-1 opacity-50 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-neutral-100 rounded-tl-none flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-neutral-400" />
                    <span className="text-xs text-neutral-500">Lamuse đang trả lời...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-neutral-100">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Hỏi về nhẫn, dây chuyền, quà tặng..."
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-black transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-2 bg-black text-white rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="text-[10px] text-center text-neutral-400 mt-2">
                Lamuse Silver AI có thể nhầm lẫn. Hãy kiểm tra thông tin quan trọng.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
