import { useContext } from 'react';
import { CardContext } from '../../contexts/card.context';

import { useNavigate } from 'react-router-dom';


import Button from '../button/button.component';

import '../card-item/card-item.component';
import CardItem from '../card-item/card-item.component';

import { 
    CardDropdownContainer,
    EmptyMessage,
    CardItems
 } from './card-dropdown.styles';



const CardDropdown = () => {
    const { cardItems } = useContext(CardContext);
    const navigate = useNavigate();

    /* It will route the checkout page to us  */
    const goToCheckoutHandler = () => {
        navigate('/checkout');
    };


    return (
        <CardDropdownContainer>
            <CardItems>

            {cardItems.length ? (cardItems.map((item) => (
                    <CardItem key={item.id} cardItem={item} />
                ))) : (
                    <EmptyMessage>Your card is empty</EmptyMessage>
                )}
        </CardItems>
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CardDropdownContainer>
    );    
};

export default CardDropdown;