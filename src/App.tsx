import React, { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Button, Layout } from "antd";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { ReduxPage } from "./pages/ReduxPage";
import { ReduxSagaPage } from "./pages/ReduxSagaPage";
import { ReactRouterPage } from "./pages/RouterPage";
import { DebouncePage } from "./pages/DebouncePage";
import { TypeScriptPage } from "./pages/TsPage";
import Sider from "antd/lib/layout/Sider";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import { MenuList } from "./components/Menu";

export interface NavItem {
  title: string;
  component: React.ReactNode;
  path: string;
}

function App() {
  const navItems: NavItem[] = [
    {
      title: "Redux",
      path: "/redux",
      component: <ReduxPage />,
    },
    {
      title: "Redux Saga",
      path: "/saga",
      component: <ReduxSagaPage />,
    },
    {
      title: "React Router Page",
      path: "/react-router",
      component: <ReactRouterPage />,
    },
    {
      title: "Typescript Page",
      path: "/type-script",
      component: <TypeScriptPage />,
    },
    {
      title: "GraphQL",
      path: "/geaph-ql",
      component: <p>GraphQl</p>,
    },
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <Layout className="app-layout">
          <Sider>
            <MenuList menuItems={navItems} />
          </Sider>

          <Switch>
            {navItems.map(({ component, path, title }) => (
              <Route path={path} key={title}>
                <Layout>
                  <Header>{title}</Header>
                  <Content>{component}</Content>
                </Layout>
              </Route>
            ))}
          </Switch>
        </Layout>

        {/*   <Layout>





            <Content className="content-container">
              <main>
                <Switch>
                  {navItems.map(({ component, path, title }) => (
                    <Route path={path} key={title}>
                      <>
                        <Header>{title}</Header>
                        {component}
                      </>
                    </Route>
                  ))}
                </Switch>
              </main>
            </Content>


          </Layout>
        </Layout>
*/}
        {/*
        <nav>
          Menu Link
          <ul>
            {navItems.map(
              (item)=> ( <li key={item.title}>
              <Link to={item.path} >{item.title }</Link>
            </li>)
            )}
           
          </ul>
      </nav>*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
