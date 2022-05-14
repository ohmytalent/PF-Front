import React from 'react'
import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.css'

// Componentes y funciones
import SearchBar from '../SearchBar'

const NavBar = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        Henry's
        {/* <img src="https://i.imgur.com/Q9XcQ9I.png" alt="logo" /> */}
      </NavLink>
      <nav className={styles.navbar}>

        {/* el navlink se utiliza para saber si esta activo o no */}
        <ul className={styles.links__ul}>
<<<<<<< HEAD
=======
          {/* Componente para searchBar */}
>>>>>>> 7d336c439a49944c529db828529891b46e6d1cd3

          <NavLink
            className={styles.links__a}
            // className={({ isActive }) => {
            //     return isActive ? 'is-active' : '';
            // }}
            to='/create-user'
          >
            Sign Up
          </NavLink>
<<<<<<< HEAD
          <SearchBar/>
=======

          {/* <NavLink className={styles.links__a} to='/user'>
            Crear Usuario
          </NavLink> */}
          <SearchBar />
>>>>>>> 7d336c439a49944c529db828529891b46e6d1cd3
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;