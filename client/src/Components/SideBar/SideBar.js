import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideBar.module.css';

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      value: 'dashboard'
    },
    {
      path: "/analytics",
      name: "Analytics",
      value: 'analytics'
    },
    {
      path: "/create",
      name: 'Create Quiz',
      value: 'createquiz'
    },
  ];

  const [active, setActive] = useState('dashboard');

  const activeStyle = {
    'box-shadow': '0px 0px 11px 0px rgba(0,0,0, 0.2)',
    'padding': '10px',
     'border-radius': '20px'
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.top_section}>
          <h1 className={styles.logo}>QUIZZIE</h1>
          <div className={styles.bars}></div>
        </div>
        <div className={styles.center_links}>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={styles.link}
              activeClassName={styles.activeLink} // Add activeClassName
              exact // Use exact for exact matching
              onClick={() => {
                setActive(item.value);
              }}
            >
              <div
                className={styles.link_text}
                style={item.value === active ? activeStyle : null} // Check for active link
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <div className={styles.bottom_logout}>
          <NavLink to="/" className={`${styles.link} ${styles.logout}`}>
            <div className={styles.link_text}>LOGOUT</div>
          </NavLink>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
