import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

function FastapiSVG() {
  return (
    <>
    <svg
      data-tooltip-id="fastapi"
      data-tooltip-content="FastApi"
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      fill="#009103"
      stroke="#009103"
      viewBox="0 0 24 24"
    >
      <path d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.626 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z"></path>
    </svg>

    <Tooltip id="fastapi"/>
    </>
  );
}

export default FastapiSVG;
