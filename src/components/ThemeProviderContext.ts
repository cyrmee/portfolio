import { createContext } from "react";
import { ThemeProviderState, initialState } from "./ThemeProvider.types";

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);
