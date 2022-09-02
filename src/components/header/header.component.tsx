import {Link} from "react-router-dom";

import './header.styles.scss'

const Header = () => {
    return (
        <div className='container-header'>
            <Link to="/" className='btn-company-list'>list</Link>
            <Link to="/map" className='btn-company-list'>map</Link>
        </div>
    )
}

export default Header;