import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Button from "./button";
import axios from "axios";
import { all_users } from "../../urls";
import { useNavigate } from "react-router-dom";


const User = ({ userID }) => {
  const [users, setusers] = useState([]);
  const [change, setchane] = useState("");
  async function Users_api() {
    if (change != "") {
      const { data } = await axios.get(`${all_users}?filter=${change}`);
      if (data) {
        const all_users = data.users;
        setusers(all_users);
      }
    } else {
      const { data } = await axios.get(all_users);
      if (data) {
        const all_users = data.users;
        const curent_del_user = all_users.filter((ele) => {
          return ele._id !== userID._id;
        });
        setusers(curent_del_user);
      }
    }
  }
  useEffect(() => {
    Users_api();
  }, [change]);

  return (
    <>
      <div className="font-bold mt-6 text-3xl">Users</div>
      <div className="my-2">
        <input
          onChange={(e) => {
            setchane(e.target.value);
          }}
          type="text"
          placeholder="Search Users...."
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
      </div>
      <div>
        {users.map((users, index) => {
          return <UserBlock key={index} user={users} />;
        })}
      </div>
    </>
  );
};

function UserBlock({ user }) {
  const navigate = useNavigate();
  function onclicked(){
    navigate("/send",{replace:true,state:{user}})
  }
  return (
    <div className="pt-2 pb-1 flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl ">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center h-ful">
        <Button onClick={onclicked} label={"Send Money"} />
      </div>
    </div>
  );
}

User.propTypes = {
  userID: PropTypes.object,
};
UserBlock.propTypes = {
  user: PropTypes.object,
};

export default User;
