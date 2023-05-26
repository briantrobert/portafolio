import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

function FramerMotion({itsMini = false, itsSemi = false}) {

  let width = "60"
  let height = "60"

  if(itsMini){
    width = "24";
    height = "24"
  }else if(itsSemi){
    width = "40";
    height = "40"
  }

  return (
    <>
    <svg
      data-tooltip-id="FramerMotionTooltip"
      data-tooltip-content="Framer-Motion"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="3.7 3.7 43.6 43.6"
    >
      <path
        fill="#59529d"
        d="M47.3 3.7v21.8L36.4 36.4 25.5 47.3 14.6 36.4l10.9-10.9v.1-.1z"
      ></path>
      <path fill="#5271b4" d="M47.3 25.5v21.8L36.4 36.4z"></path>
      <path
        fill="#bb4b96"
        d="M25.5 25.5L14.6 36.4 3.7 47.3V3.7l10.9 10.9z"
      ></path>
    </svg>

<Tooltip id="FramerMotionTooltip"/>
</>
  );
}

export default FramerMotion;
