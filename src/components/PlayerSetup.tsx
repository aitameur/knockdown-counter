import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Player } from "@/types/player";

interface PlayerSetupProps {
  onRedPlayerSet: (player: Player) => void;
  onBluePlayerSet: (player: Player) => void;
  onStartMatch: () => void;
}

const PlayerSetup = ({
  onRedPlayerSet,
  onBluePlayerSet,
  onStartMatch,
}: PlayerSetupProps) => {
  const [redName, setRedName] = useState("");
  const [blueName, setBlueName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!redName || !blueName) return;

    onRedPlayerSet({ name: redName, score: 0, penalties: 0 });
    onBluePlayerSet({ name: blueName, score: 0, penalties: 0 });
    onStartMatch();
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Red Corner Player
            </label>
            <Input
              type="text"
              value={redName}
              onChange={(e) => setRedName(e.target.value)}
              className="w-full border-tkd-red focus:ring-tkd-red"
              placeholder="Enter red player name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Blue Corner Player
            </label>
            <Input
              type="text"
              value={blueName}
              onChange={(e) => setBlueName(e.target.value)}
              className="w-full border-tkd-blue focus:ring-tkd-blue"
              placeholder="Enter blue player name"
              required
            />
          </div>
        </div>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-tkd-red to-tkd-blue text-white hover:opacity-90 transition-opacity"
        >
          Start Match
        </Button>
      </form>
    </Card>
  );
};

export default PlayerSetup;