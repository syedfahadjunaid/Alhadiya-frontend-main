import React from 'react'
import './Navbar.css'

import { NavLink } from 'react-router-dom'

import { useState } from 'react'

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';


function Navbar() {

    const [navActive, setNavActive] = useState("All Categories")

    return (


        <nav className='navbar'>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        onClick={() => setNavActive("All Categories")}
                        className={
                            navActive === "All Categories" ? "active-link" : "inactive-link"
                        }
                    >
                        All Categories
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        onClick={() => setNavActive("Acessories")}
                        className={
                            navActive === "Acessories" ? "active-link" : "inactive-link"
                        }
                    >
                        Acessories
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        onClick={() => setNavActive("Smartphone")}
                        className={
                            navActive === "Smartphone" ? "active-link" : "inactive-link"
                        }
                    >
                        Smartphone
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        onClick={() => setNavActive("Computer")}
                        className={
                            navActive === "Computer" ? "active-link" : "inactive-link"
                        }
                    >
                        Computer
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        onClick={() => setNavActive("Gaming Equipments")}
                        className={
                            navActive === "Gaming Equipments" ? "active-link" : "inactive-link"
                        }
                    >
                        Gaming Equipments
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        onClick={() => setNavActive("TV & Monitors")}
                        className={
                            navActive === "TV & Monitors" ? "active-link" : "inactive-link"
                        }
                    >
                        TV & Monitors
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        onClick={() => setNavActive("Headphones")}
                        className={
                            navActive === "Headphones" ? "active-link" : "inactive-link"
                        }
                    >
                        Headphones
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        onClick={() => setNavActive("Speaker")}
                        className={
                            navActive === "Speaker" ? "active-link" : "inactive-link"
                        }
                    >
                        Speaker
                    </NavLink>
                </li>
                <li> <LocalFireDepartmentIcon style={{ color: "red" }} />
                    <NavLink
                        to="/"
                        onClick={() => setNavActive("HOT DEALS")}
                        className={
                            navActive === "HOT DEALS" ? "active-link" : "inactive-link"
                        }
                    >
                        HOT DEALS
                    </NavLink>
                </li>


            </ul>

        </nav>


    )
}

export default Navbar