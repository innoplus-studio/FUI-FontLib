import WebFont from "webfontloader";
import { handleFFontTypes } from "./func";

const FontFamilyList = ["Poppins", "Mulish", "Montserrat", "Nunito"];

export enum FFontFamily {
	Poppins = "Poppins",
	Mulish = "Mulish",
	Montserrat = "Montserrat",
	Nunito = "Nunito",
}
WebFont.load({
	google: {
		families: FontFamilyList,
	},
});

export interface FFontProps {
	fontWeight?: string | number;
	fontSize?: string | number;
	fontFamily?: FFontFamily | string;
	lineHeight?: string | number;
}

const defaultFFontTypes = {
	SMALL_TEXT: <FFontProps>{
		fontWeight: "600",
		fontSize: "0.625rem",
		fontFamily: FFontFamily.Poppins,
		lineHeight: "16px",
	},
	TEXT: <FFontProps>{
		fontWeight: "600",
		fontSize: "0.75rem",
		fontFamily: FFontFamily.Mulish,
		lineHeight: "18px",
	},
	LARGE_TEXT: <FFontProps>{
		fontWeight: "600",
		fontSize: "0.875rem",
		fontFamily: FFontFamily.Mulish,
		lineHeight: "20px",
	},
	SMALL_TITLE: <FFontProps>{
		fontWeight: "600",
		fontSize: "1rem",
		fontFamily: FFontFamily.Poppins,
		lineHeight: "24px",
	},
	TITLE: <FFontProps>{
		fontWeight: "600",
		fontSize: "1.5rem",
		fontFamily: FFontFamily.Poppins,
		lineHeight: "32px",
	},
	LARGE_TITLE: <FFontProps>{
		fontWeight: "600",
		fontSize: "2rem",
		fontFamily: FFontFamily.Poppins,
		lineHeight: "40px",
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
