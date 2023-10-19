import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function RegistrationForm() {
  const nav = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        name,
        email,
        password,
      };

      const response = await axios.post('http://localhost:3001/users', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.success && email && password && name) {
        setIsRegistrationSuccess(true); // Set registration success to true
      } else {
        console.error('Registration failed:', response.data.error);
        // Handle registration failure (e.g., display an error message).
      }
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle registration failure (e.g., display an error message).
    }
  };

  const divStyle = {
    backgroundImage: 'url("/login.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <div style={divStyle} className="flex flex-col items-center justify-center bg-blue-800 h-[100vh]">
      <Card color="transparent" className="p-3 bg-gray-100" shadow={true}>
        <Typography variant="h4" color="blue">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input
              required
              size="lg"
              label="Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <Input
              required
              size="lg"
              label="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <Input
              required
              type="password"
              size="lg"
              label="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <Checkbox
            required
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree to the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button color="blue" className="mt-6" fullWidth onClick={handleSubmit}>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/signin" className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>

      {isRegistrationSuccess && (
        // Dialog box shown when registration is successful
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
          <Card className="p-4"  shadow={true}>
            <Typography variant="h4" color="blue-gray" className="mb-2 text-center">
              Registration Successful
            </Typography>
            <Typography color="gray" className="text-center font-normal">
              Your registration was successful. You can now proceed to{" "}
              <Link to="/signin" className="font-medium text-blue-600">
                Sign In
              </Link>.
            </Typography>
          </Card>
        </div>
      )}
    </div>
  );
}
