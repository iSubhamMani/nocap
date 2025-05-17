import "../styles/floating.css";

const LandingCalendarSvg = () => {
  return (
    <div className="relative max-w-md mx-auto">
      <div className="floating-animation">
        <svg
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background elements */}
          <circle
            cx="250"
            cy="250"
            r="200"
            fill="url(#eventGradient)"
            fillOpacity="0.1"
          />
          <circle
            cx="250"
            cy="250"
            r="150"
            stroke="url(#neonStroke)"
            strokeWidth="2"
            strokeDasharray="10 5"
          />

          {/* Calendar base */}
          <rect
            x="150"
            y="120"
            width="200"
            height="220"
            rx="15"
            fill="#1a1a1a"
          />
          <rect
            x="150"
            y="120"
            width="200"
            height="220"
            rx="15"
            stroke="url(#neonStroke)"
            strokeWidth="1.5"
          />

          {/* Calendar header */}
          <rect
            x="150"
            y="120"
            width="200"
            height="40"
            rx="15"
            fill="url(#headerGradient)"
          />

          {/* Calendar days */}
          <circle
            cx="180"
            cy="190"
            r="15"
            fill="#2a2a2a"
            stroke="#ec4899"
            strokeWidth="1.5"
          />
          <circle cx="220" cy="190" r="15" fill="#2a2a2a" />
          <circle cx="260" cy="190" r="15" fill="#2a2a2a" />
          <circle cx="300" cy="190" r="15" fill="#2a2a2a" />

          <circle cx="180" cy="230" r="15" fill="#2a2a2a" />
          <circle cx="220" cy="230" r="15" fill="#2a2a2a" />
          <circle cx="260" cy="230" r="15" fill="url(#highlightGradient)" />
          <circle cx="300" cy="230" r="15" fill="#2a2a2a" />

          <circle cx="180" cy="270" r="15" fill="#2a2a2a" />
          <circle cx="220" cy="270" r="15" fill="#2a2a2a" />
          <circle cx="260" cy="270" r="15" fill="#2a2a2a" />
          <circle cx="300" cy="270" r="15" fill="#2a2a2a" />

          {/* Text elements */}
          <text
            x="181"
            y="193"
            fill="white"
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
          >
            15
          </text>
          <text
            x="221"
            y="193"
            fill="white"
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
          >
            16
          </text>
          <text
            x="260"
            y="193"
            fill="white"
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
          >
            17
          </text>
          <text
            x="301"
            y="193"
            fill="white"
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
          >
            18
          </text>

          <text
            x="181"
            y="233"
            fill="white"
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
          >
            19
          </text>
          <text
            x="221"
            y="233"
            fill="white"
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
          >
            20
          </text>
          <text
            x="260"
            y="233"
            fill="white"
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
          >
            21
          </text>
          <text
            x="301"
            y="233"
            fill="white"
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
          >
            22
          </text>

          <text
            x="181"
            y="273"
            fill="white"
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
          >
            23
          </text>
          <text
            x="221"
            y="273"
            fill="white"
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
          >
            24
          </text>
          <text
            x="260"
            y="273"
            fill="white"
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
          >
            25
          </text>
          <text
            x="301"
            y="273"
            fill="white"
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
          >
            26
          </text>

          {/* Decorative elements */}
          <circle
            cx="400"
            cy="150"
            r="30"
            fill="url(#decorGradient1)"
            fillOpacity="0.8"
          />
          <circle
            cx="100"
            cy="180"
            r="40"
            fill="url(#decorGradient2)"
            fillOpacity="0.8"
          />
          <circle
            cx="350"
            cy="350"
            r="35"
            fill="url(#decorGradient3)"
            fillOpacity="0.8"
          />

          {/* Event ticket */}
          <g transform="translate(320, 120) rotate(15)">
            <rect x="0" y="0" width="120" height="60" rx="10" fill="#2a2a2a" />
            <rect
              x="0"
              y="0"
              width="120"
              height="60"
              rx="10"
              stroke="url(#ticketGradient)"
              strokeWidth="1.5"
            />
            <circle cx="20" cy="30" r="5" fill="#ec4899" />
            <line
              x1="40"
              y1="15"
              x2="100"
              y2="15"
              stroke="white"
              strokeOpacity="0.5"
              strokeWidth="1.5"
            />
            <line
              x1="40"
              y1="30"
              x2="100"
              y2="30"
              stroke="white"
              strokeOpacity="0.5"
              strokeWidth="1.5"
            />
            <line
              x1="40"
              y1="45"
              x2="100"
              y2="45"
              stroke="white"
              strokeOpacity="0.5"
              strokeWidth="1.5"
            />
          </g>

          {/* People silhouettes */}
          <g transform="translate(120, 320)">
            <circle cx="0" cy="0" r="15" fill="#2a2a2a" />
            <path
              d="M-8 -5 L-5 -8 L0 -5 L5 -8 L8 -5 L5 0 L8 5 L5 8 L0 5 L-5 8 L-8 5 L-5 0 Z"
              fill="url(#neonStroke)"
            />
          </g>

          <g transform="translate(170, 350)">
            <circle cx="0" cy="0" r="18" fill="#2a2a2a" />
            <path
              d="M-10 -6 L-6 -10 L0 -6 L6 -10 L10 -6 L6 0 L10 6 L6 10 L0 6 L-6 10 L-10 6 L-6 0 Z"
              fill="url(#personGradient1)"
            />
          </g>

          <g transform="translate(220, 330)">
            <circle cx="0" cy="0" r="16" fill="#2a2a2a" />
            <path
              d="M-9 -5 L-5 -9 L0 -5 L5 -9 L9 -5 L5 0 L9 5 L5 9 L0 5 L-5 9 L-9 5 L-5 0 Z"
              fill="url(#personGradient2)"
            />
          </g>

          {/* Confetti elements */}
          <rect
            x="400"
            y="200"
            width="10"
            height="3"
            rx="1"
            fill="#ec4899"
            transform="rotate(30, 400, 200)"
          />
          <rect
            x="420"
            y="220"
            width="8"
            height="3"
            rx="1"
            fill="#8b5cf6"
            transform="rotate(-15, 420, 220)"
          />
          <rect
            x="390"
            y="250"
            width="12"
            height="3"
            rx="1"
            fill="#06b6d4"
            transform="rotate(45, 390, 250)"
          />
          <rect
            x="110"
            y="230"
            width="10"
            height="3"
            rx="1"
            fill="#ec4899"
            transform="rotate(-30, 110, 230)"
          />
          <rect
            x="130"
            y="260"
            width="8"
            height="3"
            rx="1"
            fill="#8b5cf6"
            transform="rotate(15, 130, 260)"
          />
          <rect
            x="90"
            y="290"
            width="12"
            height="3"
            rx="1"
            fill="#06b6d4"
            transform="rotate(-45, 90, 290)"
          />

          {/* Gradient definitions */}
          <defs>
            <linearGradient
              id="eventGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>

            <linearGradient id="neonStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>

            <linearGradient
              id="headerGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#7e22ce" />
            </linearGradient>

            <linearGradient
              id="highlightGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>

            <linearGradient
              id="ticketGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>

            <linearGradient
              id="decorGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>

            <linearGradient
              id="decorGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#db2777" />
            </linearGradient>

            <linearGradient
              id="decorGradient3"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>

            <linearGradient
              id="personGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>

            <linearGradient
              id="personGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default LandingCalendarSvg;
