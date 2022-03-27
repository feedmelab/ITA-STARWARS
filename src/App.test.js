import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders a sign in link", () => {
	render(<App />);
	const linkElement = screen.getByText(/sign in/i);
	expect(linkElement).toBeInTheDocument();
});
