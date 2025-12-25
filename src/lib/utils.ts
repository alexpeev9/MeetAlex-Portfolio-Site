import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MONTHS: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

const parseDate = (dateStr: string): Date | null => {
  const parts = dateStr.trim().split(" ");
  if (parts.length !== 2) return null;

  const monthStr = parts[0];
  const yearStr = parts[1];

  const month = MONTHS[monthStr];
  if (month === undefined) return null;

  const year = parseInt(yearStr, 10);
  if (isNaN(year)) return null;

  return new Date(year, month, 1);
};

const calculateDuration = (startDate: Date, endDate: Date): string => {
  // Calculate total months inclusively (including both start and end months)
  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth();
  const endYear = endDate.getFullYear();
  const endMonth = endDate.getMonth();

  // Count months inclusively: (endYear - startYear) * 12 + (endMonth - startMonth) + 1
  const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months} ${months === 1 ? "mo" : "mos"}`;
  }

  if (months === 0) {
    return `${years} ${years === 1 ? "yr" : "yrs"}`;
  }

  return `${years} ${years === 1 ? "yr" : "yrs"} ${months} ${months === 1 ? "mo" : "mos"}`;
};

export const formatPeriodWithDuration = (period: string): string => {
  const parts = period.split(" - ");
  if (parts.length !== 2) return period;

  const startStr = parts[0].trim();
  const endStr = parts[1].trim();

  const startDate = parseDate(startStr);
  if (!startDate) return period;

  const endDate =
    endStr.toLowerCase() === "present" ? new Date() : parseDate(endStr);

  if (!endDate) return period;

  const duration = calculateDuration(startDate, endDate);
  return `${period} · ${duration}`;
};
