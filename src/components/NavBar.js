import react from 'react';
import '../App.css'; 
import CartWidget from './CardWidget';

export const NavBar = () => {
    return (
        <div>
            <nav className='nav'>
                <div>
                    <a className='Nav-logo'>BUHO MATES</a>
                </div>
                <div>
                <ul className='nav-list'>
                    <li>
                        <a className='nav-link'>Productos</a>
                    </li>
                    <li>
                        <a className='nav-link'>Recomendaciones</a>
                    </li>
                    <li>
                        <a className='nav-link'>Contacto</a>
                    </li>
                    <li>
                        <a className='nav-link'>
                            <CartWidget/>0
                        </a>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
