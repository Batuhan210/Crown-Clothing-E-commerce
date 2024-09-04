import { useContext } from 'react';


import { CardContext } from '../../contexts/card.context';

import { ShoppingIcon, CardIconContainer, ItemCount } from './card-icon.styles';


const CardIcon = () => {
        const { isCardOpen, setIsCardOpen, cardCount } = useContext(CardContext);
        
        const toggleIsCardOpen = () => setIsCardOpen(!isCardOpen);      /* invert the value  */

        return (
            <CardIconContainer onClick={toggleIsCardOpen} >
                <ShoppingIcon className='shopping-icon'  />
                <ItemCount>{cardCount}</ItemCount>
        </CardIconContainer> 
    );
};

export default CardIcon;