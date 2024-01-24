import {NavLink} from 'react-router-dom'
function Header(){
    
    return(
        <header>
            <h1>My Website</h1>
                <nav >
                    <ul>
                        <li>
                            <NavLink
                                to='/'
                                style={({ isActive }) => ({
                                color: isActive ? 'black' : '#485F73',
                                textDecoration: 'none'
                            })}>
                            Home
                        </NavLink></li>
                        <li>
                        <NavLink
                                to='second'
                                style={({ isActive }) => ({
                                color: isActive ? 'black' : '#485F73',
                                textDecoration: 'none'
                            })}>
                            Second
                        </NavLink></li>
                        <li><NavLink
                                to='third'
                                style={({ isActive }) => ({
                                color: isActive ? 'black' : '#485F73',
                                textDecoration: 'none'
                            })}>
                            Third
                        </NavLink></li>
                    </ul>
                </nav>
            
        </header>
    );
}
export default Header