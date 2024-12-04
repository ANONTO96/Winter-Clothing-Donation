import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user)
  // For navigation to the update profile page
  const navigate = useNavigate();

  if (!user) {
    return navigate('/login');
  }

  const handleUpdateProfile = () => {
    navigate('/update-profile');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-700">
            Welcome, {user.displayName? (user.displayName) : (user.email.split('@')[0])}!
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={user.photoURL || "https://img.icons8.com/?size=100&id=9q3GMpxNIMjC&format=png&color=000000"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-2 mb-4"
          />
          <div className="space-y-2 w-full">
            <p className="text-gray-600">
              <span className="font-semibold">Name:</span> {user.displayName}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
          </div>
          <Link to='/updateProfile'
            onClick={handleUpdateProfile}
            className="mt-6 btn btn-primary w-full"
          >
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
