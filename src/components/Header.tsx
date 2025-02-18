import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import Avatar from './Avatar';
import { useState } from 'react';

const Header = () => {
    const navigate = useNavigate();
    const headerLabels = [
        {label: "Home", path: "/"},
        {label: "Community", path: "/community"},
        {label: "Shop", path: "/shop"},
    ]
    const isUserId = localStorage.getItem("token");
    const userName = localStorage.getItem("userName");
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className='header-container'>
            <span onClick={() => navigate("/")}>
                <img src='/favicon.ico' alt='Logo'/>
                Trillionsmed
            </span>
            <div className='header-labels'>
                {headerLabels?.map((item, index) => {
                    return (
                        <Link to={item?.path} key={index} className='header-label'>{item?.label}</Link>
                    )
                })}
            </div>
            {!isUserId ? <Button label='Get Started' onClick={()=> navigate("/login")}/> : 
                <div className='avatar'>
                    <Avatar name={userName || ""} onClick={()=> setShowDropdown(!showDropdown)}/>
                    {showDropdown && 
                        <ul className='avatar-dropdown'>
                            <li onClick={() => {
                                localStorage.clear();
                                navigate("/")
                            }}>Logout</li>
                        </ul>
                    }
                </div>
            }
        </div>
    )
}

export default Header;