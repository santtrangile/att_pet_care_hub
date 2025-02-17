import { useEffect, useState } from "react";
import { doctorsDataLatest, slotDates } from "../../utils/slotData";

const BookSlot = () => {
    const [selectedSlot, setSelectedSlot] = useState<string>("Thu 13");
    const [slotData, setSlotData] = useState<any>(null);

    useEffect(() => {
        if (selectedSlot) {
            const date = selectedSlot.split(" ")[1];
            setSlotData(doctorsDataLatest[date] || []);
        }
    }, [selectedSlot]);

    return (
        <div className="book-slot-container">
            <div className="slot-wrapper">
                {slotDates.map((item, index) => (
                    <span
                        className={`${selectedSlot === item ? "active" : ""} slot`}
                        key={index}
                        onClick={() => setSelectedSlot(item)}
                    >
                        {item}
                    </span>
                ))}
            </div>

            {slotData && slotData.length > 0 ? (
                <div className="slot-content">
                    {slotData.map((doctor: any) => (
                        <div key={doctor.id} className="doctor-card">
                            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                            <h3>{doctor.name}</h3>

                            <div className="slots">
                                <h4>Morning Slots</h4>
                                <div className="slot-list">
                                    {doctor.morningSlots.map((slot: string) => (
                                        <span
                                            key={slot}
                                            className={`slot-item ${doctor.bookedSlots.includes(slot) ? "booked" : ""}`}
                                        >
                                            {slot}
                                        </span>
                                    ))}
                                </div>

                                <h4>Afternoon Slots</h4>
                                <div className="slot-list">
                                    {doctor.afternoonSlots.map((slot: string) => (
                                        <span
                                            key={slot}
                                            className={`slot-item ${doctor.bookedSlots.includes(slot) ? "booked" : ""}`}
                                        >
                                            {slot}
                                        </span>
                                    ))}
                                </div>

                                <h4>Evening Slots</h4>
                                <div className="slot-list">
                                    {doctor.eveningSlots.map((slot: string) => (
                                        <span
                                            key={slot}
                                            className={`slot-item ${doctor.bookedSlots.includes(slot) ? "booked" : ""}`}
                                        >
                                            {slot}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No doctors available for this date.</p>
            )}
        </div>
    );
};

export default BookSlot;
