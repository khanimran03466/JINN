import * as React from "react";

const WhyDjinn = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={638}
    height={638}
    viewBox="0 0 638 638"
    fill="none"
    {...props}
  >
    <style>
      {`
        @keyframes colorCycle {
          0%, 100% { fill: #79DCF3; }
          33% { fill: #0042BC; }
          66% { fill: #FF85C0; }
        }
        @keyframes colorCycleAlt {
          0%, 100% { fill: #0042BC; }
          33% { fill: #FF85C0; }
          66% { fill: #79DCF3; }
        }
        .animate-color-1 { animation: colorCycle 8s infinite ease-in-out; }
        .animate-color-2 { animation: colorCycleAlt 8s infinite ease-in-out; }
      `}
    </style>

    <g filter="url(#filter0_f_24_307)">
      <mask
        id="mask0_24_307"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={191} y={208} width={256} height={256}
      >
        <circle cx={319.395} cy={336.288} r={127.434} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_24_307)">
        <g filter="url(#filter1_f_24_307)">
          <circle cx={393.016} cy={377.388} r={114.772} fill="#79DCF3" className="animate-color-1" />
        </g>
        <circle cx={447.338} cy={285.029} r={121.307} fill="#0042BC" className="animate-color-2" />
        <circle cx={313.422} cy={274.563} r={116.814} fill="#79DCF3" className="animate-color-1" />
        <g filter="url(#filter2_f_24_307)">
          <circle cx={206.409} cy={404.498} r={121.307} fill="#0042BC" className="animate-color-2" />
        </g>
      </g>
    </g>

    {/* This is the group using filter3 */}
    <g filter="url(#filter3_f_24_307)">
      <mask
        id="mask1_24_307"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={153} y={153} width={331} height={331}
      >
        <circle cx={318.828} cy={318.828} r={165} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask1_24_307)">
        <g filter="url(#filter4_f_24_307)">
          <circle cx={414.154} cy={372.043} r={148.606} fill="#79DCF3" className="animate-color-1" />
        </g>
        <circle cx={484.49} cy={252.458} r={157.067} fill="#0042BC" className="animate-color-2" />
        <circle cx={311.095} cy={238.906} r={151.25} fill="#79DCF3" className="animate-color-1" />
        <g filter="url(#filter5_f_24_307)">
          <circle cx={172.537} cy={407.145} r={157.067} fill="#0042BC" className="animate-color-2" />
        </g>
      </g>
    </g>

    <path
      d="M299.494 352.561C262.416 352.561 260.184 343.462 260.184 320.285H284.929C284.929 327.411 286.825 331.665 299.494 331.665H337.566C350.221 331.665 352.803 325.304 352.803 318.272V306.018H338.588V285.123H377.549V318.272C377.549 341.355 372.506 352.561 337.566 352.561H299.494Z"
      fill="#131313"
    />
    <path
      d="M287.657 293.523V297.791C287.657 302.447 283.878 306.219 279.212 306.219H267.875C263.208 306.219 259.429 302.447 259.429 297.791V293.523C259.429 288.866 263.208 285.095 267.875 285.095H279.212C283.878 285.095 287.657 288.866 287.657 293.523Z"
      fill="#131313"
    />
    
    <defs>
      <filter id="filter0_f_24_307" x={73.1556} y={90.0494} width={492.478} height={492.478} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation={59.4027} result="effect1_foregroundBlur_24_307" />
      </filter>
      {/* ... keeping your other filter definitions exactly as they were ... */}
      <filter id="filter3_f_24_307" x={0} y={0} width={637.656} height={637.656} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation={76.9141} result="effect1_foregroundBlur_24_307" />
      </filter>
      {/* ... (rest of filters) ... */}
    </defs>
  </svg>
);

export default WhyDjinn;