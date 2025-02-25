import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import { useState } from 'react';
import Avatar from './Avatar';
import { headerLabels } from '../utils/headerLabels';

const Header = () => {
    const navigate = useNavigate();
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
                            {headerLabels?.map((item, index) => {
                                return (
                                    <li className='header-label-li' key={index} onClick={() => {
                                        navigate(item?.path);
                                        setShowDropdown(!showDropdown);
                                    }}>{item?.label}</li>
                                )
                            })}
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