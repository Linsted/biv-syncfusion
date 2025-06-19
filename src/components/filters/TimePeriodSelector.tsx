// src/components/filters/TimePeriodSelector.tsx
interface TimePeriodSelectorProps {
  value: string;
  onChange: (newValue: string) => void;
}
export const TimePeriodSelector = ({
  value,
  onChange,
}: TimePeriodSelectorProps) => (
  <div style={{ marginBottom: "20px" }}>
    <p>Select Time Period:</p>
    <button
      onClick={() => onChange("LAST_7_DAYS")}
      disabled={value === "LAST_7_DAYS"}
    >
      Last 7 Days
    </button>
    <button
      onClick={() => onChange("LAST_3_DAYS")}
      disabled={value === "LAST_3_DAYS"}
    >
      Last 3 Days
    </button>
    <button
      onClick={() => onChange("LAST_30_DAYS")}
      disabled={value === "LAST_30_DAYS"}
    >
      Last 30 Days
    </button>
  </div>
);
