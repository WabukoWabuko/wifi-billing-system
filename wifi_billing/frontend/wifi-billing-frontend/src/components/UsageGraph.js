import React, { useEffect, useRef } from 'react';
import Mermaid from '@mermaid-js/mermaid-react';

// A graph component to show data usage! I’m using Mermaid.js to make it look awesome! – Me
const UsageGraph = ({ used, limit }) => {
  const chartRef = useRef(null);

  const mermaidCode = `
    graph TD
    A[Used: ${used} MB] --> B[Limit: ${limit} MB]
    A -->|Progress| C[${(used / limit * 100).toFixed(2)}%]
  `;

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Data Usage</h5>
        <Mermaid chart={mermaidCode} />
      </div>
    </div>
  );
};

export default UsageGraph;
