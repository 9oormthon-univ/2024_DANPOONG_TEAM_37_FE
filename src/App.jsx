import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  BrowserView,
  MobileView,
} from 'react-device-detect';

import Index from './index.jsx'

function App() {
  return (
    <div>
      <BrowserView>
        <h1>Browser View</h1>
      </BrowserView>
      <MobileView>{<Index />}</MobileView>
    </div>
  );
}

export default App;
