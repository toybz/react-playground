import React from "react";
import { Menu } from 'antd';
import { Link } from 'react-router-dom';


export interface NavItem {
    title: string;
    component: React.ReactNode;
    path: string;
}

type MenuItemProps = {
    menuItems: NavItem[]
}


export function MenuList({menuItems}: MenuItemProps){


    return(

        <Menu mode="vertical" style={{height: 'inherit'}} >
            {menuItems.map((item)=>(
                <Menu.Item key={item.title}>
                    <Link to={item.path}>
                        {item.title}
                    </Link>

                </Menu.Item>
            ))}


        </Menu>

    )
}