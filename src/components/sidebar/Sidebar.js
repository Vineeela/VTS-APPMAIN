import React from 'react';
import { SidebarData } from './SidebarData';
import {Link ,useNavigate} from 'react-router-dom';
import './Sidebar.css';
const Sidebar = ({children}) => {
const navigate = useNavigate()
const routePageHandler=()=>{
    console.log(SidebarData)

}
var paths = null

    return (
      <div className='container'>
        <
          div  className='sidebar'>
      {SidebarData.map((item, index) => {
        return (
          <li key={index} className={item.cName}>
              <span  onClick={()=>{console.log(item.path) 
            paths = item.path;
            navigate(paths)}
            }>{item.icon}&nbsp;&nbsp;&nbsp;{item.title}</span>
              
            
          </li>
         
        )
      })}
      
    </div>
    <main>{children}</main>
    </div>
    )
};
export default Sidebar;
