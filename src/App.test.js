import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders a Sign In link", () => {
	render(<App />);
	const linkElement = screen.getByText(/sign in/i);
	expect(linkElement).toBeInTheDocument();
});
