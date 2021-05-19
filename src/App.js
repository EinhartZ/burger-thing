
import './App.css';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AllBurgers} from './features/allBurgers/AllBurgers';
import { BurgerFinder } from './features/burgerFinder/BurgerFinder';
import { MyBurgers } from './features/myBurgers/MyBurgers';
import { ShoppingCart } from './features/shoppingCart/ShoppingCart';
import { AdminTable } from './components/AdminTable/AdminTable'
import { loadData } from './features/allBurgers/allBurgersSlice';

import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';


const { Header, Content, Footer } = Layout;

function App() {
  const dispatch = useDispatch();

  const [tab, setTab] = useState('admin')

  const onFirstRender = () => {
    dispatch(loadData());
    console.log("loadData");
  }
  useEffect(onFirstRender, []);

  return (
    <div className="App">
      <Router>

      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal"  defaultSelectedKeys={['admin']}>
            <Menu.Item key="admin">
              Admin
              <Link to="/admin" />
            </Menu.Item>
            <Menu.Item key="shop">
              Shop
              <Link to="/shop" />
            </Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: '10px 50px' }}>
          <Switch>
          <Route path="/admin" render=
          {() =>{
            // setTab("admin")
            return <AdminTable/>
          }
          }/>


          <Route path="/shop" render=
            {() => {
              // setTab("shop")
              return (
                <>
                <BurgerFinder/>
                <AllBurgers/>
                <ShoppingCart/>
                </>
              )
            }
            }
          />
          </Switch>
        </Content>

        <Footer style={{ textAlign: 'center' }}>©2021 Created by Einhart</Footer>
      </Layout>
      </Router>
      
    </div>
  );
}

export default App;
