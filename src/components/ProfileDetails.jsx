import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProfileDetails = () => {
  const { id } = useParams(); // Get the profile ID from the URL
  const navigate = useNavigate(); // Navigation hook
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fadeOut, setFadeOut] = useState(false); // State for fade-out effect

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/Accounts/${id}`);
        setProfile(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching profile details:", err);
        setError("Failed to load profile details. Please try again later.");
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  const handleClose = () => {
    setFadeOut(true); // Trigger fade-out before navigation
    setTimeout(() => {
      navigate(-1); // Navigate back after fade-out
    }, 300); // Wait for 300ms (duration of fade-out)
  };

  if (loading) {
    return <p className="text-center mt-4 text-lg animate-pulse">Loading profile details...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-4">{error}</p>;
  }

  return (
    <div
  className={`container mx-auto px-4 my-8 transition-opacity duration-300 ${
    fadeOut ? "opacity-0" : "opacity-100"
  }`}
>
  <div className="relative bg-gradient-to-br from-white via-gray-100 to-gray-200 shadow-xl rounded-lg max-w-md mx-auto p-8 border border-gray-300 hover:shadow-2xl transition-shadow duration-300">
    {/* Profile Details */}
    <div className="flex justify-center">
      <img
        src={profile.image}
        alt={profile.name}
        className="object-cover rounded-full w-32 h-32 border-4 border-purple-500 shadow-lg mb-6 transition-transform duration-300 transform hover:scale-110"
      />
    </div>
    <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-4 hover:text-purple-600 transition-colors duration-300">
      {profile.name}
    </h1>
    <p className="text-gray-700 mb-4 text-center text-lg">{profile.intro}</p>
    <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-300">
  <p className="text-gray-800 mb-3 text-lg font-semibold">
    <strong className="text-purple-400">Rating:</strong> {profile.rating} ⭐
  </p>
  <p className="text-gray-800 mb-3 text-lg font-semibold">
    <strong className="text-purple-400">Price:</strong> {profile.price}
  </p>
  <p className="text-gray-800 mb-3 text-lg font-semibold">
    <strong className="text-purple-400">Review Count:</strong> {profile.reviewCount}
  </p>
  <p className="text-gray-800 mb-3 text-lg font-semibold">
    <strong className="text-purple-400">Task Complexity:</strong> {profile.taskComplexity}
  </p>
 
  <p className="text-gray-800 mb-3 text-lg font-semibold">
    <strong className="text-purple-400">Services:</strong>{" "}
    {profile.about?.services?.join(", ") || "N/A"}
  </p>
  <p className="text-gray-800 mb-3 text-lg font-semibold">
    <strong className="text-purple-400">Benefits:</strong>{" "}
    {profile.about?.benefits?.join(", ") || "N/A"}
  </p>
</div>


    {/* Back Button */}
    <div className="flex justify-center mt-6">
      <button
        onClick={handleClose}
        className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-500 transition duration-300 transform hover:scale-105 hover:shadow-lg"
      >
        Back
      </button>
    </div>
  </div>
</div>

  );
};

export default ProfileDetails;