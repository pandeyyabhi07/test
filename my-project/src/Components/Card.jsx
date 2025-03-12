import React from "react";

const datas = [
  { name: "Abhishek Pandey", email: "abhishek@gmail.com", age: 20 },
  { name: "Shiv", email: "shiv@gmail.com", age: 20 },
  { name: " Vivek", email: "vivek@gmail.com", age: 21 },
  { name: "Garden", email: "Garden@gmail.com", age: 28 },
  { name: "JT", email: "jt@gmail.com", age: 21 },
  { name: "Yash", email: "yash@gmail.com", age: 20 }
]


const User = ({ name, email, age }) => {
  return (
    <div className="bg-black w-full text-white shadow-lg rounded-2xl p-6 border-3">
      <p className="text-lg font-bold ">Name=</p>
      <p className="mb-2">{name}</p>
      <p className="text-lg font-bold ">Age=</p>
      <p className="mb-2">{age}</p>
      <p className="text-lg font-bold ">Email=</p>
      <p>{email}</p>
    </div>
  );
};

const UserList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {datas.map((datas, index) => (
        <User key={index} {...datas} />
      ))}
    </div>
  );
};

export default UserList;
