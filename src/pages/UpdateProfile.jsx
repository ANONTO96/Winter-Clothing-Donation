import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../provider/AuthProvider";
import { Toaster } from "react-hot-toast";

const UpdateProfile = () => {
  const { user, successUpdate, errorToastU } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      // success toast
      successUpdate();
      // Navigate back to dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating profile:", error.message);
      // error toast
      errorToastU();
    }
  };

  return (
  <>
    <Toaster></Toaster>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Update Profile
        </h1>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div className="form-control">
            <label className="label font-semibold">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">Photo URL</label>
            <input
              type="text"
              placeholder="Enter photo URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full mt-4"
          >
            Update Information
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default UpdateProfile;
