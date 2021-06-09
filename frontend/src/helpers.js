export const getPointValueFromAugmentedPlayer = (player) => {
  let { goals, assists, hits, shots, saves } = player;
  if (!goals) {
    goals = 0;
  }
  if (!assists) {
    assists = 0;
  }
  if (!hits) {
    hits = 0;
  }
  if (!shots) {
    shots = 0;
  }
  if (!saves) {
    saves = 0;
  }
  return goals * 3 + assists * 2 + hits * 0.2 + shots * 0.5 + saves * 0.2;
};
