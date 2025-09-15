import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  let { id } = useParams();
  let [user, setUser] = useState(null);

  let handleUser = async () => {
    let response = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
    let data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    handleUser();
  }, [id]);
 
  if (!user) {
    return  <div className="loader  m-[auto] mt-[30%]"></div>
  }

  return (
    <section className="p-6 flex justify-center">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6 text-center">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-32 h-32 rounded-full mx-auto mb-4 border shadow"
        />
        <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
        <p className="text-gray-600 mb-2">{user.email}</p>
        <p className="text-sm font-medium text-gray-500">
          Role: <span className="text-black">{user.role}</span>
        </p>
      </div>
    </section>
  );
};

export default UserDetail;
