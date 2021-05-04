import { Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectMyBurgers } from './myBurgersSlice';
import { removeBurger as removeFromMy } from './myBurgersSlice';
import { addBurger as addToAll } from '../allBurgers/allBurgersSlice';
import BurgerCard from '../../components/BurgerCard/BurgerCard';


export const MyBurgers = () => {
    const myBurgers = useSelector(selectMyBurgers);
    const dispatch = useDispatch();

    const onRemoveOrderHandler = (burger) => {
        dispatch(removeFromMy(burger));
        dispatch(addToAll(burger));
    }

    return (
        <>
            <Divider>My Order</Divider>
            <div className="burgers-container">
            {myBurgers.map(createBurgerComponent)}
            </div>
        </>
    );

    function orderHandler() {
        // console.log(myBurgers);
    }

    function createBurgerComponent(burger) {
        return (
            <div key={burger.id}>
                <BurgerCard burger={burger} onClickHandler={() => onRemoveOrderHandler(burger)}/>
            </div>
        );
    }
}