import { type ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ErrorBoundary } from '@/components/error-boundary';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { AppShell } from '@/components/AppShell';
import { type Mode } from '@/lib/mock-data';
import { Admin, Auth, Categories, Dashboard, Earnings, Home, JobDetails, Messages, PostJob, Services, Settings, Work, WorkerProfile } from '@/pages/Pages';

const queryClient = new QueryClient();

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function NotFound() {
  return <div className="grid min-h-[100dvh] place-items-center bg-[hsl(var(--background))] p-6 text-center"><div><p className="mono text-xs font-bold uppercase tracking-[.2em] text-[hsl(var(--primary))]">404 / Wrong turn</p><h1 className="mt-4 text-5xl font-bold">That page wandered off.</h1><p className="mx-auto mt-3 max-w-md text-sm text-[hsl(var(--muted-foreground))]">The link is no longer here, but there is plenty of good work waiting.</p><a href="/" className="mt-7 inline-flex rounded-xl bg-[hsl(var(--primary))] px-5 py-3 text-sm font-bold text-white" data-testid="link-not-found-home">Back to home</a></div></div>;
}

function RoutedApp() {
  const [mode, setMode] = useState<Mode>('customer');
  const shell = (page: ReactNode) => <AppShell mode={mode} onModeChange={setMode}>{page}</AppShell>;
  return <RoutedErrorBoundary><Switch>
    <Route path="/" component={() => shell(<Home mode={mode} />)} />
    <Route path="/services" component={() => shell(<Services />)} />
    <Route path="/work" component={() => shell(<Work />)} />
    <Route path="/categories" component={() => shell(<Categories />)} />
    <Route path="/job/:id" component={() => shell(<JobDetails />)} />
    <Route path="/worker/:id" component={() => shell(<WorkerProfile />)} />
    <Route path="/dashboard" component={() => shell(<Dashboard mode={mode} onModeChange={setMode} />)} />
    <Route path="/post-job" component={() => shell(<PostJob />)} />
    <Route path="/messages" component={() => shell(<Messages />)} />
    <Route path="/earnings" component={() => shell(<Earnings />)} />
    <Route path="/settings" component={() => shell(<Settings />)} />
    <Route path="/admin" component={() => shell(<Admin />)} />
    <Route path="/login" component={() => <Auth />} />
    <Route path="/signup" component={() => <Auth signup />} />
    <Route component={NotFound} />
  </Switch></RoutedErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><RoutedApp /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;