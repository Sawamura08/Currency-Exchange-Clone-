// animations.ts

import { trigger, state, style, animate, transition } from "@angular/animations";

export const transformMenuAnimation = trigger("transformMenu", [
	state(
		"void",
		style({
			transform: "scale(0)",
			opacity: 0,
		})
	),
	state(
		"visible",
		style({
			transform: "scale(1)",
			opacity: 1,
		})
	),
	transition("void => visible", animate("300ms ease-in")),
	transition("visible => void", animate("300ms ease-out")),
]);
