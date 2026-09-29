// Three agents in a loop: a signal travels the edges and each node pulses as it arrives.
export default function AgentGlyph({ size = 24, animated = true, className = "" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      className={`agent-glyph ${animated ? "is-animated" : ""} ${className}`}
      aria-hidden="true"
    >
      <path d="M9 22 L16 9 L23 22 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" opacity="0.3" />
      <path
        className="agent-glyph-pulse"
        d="M9 22 L16 9 L23 22 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="7 36.5"
      />
      <circle className="agent-glyph-node agent-glyph-node--a" cx="9" cy="22" r="3.3" fill="currentColor" />
      <circle className="agent-glyph-node agent-glyph-node--b" cx="16" cy="9" r="3.3" fill="currentColor" />
      <circle className="agent-glyph-node agent-glyph-node--c" cx="23" cy="22" r="3.3" fill="currentColor" />
    </svg>
  );
}
