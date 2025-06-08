
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface BotCardProps {
  id: string;
  name: string;
  description: string;
  specialty: string;
  initials: string;
  isPopular?: boolean;
}

const BotCard = ({ id, name, description, specialty, initials, isPopular }: BotCardProps) => {
  return (
    <Card className="cosmic-border bot-card-hover p-6 relative overflow-hidden">
      {isPopular && (
        <div className="absolute top-4 right-4 flex items-center gap-1 text-primary text-sm font-medium">
          <Star className="w-4 h-4 fill-current" />
          Popular
        </div>
      )}
      
      <div className="flex flex-col items-center text-center space-y-4">
        <Avatar className="w-20 h-20 cosmic-border">
          <AvatarFallback className="text-2xl font-bold bg-primary/20 text-primary">
            {initials}
          </AvatarFallback>
        </Avatar>
        
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground">{name}</h3>
          <p className="text-sm text-primary font-medium">{specialty}</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        <Link to={`/chat/${id}`} className="w-full">
          <Button className="w-full cosmic-border bg-primary/10 hover:bg-primary/20 text-primary border-primary/30">
            <MessageCircle className="w-4 h-4 mr-2" />
            Start Chat
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default BotCard;
