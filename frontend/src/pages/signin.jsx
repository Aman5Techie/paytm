import { useEffect, useState } from "react";
import BottomWarning from "../components/bottomWarning";
import Button from "../components/button";
import Heading from "../components/heading";
import Inputbox from "../components/inputbox";
import Subheading from "../components/subheading";
import { useNavigate } from "react-router";
import axios from "axios";
import { signin } from "../../urls";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("Authorization")) {
      navigate("/dashboard");
    }
  });

  async function login(){
    const credentials = {
      username: email,
      password: password,
    };

    const {data} = await axios.post(signin,credentials)
    if(!data.status){
      // null
    }
    localStorage.setItem("Authorization",`Bearer ${data.token}`)
    navigate("/dashboard")


  }

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading title={"Sign in"} />
          <Subheading des={"Enter your credentials to access your account"} />
          <Inputbox
            onchange={setemail}
            placeholder={"abc@gmail.com"}
            lable={"Email"}
          />
          <Inputbox
            onchange={setpassword}
            placeholder={"1234567"}
            lable={"Password"}
          />
          <div className="pt-3">
            <Button onClick={login} label={"Sign In"} />
          </div>
          <BottomWarning
            to={"/sign up"}
            label={"Don't have an account"}
            buttonText={"Sign up"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
