import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "/src/Styles/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
);

//componente que renderiza o App
