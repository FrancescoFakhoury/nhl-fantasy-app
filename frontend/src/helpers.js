export const getPointValueFromAugmentedPlayer = (player) => {
    const{goals, assists} = player
    return goals * 5 + assists * 2
}


