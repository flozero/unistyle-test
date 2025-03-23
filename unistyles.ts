import { StyleSheet } from 'react-native-unistyles'

const lightTheme = {
    colors: {
        base100: "#ffffff",      // White
        base200: "#f7f7f7",      // Very light gray
        base300: "#eaeaea",      // Light gray
        baseContent: "#333333",  // Dark gray
        primary: "#90d6e0",      // Light blue
        primaryContent: "#307280", // Darker blue
        secondary: "#91aa9f",     // Sage green
        secondaryContent: "#3e5b4e", // Darker green
        accent: "#000000",        // Black
        accentContent: "#ffffff", // White
        neutral: "#5e5e5e",       // Medium gray
        neutralContent: "#eaeaea", // Light gray
        info: "#7ba2e7",          // Light blue
        infoContent: "#3352a0",   // Darker blue
        success: "#83d3a9",       // Light green
        successContent: "#2e6a47", // Darker green
        warning: "#f0c66f",       // Yellow/amber
        warningContent: "#9b6c2e", // Brown
        error: "#e06b68",         // Light red
        errorContent: "#982f2a"   // Dark red
    },
    radius: {
        selector: 16,
        field: 8,
        box: 16,
    },
    size: {
        selector: 4,
        field: 2
    },
    border: 1,
    noise: 0
}

const appThemes = {
    light: lightTheme
}

const breakpoints = {
    xs: 0,
    sm: 300,
    md: 500,
    lg: 800,
    xl: 1200
}

type AppBreakpoints = typeof breakpoints
type AppThemes = typeof appThemes

declare module 'react-native-unistyles' {
    export interface UnistylesThemes extends AppThemes {}
    export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
    settings: {
        initialTheme: 'light',
    },
    breakpoints,
    themes: appThemes
})