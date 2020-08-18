import React, { useEffect, useState } from "react";

const App = () => {
  const [now, setNow] = useState(0);
    useEffect(function() {
      const intervalId = setInterval(function() {
        setNow(now+1);
      }, 2000);
      return function(){clearInterval(intervalId)};
    }, [now]);

  const customData = require('./output.json');
  const tempData = customData.slice();

  const width = 1500;
  const height = 2400;
  const barHeight = 18;

  const drawGraph =()=> {
    tempData.sort((a, b) => b.population[now] - a.population[now]);
    const draw =  tempData.map((item, i) => {
      return (
        <g key={i} transform={`translate(0,${20 * (i + 1)})`}>
          <rect
            x="0"
            y={-barHeight / 2}
            width={item.population[now]/5}
            height={barHeight}
            fill={item.color}
          />
          <text x={item.population[now]/10} y="5" textAnchor="middle">
            {item.population[now]}
          </text>
          <line x1="-10" y1="0" x2="0" y2="0" stroke="black"/>
          <text x="-15" y="5" textAnchor="end">
            {item.name}
          </text>
        </g>
      );
    });
    return draw;
  }

  return (
    <svg width={width} height={height}>
      <g transform="translate(300,0)">
        <line x1="0" y1="0" x2="0" y2={48*(barHeight+2)} stroke="black" />
        <line x1="0" y1={48*(barHeight+2)} x2={width} y2={48*(barHeight+2)} stroke="black" />
        {drawGraph()}
      </g>
    </svg>
  );
  };

export default App;