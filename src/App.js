
import './App.css';

import { AllBurgers } from './features/allBurgers/AllBurgers';
import { BurgerFinder } from './features/burgerFinder/BurgerFinder';
import { MyBurgers } from './features/myBurgers/MyBurgers';
import { ShoppingCart } from './features/shoppingCart/ShoppingCart';
import { AdminTable } from './components/AdminTable/AdminTable'

import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';


const { Header, Content, Footer } = Layout;

function App() {

  const [tab, setTab] = useState('admin')

  return (
    <div className="App">
      <Router>

      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
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

        <Footer style={{ textAlign: 'center' }}>©2021 Created Einhart</Footer>
      </Layout>
      </Router>
      
    </div>
  );
}

export default App;
