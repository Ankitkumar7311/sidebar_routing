import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';


const Signup = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    username: '',
    password: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
   toast.success("Account created")
    navigate('/login')
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-900 text-white font-sans p-4 m-[auto]">
      <article className="flex flex-col items-center justify-center bg-black border border-gray-700 rounded-xl max-w-sm w-full p-8 shadow-2xl">
        <div className="w-full">
          <h1 className="text-4xl font-semibold mb-2 text-center tracking-tight">
            Instagram
          </h1>
          <h2 className="text-lg font-medium text-center text-gray-400 mb-6 px-4">
            Sign up to see photos and videos from your friends.
          </h2>
          
          <button className="w-full py-3 flex items-center justify-center gap-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c4.954 0 9.14-3.61 9.873-8.312H12V2.138c3.964.717 7.022 3.88 7.828 7.862H21.5C20.738 5.768 16.746 2 12 2z" />
            </svg>
            <span>Log in with Facebook</span>
          </button>
          
          <div className="relative my-6 flex items-center">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="flex-shrink mx-4 text-gray-500 text-sm font-semibold">OR</span>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>
          
          <form onSubmit={handleSignup} className="flex flex-col gap-3">
            <input
              type="text"
              name="email"
              placeholder="Mobile Number or Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
            <p className="text-xs text-gray-500 text-center mt-2 leading-relaxed">
              People who use our service may have uploaded your contact information to Instagram. <a href="#" className="text-blue-500 hover:underline">Learn More</a>
            </p>
            <p className="text-xs text-gray-500 text-center mt-2 leading-relaxed">
              By signing up, you agree to our <a href="#" className="text-blue-500 hover:underline">Terms</a>, <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a> and <a href="#" className="text-blue-500 hover:underline">Cookies Policy</a>.
            </p>
            <button
              type="submit"
              className="w-full mt-2 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              Sign up
            </button>
          </form>

          {statusMessage && (
            <p className="mt-4 text-green-400 text-center text-sm font-medium">
              {statusMessage}
            </p>
          )}
          
          <div className="mt-8 text-sm text-center">
            <span className="text-gray-400">Have an account? </span>
            <Link to='/login' className="text-blue-500 font-bold hover:underline transition duration-200">
              Log in
            </Link>
          </div>
        </div>
      </article>

     
    </main>
  );
};

export default Signup;
