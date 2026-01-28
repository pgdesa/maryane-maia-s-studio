import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToHash from "@/components/ScrollToHash";
import Index from "./pages/Index";
import QuemSouEu from "./pages/QuemSouEu";
import EmConstrucao from "./pages/EmConstrucao";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quem-sou-eu" element={<QuemSouEu />} />
          <Route path="/meus-trabalhos" element={<EmConstrucao title="Meus Trabalhos" />} />
          <Route path="/artigos" element={<EmConstrucao title="Artigos" />} />
          <Route path="/fale-comigo" element={<EmConstrucao title="Fale Comigo" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
