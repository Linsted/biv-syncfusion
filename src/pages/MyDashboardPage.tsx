// src/pages/MyDashboardPage.tsx
import { Loader, Text } from "@mantine/core";
import { useState } from "react";
import { ChartWidget } from "../components/bi-ui-kit/ChartWidget";
import { DashboardGrid } from "../components/bi-ui-kit/DashboardGrid";
import { TimePeriodSelector } from "../components/filters/TimePeriodSelector";
import { useVisualizationData } from "../hooks/data-adapters/useVisualizationData";

export const MyDashboardPage = () => {
  const [timePeriod, setTimePeriod] = useState("LAST_30_DAYS");

  // Chart configs for 12 charts
  const chartConfigs = [
    {
      metricId: "sales",
      title: "Sales (Column)",
      dataKey: "sales",
      type: "column",
    },
    {
      metricId: "users",
      title: "Users (Column)",
      dataKey: "users",
      type: "column",
    },
    {
      metricId: "revenue",
      title: "Revenue (Line)",
      dataKey: "revenue",
      type: "line",
    },
    {
      metricId: "expenses",
      title: "Expenses (Line)",
      dataKey: "expenses",
      type: "line",
    },
    {
      metricId: "profit",
      title: "Profit (Column)",
      dataKey: "profit",
      type: "column",
    },
    {
      metricId: "churn",
      title: "Churn (Line)",
      dataKey: "churn",
      type: "line",
    },
    {
      metricId: "conversion",
      title: "Conversion (Pie)",
      dataKey: "value",
      type: "pie",
    },
    { metricId: "pie", title: "Pie Example", dataKey: "value", type: "pie" },
    { metricId: "line", title: "Line Example", dataKey: "value", type: "line" },
    {
      metricId: "groupbar",
      title: "Group Bar Example",
      dataKey: "groupA",
      type: "groupbar",
    },
    {
      metricId: "visits",
      title: "Visits (Column)",
      dataKey: "visits",
      type: "column",
    },
    {
      metricId: "bounce",
      title: "Bounce (Pie)",
      dataKey: "bounce",
      type: "pie",
    },
  ];

  // Call hooks in order, one per chart
  const chartHooks = [
    useVisualizationData({ metricId: "sales", timePeriod }),
    useVisualizationData({ metricId: "users", timePeriod }),
    useVisualizationData({ metricId: "revenue", timePeriod }),
    useVisualizationData({ metricId: "expenses", timePeriod }),
    useVisualizationData({ metricId: "profit", timePeriod }),
    useVisualizationData({ metricId: "churn", timePeriod }),
    useVisualizationData({ metricId: "conversion", timePeriod }),
    useVisualizationData({ metricId: "pie", timePeriod }),
    useVisualizationData({ metricId: "line", timePeriod }),
    useVisualizationData({ metricId: "groupbar", timePeriod }),
    useVisualizationData({ metricId: "visits", timePeriod }),
    useVisualizationData({ metricId: "bounce", timePeriod }),
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard with Global Filters (Syncfusion)</h1>
      <TimePeriodSelector value={timePeriod} onChange={setTimePeriod} />
      <hr />
      <DashboardGrid>
        {chartConfigs.map((cfg, idx) => {
          const { data, isLoading, isError } = chartHooks[idx];
          return (
            <div
              key={cfg.metricId + cfg.type}
              style={{
                width: 380,
                minHeight: 320,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 12,
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 2px 8px #0001",
                flex: "0 0 auto",
              }}
            >
              {isLoading ? (
                <Loader />
              ) : isError ? (
                <Text color="red">Error loading {cfg.title} data</Text>
              ) : (
                <ChartWidget
                  title={cfg.title}
                  data={data ?? []}
                  dataKey={cfg.dataKey}
                  type={cfg.type as "column" | "pie" | "line" | "groupbar"}
                />
              )}
            </div>
          );
        })}
      </DashboardGrid>
    </div>
  );
};
