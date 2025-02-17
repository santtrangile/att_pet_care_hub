import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const clinics = [
    {
      id: 1,
      name: 'City Clinic',
      location: 'New York',
      contact: '123-456-7890',
      imageUrl: '/clinics/clinic1.avif'
    },
    {
      id: 2,
      name: 'Health Hub',
      location: 'Los Angeles',
      contact: '987-654-3210',
      imageUrl: '/clinics/clinic2.avif',
    },
    {
      id: 3,
      name: 'Green Clinic',
      location: 'Chicago',
      contact: '555-123-4567',
      imageUrl: '/clinics/clinic3.avif',
    },
    {
      id: 4,
      name: 'Sunshine Clinic',
      location: 'Miami',
      contact: '321-654-9870',
      imageUrl: '/clinics/clinic4.avif',
    },
    {
      id: 5,
      name: 'Bright Health Clinic',
      location: 'San Francisco',
      contact: '456-789-1230',
      imageUrl: '/clinics/clinic5.avif',
    },
    {
      id: 6,
      name: 'CarePoint Clinic',
      location: 'Dallas',
      contact: '654-321-8765',
      imageUrl: '/clinics/clinic6.avif',
    },
    {
      id: 7,
      name: 'MedPlus Clinic',
      location: 'Seattle',
      contact: '789-012-3456',
      imageUrl: '/clinics/clinic7.avif',
    },
    {
      id: 8,
      name: 'Lifeline Clinic',
      location: 'Boston',
      contact: '890-123-4567',
      imageUrl: '/clinics/clinic8.avif',
    },
    {
      id: 9,
      name: 'Hope Medical Center',
      location: 'Denver',
      contact: '123-789-4560',
      imageUrl: '/clinics/clinic9.avif',
    },
    {
      id: 10,
      name: 'Wellness Clinic',
      location: 'Austin',
      contact: '234-567-8901',
      imageUrl: '/clinics/clinic10.jpg',
    },
  ];
  
  const Clinic = () => {  
    const isUserId = localStorage.getItem("token");
    const navigate = useNavigate();

    return (
      <div className="clinic-wrapper">
        <h1>Our Clinics</h1>
        <div className="clinic-container">
          <div className="clinic-list">
            {clinics.map((clinic) => (
              <div key={clinic.id} className="clinic-card">
                <img src={clinic.imageUrl} alt={clinic.name} className="clinic-image" />
                <h2>{clinic.name}</h2>
                <p>Location: {clinic.location}</p>
                <p>Contact: {clinic.contact}</p>
                <Button label={"Book Slot"} onClick={() => {
                    if (!isUserId) {
                        navigate('/login')
                    } else {
                        localStorage.setItem("clinicId", (clinic.id).toString());
                    }
                }}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Clinic;
  