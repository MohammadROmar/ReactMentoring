import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home/Home.tsx";
import RootLayout from "./pages/Root.tsx";
import SessionPage from "./pages/Session/Session.tsx";
import LogoIcon from "./assets/icons/Logo.tsx";
import ErrorElement from "./components/ErrorElement/ErrorElement.tsx";
const Sessions = lazy(() => import("./pages/Sessions/Sessions.tsx"));

import { store } from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorElement />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "sessions",
        element: <Sessions />,
      },
      { path: "sessions/:id", element: <SessionPage /> },
    ],
  },
]);

export default function App() {
  return (
    <Suspense fallback={<LogoIcon />}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Suspense>
  );
}
