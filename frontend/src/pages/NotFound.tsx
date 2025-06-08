
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen galaxy-gradient flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="relative">
          <Rocket className="w-24 h-24 mx-auto text-primary opacity-50" />
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold">Lost in Space</h2>
          <p className="text-muted-foreground">
            Looks like you've drifted too far from our galaxy. 
            This page doesn't exist in our universe.
          </p>
        </div>
        
        <Link to="/">
          <Button className="cosmic-border bg-primary/10 hover:bg-primary/20 text-primary border-primary/30">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Home Base
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
