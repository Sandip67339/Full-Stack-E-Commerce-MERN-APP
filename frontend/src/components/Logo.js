import React from 'react';

const Logo = ({ w = "100", h = "50", className = "" }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <svg
        width={w}
        height={h}
        viewBox="0 0 370.16679528778167 155.08501865265873"
        className="max-w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs id="SvgjsDefs1029"></defs>
        <g
          id="SvgjsG1030"
          featurekey="symbolFeature-0"
          transform="matrix(1.0366270169158764,0,0,1.0366270169158764,-1.4512779225426833,25.1808949373991)"
          fill="#292929"
        >
          {/* SVG Paths */}
          <path
            d="M30.1,42.5l2.7-12.4c0-0.1,0-0.3-0.1-0.4c-0.1-0.1-0.2-0.2-0.4-0.2H10l-1.2-4.4c-0.1-0.4-0.5-0.7-0.9-0.7H2.4  
            c-0.5,0-1,0.4-1,1c0,0.5,0.4,1,1,1h4.7c0,0,5.6,20.3,5.7,20.4c-0.2,0.4-0.3,0.8-0.3,1.2c0,1.5,1.2,2.7,2.7,2.7 
            s2.7-1.2,2.7-2.7..."
          ></path>
          {/* You can add other SVG content here */}
        </g>
      </svg>
    </div>
  );
};

export default Logo;
