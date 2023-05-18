import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

function GraphQlSvg({itsMini = false}) {

  let width = "60"
  let height = "60"

  if(itsMini){
    width = "24";
    height = "24"
  }

  return (
    <>
    <svg
      data-tooltip-id="GraphQLTooltip"
      data-tooltip-content="GraphQL"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 73 73"
    >
      <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1">
        <g
          fill="#FFF"
          stroke="#640B47"
          strokeWidth="2"
          transform="translate(2 2)"
        >
          <rect width="71" height="71" x="-1" y="-1" rx="14"></rect>
        </g>
        <g fill="#E535AB" transform="translate(13 11)">
          <path
            d="M12.805 -0.571H14.995V41.688H12.805z"
            transform="rotate(-149.999 13.9 20.559)"
          ></path>
          <path d="M1.953 35.386H44.213V37.576H1.953z"></path>
          <path
            d="M1.701 40.675H26.109V42.864999999999995H1.701z"
            transform="rotate(-149.999 13.905 41.77)"
          ></path>
          <path
            d="M20.064 8.867H44.472V11.057H20.064z"
            transform="rotate(-149.999 32.268 9.963)"
          ></path>
          <path
            d="M12.816 -2.25H15.006V22.158H12.816z"
            transform="rotate(-120.001 13.911 9.954)"
          ></path>
          <path
            d="M11.153 19.464H53.412V21.654H11.153z"
            transform="rotate(-120.001 32.283 20.56)"
          ></path>
          <path d="M3.628 13.656H5.818V38.065H3.628z"></path>
          <path d="M40.36 13.656H42.55V38.065H40.36z"></path>
          <path
            d="M31.311 31.144H33.224V52.372H31.311z"
            transform="rotate(-120.001 32.268 41.758)"
          ></path>
          <path d="M45.453 38.777c-1.267 2.203-4.09 2.955-6.294 1.689-2.203-1.267-2.955-4.09-1.688-6.294 1.266-2.203 4.09-2.955 6.293-1.689a4.592 4.592 0 011.689 6.294M8.695 17.548c-1.267 2.203-4.09 2.955-6.294 1.689C.198 17.97-.554 15.147.712 12.943c1.267-2.203 4.09-2.955 6.294-1.689a4.615 4.615 0 011.689 6.294M.726 38.777a4.615 4.615 0 011.688-6.294 4.615 4.615 0 016.294 1.69 4.615 4.615 0 01-1.689 6.293c-2.216 1.266-5.027.514-6.293-1.69M37.484 17.548a4.615 4.615 0 011.689-6.294 4.615 4.615 0 016.293 1.69 4.615 4.615 0 01-1.689 6.293c-2.203 1.266-5.027.514-6.293-1.69M23.09 51.694a4.6 4.6 0 01-4.605-4.605 4.6 4.6 0 014.604-4.605 4.6 4.6 0 014.605 4.605 4.609 4.609 0 01-4.605 4.605M23.09 9.236a4.6 4.6 0 01-4.605-4.605A4.6 4.6 0 0123.089.026a4.6 4.6 0 014.605 4.605 4.6 4.6 0 01-4.605 4.605"></path>
        </g>
      </g>
    </svg>

<Tooltip id="GraphQLTooltip"/>
</>
  );
}

export default GraphQlSvg;
