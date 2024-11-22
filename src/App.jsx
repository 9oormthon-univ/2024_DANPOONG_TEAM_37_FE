import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import { BrowserView, MobileView } from 'react-device-detect';

import Index from './index.jsx';

function App() {
  return (
    <Router>  
      <div>
        <BrowserView>
          <Index />
        </BrowserView>
        <MobileView>
          <Index />
        </MobileView>
      </div>
    </Router>
  );
}

export default App;
