import WebFont from "webfontloader";
WebFont.load({
    google: {
        families: ["Poppins", "Mulish"],
    },
});
export var FFontTypes;
(function (FFontTypes) {
    FFontTypes["Small_Text"] = "600 0.625rem/1rem Mulish";
    FFontTypes["Text"] = "600 0.75rem/1.125rem Mulish";
    FFontTypes["Large_Text"] = "600 0.875rem/1.25rem Mulish";
    FFontTypes["Small_Title"] = "600 1rem/1.5rem Poppins";
    FFontTypes["Title"] = "600 1.5rem/2rem Poppins";
    FFontTypes["Large_Title"] = "600 2rem/2.5rem Poppins";
})(FFontTypes || (FFontTypes = {}));
;
