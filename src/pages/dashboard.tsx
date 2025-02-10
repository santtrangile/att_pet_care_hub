import Button from '../components/Button'

const Dashboard = () => {
  return (
    <div className='dashboard-wrapper'>
        <div className='landing-wrapper'>
            <h1>
                Pet Care
            </h1>
            <p>
                Your one-stop solution for all things pet-related, with a twist!
            </p>
            <Button label='Join Us'/>
        </div>
    </div>
  )
}

export default Dashboard