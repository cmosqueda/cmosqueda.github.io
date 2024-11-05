import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      {/* wrap all content inside theme provider to apply dynamic theme styles*/}

      {/* wrap all content around browser router for routing */}
      <BrowserRouter>
        {/* navigation bar kay mao ni first component na dapat ma render */}
        <Navbar></Navbar>

        {/* importing all app routes */}
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </>
  );
}

export default App;
