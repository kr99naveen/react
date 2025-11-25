import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './component/Home'
import Sidebar from './component/Sidebar';
import Header from './component/Header';
import Welcome from './component/Welcome'
import Counter from './component/Counter';
import Parent from './component/Parent';
import NameList from './component/NameList';
import Form from './component/Form';
import LifecycleA from './component/LifecycleA';
import Fragment from './component/Fragment';
import ParentComp from './component/ParentComp';
import FocusInput from './component/FocusInput';
import FRParentInput from './component/FRParentInput';
import PortalDemo from './component/PortalDemo';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import OrderSummary from './component/OrderSummary';
import NoMatch from './component/NoMatch';
import Products from './component/Products';
import FeaturedProduct from './component/FeaturedProduct';
import NewProduct from './component/NewProduct';

function App() {
  const [subject, setSubject] = useState("Overview");
  return (
    <>
      {/* <div className='components'>
        <div className='sidebar'>
          <Sidebar setSubject={setSubject} />
        </div>
        <div className='innerComponents'>
          <Header subject={subject} />
          <Home subject={subject} />
          <Welcome />
        </div>
      </div> */}
      {/* <Counter /> */}
      {/* <Parent /> */}
      {/* <NameList /> */}
      {/* <Form /> */}
      {/* <LifecycleA /> */}
      {/* <Fragment /> */}
      {/* <ParentComp /> */}
      {/* <FocusInput/> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<FocusInput />} />
        <Route path='/order-summary' element={<OrderSummary />} />
        <Route path='/products' element={<Products />}>
          {/* index route for rendering the particular page by default when parent route hit */}
          <Route index element={<FeaturedProduct />} />
          <Route path='featured' element={<FeaturedProduct />} />
          <Route path='new' element={<NewProduct />} />
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
