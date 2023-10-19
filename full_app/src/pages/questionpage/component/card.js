import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useLocation, useNavigate } from "react-router-dom";

export function SimpleCard() {
  const loc = useLocation();
  const questions = loc.state.ques;
  const user = loc.state.user;
  const nav = new useNavigate();

function handlecompiler(quest)
{
   
   nav("/compiler" , {state : {selectedquestion: quest, selecteduser : user}})
}




  return (
    <div className="flex flex-col items-center justify-center">
      {questions.map((question, index) => (
        <div key={index} className="mt-6 w-full max-w-[60vw]">
          <Card className="bg-black text-white flex flex-row justify-between items-center">
            <CardBody>
              <Typography variant="h5" color="white" className="mb-2">
              {`${index + 1}. ${question.title}`}
              </Typography>
            </CardBody>
            <CardFooter className="flex flex-col justify-center items-center">
              <Button  onClick={() => handlecompiler(question)} className="bg-green-700">Solve</Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
      

}

