import { MantineProvider } from "@mantine/core";
import { MyDashboardPage } from "./pages/MyDashboardPage";

function App() {
  return (
    <MantineProvider>
      <MyDashboardPage />
    </MantineProvider>
  );
}

export default App;
