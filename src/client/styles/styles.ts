import styled, { css } from "styled-components";

interface BreakPoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export const breakpoints: BreakPoints = {
  xs: 320,
  sm: 480,
  md: 600,
  lg: 801,
  xl: 1025,
  xxl: 1025,
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

export const LayeredBoxShadow = css`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12), 0 32px 32px rgba(0, 0, 0, 0.12),
    0 64px 64px rgba(0, 0, 0, 0.12), 0 128px 128px rgba(0, 0, 0, 0.12);
`;

export const TappxGradient = css`
  background: linear-gradient(
    45deg,
    rgba(250, 0, 67, 1) 0%,
    rgba(250, 0, 67, 1) 53%,
    rgba(255, 102, 0, 1) 100%
  );
`;

export const AppContainer = styled.div``;
