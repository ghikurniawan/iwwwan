export function separateTextToArray(text: string) {
  const trimmedText = text.trim();
  const words = trimmedText.split(" ");
  const alphabeticRegex = /[^a-zA-Z]/g; // Regular expression to match non-alphabetic characters
  const cleanedArray = words.map((item) =>
    item.replace(alphabeticRegex, "").toLowerCase()
  );
  const array = cleanedArray.filter((item) => item !== ""); // Remove empty strings
  return array;
}