import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { clinics } from "../../utils/clinicData";
  
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
                        navigate('/login');
                        localStorage.setItem("clinicId", (clinic.id).toString());
                    } else {
                      navigate(`/clinicServices/${clinic.id}`);
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
  