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
    </>
  );
}

export default App;
