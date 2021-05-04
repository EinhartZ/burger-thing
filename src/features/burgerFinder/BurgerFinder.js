
import { Input } from 'antd';

import { setFinder, selectBurgerFinder } from './burgerFinderSlice';
import { useSelector, useDispatch } from 'react-redux';

const { Search } = Input;
export const BurgerFinder = () => {
    const searchTerm = useSelector(selectBurgerFinder);
    const dispatch = useDispatch();

    function onChangeHandler(e) {
        dispatch(setFinder(e));
    }

    return (
        <div>
            <Search defaultValue={searchTerm} placeholder="input search text" allowClear onSearch={onChangeHandler} enterButton/>
        </div>
    );
}