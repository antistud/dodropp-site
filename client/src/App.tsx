import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import HowItWorksPage from "@/pages/HowItWorks";
import FeaturesPage from "@/pages/Features";
import FaqPage from "@/pages/Faq";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Terms from "@/pages/Terms"; // Added Terms page import

function Router() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/how-it-works" component={HowItWorksPage} />
        <Route path="/features" component={FeaturesPage} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/terms" component={Terms} /> {/* Added Terms page route */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;