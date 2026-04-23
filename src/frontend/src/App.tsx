import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Link,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";

const Home = lazy(() =>
  import("./pages/Home").then((m) => ({ default: m.Home })),
);
const About = lazy(() =>
  import("./pages/About").then((m) => ({ default: m.About })),
);
const Contact = lazy(() =>
  import("./pages/Contact").then((m) => ({ default: m.Contact })),
);
const Rooms = lazy(() =>
  import("./pages/Rooms").then((m) => ({ default: m.Rooms })),
);
const RoomDetail = lazy(() =>
  import("./pages/RoomDetail").then((m) => ({ default: m.RoomDetail })),
);
const CheckAvailability = lazy(() =>
  import("./pages/CheckAvailability").then((m) => ({
    default: m.CheckAvailability,
  })),
);

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-12 h-12 rounded-full border-4 border-t-transparent animate-spin"
          style={{
            borderColor: "var(--color-primary)",
            borderTopColor: "transparent",
          }}
        />
        <p
          className="font-accent text-lg"
          style={{ color: "var(--color-text-muted)" }}
        >
          Loading…
        </p>
      </div>
    </div>
  );
}

function RootLayout() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <Navbar />
      {/* Spacer to push content below the fixed navbar (h-16 on mobile, h-20 on md+) */}
      <div className="h-16 md:h-20 shrink-0" aria-hidden="true" />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4">
      <h1
        className="font-heading text-6xl font-bold"
        style={{ color: "var(--color-primary)" }}
      >
        404
      </h1>
      <p
        className="font-heading text-2xl"
        style={{ color: "var(--color-text-primary)" }}
      >
        Page Not Found
      </p>
      <p style={{ color: "var(--color-text-secondary)" }}>
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="btn-3d px-6 py-3 text-sm">
        Return Home
      </Link>
    </div>
  );
}

const rootRoute = createRootRoute({ component: RootLayout });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <Home />
    </Suspense>
  ),
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <About />
    </Suspense>
  ),
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <Contact />
    </Suspense>
  ),
});

const roomsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/rooms",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <Rooms />
    </Suspense>
  ),
});

const roomDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/rooms/$slug",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <RoomDetail />
    </Suspense>
  ),
});

const checkAvailabilityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/check-availability",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <CheckAvailability />
    </Suspense>
  ),
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: NotFound,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  contactRoute,
  roomsRoute,
  roomDetailRoute,
  checkAvailabilityRoute,
  notFoundRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5, retry: 1 },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
