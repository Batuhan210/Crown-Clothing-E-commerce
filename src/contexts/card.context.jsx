import { createContext, useState, useEffect } from "react";


/* Increment  */
const addCardItem = (cardItems, productToAdd) => {
    /* Find if cardItems contains productToAdd, return boolean */
    const existingCardItem = cardItems.find((cardItem) => cardItem.id === productToAdd.id);

    /* If found, increment quantity
    If an existing one is found for the product that we're trying to add in, then 
    we just want to increase the quantity. Otherwise we just want to keep it the same.  */
    if (existingCardItem) {
        return cardItems.map((cardItem) =>
            cardItem.id === productToAdd.id ?
                { ...cardItem, quantity: cardItem.quantity + 1 }
                : cardItem
        )
    };
    /* return new array with modified cardItems / new card item  */
    return [...cardItems, { ...productToAdd, quantity: 1 }];
};


/* Decrement  */
const removeCardItem = (cardItems, cardItemToRemove) => {

    /* Find the card item to remove  */
    const existingCardItem = cardItems.find((cardItem) => cardItem.id === cardItemToRemove.id);

    /* If quantity is equal to 1, if it is remove that item from the card */
    if (existingCardItem.quantity === 1) {
        return cardItems.filter((cardItem) => cardItem.id !== cardItemToRemove.id);
    }

    /* return back carditems with matching card item with reduced quantity */
    return cardItems.map((cardItem) =>
        cardItem.id === cardItemToRemove.id
            ? { ...cardItem, quantity: cardItem.quantity - 1 }
            : cardItem
    );
};

/* clear from the card  */
const clearCardItem = (cardItems, cardItemToClear) => cardItems.filter((cardItem) => cardItem.id !== cardItemToClear.id);



export const CardContext = createContext({
    isCardOpen: false,
    setIsCardOpen: () => {},
    cardItems: [],
    addItemToCard: () => {},
    removeCardItem: () => {},
    clearItemFromCard: () => {},
    cardCount: 0,
    cardTotal: 0 
        });


export const CardProvider = ({ children }) => {
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [cardItems, setCardItems] = useState([]);
    const [cardCount, setCardCount] = useState(0);
    const [cardTotal, setCardTotal] = useState(0);



    useEffect(() => {
        const newCardCount = cardItems.reduce((total, cardItem) => total + cardItem.quantity, 0)
        setCardCount(newCardCount);
    }, [cardItems])



/* Card Total  */
    useEffect(() => {
        const newCardTotal = cardItems.reduce((total, cardItem) => total + cardItem.quantity * cardItem.price, 0)
        setCardTotal(newCardTotal);
    }, [cardItems])




    const addItemToCard = (productToAdd) => {
        setCardItems(addCardItem(cardItems, productToAdd));
    };

    const removeItemToCard = (cardItemToRemove) => {
        setCardItems(removeCardItem(cardItems, cardItemToRemove));
    };

    const clearItemFromCard = (cardItemToClear) => {
        setCardItems(clearCardItem(cardItems, cardItemToClear));
    };


    const value = {
        isCardOpen,
        setIsCardOpen,
        addItemToCard,
        removeItemToCard,
        clearItemFromCard,
        cardItems,
        cardCount,
        cardTotal,
        };

return <CardContext.Provider value={value}>{children}</CardContext.Provider>
};