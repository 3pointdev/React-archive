export default function Store(currentState, action) {
  if (currentState === undefined) {
    return {
      number: 0,
    };
  }

  const newState = { ...currentState };
  if (action.type === "PLUS") {
    newState.number++;
  }
  return newState;
}
