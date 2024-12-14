function Logo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={104}
      height={104}
      fill="none"
      viewBox="0 0 104 104"
      {...props}
    >
      <mask
        id="a"
        width={104}
        height={104}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <path fill="#C4C4C4" d="M0 0H104V104H0z" />
      </mask>
      <g mask="url(#a)">
        <path fill="url(#b)" d="M-15-15H119V119H-15z" />
      </g>
      <defs>
        <pattern
          id="b"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#c" transform="scale(.00083)" />
        </pattern>
      </defs>
    </svg>
  );
}
export default Logo;
