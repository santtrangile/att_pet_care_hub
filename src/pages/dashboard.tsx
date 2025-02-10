import { useNavigate } from 'react-router-dom';
import Button from '../components/Button'

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className='dashboard-wrapper'>
        <div className='landing-wrapper'>
            <h1>
                Pet Care
            </h1>
            <p>
                Your one-stop solution for all things pet-related, with a twist!
            </p>
            <Button label='Join Us' onClick={() => navigate("/login")}/>
        </div>
    </div>
  )
}

export default Dashboard