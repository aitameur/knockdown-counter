export interface Player {
  name: string;
  score: number;
  penalties: number;
}

export interface ScoreAction {
  points: number;
  description: string;
}

export const SCORE_ACTIONS: ScoreAction[] = [
  { points: 1, description: "Punch to trunk" },
  { points: 2, description: "Kick to trunk" },
  { points: 3, description: "Kick to head" },
  { points: 4, description: "Turning kick to trunk" },
  { points: 5, description: "Turning kick to head" },
];