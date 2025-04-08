import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/transactions/Index";
import { TransacrtionsProvider } from "./contexts/TransactionsContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransacrtionsProvider>
        <Transactions />
      </TransacrtionsProvider>
    </ThemeProvider>
  );
}
