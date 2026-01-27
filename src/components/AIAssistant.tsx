import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Message = {
    id: number;
    text: string;
    sender: 'user' | 'bot';
};

export const AIAssistant = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: t('ai.greeting'), sender: 'bot' }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const newUserMessage: Message = {
            id: Date.now(),
            text: inputValue,
            sender: 'user'
        };

        setMessages(prev => [...prev, newUserMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate network delay and response
        setTimeout(() => {
            const botResponseText = generateMockResponse(newUserMessage.text);
            const newBotMessage: Message = {
                id: Date.now() + 1,
                text: botResponseText,
                sender: 'bot'
            };
            setMessages(prev => [...prev, newBotMessage]);
            setIsTyping(false);
        }, 1500);
    };

    const generateMockResponse = (input: string): string => {
        const lowerInput = input.toLowerCase();
        if (lowerInput.includes('price') || lowerInput.includes('cost')) {
            return "Our products start from $999. Would you like to see the pricing for a specific model?";
        }
        if (lowerInput.includes('mac') || lowerInput.includes('macbook')) {
            return "The new MacBook lineup features the M3 chip, delivering incredible performance and battery life.";
        }
        if (lowerInput.includes('iphone')) {
            return "iPhone 15 Pro features a titanium design and the groundbreaking A17 Pro chip.";
        }
        if (lowerInput.includes('vision')) {
            return "Apple Vision Pro seamlessly blends digital content with your physical space.";
        }
        return "I can help you explore our latest products, find a store, or answer support questions. What would you like to know?";
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-b border-gray-100 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                                    <Sparkles size={16} className="text-white" />
                                </div>
                                <span className="font-semibold text-gray-800">Apple Intelligence</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-gray-100 rounded-full transition-colors relative z-50" // High z-index to ensure clickability
                            >
                                <X size={18} className="text-gray-500" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                                            ? 'bg-blue-600 text-white rounded-br-none'
                                            : 'bg-white shadow-sm border border-gray-100 text-gray-800 rounded-bl-none'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white shadow-sm border border-gray-100 px-4 py-3 rounded-2xl rounded-bl-none flex space-x-1 items-center">
                                        <motion.div
                                            className="w-2 h-2 bg-gray-400 rounded-full"
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ repeat: Infinity, duration: 0.6 }}
                                        />
                                        <motion.div
                                            className="w-2 h-2 bg-gray-400 rounded-full"
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                                        />
                                        <motion.div
                                            className="w-2 h-2 bg-gray-400 rounded-full"
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                                        />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white/50 border-t border-gray-100">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex items-center space-x-2"
                            >
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder={t('ai.input_placeholder')}
                                    className="flex-1 bg-gray-100 border-none outline-none px-4 py-3 rounded-full text-sm placeholder-gray-500 focus:ring-2 focus:ring-blue-100 transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    <Send size={16} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-black text-white rounded-full shadow-lg flex items-center justify-center relative overflow-hidden group"
            >
                {/* Glowing Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                    {isOpen ? <X size={24} /> : <Sparkles size={24} />}
                </div>

                {/* Pulsing ring when closed */}
                {!isOpen && (
                    <span className="absolute -inset-1 rounded-full border border-blue-400/30 animate-ping opacity-75" />
                )}
            </motion.button>
        </div>
    );
};
