import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import BookingRow from "./BookingRow";
import img from '../../assets/images/checkout/checkout.png'

const Bookings = () => {
    const { users } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email = ${users?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBookings(data);
            })
    }, [url])

    const handleDelete = (id)=>{
        const proceed = confirm("Are you sure you want to delete??");
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                    alert("Delete Successfully");
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
        }
    }

    const handleUpdate = (id) =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'PATCH',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data. modifiedCount > 0){
                alert("Update successfully");

                const rem = bookings.filter(booking => booking._id !== id);
                const update = bookings.find(booking => booking._id === id);
                update.status = 'confirm';
                const updatedbookings = [update, ...rem];
                setBookings(updatedbookings);
            }

        })
    }
    return (
        <div>
            <img className="w-full mb-14" src={img} alt="" />
            <div className=" overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Delete
                            </th>
                            <th>Book Service</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map(booking => <BookingRow key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            >

                            </BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>


    );
};

export default Bookings;

