import { useEffect, useState } from "react";
import Appbar from "../components/appbar";
import Balance from "../components/balance";
import User from "../components/user";
import { useNavigate } from "react-router";
import axios from "axios";
import { balance_url, user_info } from "../../urls";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);
  const [user, setdata] = useState({});
  const [balance, setbalance] = useState("loading...");
  const getdata = async function () {
    const { data } = await axios.get(user_info, {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    });

    const balance_data = await axios.get(balance_url, {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    });

    setbalance(Math.round(balance_data.data.balance));
    setdata(data.user);

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
          <Balance balance={balance} />
          <User userID={user} />
        </div>
      )}
    </>
  );
};

export default Dashboard;
