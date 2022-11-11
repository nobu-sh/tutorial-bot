// Takes an array of items and chunk items into a matrix.
// Useful for offset based pagination.
export function chunk<T>(items: T[], chunk: number): T[][] {
  // Initialize the matrix
  const chunks: T[][] = []

  // For loop; Loop until i is more than our items available; Increment by the given chunk;
  // Each iteraction copy push targeted chunk from the passed items to the chunks array
  for (let i = 0; i < items.length; i += chunk) {
    chunks.push(items.slice(i, i + chunk))
  }

  return chunks
}