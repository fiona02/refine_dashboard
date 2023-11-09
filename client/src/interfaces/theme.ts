import "@refinedev/mui";
export interface CustomTheme {
    palette: {
        primary: {
            main: string;
            light: string;
            dark: string;
            contrastText: string;
        };
        secondary: {
            main: string;
            light: string;
            dark: string;
            contrastText: string;
        };
    };
}
import { Theme as MuiTheme, ThemeOptions as MuiThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface Theme extends MuiTheme, CustomTheme {}
    interface ThemeOptions extends MuiThemeOptions, CustomTheme {}
}
/*eslint-enable */