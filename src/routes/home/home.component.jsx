import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';

const Home = () => {

    
  return ( 
        <div>
        <Outlet />      {/* It allows us to take advantage of nested routes when we have them  */}
            <Directory />
        </div>   
  );
};
export default Home;