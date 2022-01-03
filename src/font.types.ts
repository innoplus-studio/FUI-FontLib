import WebFont from "webfontloader";

WebFont.load({
	google: {
		families: ["Poppins", "Mulish"],
	},
});

export enum FFontTypes {
	Small_Text = "600 0.625rem/1rem Mulish",
    Text = "600 0.75rem/1.125rem Mulish",
	Large_Text = "600 0.875rem/1.25rem Mulish",
    Small_Title = "600 1rem/1.5rem Poppins",
	Title = "600 1.5rem/2rem Poppins",
	Large_Title = "600 2rem/2.5rem Poppins"
};
