import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

function CssSvg({itsMini = false, itsSemi = false}) {

  let width = "60"
  let height = "60"

  if(itsMini){
    width = "24";
    height = "24"
  }else if(itsSemi){
    width = "42";
    height = "42"
  }

  return (
    <>
    <svg
      data-tooltip-id="cssTooltip"
      data-tooltip-content="CSS"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 32 32"
    >
      <path fill="#1172B8" d="M6 28L4 3h24l-2 25-10 3-10-3z"></path>
      <path fill="#3AD" d="M26 5H16v24.5l8-2.5 2-22z"></path>
      <path
        fill="#fff"
        d="M19.5 17.5h-10L9 14l8-2.5H9l-.5-3H24l-.5 3.5-6.5 2.5h6L22 24l-6 2-6-2-.5-5h3l.5 2.5 3 1 3-1 .5-4z"
      ></path>
    </svg>
    <Tooltip id="cssTooltip"/>
    </>
  );
}

export default CssSvg;

