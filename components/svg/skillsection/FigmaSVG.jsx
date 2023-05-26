import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

function FigmaSVG() {
  return (
    <>
    <svg
      data-tooltip-id="FigmaDesign"
      data-tooltip-content="Figma Design"
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        fill="#1ABCFE"
        fillRule="evenodd"
        d="M16 16a4 4 0 118 0 4 4 0 01-8 0z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#0ACF83"
        fillRule="evenodd"
        d="M8 24a4 4 0 014-4h4v4a4 4 0 01-8 0z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#FF7262"
        fillRule="evenodd"
        d="M16 4v8h4a4 4 0 000-8h-4z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#F24E1E"
        fillRule="evenodd"
        d="M8 8a4 4 0 004 4h4V4h-4a4 4 0 00-4 4z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#A259FF"
        fillRule="evenodd"
        d="M8 16a4 4 0 004 4h4v-8h-4a4 4 0 00-4 4z"
        clipRule="evenodd"
      ></path>
    </svg>

    <Tooltip id="FigmaDesign"/>
    </>
  );
}

export default FigmaSVG;
