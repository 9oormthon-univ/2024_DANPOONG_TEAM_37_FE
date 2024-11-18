import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

const Home = () => <h1>Home</h1>;

function App() {
  return (
    <div style={{ margin: "30px" }}>
      <BrowserView>
        <h1>Browser View</h1>
      </BrowserView>
      <MobileView>
        <Home />
      </MobileView>
    </div>
  )
};
export default App;