import { useEffect, useState } from "react";
import Appbar from "../components/appbar";
import Balance from "../components/balance";
import User from "../components/user";
import { useNavigate } from "react-router";
import axios from "axios";
import { user_info } from "../../urls";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);
  const [user,setdata] = useState({})
  const getdata = async function () {
    console.log("executes");
    const { data } = await axios.get(
      user_info,
      {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      }
    );
    setdata(data.user)
    setloading(false);
  };

  useEffect(() => {
    getdata();
  }, []);
  
  useEffect(() => {
    if (!localStorage.getItem("Authorization")) {
      navigate("/signin");
      return;
    }
  });

  return (
    <>
      {loading == true ? (
        <div></div>
      ) : (
        <div>
          <Appbar user={user} />
          <Balance balance={100000} />
          <User />
        </div>
      )}
    </>
  );
};

export default Dashboard;
