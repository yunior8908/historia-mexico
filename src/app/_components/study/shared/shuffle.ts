/**
 * Fisher–Yates shuffle that returns a new array; the input is left
 * untouched. Used by both the flashcards deck and the quiz round
 * builder, so it lives in `shared/` rather than being duplicated.
 */
export function shuffleArray<T>(input: T[]): T[] {
  const arr = input.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j] as T, arr[i] as T];
  }
  return arr;
}
