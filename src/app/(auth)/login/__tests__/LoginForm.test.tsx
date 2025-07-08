import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../_loginComponents/LoginForm";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

// Mocks
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("cookies-next", () => ({
  setCookie: jest.fn(),
}));

jest.mock("@/hooks/utilityHooks", () => ({
  usePasswordToggle: () => ["password", <span key="toggle">mock-icon</span>],
}));

// Dummy styles mock
const mockStyles = new Proxy(
  {},
  {
    get: (_, key) => key,
  }
);

describe("LoginForm", () => {
  const push = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push });
    jest.clearAllMocks();
    window.alert = jest.fn(); // Prevents jsdom crash from unimplemented alert
  });

  it("renders correctly", () => {
    render(<LoginForm styles={mockStyles} />);
    expect(screen.getByText("Welcome!")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByText("FORGOT PASSWORD?")).toBeInTheDocument();
  });

  it("sets a cookie and navigates on submit", () => {
    render(<LoginForm styles={mockStyles} />);

    // Fill required fields
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password123" },
    });

    // Submit form
    fireEvent.submit(screen.getByRole("button", { name: /log in/i }));

    // Assert cookie was set
    expect(setCookie).toHaveBeenCalledWith(
      "lsq9fac67pp",
      expect.any(String),
      expect.objectContaining({
        maxAge: 60 * 60 * 24,
        path: "/",
      })
    );

    // Assert navigation occurred
    expect(push).toHaveBeenCalledWith("/");
  });
});
