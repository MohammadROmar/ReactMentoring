import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LoadingSpinner from "./components/LoadingSpinner";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
// import SessionsPage from "./pages/Sessions";
import SessionPage from "./pages/Session";
const Sessions = lazy(() => import("./pages/Sessions"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "sessions",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Sessions />
          </Suspense>
        ),
      },
      // { path: "sessions", element: <SessionsPage /> },
      { path: "sessions/:id", element: <SessionPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
