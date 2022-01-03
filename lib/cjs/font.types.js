"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FFontTypes = void 0;
var webfontloader_1 = __importDefault(require("webfontloader"));
webfontloader_1.default.load({
    google: {
        families: ["Poppins", "Mulish"],
    },
});
var FFontTypes;
(function (FFontTypes) {
    FFontTypes["Small_Text"] = "600 0.625rem/1rem Mulish";
    FFontTypes["Text"] = "600 0.75rem/1.125rem Mulish";
    FFontTypes["Large_Text"] = "600 0.875rem/1.25rem Mulish";
    FFontTypes["Small_Title"] = "600 1rem/1.5rem Poppins";
    FFontTypes["Title"] = "600 1.5rem/2rem Poppins";
    FFontTypes["Large_Title"] = "600 2rem/2.5rem Poppins";
})(FFontTypes = exports.FFontTypes || (exports.FFontTypes = {}));
;
