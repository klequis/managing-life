/*
    interface DateTimeFormatOptions {
        localeMatcher?: "best fit" | "lookup" | undefined;
        weekday?: "long" | "short" | "narrow" | undefined;
        era?: "long" | "short" | "narrow" | undefined;
        year?: "numeric" | "2-digit" | undefined;
        month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
        day?: "numeric" | "2-digit" | undefined;
        hour?: "numeric" | "2-digit" | undefined;
        minute?: "numeric" | "2-digit" | undefined;
        second?: "numeric" | "2-digit" | undefined;
        timeZoneName?: "short" | "long" | "shortOffset" | "longOffset" | "shortGeneric" | "longGeneric" | undefined;
        formatMatcher?: "best fit" | "basic" | undefined;
        hour12?: boolean | undefined;
        timeZone?: string | undefined;
    }

*/



export function formatDate(date: string): string {
  console.log('date', date)
  let options = {
    // weekday: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  } as const
  const d = new Date(date);
  return new Intl.DateTimeFormat(undefined, options).format(d);
}


// Argument of type 
// '{ year: string; month: string; day: string; hour: string; minute: string; }' 
// is not assignable to parameter of type 

// 'DateTimeFormatOptions'.
//   Types of property 'year' are incompatible.
//     Type 'string' is not assignable to type '"numeric" | "2-digit" | undefined'
