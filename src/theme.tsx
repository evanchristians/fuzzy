import { theme as chakraTheme } from "@chakra-ui/core";
export const Theme = {
  ...chakraTheme,
  fonts: {
    mono: "'Fira Mono', monospace",
    heading: "'Fira Mono', monospace",
    body: "'Fira Mono', monospace",
  },
  colors: {
    ...chakraTheme.colors,
    _green: {
      100: "#16A085",
    },
    _blue: {
      100: "#0070f3",
    },
    _grey: {
      100: "#eeeeee",
    },
    _red: {
      10: "#FF474733",
      100: "#FF4747",
    },
  },
};
