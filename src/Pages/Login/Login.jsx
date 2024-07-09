
import { useContext } from 'react';
import loginimg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
const Login = () => {
    const{signInUser} = useContext(AuthContext)
    const location = useLocation();
    console.log(location);
    const Navigate = useNavigate();
    const handleLogin = (event)=>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            Navigate(location?.state ? location?.state : '/')

        })
        .catch(error=>{
            console.log(error);
        })
        form.reset();

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <div className="text-center lg:text-left w-1/2">
                    {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
                    <img src={loginimg} alt="" />
                </div>
                <div className="card bg-base-100 w-1/2 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Login</button>
                        </div>
                        <p>Do you have not account? <Link to='/signup' className='text-yellow-400 font-bold'>SignUp</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;