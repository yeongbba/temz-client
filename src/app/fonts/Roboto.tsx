import { Roboto } from "next/font/google";

const bold = Roboto({
    weight: "700",
    display: "fallback",
    subsets: ["latin"],
    style: "normal",
    variable: "--roboto-bold",
    fallback: ["system-ui"],
});
const medium = Roboto({
    weight: "500",
    display: "fallback",
    subsets: ["latin"],
    style: "normal",
    variable: "--roboto-medium",
    fallback: ["system-ui"],
});
export {
    bold as robotoBold,
    medium as robotoMedium,
}