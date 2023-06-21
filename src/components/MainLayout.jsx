import { Outlet } from 'react-router-dom';
import Navs from './Navs';
import AppTitle from './AppTitle';

const MainLayout = () => {
  return (
    <div>
      {/* <AppTitle />    pass props just like arguments in function */}
      <AppTitle
        title="BOX OFFICE"
        subtitle="Are you looking for a movie or an actor?"
      />
      <Navs />

      <Outlet />
    </div>
  );
};
export default MainLayout;
