
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  botName?: string;
  botInitials?: string;
  timestamp?: string;
}

const ChatMessage = ({ message, isBot, botName, botInitials, timestamp }: ChatMessageProps) => {
  return (
    <div className={cn("flex gap-3 p-4", isBot ? "justify-start" : "justify-end")}>
      {isBot && (
        <Avatar className="w-8 h-8 cosmic-border">
          <AvatarFallback className="text-xs bg-primary/20 text-primary">
            {botInitials || "AI"}
          </AvatarFallback>
        </Avatar>
      )}
      
      <div className={cn("flex flex-col", isBot ? "items-start" : "items-end")}>
        {isBot && botName && (
          <span className="text-xs text-primary font-medium mb-1">{botName}</span>
        )}
        
        <div
          className={cn(
            "message-bubble rounded-lg px-4 py-2 max-w-md break-words",
            isBot
              ? "cosmic-border bg-card text-card-foreground"
              : "bg-primary text-primary-foreground"
          )}
        >
          <p className="text-sm leading-relaxed">{message}</p>
        </div>
        
        {timestamp && (
          <span className="text-xs text-muted-foreground mt-1">{timestamp}</span>
        )}
      </div>
      
      {!isBot && (
        <Avatar className="w-8 h-8 cosmic-border">
          <AvatarFallback className="text-xs bg-secondary text-secondary-foreground">
            You
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};

export default ChatMessage;
