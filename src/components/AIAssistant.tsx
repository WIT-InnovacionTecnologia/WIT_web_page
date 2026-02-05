import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Message = {
    id: number;
    text: string;
    sender: 'user' | 'bot';
};

export const AIAssistant = () => {
    const { t } = useTranslation();

    // Text Variables
    const assistantTitle = t('ai.title');
    const greetingMessage = t('ai.greeting');
    const inputPlaceholder = t('ai.input_placeholder');

    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: greetingMessage, sender: 'bot' }
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
        if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('precio') || lowerInput.includes('costo')) {
            return t('ai.mock_response_price');
        }
        if (lowerInput.includes('mac') || lowerInput.includes('macbook')) {
            return t('ai.mock_response_mac');
        }
        if (lowerInput.includes('iphone')) {
            return t('ai.mock_response_iphone');
        }
        if (lowerInput.includes('vision')) {
            return t('ai.mock_response_vision');
        }
        return t('ai.mock_response_default');
    };

    return (
        <div id="ai-assistant" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-2xl rounded-3xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className="p-2 bg-gray-100 dark:bg-zinc-800 rounded-lg">
                                    <Sparkles size={16} className="text-gray-900 dark:text-white" />
                                </div>
                                <span className="font-semibold text-gray-900 dark:text-white">{assistantTitle}</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors relative z-50 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                            >
                                <X size={18} />
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
                                            : 'bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white rounded-bl-none'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 px-4 py-3 rounded-2xl rounded-bl-none flex space-x-1 items-center">
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
                        <div className="p-4 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex items-center space-x-2"
                            >
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder={inputPlaceholder}
                                    className="flex-1 bg-gray-100 dark:bg-zinc-900 border-none outline-none px-4 py-3 rounded-full text-sm placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-500/20 transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className={`p-2 rounded-full transition-all duration-300 ${inputValue.trim()
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-200 dark:bg-zinc-800 text-gray-400'
                                        }`}
                                >
                                    <ArrowUp size={20} strokeWidth={3} />
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
                className="w-14 h-14 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-lg flex items-center justify-center relative overflow-hidden group"
            >
                <div className="relative z-10">
                    {isOpen ? <X size={24} /> : <Sparkles size={24} />}
                </div>

                {/* Pulsing ring when closed */}
                {!isOpen && (
                    <span className="absolute -inset-1 rounded-full border border-gray-400/30 animate-ping opacity-75" />
                )}
            </motion.button>
        </div>
    );
};
