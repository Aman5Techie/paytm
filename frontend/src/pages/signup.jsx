import { useEffect, useState } from "react";
import BottomWarning from "../components/bottomWarning";
import Button from "../components/button";
import Heading from "../components/heading";
import Inputbox from "../components/inputbox";
import Subheading from "../components/subheading";
import axios from "axios"
import { signup } from "../../urls";
import { useNavigate } from "react-router";
const Signup = () => {

  useEffect(()=>{
    if (localStorage.getItem("Authorization")) {
      navigate("/dashboard")
    }
  })

  const navigate = useNavigate();
  const [firstname,setfirstname] = useState("")
  const [lastname,setlastname] = useState("")
  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")

 async function submit(){
    const object = {
      "username" : email,
      "firstName" : firstname,
      "lastName" : lastname,
      "password" : password
    }

    const {data} = await axios.post(signup,object)
    if(!data.status){
      // toast msg
      return;
    }
    localStorage.setItem("Authorization",`Bearer ${data.token}`)
    navigate("/dashboard")
   
  }
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading title={"Sign up"} />
          <Subheading des={"Enter your Information to create an account"} />
          <Inputbox onchange={setfirstname} lable={"First Name"} placeholder={"Aman"} />
          <Inputbox onchange={setlastname}  lable={"Last Name"} placeholder={"Verma"} />
          <Inputbox  onchange={setemail} lable={"Email"} placeholder={"abcd@gmail.com"} />
          <Inputbox onchange={setpassword}  lable={"Password"} placeholder={"123456"} />
          <div className="pt-4">
            <Button label={"Sign Up"} onClick={submit} />
            <BottomWarning
              label={"Already have an account"}
              buttonText={"Sign In"}
              to={"/signin"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
