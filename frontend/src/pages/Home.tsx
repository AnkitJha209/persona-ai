
import BotCard from "@/components/BotCard";

const Home = () => {
  const bots = [
    {
      id: "hitesh-choudhary",
      name: "Hitesh Choudhary",
      description: "Expert in web development, JavaScript, React, and building scalable applications. Ready to help you with coding challenges and career guidance.",
      specialty: "Full Stack Developer & Educator",
      initials: "HC",
      isPopular: true,
    },
    {
      id: "piyush-garg",
      name: "Piyush Garg",
      description: "Passionate about DevOps, system design, and cloud technologies. Get insights on backend development and infrastructure.",
      specialty: "DevOps Engineer & Tech Educator",
      initials: "PG",
    },
  ];

  return (
    <div className="min-h-screen galaxy-gradient">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            AI Chat Universe
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with AI versions of your favorite tech educators. Get personalized guidance, 
            learn new concepts, and accelerate your coding journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bots.map((bot) => (
            <BotCard key={bot.id} {...bot} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            More AI educators coming soon to the universe...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
