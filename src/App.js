import { Route, useRoutes } from "react-router-dom";
import Routes from "./routes";
import TopBar from "./components/topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css'
function App() {
  const Router=useRoutes(Routes);
  return (
    <>
    <TopBar/>
    <div className="container">
    <Sidebar/>
    {Router}
    </div>
    </>
  );
}

export default App;
