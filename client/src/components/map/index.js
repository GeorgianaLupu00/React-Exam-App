import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from 'react-tooltip';

import 'client/src/components/map/style.css';

import MapChart from "client/src/components/map/MapChart.js";

function App() {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
