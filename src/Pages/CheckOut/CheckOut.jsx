import { useLoaderData } from 'react-router-dom';
import checkout_img from '../../assets/images/checkout/checkout.png'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
const CheckOut = () => {
    const {users} = useContext(AuthContext);
    const service = useLoaderData();
    const{_id, title, price, img} = service;
    
    const handleService = event =>{
        event.preventDefault();
        const form = event.target;
        const serviceName = form.service_name.value;
        const price = form.service_price.value;
        const date = form.date.value;
        const email = form.email.value;
        const message = form.message.value;
        // console.log(serviceName, price, date, email, message);
        // form.reset();
        const order={
            serviceName,
            img,
            price,
            email,
            date,
            service:_id,
            message,

        }
        console.log(order);
        fetch('http://localhost:5000/bookings',{
            method:"POST",
            headers:{
                'Content-type':"application/json"
            },
            body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.acknowledged){
                alert("Confirm your Order Successfully")
            }
        })

    }
    
    return (
        <div>
            <div className='relative text-yellow-400 flex items-center'>
                <img className='w-full' src={checkout_img} alt="" />
                <div className='absolute left-5'>
                    <h1 className='font-bold'>CheckOut</h1>
                </div>
            </div>
            <div className='mt-32'>
                <div className="hero bg-base-200 ">
                    <div className="hero-content">
                        <div className="card bg-base-100 ">
                            <form onSubmit={handleService} className="card-body w-full">
                                <div className='grid grid-cols-1 md: grid-cols-2 md:gap-x-20 gap-5'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Service Name</span>
                                        </label>
                                        <input type="text" placeholder="service name" name='service_name' defaultValue={title}  className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Service Price</span>
                                        </label>
                                        <input type="text" placeholder="service price" name='service_price' defaultValue={price} className="input input-bordered" required />
                                        
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Date</span>
                                        </label>
                                        <input type="date" name="date" id="" className="input input-bordered" required />
                                        
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" name='email' defaultValue={users?.email} className="input input-bordered" required />
                    
                                    </div>
    
                                </div>
                                <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product description</span>
                                        </label>
                                        <textarea className='border rounded' name="message" id="" cols="30" rows="10"></textarea>
                    
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-warning">Order Confirm </button>
                                    </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default CheckOut;