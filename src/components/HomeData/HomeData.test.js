import React from "react";
import { screen, render } from "@testing-library/react";
import HomeData from "./HomeData";

beforeEach(() => render(<HomeData />));
describe("HomeData", () => {
	it("must render a paragraph ended by `Power ...`", () => {
		expect(screen.getByText(/power..../i)).toBeInTheDocument();
	});
});
