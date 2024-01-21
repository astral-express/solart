// All of the svg icons below are taken from the https://reactsvgicons.com
import * as React from "react";

export const IconSpaceInvaders = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1.1em"
      width="1.1em"
      {...props}
    >
      <path d="M7 6H5V4h2v2m10 0h2V4h-2v2m6 6v6h-2v-4h-2v4h-2v-2H7v2H5v-4H3v4H1v-6h2v-2h2V8h2V6h2v2h6V6h2v2h2v2h2v2h2m-8-2v2h2v-2h-2m-8 2h2v-2H7v2m4 6H7v2h4v-2m6 0h-4v2h4v-2z" />
    </svg>
  );
};

export const IconWeatherSunny = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path d="M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3m0-7l2.39 3.42C13.65 5.15 12.84 5 12 5c-.84 0-1.65.15-2.39.42L12 2M3.34 7l4.16-.35A7.2 7.2 0 005.94 8.5c-.44.74-.69 1.5-.83 2.29L3.34 7m.02 10l1.76-3.77a7.131 7.131 0 002.38 4.14L3.36 17M20.65 7l-1.77 3.79a7.023 7.023 0 00-2.38-4.15l4.15.36m-.01 10l-4.14.36c.59-.51 1.12-1.14 1.54-1.86.42-.73.69-1.5.83-2.29L20.64 17M12 22l-2.41-3.44c.74.27 1.55.44 2.41.44.82 0 1.63-.17 2.37-.44L12 22z" />
    </svg>
  );
};

export const IconInputCursorMove = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M8 21v-2h3V5H8V3h8v2h-3v14h3v2H8zM18.05 7.05L23 12l-4.95 4.95-1.414-1.414L20.172 12l-3.536-3.536L18.05 7.05zm-12.1 0l1.414 1.414L3.828 12l3.536 3.536L5.95 16.95 1 12l4.95-4.95z" />
    </svg>
  );
};
