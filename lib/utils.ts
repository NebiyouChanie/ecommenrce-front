import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// normalize date inputs to work with api's since most don't accept date objects
function formatDateToString(dateObj: { year: number; month: number; day: number } | null) {
  if (!dateObj || !dateObj.year || !dateObj.month || !dateObj.day) {
    return "";
  }
  const month = dateObj.month.toString().padStart(2, '0');
  const day = dateObj.day.toString().padStart(2, '0');

  return `${dateObj.year}-${month}-${day}`;
}

const formatCurrency = (value: number, locale = "en-US", currency = "ETB") => {
  const formatted = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
  }).format(value);
  return formatted;
};


export { cn, formatDateToString, formatCurrency }