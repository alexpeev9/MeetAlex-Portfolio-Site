"use client";

import { formatPeriodWithDuration } from "@/lib/utils";
import Text from "../ui/Text";

type PeriodDisplayProps = {
  startDate: string;
  endDate: string | null;
};

/**
 * Client component that renders period with duration.
 * Uses current date for "Present" roles so duration stays accurate after SSG build.
 * suppressHydrationWarning avoids mismatch between static HTML and client render.
 */
const PeriodDisplay = ({ startDate, endDate }: PeriodDisplayProps) => {
  return (
    <Text variant="caption" suppressHydrationWarning>
      {formatPeriodWithDuration(startDate, endDate)}
    </Text>
  );
};

export default PeriodDisplay;
