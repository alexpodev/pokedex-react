export const firstLetterToUpperCase = (word: string) : string => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export const addLeadingZeros = (num: number, totalLength: number) : string => {
  return String(num).padStart(totalLength, '0');
}

export const numberToKilograms = (num: number) : number => {
  return num/10;
}

export const numberToPounds = (num: number) => {
  return (num/4.535).toFixed(1);
}

export const numberToMeters = (num: number) : number => {
  return num/10;
}

export const numberToFoots = (num: number) => {
  return ((num/10)*3.2808).toFixed(2);
}