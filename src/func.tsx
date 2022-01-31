import { FFontProps } from "./types";

export const handleFFontTypes = (
	props?: FFontProps,
	defaultProps?: FFontProps
) => {
	return (
		`${
			props?.fontWeight
				? typeof props?.fontWeight === "number"
					? props?.fontWeight.toString()
					: props?.fontWeight
				: defaultProps?.fontWeight
		}` +
		" " +
		`${
			props?.fontSize
				? typeof props?.fontSize === "number"
					? props?.fontSize / 16 + "rem"
					: props?.fontSize
				: defaultProps?.fontSize
		}` +
		"/" +
		`${
			props?.lineHeight
				? typeof props?.lineHeight === "number"
					? props?.lineHeight + "px"
					: props?.lineHeight
				: defaultProps?.lineHeight
		}` +
		" " +
		`${props?.fontFamily ? props?.fontFamily : defaultProps?.fontFamily}`
	);
};
