import React, { useState } from 'react';
import { Link } from 'react-router-dom';



 

const Login = () => {
   
  const [formData, setFormData] = useState({
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

  const handleLogin = (e) => {
    e.preventDefault();
    console.log( formData.username);
    console.log( formData.password);
    setStatusMessage('Login successful! Check the browser console for form data.');
    
  };

  return (
    <main className="flex justify-center items-center  bg-gray-900 text-white font-sans p-4 h-[100vh] w-[100vw]">
      <article className="flex flex-col md:flex-row bg-black border border-gray-700 rounded-xl max-w-5xl w-full overflow-hidden shadow-2xl">
        
        {/* Left Column: Image placeholder */}
        <section className="hidden md:flex flex-col justify-center items-center p-8 lg:p-16 w-full md:w-1/2">
          <figure className="relative w-full h-[400px] bg-gray-800 rounded-lg ">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center text-gray-500 text-lg">
              </div>
            </div>
            <figcaption className="absolute top-4 left-4 text-xs font-bold  text-black px-2 py-1 ">
             <img src='' alt="" />
            </figcaption>
          </figure>
        </section>


        <section className="flex flex-col items-center justify-center p-8 w-full md:w-1/2">
          <div className="w-full max-w-sm">
            <h1 className="text-4xl font-semibold mb-6 text-center tracking-tight">
              Instagram
            </h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-3">
              <input
                type="text"
                name="username"
                placeholder="Phone number, username, or email"
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
              <button
                type="submit"
                className="w-full mt-2 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                Log in
              </button>
            </form>

            {statusMessage && (
              <p className="mt-4 text-green-400 text-center text-sm font-medium">
                {statusMessage}
              </p>
            )}

            <div className="relative my-6 flex items-center">
              <div className="flex-grow border-t border-gray-700"></div>
              <span className="flex-shrink mx-4 text-gray-500 text-sm">OR</span>
              <div className="flex-grow border-t border-gray-700"></div>
            </div>

            <button className="w-full py-3 flex items-center justify-center gap-2 text-blue-400 font-semibold rounded-md transition duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c4.954 0 9.14-3.61 9.873-8.312H12V2.138c3.964.717 7.022 3.88 7.828 7.862H21.5C20.738 5.768 16.746 2 12 2z" />
              </svg>
              <span>Log in with Facebook</span>
            </button>
            
            <a href="#" className="block text-center text-xs mt-4 text-blue-400 hover:underline transition duration-200">
              Forgot password?
            </a>
          </div>
          
          <div className="mt-8 text-sm text-center">
            <span className="text-gray-400">Don't have an account? </span>
            <Link to='/signup' className="text-blue-500 font-bold hover:underline transition duration-200">
              Sign up
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Login;
