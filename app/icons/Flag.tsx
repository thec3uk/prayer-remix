import { createIcon } from "@chakra-ui/react";

const Flag = createIcon({
  displayName: "Flag",
  viewBox: "0 0 15 15",
  path: (
    <>
      <line
        fill="currentColor"
        x1="1"
        y1="14.5"
        x2="0.999999"
        y2="0.5"
        stroke="black"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        fill="currentColor"
        d="M2 2.07495H14L9.74419 6.27495L14 10.475H2"
        stroke="black"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </>
  ),
});

export default Flag;
