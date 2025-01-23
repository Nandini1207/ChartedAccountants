import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]); // To store all profiles
  const [filteredProfiles, setFilteredProfiles] = useState([]); // To store filtered profiles
  const [searchQuery, setSearchQuery] = useState(""); // To store the search input
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false); // To toggle suggestion visibility

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get("http://localhost:3000/Accounts"); // Correct endpoint
        setProfiles(response.data);
        setFilteredProfiles(response.data); // Initialize filteredProfiles with all profiles
        setLoading(false);
      } catch (err) {
        console.error("Error fetching profiles:", err);
        setError("Failed to load profiles. Please try again later.");
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  const handleSearch = () => {
    // Filter profiles based on the search query
    const filtered = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };

  const handleKeyPress = (e) => {
    // Trigger search when Enter key is pressed
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearchQueryChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value === "") {
      setFilteredProfiles(profiles); // If search is empty, reset to all profiles
      setShowSuggestions(false); // Hide suggestions when input is empty
    } else {
      handleSearch(); // Trigger search when text is entered
      setShowSuggestions(true); // Show suggestions
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.name); // Auto-fill input with selected name
    setFilteredProfiles([suggestion]); // Show only the clicked suggestion's profile
    setShowSuggestions(false); // Hide suggestions after selection
  };

  if (loading) {
    return <p className="text-center mt-4 text-lg animate-pulse">Loading profiles...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-4">{error}</p>;
  }

  return (
    <div className="container mx-auto px-4 my-8">
  <h1 className="text-center text-3xl font-bold mb-6 text-purple-700">
    Chartered Accountants
  </h1>

  {/* Search Bar */}
  <div className="flex justify-center mb-4 relative">
    <input
      type="text"
      className="w-1/2 p-3 border border-gray-400 text-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      placeholder="Search Accountants..."
      value={searchQuery}
      onChange={handleSearchQueryChange} // Update search query and handle filtering
      onKeyDown={handleKeyPress} // Listen for the Enter key press
    />
    {/* Suggestions Dropdown */}
    {showSuggestions && searchQuery && (
      <div className="absolute mt-11 bg-white shadow-lg border border-gray-300 rounded-lg max-h-60 overflow-auto w-1/2 z-10">
        {profiles
          .filter((profile) =>
            profile.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((suggestion) => (
            <div
              key={suggestion.id}
              className="px-4 py-2 cursor-pointer hover:text-center hover:bg-purple-200 text-gray-700"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.name}
            </div>
          ))}
        {profiles.filter((profile) =>
          profile.name.toLowerCase().includes(searchQuery.toLowerCase())
        ).length === 0 && (
          <div className="px-4 py-2 text-gray-500">No suggestions</div>
        )}
      </div>
    )}
  </div>

  {/* Profile Cards */}
  <div
    className={`grid ${
      filteredProfiles.length === 1
        ? "grid-cols-1 place-items-center"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
    } gap-6 mt-6`}
  >
    {filteredProfiles.length > 0 ? (
      filteredProfiles.map((profile) => (
        <div
          key={profile.id}
          className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300"
        >
          <div className="relative flex justify-center mt-4">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-purple-500 shadow-lg transition-transform duration-300 transform group-hover:scale-110"
            />
          </div>
          <div className="p-4 flex flex-col">
            <h5 className="text-lg font-semibold mb-2 text-center text-purple-700">
              {profile.name}
            </h5>
            <p className="text-sm text-gray-600 mb-4 text-center">
              {profile.intro.length > 60
                ? `${profile.intro.slice(0, 60)}...`
                : profile.intro}
            </p>

            <Link
              to={`/details/${profile.id}`}
              className="mt-auto text-center bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition duration-300"
            >
              Details
            </Link>
          </div>
        </div>
      ))
    ) : (
      <p className="text-center col-span-full text-gray-700">
        No results found
      </p>
    )}
  </div>
</div>

  );
};

export default Profiles;