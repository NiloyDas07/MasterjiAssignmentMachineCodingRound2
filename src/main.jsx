import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CatsListing, RandomJokes, RandomUser } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RandomUser />,
      },
      {
        path: "/random-user",
        element: <RandomUser />,
      },
      {
        path: "/random-jokes",
        element: <RandomJokes />,
      },
      {
        path: "cats-listing",
        element: <CatsListing />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
