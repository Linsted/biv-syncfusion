// src/components/bi-ui-kit/DashboardGrid.tsx

interface DashboardGridProps {
  children: React.ReactNode;
}

export const DashboardGrid = ({ children }: DashboardGridProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 24,
        width: "100%",
        minHeight: "90vh",
        background: "#f8f9fa",
        padding: 16,
        justifyItems: "center",
        alignItems: "start",
        overflow: "auto",
      }}
    >
      {children}
    </div>
  );
};
