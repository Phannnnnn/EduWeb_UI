import { Outlet } from "react-router-dom";
import ScrollToTop from "./component/common/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

export default App;
