import { ThemeContextInterface } from "@/types/types";
import { createContext } from "react";



export const ThemeContext = createContext<ThemeContextInterface | null>(null);
