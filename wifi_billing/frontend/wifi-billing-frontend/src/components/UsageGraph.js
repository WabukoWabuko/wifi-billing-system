import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

// A graph component to show data usage! I switched to using mermaid directly since @mermaid-js/mermaid-react wasn’t available. Let’s make it look awesome! – Me
const UsageGraph = ({ used, limit }) => {
  const chartRef = useRef(null);

  const mermaidCode = `
    graph TD
    A[Used: ${used} MB] --> B[Limit: ${limit} MB]
    A -->|Progress| C[${(used / limit * 100).toFixed(2)}%]
  `;

  useEffect(() => {
    // Initialize mermaid and render the chart. I’m so glad we got this working! – Me
    mermaid.initialize({ startOnLoad: true });
    if (chartRef.current) {
      mermaid.render('usageGraph', mermaidCode, (svgCode) => {
        chartRef.current.innerHTML = svgCode;
      });
    }
  }, [mermaidCode]);

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Data Usage</h5>
        <div ref={chartRef} id="usageGraph"></div>
      </div>
    </div>
  );
};

export default UsageGraph;
