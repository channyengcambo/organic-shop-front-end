// features/shared/components/ErrorBoundary.tsx
import { Component, type ReactNode } from "react";

export class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: "center", marginTop: "5rem" }}>
          <h1>Something went wrong 😢</h1>
          <p>Please try again later.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
