import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Player, SCORE_ACTIONS } from "@/types/player";
import { toast } from "sonner";

interface ScoreBoardProps {
  redPlayer: Player | null;
  bluePlayer: Player | null;
}

const ScoreBoard = ({ redPlayer, bluePlayer }: ScoreBoardProps) => {
  const [redScore, setRedScore] = useState(0);
  const [blueScore, setBlueScore] = useState(0);
  const [redPenalties, setRedPenalties] = useState(0);
  const [bluePenalties, setBluePenalties] = useState(0);

  const addScore = (corner: "red" | "blue", points: number) => {
    if (corner === "red") {
      setRedScore((prev) => prev + points);
      toast.success(`+${points} points for Red Corner`);
    } else {
      setBlueScore((prev) => prev + points);
      toast.success(`+${points} points for Blue Corner`);
    }
  };

  const addPenalty = (corner: "red" | "blue") => {
    if (corner === "red") {
      setRedPenalties((prev) => prev + 1);
      setBlueScore((prev) => prev + 1);
      toast.error("Penalty for Red Corner");
    } else {
      setBluePenalties((prev) => prev + 1);
      setRedScore((prev) => prev + 1);
      toast.error("Penalty for Blue Corner");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Red Corner */}
      <Card className="p-6 border-2 border-tkd-red">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-tkd-red">{redPlayer?.name}</h2>
          <div className="text-6xl font-bold my-4 animate-score-bump">
            {redScore}
          </div>
          <div className="text-sm text-gray-500">
            Penalties: {redPenalties}
          </div>
        </div>
        <div className="space-y-2">
          {SCORE_ACTIONS.map((action) => (
            <Button
              key={action.description}
              onClick={() => addScore("red", action.points)}
              className="w-full bg-tkd-red text-white hover:bg-red-600"
            >
              +{action.points} - {action.description}
            </Button>
          ))}
          <Button
            onClick={() => addPenalty("red")}
            className="w-full bg-gray-600 text-white hover:bg-gray-700"
          >
            Add Penalty (Gam-jeom)
          </Button>
        </div>
      </Card>

      {/* Blue Corner */}
      <Card className="p-6 border-2 border-tkd-blue">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-tkd-blue">{bluePlayer?.name}</h2>
          <div className="text-6xl font-bold my-4 animate-score-bump">
            {blueScore}
          </div>
          <div className="text-sm text-gray-500">
            Penalties: {bluePenalties}
          </div>
        </div>
        <div className="space-y-2">
          {SCORE_ACTIONS.map((action) => (
            <Button
              key={action.description}
              onClick={() => addScore("blue", action.points)}
              className="w-full bg-tkd-blue text-white hover:bg-blue-600"
            >
              +{action.points} - {action.description}
            </Button>
          ))}
          <Button
            onClick={() => addPenalty("blue")}
            className="w-full bg-gray-600 text-white hover:bg-gray-700"
          >
            Add Penalty (Gam-jeom)
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ScoreBoard;