import WebFont from "webfontloader";
import { handleFFontTypes } from "./func";

const FontFamilyList = ["Poppins", "Mulish", "Montserrat", "Nunito"];

WebFont.load({
	google: {
		families: FontFamilyList,
	},
});

export interface FFontProps {
	fontWeight?: string | number;
	fontSize?: string | number;
	fontFamily?: string;
	lineHeight?: string | number;
}

const defaultFFontTypes = {
	SMALL_TEXT: <FFontProps>{
		fontWeight: "600",
		fontSize: "0.625rem",
		fontFamily: "Mulish",
		lineHeight: "1rem",
	},
	TEXT: <FFontProps>{
		fontWeight: "600",
		fontSize: "0.75rem",
		fontFamily: "Mulish",
		lineHeight: "1.125rem",
	},
	LARGE_TEXT: <FFontProps>{
		fontWeight: "600",
		fontSize: "0.875rem",
		fontFamily: "Mulish",
		lineHeight: "1.25rem",
	},
	SMALL_TITLE: <FFontProps>{
		fontWeight: "600",
		fontSize: "1rem",
		fontFamily: "Poppins",
		lineHeight: "1.5rem",
	},
	TITLE: <FFontProps>{
		fontWeight: "600",
		fontSize: "1.5rem",
		fontFamily: "Poppins",
		lineHeight: "2rem",
	},
	LARGE_TITLE: <FFontProps>{
		fontWeight: "600",
		fontSize: "2rem",
		fontFamily: "Poppins",
		lineHeight: "2.5rem",
	},
};

export namespace FFontTypes {
	export const Small_Text = (props?: FFontProps) => {
		return handleFFontTypes(props, defaultFFontTypes.SMALL_TEXT) as string;
	};
	export const Text = (props?: FFontProps) => {
		return handleFFontTypes(props, defaultFFontTypes.TEXT) as string;
	};
	export const Large_Text = (props?: FFontProps) => {
		return handleFFontTypes(props, defaultFFontTypes.LARGE_TEXT) as string;
	};
	export const Small_Title = (props?: FFontProps) => {
		return handleFFontTypes(props, defaultFFontTypes.SMALL_TITLE) as string;
	};
	export const Title = (props?: FFontProps) => {
		return handleFFontTypes(props, defaultFFontTypes.TITLE) as string;
	};
	export const Large_Title = (props?: FFontProps) => {
		return handleFFontTypes(props, defaultFFontTypes.LARGE_TITLE) as string;
	};
}
