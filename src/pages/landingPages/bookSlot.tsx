import { useState } from "react";
import { doctorsDataLatest, slotDates } from "../../utils/slotData";
import DialogBox from "../../components/DialogBox";
import Button from "../../components/Button";
import { clinics } from "../../utils/clinicData";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const BookSlot = () => {
    const [selectedSlot, setSelectedSlot] = useState<string>("Thu 13");
    const [slotData, setSlotData] = useState<any>(doctorsDataLatest);
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [dialogDetail, setDialogDetail] = useState<{ [key: string]: string } | null>(null);
    const [serviceDetail, setServiceDetail] = useState<{ [key: string]: string } | null>(null);
    const { clinicId, serviceId }: any = useParams();
    const date = selectedSlot.split(" ")[1];

    const actionButton = (
        <>
            <Button
                label="Book Slot!"
                onClick={() => {
                    setSlotData((prev: any) => ({
                        ...prev,
                        [date]: prev[date].map((doctor: any) =>
                            doctor.id === dialogDetail?.id
                                ? {
                                    ...doctor,
                                    bookedSlots: doctor.bookedSlots.includes(dialogDetail?.slot)
                                        ? doctor.bookedSlots
                                        : [...doctor.bookedSlots, dialogDetail?.slot],
                                }
                                : doctor
                        ),
                    }));
                    toast.success(
                        `Your pet's appointment for ${serviceDetail?.title} with ${dialogDetail?.name} on ${selectedSlot} at ${dialogDetail?.slot} has been booked. 🐾`
                    );
                    setShowDialog(false);
                }}
            />
            <Button
                label="Close"
                className="close-botton"
                onClick={() => {
                    setShowDialog(false);
                }}
            />
        </>
    );

    const findServiceData = () => {
        const clinicdData: any = clinics?.find((item) => item?.id === Number(clinicId))?.services?.find((ser: any) => ser?.id === Number(serviceId));
        setServiceDetail(clinicdData);
    }

    const dialogContent = (
        <div className="dialog-content">
            <div className="dialog-row">
                <span className="label">Doctor Name: </span>
                <span className="value">{dialogDetail?.name}</span>
            </div>
            <div className="dialog-row">
                <span className="label">Time Slot: </span>
                <span className="value">{selectedSlot}, {dialogDetail?.slot}</span>
            </div>
            <div className="dialog-row">
                <span className="label">For: </span>
                <span className="value">{serviceDetail?.title}</span>
            </div>
            <div className="dialog-row">
                <span className="label">Pet Name: </span>
                <span className="value">Bosco</span>
            </div>
        </div>
    )

    return (
        <>
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

                {slotData[date] && slotData[date].length > 0 ? (
                    <div className="slot-content">
                        {slotData[date].map((doctor: any) => (
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
                                                onClick={() => {
                                                    setDialogDetail({ ...doctor, slot: `${slot}` });
                                                    findServiceData();
                                                    setShowDialog(true);
                                                }}
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
                                                onClick={() => {
                                                    setDialogDetail({ ...doctor, slot: `${slot}` });
                                                    findServiceData();
                                                    setShowDialog(true);
                                                }}
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
                                                onClick={() => {
                                                    setDialogDetail({ ...doctor, slot: `${slot}` });
                                                    findServiceData();
                                                    setShowDialog(true);
                                                }}
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
            {showDialog && (
                <DialogBox
                    className="book-slot-dialog"
                    maxWidth={"500px"}
                    open={showDialog}
                    title={"Book Slot!"}
                    content={dialogContent}
                    handleClose={() => setShowDialog(false)}
                    actionButton={actionButton}
                />
            )}
        </>
    );
};

export default BookSlot;
