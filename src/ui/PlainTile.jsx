function PlainTile() {
  return (
    <svg className="h-20 w-20" viewBox="-75 -75 150 150" overflow="visible">
      <polygon
        points="-98.1495,0 -49.07475,-85 49.07475,-85 98.1495,0 49.07475,85 -49.07475,85"
        fill="#fcefde"
        strokeLinecap="round"
        strokeLinejoin="bevel"
        strokeWidth="1"
        stroke="#fcefde"
      ></polygon>
      <path
        d="M 43.30125 75 L -43.30125 75"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="#110a0c"
      />
      <path
        d="M -43.30125 75 L -86.6025 0"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="#110a0c"
      />
      <path
        d="M -86.6025 0 L -43.30125 -75"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="#110a0c"
      />
      <path
        d="M -43.30125 -75 L 43.30125 -75"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="#110a0c"
      />{" "}
      <path
        d="M 43.30125 -75 L 86.6025 0"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="#110a0c"
      />{" "}
      <path
        d="M 86.6025 0 L 43.30125 75"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="#110a0c"
      />
      <text
        fontFamily="sans-serif"
        fill="#110a0c"
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="bevel"
        dominantBaseline="baseline"
        textAnchor="end"
        fontSize="12"
        fontWeight="normal"
        x="40"
        y="60"
      >
        0
      </text>
    </svg>
  );
}

export default PlainTile;
