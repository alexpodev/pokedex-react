export const firstLetterToUpperCase = (word: string) : string => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export const addLeadingZeros = (num: number, totalLength: number) : string => {
  return String(num).padStart(totalLength, '0');
}
