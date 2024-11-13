import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Timer = () => {
  const [time, setTime] = useState(120); // 2 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, time]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setTime(120);
    setIsRunning(false);
    setIsBreak(false);
  };

  const startBreak = () => {
    setTime(60);
    setIsRunning(true);
    setIsBreak(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <Card className="p-6 text-center bg-white shadow-lg rounded-lg">
      <div className="text-6xl font-bold mb-4">{formatTime(time)}</div>
      <div className="space-x-4">
        <Button
          onClick={toggleTimer}
          className={`${
            isRunning
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-green-500 hover:bg-green-600"
          } text-white`}
        >
          {isRunning ? "Pause" : "Start"}
        </Button>
        <Button
          onClick={resetTimer}
          className="bg-red-500 hover:bg-red-600 text-white"
        >
          Reset
        </Button>
        {!isBreak && (
          <Button
            onClick={startBreak}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Start Break
          </Button>
        )}
      </div>
    </Card>
  );
};

export default Timer;