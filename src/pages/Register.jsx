import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth"
import auth from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosPublic from "../hooks/useAxiosPublic";



const Register = () => {
    const axios = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleLogin = async() => {
      try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        console.log(result.user.uid);
        if(!result){
          toast.error("Registration failed")  
        }

        const response = await axios.post("/api/admin/register", {email:result?.user?.email, password: result?.user?.uid});

        if(response){
            toast.success(response.data.message);
            navigate('/admin/login')
        }else{
            toast.error("Error occured in the backend")
        }
        
        
      } catch (error) {
          console.log(error.message);
          if(error.response){
              toast.error(error.response.data.message)
          }
      }
        
    };

    return (
      <div className="min-h-screen flex flex-col  pb-16 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-center text-3xl py-6 font-extrabold text-gray-900">
            Create an account
          </h2>
        </div>
  
        <div className="sm:mx-auto sm:w-full sm:max-w-md drop-shadow-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
  
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
  
              <div className="my-5">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-100 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
  
              <div className="mt-6">
                <div>
                  <button
                    onClick={handleGoogleLogin}
                    className="w-full flex gap-2 items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <img
                      className="h-6 w-6"
                      src="https://www.svgrepo.com/show/506498/google.svg"
                      alt=""
                    />
                    <p>Sign Up With Google</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Register;
  