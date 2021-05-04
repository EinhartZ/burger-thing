import { Divider, Row, Col } from 'antd';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadData, removeBurger as removeFromAll, selectAllBurgersFiltered } from './allBurgersSlice';

import BurgerCard from '../../components/BurgerCard/BurgerCard';
import { addItem as addToCart } from '../shoppingCart/shoppingCartSlice';

export const AllBurgers = () => {
    const allBurgers = useSelector(selectAllBurgersFiltered);
    const dispatch = useDispatch();

    const onFirstRender = () => {
        dispatch(loadData());
        console.log("loadData");
    }
    useEffect(onFirstRender, []);
    
    const onAddOrderHandler = (burger) => {
        // dispatch(removeFromAll(burger));
        dispatch(addToCart(burger));
    }

    return (
        <>
             <Divider>Menu</Divider>
            <div className="burgers-container">
            
            {allBurgers.map(burger => (
                
                <div key={burger.id}>
                <BurgerCard burger={burger} onClickHandler={() => onAddOrderHandler(burger)}/>
                
                </div>
                
            ))}
            </div>
            
        </>
    );
}