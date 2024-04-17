import PropTypes from "prop-types";
import { useState } from "react";
import Button from "./button";

const User = () => {
  const [data] = useState([
    {
      firstName: "Harkirat",
      lastName: "Singh",
      _id: 1,
    },
    {
      firstName: "Aman",
      lastName: "Verma",
      _id: 1,
    },
  ]);

  return (
    <>
      <div className="font-bold mt-6 text-3xl">Users</div>
      <div className="my-2">
        <input
          type="text"
          placeholder="Search Users...."
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
      </div>
      <div>
        {data.map((users, index) => {
          return <UserBlock key={index} user={users} />;
        })}
      </div>
    </>
  );
};

function UserBlock({ user }) {
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
        <Button label={"Send Money"} />
      </div>
    </div>
  );
}

User.propTypes = {};
UserBlock.propTypes = {
  user: PropTypes.object,
};

export default User;
