import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import PlayerSetup from "@/components/PlayerSetup";
import ScoreBoard from "@/components/ScoreBoard";
import Timer from "@/components/Timer";
import { Player } from "@/types/player";

const Index = () => {
  const [matchStarted, setMatchStarted] = useState(false);
  const [redPlayer, setRedPlayer] = useState<Player | null>(null);
  const [bluePlayer, setBluePlayer] = useState<Player | null>(null);

  const handleStartMatch = () => {
    if (!redPlayer || !bluePlayer) {
      toast.error("Please set up both players first");
      return;
    }
    setMatchStarted(true);
    toast.success("Match started!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Olympic Taekwondo Scoring System
        </h1>
        
        {!matchStarted ? (
          <PlayerSetup
            onRedPlayerSet={setRedPlayer}
            onBluePlayerSet={setBluePlayer}
            onStartMatch={handleStartMatch}
          />
        ) : (
          <div className="space-y-8">
            <Timer />
            <ScoreBoard
              redPlayer={redPlayer}
              bluePlayer={bluePlayer}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;