import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';

const Header = () => {
    const navigate = useNavigate();
    const headerLabels = [
        {label: "Home", path: "/"},
        {label: "Community", path: "/community"},
        {label: "Shop", path: "/shop"},
    ]
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
            <Button label='Get Started' onClick={()=> navigate("/login")}/>
        </div>
    )
}

export default Header