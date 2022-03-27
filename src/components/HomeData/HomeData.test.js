import React from "react";
import { screen, render } from "@testing-library/react";
import HomeData from "./HomeData";

describe("HomeData", () => {
	it("must render a paragraph", () => {
		render(<HomeData />);
	});
	it("must render an image", () => {
		render(<HomeData />);
	});
});
