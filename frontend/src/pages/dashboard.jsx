import { useEffect } from "react";
import Appbar from "../components/appbar";
import Balance from "../components/balance";
import User from "../components/user";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("Authorization")) {
      navigate("/signin");
    }
  });
  
  return (
    <div>
      <Appbar name={"Aman"} />
      <Balance balance={100000} />
      <User />
    </div>
  );
};

export default Dashboard;
