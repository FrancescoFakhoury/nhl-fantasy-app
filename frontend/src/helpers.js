export const getPointValueFromAugmentedPlayer = (player) => {
  const { goals, assists, hits, shots, saves } = player;
  return goals * 3 + assists * 2 + hits * 0.2 + shots * 0.5 + saves * 0.2;
};
