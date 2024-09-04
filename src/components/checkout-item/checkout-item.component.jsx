import { useContext } from 'react';
import { CardContext } from '../../contexts/card.context';

import './checkout-item.styles.scss';


const CheckOutItem = ({ cardItem }) => {
    const { name, imageUrl, price, quantity } = cardItem;
    
    const { clearItemFromCard, addItemToCard, removeItemToCard } = useContext(CardContext);

    /* Optimization */
    const clearItemHandler = () => clearItemFromCard(cardItem);
    const addItemHandler = () => addItemToCard(cardItem);
    const removeItemHandler = () => removeItemToCard(cardItem);


    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={ removeItemHandler }>
                    &#10094;
                </div>
              <span className='value'>{quantity}</span>
                <div className='arrow' onClick={ addItemHandler }>
                &#10095;
                </div>
                </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}>
                &#10005;
            </div>
        </div>
    );
};

export default CheckOutItem;