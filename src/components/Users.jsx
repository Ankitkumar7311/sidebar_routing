import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';   // 🔥 Import Link

const Users = () => {
  let [userss, setUserss] = useState([]);

  let handleUsers = async () => {
    let response = await fetch(`https://api.escuelajs.co/api/v1/users`);
    let data = await response.json();
    console.log(data);
    setUserss(data);
  };

  useEffect(() => {
    handleUsers();
  }, []);

  return (
    <>
      <section className="p-6">
        <h1 className="text-2xl font-bold mb-4">Users Table</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white text-left">
                <th className="p-3 border-b">ID</th>
                <th className="p-3 border-b">Avatar</th>
                <th className="p-3 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {userss.map((user, index) => (
                <tr
                  key={user.id}
                  className={`${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  } hover:bg-gray-100 transition`}
                >
                  <td className="p-3 border-b font-medium text-gray-700">
                    {user.id}
                  </td>

                  <td className="p-3 border-b">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-12 h-12 rounded-full border shadow-sm"
                    />
                  </td>

                  <td className="p-3 border-b">
                    <Link to={`/users/${user.id}`}>
                      <button className="px-4 py-2 bg-orange-400 text-white rounded-md shadow hover:bg-orange-500 transition">
                        View More
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Users;
