import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';

import { Home } from './pages';

function App() {
  return (
    <div >
      <BrowserView>
        <h1>Browser View</h1>
      </BrowserView>
      <MobileView>{<Home />}</MobileView>
    </div>
  );
}

export default App;
