import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "antd/dist/reset.css";
import { Providers } from "./app/provider.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router.tsx";
import { ErrorBoundary } from "./shared/components/ErrorBoundary.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <Providers>
        <RouterProvider router={router} />
      </Providers>
    </ErrorBoundary>
  </StrictMode>
);
