
import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios'
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";

const Chat = () => {
  const { botId } = useParams();
  const [messages, setMessages] = useState<Array<{ id: string; message: string; isBot: boolean; timestamp: string }>>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const bots = {
    "hitesh-choudhary": {
      name: "Hitesh Choudhary",
      link: 'chat-with-hitesh-ai',
      initials: "HC",
      welcomeMessage: "Hey there! I'm Hitesh. Ready to dive into some code? Whether it's React, JavaScript, or career advice, I'm here to help you level up! 🚀",
    },
    "piyush-garg": {
      name: "Piyush Garg",
      initials: "PG",
      link: 'chat-with-piyush-ai',
      welcomeMessage: "Hello! Piyush here. Let's talk about DevOps, system design, or anything tech-related. I'm excited to share my knowledge with you! 💻",
    },
  };

  const currentBot = botId ? bots[botId as keyof typeof bots] : null;

  useEffect(() => {
    if (currentBot && messages.length === 0) {
      const welcomeMessage = {
        id: "welcome",
        message: currentBot.welcomeMessage,
        isBot: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([welcomeMessage]);
    }
  }, [currentBot, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    const userMessage = {
      id: Date.now().toString(),
      message,
      isBot: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    const response = await axios.post(`http://localhost:3000/${currentBot.link}`,
      {
        text: userMessage.message
      }
    )

      console.log(response.data)
      const botMessage = {
        id: (Date.now() + 1).toString(),
        message: response.data.data.answer,
        isBot: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
  };

  if (!currentBot) {
    return (
      <div className="min-h-screen galaxy-gradient flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Bot not found</h2>
          <Link to="/">
            <Button>Go back to home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen galaxy-gradient flex flex-col">
      {/* Header */}
      <div className="cosmic-border bg-card/50 backdrop-blur-sm p-4 flex items-center gap-4">
        <Link to="/">
          <Button variant="ghost" size="sm" className="cosmic-border">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-lg font-semibold">{currentBot.name}</h1>
          <p className="text-sm text-muted-foreground">AI Assistant</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              message={msg.message}
              isBot={msg.isBot}
              botName={msg.isBot ? currentBot.name : undefined}
              botInitials={msg.isBot ? currentBot.initials : undefined}
              timestamp={msg.timestamp}
            />
          ))}
          
          {isTyping && (
            <div className="flex gap-3 p-4">
              <div className="cosmic-border message-bubble rounded-lg px-4 py-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="max-w-4xl mx-auto w-full">
        <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
      </div>
    </div>
  );
};

export default Chat;
