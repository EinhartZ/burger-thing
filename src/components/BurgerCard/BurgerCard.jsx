import { Card } from 'antd';
import burgerLogo from './burger.png';
const { Meta } = Card;


export default function BurgerCard({burger, onClickHandler}) {

    return (
    <div key={burger.id} className='burgerccc'>
    <Card
        hoverable={burger.active}
        onClick={onClickHandler}
        style={{ width: 240 }}
        cover={<img alt="example" src={burgerLogo}/>}

    >
        <Meta title={`${burger.name}: ${burger.price} $`} description="www.burger.com" />
    </Card>
    </div>
    );

}