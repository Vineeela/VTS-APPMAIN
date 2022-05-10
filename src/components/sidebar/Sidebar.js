import React from 'react';
import { Stack } from 'react-bootstrap';
import { SidebarData } from './SidebarData';
import { useNavigate } from 'react-router-dom';
import { Container, Col } from 'react-bootstrap';
import './Sidebar.css';
const Sidebar = ({ children }) => {
  const navigate = useNavigate()
  var paths = null

  return (
    <div className='sidebar'>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <span onClick={() => {
                console.log(item.path)
                paths = item.path;
                navigate(paths)
              }
              }><div>{item.icon}&nbsp;&nbsp;&nbsp;{item.title}</div></span>
            </li>

          )
        })}
     
    </div>

  )
};
export default Sidebar;
