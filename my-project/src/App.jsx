import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const usersData = [
  { name: "Abhishek Pandey", email: "abhishek@gmail.com", age: 20 },
  { name: "Shiv", email: "shiv@gmail.com", age: 20 },
  { name: " Vivek", email: "vivek@gmail.com", age: 21 },
  { name: "Garden", email: "Garden@gmail.com", age: 28 },
  { name: "JT", email: "jt@gmail.com", age: 21 },
  { name: "Yash", email: "yash@gmail.com", age: 20 }
]

const UserCard = ({ name, email, age }) => {
  return (
    <div className="bg-black w-1/2 text-white shadow-lg rounded-2xl p-6 border border-gray-700">
      <p className="text-lg font-bold">Name:</p>
      <p className="mb-2">{name}</p>
      <p className="text-lg font-bold">Age:</p>
      <p className="mb-2">{age}</p>
      <p className="text-lg font-bold">Email:</p>
      <p>{email}</p>
    </div>
  );
};

const Dashboard = () => {
  const [users] = useState(usersData);
  return (
    <div className="flex bg-slate-400 flex-wrap justify-center gap-4 p-6">
      {users.map((user, index) => (
        <UserCard key={index} {...user} />
      ))}
    </div>
  );
};

const Home = () => (
  <div className="text-center text-2xl font-semibold p-10 w-full h-screen flex items-center justify-center  bg-gray-300">Welcome to User Dashboards</div>
);

const App = () => {
  return (
    <Router>
      <div className="bg-blue-500">
        <nav className="flex flex-wrap justify-center items-center space-x-6 mb-6 py-4">
          <Link className="text-white bg-black px-4 py-2 rounded" to="/">Home</Link>
          <Link className="text-white bg-black px-4 py-2 rounded" to="/dashboard">Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
