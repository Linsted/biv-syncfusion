// src/hooks/data-adapters/mock.adapter.ts
export interface VisualizationConfig {
  metricId: string;
  timePeriod: string;
}

// Generate 30 days of data for multiple metrics
const days = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);

const salesData = days.map((name, i) => ({
  name,
  sales: 4000 + i * 120 + (i % 5) * 180 + Math.round(Math.random() * 300),
}));
const usersData = days.map((name, i) => ({
  name,
  users: 120 + i * 7 + (i % 3) * 15 + Math.round(Math.random() * 20),
}));
const revenueData = days.map((name, i) => ({
  name,
  revenue: 2000 + i * 90 + (i % 4) * 170 + Math.round(Math.random() * 200),
}));
const expensesData = days.map((name, i) => ({
  name,
  expenses: 1500 + i * 70 + (i % 2) * 120 + Math.round(Math.random() * 150),
}));
const profitData = days.map((name, i) => ({
  name,
  profit: 500 + i * 40 + (i % 6) * 60 + Math.round(Math.random() * 80),
}));
const churnData = days.map((name, i) => ({
  name,
  churn: Math.round(10 + Math.sin(i / 3) * 5 + Math.random() * 2),
}));
const conversionData = days.map((name, i) => ({
  name,
  conversion: Math.round(20 + Math.cos(i / 4) * 8 + Math.random() * 3),
}));
const pieData = days.map((name, i) => ({
  name,
  value: 100 + (i % 5) * 20 + Math.round(Math.random() * 10),
}));
const lineData = days.map((name, i) => ({
  name,
  value: 50 + i * 2 + (i % 7) * 3 + Math.round(Math.random() * 5),
}));
const groupBarData = days.map((name, i) => ({
  name,
  groupA: 100 + i * 5 + Math.round(Math.random() * 10),
  groupB: 80 + i * 4 + Math.round(Math.random() * 10),
}));
const visitsData = days.map((name, i) => ({
  name,
  visits: 300 + i * 15 + (i % 4) * 18 + Math.round(Math.random() * 25),
}));
const bounceData = days.map((name, i) => ({
  name,
  bounce: 40 + (i % 10) * 2 + Math.round(Math.random() * 3),
}));

const dataMap: Record<string, any[]> = {
  sales: salesData,
  users: usersData,
  revenue: revenueData,
  expenses: expensesData,
  profit: profitData,
  churn: churnData,
  conversion: conversionData,
  pie: pieData,
  line: lineData,
  groupbar: groupBarData,
  visits: visitsData,
  bounce: bounceData,
};

export const fetchMockData = async (config: VisualizationConfig) => {
  console.log("Fetching mock data with config:", config);
  await new Promise((resolve) => setTimeout(resolve, 500));
  let data = dataMap[config.metricId] || [];
  if (config.timePeriod === "LAST_3_DAYS") {
    data = data.slice(-3);
  } else if (config.timePeriod === "LAST_7_DAYS") {
    data = data.slice(-7);
  } else if (config.timePeriod === "LAST_30_DAYS") {
    data = data.slice(-30);
  }
  return data;
};
