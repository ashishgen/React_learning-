
import './App.css';
import UserGreeting from './components/UserGreeting';
import Greet  from './components/compo2';
import React, { Component} from 'react';
import  Welcome  from "./components/class_compo1"
import Hello from './components/with_jsx_or_without_jsx'; 
import Fred from './components/props';
import Dev from './components/props';
import Message from './components/message';
import Counter from './components/Counter';
import Boss from './components/destructured';
import ClassClick from './components/ClassClick';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import Childcomponent from './components/childcomponent';
import Parentcomponent from './components/parentcomponent';
import NameList from './components/NameList';
import HomeList from './components/HomeList';
import Stylesheets from './components/Stylesheets';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';

import Updating_Lifecycle_MethodA from './components/Updating_Lifecycle_MethodA'
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
// import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
// import FRParentInput from './components/FRParentInput';

class App extends Component {
  render() {
    return (

      <div className='App'>
        <FRParentInput />
        {/* <FocusInput /> */}
        {/* < RefsDemo /> */}
        {/* <ParentComp /> */}
        {/* <PureComp /> */}
        {/* <Table /> */}
        {/* <FragmentDemo /> */}
        {/* <Updating_Lifecycle_MethodA /> */}
        {/* <LifecycleA /> */}
        {/* <Form /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>

        <Inline />
        <Stylesheets primary={true} /> */}

         {/* <HomeList />
            // <NameList />
       */}
        {/* <UserGreeting /> */}
        {/* <Childcomponent /> */}
        {/* <Parentcomponent /> */}
        {/* <EventBind /> */}
        {/* <ClassClick />
        <FunctionClick /> */}

        {/* <Boss name="Smart" heroname="Girl"></Boss> */}
        {/* <Counter /> */}
      {/* <Message /> */}
        {/* <Dev name="Aksat" heroname="deepa">
          <p>Hello you make my day</p>
        </Dev>

        <Dev name="dara" heroname="rohan">
          <button>Action</button>
        </Dev>
        <Dev name="lara" heroname="sohan"  /> */}
        

      </div>
    );
  }
}
export default App;
