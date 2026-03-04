import { Outlet } from "react-router";
import TopBar from './components/topBar/topBar';
import LeftBar from './components/leftBar/leftBar';
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
}

export default MainLayout;