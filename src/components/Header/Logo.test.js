import React from "react";
import { screen, render } from "@testing-library/react";
import Logo from "./Logo/Logo";

beforeEach(() => render(<Logo />));
it("Usa el src correcto", () => {
	const image = screen.getByAltText("Logo StarWars");
	expect(image).toHaveAttribute("src", "/kindpng_1056364.png");
});
