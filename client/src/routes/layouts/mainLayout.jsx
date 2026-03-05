import { Outlet } from "react-router";
import TopBar from "../../components/topBar/topBar.jsx";
import LeftBar from "../../components/leftBar/leftBar.jsx";
import "./mainLayout.css";

const MainLayout = () => {
  return (
      <div className='mainLayout'>
        <LeftBar/>
        <div className='content'>
          <TopBar/>
          <Outlet/>
        </div>
      </div>
    )
};

export default MainLayout;