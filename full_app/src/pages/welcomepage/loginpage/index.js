import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

export function SimpleRegistrationForm() {
  const Nav = useNavigate();
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [error, seterror] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const handleform = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state when the button is clicked

    try {
      const res = await Axios.post("http://localhost:3001/learn/login", {
        email,
        password,
      });
      if (res.data.success && email && password) {
        Nav(`/user/${res.data.user.name}`, { state: { userData: res.data.user } });
      } else {
        seterror("Incorrect credentials. Please try again.");
      }
    } catch (error) {
      seterror("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false); // Set loading state back to false when the request is complete
    }
  };

  const divStyle = {
    backgroundImage: 'url("/login.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <div style={divStyle}  className="flex flex-col items-center justify-center  h-[100vh]">
      <Card color="transparent" className="p-3 bg-white" shadow={true}>
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to login.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" onChange={(e) => setemail(e.target.value)} label="Email" />
            <Input
              type="password"
              onChange={(e) => setpassword(e.target.value)}
              size="lg"
              label="Password"
            />
          </div>

          {isLoading ? (
            // Render the spinner while loading
            <div className="w-full text-center mt-6">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 border-opacity-25 mx-auto"></div>
            </div>
          ) : (
            // Render the login button when not loading
            <Button onClick={handleform} color="blue" className="mt-6" fullWidth>
              Log In
            </Button>
          )}

          <Typography color="gray" className="mt-4 text-center font-normal">
            Click here to register{" "}
            <Link to="/signup" className="font-medium text-red-900">
              Sign Up
            </Link>
          </Typography>
        </form>
        <h1 className="text-red-700 ml-[40px]">{error}</h1>
      </Card>
    </div>
  );
}
