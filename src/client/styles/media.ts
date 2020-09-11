import { css } from "styled-components";

interface BreakPoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export const breakpoints: BreakPoints = {
  xs: 320,
  sm: 480,
  md: 600,
  lg: 801,
  xl: 1025,
};

type BreakpointKeys = keyof BreakPoints;
type Media = { [key in BreakpointKeys]: (css: string) => string };

export const media = Object.entries(breakpoints).reduce(
  (acc, [label, size]: [string, number]) => {
    return {
      ...acc,
      [label]: (breakpointCss: string) => css`
        @media (max-width: ${size}px) {
          ${breakpointCss}
        }
      `,
    };
  },
  {}
) as Media;
