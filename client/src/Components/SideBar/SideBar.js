import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideBar.module.css';

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
    },
    {
      path: "/analytics",
      name: "Analytics",
    },
    {
      path: "/create",
      name: 'Create Quiz',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.top_section}>
          <h1 className={styles.logo}>QUIZZIE</h1>
          <div className={styles.bars}></div>
        </div>
        <div className={styles.center_links}>
          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className={styles.link}>
              <div className={styles.link_text}>{item.name}</div>
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
