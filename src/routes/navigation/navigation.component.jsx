import { Fragment, useContext } from 'react';                     
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrownLogo} from '../../assets/crown.svg';

import { UserContext } from '../../contexts/user-context';
import { CardContext } from '../../contexts/card.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import CardIcon from '../../components/card-icon/card-icon.component'; 
import CardDropdown from '../../components/card-dropdown/card-dropdown.component';

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';



const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCardOpen } = useContext(CardContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrownLogo className='logo' />
            </LogoContainer>                                                 
                <NavLinks>
             <NavLink to='/shop'>
                 SHOP
             </NavLink>

            { /* show the sign out if there is a user  */ }
             { currentUser ? (
                  <NavLink as='span' onClick={signOutUser}>
                     SIGN OUT 
                     </NavLink> 

                  /* show the sign in if there is no a user  */
               ) : ( 
                  <NavLink to='/auth'>
                      SIGN IN
                  </NavLink>
              )}
              <CardIcon />
            </NavLinks>
             { isCardOpen && <CardDropdown /> }
        
        </NavigationContainer>
        <Outlet />
    </Fragment>
      
    );
};
export default Navigation;