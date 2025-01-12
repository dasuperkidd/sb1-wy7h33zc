import React, { useState } from 'react';
import { Clover } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation'; // Assuming you have the Navigation component

function AttendeesPage() {
  const [isOpen, setIsOpen] = useState(false); // Manage mobile menu state
  const [selectedAttendee, setSelectedAttendee] = useState(null); // Store the selected attendee for the modal

  const toggleMenu = () => setIsOpen(!isOpen); // Toggle mobile menu visibility
  const openModal = (attendee) => {
    setSelectedAttendee(attendee); // Set the selected attendee when the card is clicked
  };
  const closeModal = () => setSelectedAttendee(null); // Close the modal

  // Sample attendees data with profile pictures, names, and additional details
  const attendees = [
    {
      name: 'John Doe',
      graduationYear: 2025,
      location: 'Dublin, CA',
      profilePic: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Lover of tech, traveling, and food. Looking forward to reconnecting with old friends!',
      facebook: 'https://facebook.com/johndoe',
      instagram: 'https://instagram.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
    {
      name: 'Jane Smith',
      graduationYear: 2025,
      location: 'San Francisco, CA',
      profilePic: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: "Adventurer, artist, and a big fan of nature. Can't wait for the reunion!",
      facebook: 'https://facebook.com/janesmith',
      instagram: 'https://instagram.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
    },
    {
      name: 'Samuel Harris',
      graduationYear: 2025,
      location: 'Los Angeles, CA',
      profilePic: 'https://randomuser.me/api/portraits/men/65.jpg',
      bio: 'Engineer by day, musician by night. Excited to see old classmates!',
      facebook: 'https://facebook.com/samuelharris',
      instagram: 'https://instagram.com/samuelharris',
      linkedin: 'https://linkedin.com/in/samuelharris',
    },
    // Add more attendees as needed
  ];

  // Handle click outside modal to close it
  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-backdrop') {
      closeModal();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dublin-gold-light to-white">
      {/* Include Navigation */}
      <Navigation />

      <h1 className="text-4xl font-bold text-center text-dublin-green-dark py-12">
        Attendees
      </h1>
      <div className="container mx-auto px-4">
        <p className="text-xl text-center text-dublin-green-dark mb-8">
          Check out the list of attendees for the Dublin High School 2025
          Reunion!
        </p>

        {/* Display List of Attendees */}
        <ul className="space-y-8">
          {attendees.map((attendee, index) => (
            <li
              key={index}
              className="flex items-center space-x-6 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all cursor-pointer"
              onClick={() => openModal(attendee)} // Open the modal with the selected attendee
            >
              <img
                src={attendee.profilePic}
                alt={attendee.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-dublin-gold"
              />
              <div>
                <h3 className="text-xl font-semibold text-dublin-green-dark">
                  {attendee.name}
                </h3>
                <p className="text-lg text-dublin-green-medium">
                  Class of {attendee.graduationYear}
                </p>
                <p className="text-sm text-dublin-green-dark">
                  {attendee.location}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center p-4" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 bg-dublin-green-dark text-white p-4">
          <Link to="/" className="hover:text-dublin-gold transition">
            HomePage
          </Link>
          <Link
            to="/EventsDetails"
            className="hover:text-dublin-gold transition"
          >
            EventsDetails
          </Link>
          <Link
            to="/AttendeesPage"
            className="hover:text-dublin-gold transition"
          >
            AttendeesPage
          </Link>
          <Link to="/GalleryPage" className="hover:text-dublin-gold transition">
            GalleryPage
          </Link>
          <Link to="/UpdatesPage" className="hover:text-dublin-gold transition">
            UpdatesPage
          </Link>
        </div>
      )}

      {/* Modal for Detailed Attendee Information */}
      {selectedAttendee && (
        <div
          id="modal-backdrop"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleOutsideClick} // Close the modal if clicked outside
        >
          <div
            className="bg-white p-8 rounded-lg max-w-3xl w-full space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-xl text-dublin-green-dark"
              onClick={closeModal} // Close the modal
            >
              &times;
            </button>
            <div className="flex items-center space-x-6">
              <img
                src={selectedAttendee.profilePic}
                alt={selectedAttendee.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-dublin-gold"
              />
              <div>
                <h2 className="text-3xl font-bold text-dublin-green-dark">
                  {selectedAttendee.name}
                </h2>
                <p className="text-lg text-dublin-green-medium">
                  Class of {selectedAttendee.graduationYear}
                </p>
                <p className="text-sm text-dublin-green-dark">
                  {selectedAttendee.location}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-dublin-green-dark">
                Bio:
              </h3>
              <p>{selectedAttendee.bio}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-dublin-green-dark">
                Social Links:
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href={selectedAttendee.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dublin-gold hover:underline"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href={selectedAttendee.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dublin-gold hover:underline"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={selectedAttendee.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dublin-gold hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AttendeesPage;
