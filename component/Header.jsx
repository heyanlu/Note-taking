import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Login from '../component/Login';
import './Header.css'

function Header({ page, setPage, name, setName }) {
    const [showMenu, setShowMenu] = useState(false);

    function go(event, nextPage) {
        event.preventDefault(); 
        setPage(nextPage);
    }

    return (
        <div className='header'>
            <div className='title'>
                <h1>Todo List</h1>
            </div>
            <nav className='navbar'>
                <div className='menu-container'>
                    <button className='menu-button' onClick={() => setShowMenu(!showMenu)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>            
                    <ul className={showMenu ? "menu open" : 'menu'}>
                        <li className='menu-item'><a className='menu-link' onClick={(event)=>go(event, 'Home')}>All</a></li>
                        <li className='menu-item'><a className='menu-link' onClick={(event)=>go(event, 'Done')}>Done</a></li>
                        <li className='menu-item'><a className='menu-link' onClick={(event)=>go(event, 'Prioritized')}>Prioritized</a></li>    
                        <li className='button-container'>
                            <Login name={name} setName={setName} page={page} setPage={setPage} />    
                        </li>                     
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
