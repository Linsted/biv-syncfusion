# BI Dashboard POC (Vite + React + TypeScript + Syncfusion)

This project is a Proof-of-Concept (POC) BI dashboard built with Vite, React, and TypeScript, using Syncfusion React Suite for layout and charts, and @tanstack/react-query for data fetching. It demonstrates a modular, decoupled architecture with dashboard-level filters controlling all charts.

## Tech Stack
- **Framework:** React + TypeScript
- **Build Tool:** Vite
- **Dashboard & Charts:** Syncfusion React Suite (`@syncfusion/ej2-react-layouts`, `@syncfusion/ej2-react-charts`)
- **Data Fetching:** @tanstack/react-query
- **UI Loader/Text:** @mantine/core

## Folder Structure
```
src/
├── components/
│   ├── bi-ui-kit/
│   │   ├── ChartWidget.tsx
│   │   └── DashboardGrid.tsx
│   └── filters/
│       └── TimePeriodSelector.tsx
├── hooks/
│   └── data-adapters/
│       ├── mock.adapter.ts
│       └── useVisualizationData.ts
└── pages/
    └── MyDashboardPage.tsx
```

## Features
- **Dashboard-level filters**: Change the time period for all charts at once.
- **Syncfusion Dashboard Layout**: Drag, resize, and arrange chart panels.
- **Mock data adapter**: Easily swap for real data sources.

## Getting Started
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Open the app:**
   Visit the local server URL (usually `http://localhost:5173`).

## License
Syncfusion components require a license for commercial use. This POC uses their trial or community license.
# biv-syncfusion
