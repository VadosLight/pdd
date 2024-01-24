import { Routing } from "pages/index";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { QueryClientProvider } from "react-query";
import { queryClient } from "entity/api";


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
