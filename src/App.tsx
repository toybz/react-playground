import React, {useState} from 'react';
import './App.css';
import { Button } from 'antd';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import {useMyAPI} from "./hooks/useMyApi";
import {CallBackPage} from "./pages/CallBackPage";
import { ListPage} from "./pages/ImprovedList";
import {DebouncePage} from "./pages/DebouncePage";

interface NavItem {
  name: string;
  component: React.ReactNode;
  path: string;
  children?: NavItem[]
}


export function ReduxPage() {
  
  return (<>
    <p>Redux Page</p>
    </>)
}


export function ReduxSagaPage() {
  
  return (<>
    <p>Saga Pages</p>
    </>)
}
export function ReactRouterPage() {
  
  return (<>
    <p>React Router page</p>
    </>)
}

export function TypeScriptPage() {
  
  return (<>
    <p> Typescript Page </p>
    </>)
}







function App() {

  const navItems: NavItem[] = [
    {
      name: 'Redux',
      path: '/redux',
      component: ReduxPage
    },
    {
      name: 'Redux Saga',
      path: '/saga',
      component: ReduxSagaPage
    },
    {
      name: 'React Router Page',
      path: '/react-router',
      component: ReactRouterPage
    },
    {
      name: "CallBack Hook",
      path: '/callback-hook',
      component: CallBackPage
    },
    {
      name: "Improved List",
      path: '/improved-list',
      component: CallBackPage
    },
    {
      name: "Debounce Page",
      path: '/debounce',
      component: CallBackPage
    }
  ]



  const items = [
      {
id: "01",
        title: "01"
  },
    {
      id: "02",
      title: "02"
    },
    {
      id: "03",
      title: "03"
    },



  ]


  return (
    <div className="App">


     {/* <Button type='primary' >Button</Button>
*/}



      <BrowserRouter>
      
      
        <nav>
          Menu Link
          <ul>
            {navItems.map(
              (item)=> ( <li key={item.name}>
              <Link to={item.path} >{item.name }</Link>
            </li>)
            )}
           
          </ul>
      </nav>
        

        <main>

          <p>Page Content</p>
     
          <Switch>

          {/*  {navItems.map(
              (item) => (
       <Route path={item.path}  render={()=> item.component} />


              )
            )}*/}

            <Route path='/callback-hook'>
              <CallBackPage />
            </Route>

            <Route path='/improved-list'>
              <ListPage />
            </Route>


            <Route path='/debounce'>
              <DebouncePage  />
            </Route>
          </Switch>



        </main>
      
      
      </BrowserRouter>



    </div>
  );
}

export default App;
