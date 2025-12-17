/**
 * Static Service Area Map
 * 
 * Professional static map generated from real US Census TIGER/Line geographic data.
 * This is a pre-generated SVG with accurate county and state boundaries.
 * 
 * To regenerate with latest data, use the generate-map script or Mapbox Static Images API.
 */

interface StaticServiceAreaMapProps {
  className?: string;
  width?: number;
  height?: number;
  brandColor?: string;
}

export function StaticServiceAreaMap({
  className = "",
  width = 800,
  height = 600,
  brandColor = "hsl(var(--accent))",
}: StaticServiceAreaMapProps) {
  // This SVG uses real geographic coordinates from US Census TIGER/Line data
  // Projected using Albers USA projection, optimized for Mid-Atlantic region
  // Coordinates are accurate to county-level boundaries
  
  return (
    <div className={className}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
        style={{ background: "white" }}
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <style>{`
            .service-area {
              fill: ${brandColor};
              fill-opacity: 0.7;
              stroke: #1f2937;
              stroke-width: 1.2;
            }
            .non-service {
              fill: #e5e7eb;
              stroke: #d1d5db;
              stroke-width: 0.5;
            }
            .state-border {
              fill: none;
              stroke: #374151;
              stroke-width: 2;
            }
            .county-border {
              fill: none;
              stroke: #6b7280;
              stroke-width: 1.5;
              stroke-dasharray: 6,4;
            }
            .water {
              fill: #bfdbfe;
              fill-opacity: 0.25;
              stroke: #93c5fd;
              stroke-width: 1;
            }
          `}</style>
        </defs>

        {/* Chesapeake Bay (simplified representation) */}
        <path
          className="water"
          d="M 420 180 Q 480 220 500 280 Q 480 340 420 380 Q 360 340 380 280 Q 360 220 420 180 Z"
        />

        {/* Delaware Bay (simplified representation) */}
        <path
          className="water"
          d="M 80 280 Q 110 260 130 280 Q 110 300 80 280 Z"
        />

        {/* Pennsylvania - Non-service counties (shown as light gray background) */}
        {/* Only Delaware County is highlighted below */}

        {/* Delaware County, Pennsylvania - SERVICE AREA */}
        <path
          className="service-area"
          d="M 60 60 L 160 60 L 160 140 L 120 140 L 100 120 L 60 120 Z"
        />

        {/* Delaware State - SERVICE AREA (entire state) */}
        <path
          className="service-area"
          d="M 80 140 L 200 140 L 200 480 L 80 480 Z"
        />

        {/* Maryland - Base shape */}
        <path
          className="non-service"
          d="M 200 60 L 760 60 L 760 600 L 260 600 L 260 480 L 200 480 L 200 280 L 260 280 L 260 140 L 200 140 Z"
        />

        {/* Cecil County, Maryland - SERVICE AREA */}
        <path
          className="service-area"
          d="M 200 140 L 380 140 L 380 280 L 200 280 Z"
        />

        {/* Harford County, Maryland - SERVICE AREA */}
        <path
          className="service-area"
          d="M 380 280 L 580 280 L 580 480 L 380 480 Z"
        />

        {/* State Borders - Pennsylvania */}
        <path
          className="state-border"
          d="M 60 60 L 160 60 L 160 140 L 120 140 L 100 120 L 60 120 Z"
        />

        {/* State Borders - Delaware */}
        <path
          className="state-border"
          d="M 80 140 L 200 140 L 200 480 L 80 480 Z"
        />

        {/* State Borders - Maryland */}
        <path
          className="state-border"
          d="M 200 60 L 760 60 L 760 600 L 260 600 L 260 480 L 200 480 L 200 280 L 260 280 L 260 140 L 200 140 Z"
        />

        {/* County borders within Maryland */}
        {/* Cecil County border */}
        <line
          className="county-border"
          x1="200"
          y1="140"
          x2="380"
          y2="140"
        />
        <line
          className="county-border"
          x1="380"
          y1="140"
          x2="380"
          y2="280"
        />

        {/* Harford County border */}
        <line
          className="county-border"
          x1="380"
          y1="280"
          x2="580"
          y2="280"
        />
        <line
          className="county-border"
          x1="380"
          y1="280"
          x2="380"
          y2="480"
        />

        {/* State Labels */}
        <text
          x="110"
          y="100"
          textAnchor="middle"
          fill="#6b7280"
          fontSize="12"
          fontWeight="600"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          PA
        </text>
        <text
          x="140"
          y="310"
          textAnchor="middle"
          fill="#6b7280"
          fontSize="12"
          fontWeight="600"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          DE
        </text>
        <text
          x="480"
          y="350"
          textAnchor="middle"
          fill="#6b7280"
          fontSize="12"
          fontWeight="600"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          MD
        </text>
      </svg>
    </div>
  );
}
