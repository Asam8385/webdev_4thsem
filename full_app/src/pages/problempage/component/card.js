import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
export function Carddefault( props) {


const loc = useLocation();
const [questions, setQuestions] = useState([]);
 const nav = new useNavigate(); 
const handleProblem = () => {
  axios.get(`http://localhost:3001/questions/?option=${props.title}`)
    .then((response) => {
      if (response.status === 200) {
        if (response.data) {
          setQuestions(response.data);
          console.log(response.data);
          nav(`/questions/${props.title}`, {state: { ques: response.data , user : loc.state.userData } })

        } else {
          console.error('Response is empty.');
        }
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
  

return (
      <Card className="w-full max-w-[45rem] h-[300px] flex-row m-2 bg-gray-600">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <div className="flex justify-center">
          <img
            src = {`/${props.image}`}
            alt="card-image"
            
            
            className="object-cover mt-20"
          />
          </div>
        </CardHeader>
        <CardBody className="flex flex-col justify-center items-center">
          <Typography variant="h1" color="black" className="mb-4 uppercase">
            {props.title}
          </Typography>
          <Typography variant="h4" color="white" className="mb-2">
            Start Your Journey
          </Typography>
           
            <Button  variant="text" onClick={handleProblem} className="flex bg-black text-white  items-center gap-2">
              start coding
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
        </CardBody>
      </Card>
    );
}