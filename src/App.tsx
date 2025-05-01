
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { 
  createBrowserRouter, 
  RouterProvider, 
  LoaderFunctionArgs,
  json
} from "react-router-dom";
import Index from "./pages/Index";
import ChallengePage from "./pages/ChallengePage";
import NotFound from "./pages/NotFound";
import { getChallengeById, challenges } from "./data/challenges/index";

const queryClient = new QueryClient();

// Loader functions to pre-fetch data
const challengesLoader = async () => {
  return json({ challenges });
};

const challengeLoader = async ({ params }: LoaderFunctionArgs) => {
  const challenge = params.id ? getChallengeById(params.id) : undefined;
  
  if (!challenge) {
    throw new Response("Challenge not found", { status: 404 });
  }
  
  return json({ challenge });
};

// Define routes with loaders
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    loader: challengesLoader,
  },
  {
    path: "/challenge/:id",
    element: <ChallengePage />,
    loader: challengeLoader,
    errorElement: <NotFound />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RouterProvider router={router} />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
