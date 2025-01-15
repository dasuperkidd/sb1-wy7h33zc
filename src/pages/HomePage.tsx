import { Calendar, Users, Camera, Bell, Clock, Clover } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Countdown from '../components/Countdown';
import Navigation from '../components/Navigation';

interface Announcement {
  id: number;
  message: string;
}

interface HomePageProps {
  announcements: Announcement[];
}

const HomePage: React.FC<HomePageProps> = ({ announcements }) => {
  const reunionDate = new Date('2025-09-12T18:00:00');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-dublin-gold-light to-white">
      <Navigation />

      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center bg-dublin-green-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-dublin-green-dark/60"></div>
        </div>

        <div className="absolute top-10 left-10 opacity-20">
          <Clover aria-label="Decorative Clover" className="w-24 h-24 text-dublin-gold animate-pulse" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <Clover aria-label="Decorative Clover" className="w-24 h-24 text-dublin-gold animate-pulse" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Clover aria-label="Event Logo" className="w-16 h-16 text-dublin-gold mx-auto mb-4" />
              <h2 className="text-dublin-gold font-bold text-xl mb-2">Dublin High School Presents</h2>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white">
              Class Reunion
              <span className="block text-dublin-gold mt-2">2025</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-dublin-gold-light">Join Your Fellow Fighting Irish for an Unforgettable Evening</p>

            <div className="inline-block mb-12">
              <Countdown targetDate={reunionDate} />
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Event Details Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-dublin-green-dark cursor-pointer hover-card" onClick={() => navigate('/event-details')}>
            <div className="flex items-center mb-4">
              <Calendar aria-label="Event Details" className="w-6 h-6 text-dublin-green-medium mr-2" />
              <h2 className="text-xl font-semibold">Event Details</h2>
            </div>
            <div className="space-y-3">
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-dublin-green">Homecoming Game Tailgate Party</h3>
                <p className="flex items-center">
                  <Clock aria-label="Time" className="w-4 h-4 mr-2 text-dublin-green-medium" />
                  Friday, October 10th, 2025
                </p>
                <p>4:00 PM - 7:00 PM</p>
                <p>Location: The Shamrock Bowl</p>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-dublin-green">The Formal Reunion Dinner</h3>
                <p className="flex items-center">
                  <Clock aria-label="Time" className="w-4 h-4 mr-2 text-dublin-green-medium" />
                  Saturday, October 11th, 2025
                </p>
                <p>6:00 PM - 11:00 PM</p>
                <p>Location: Emory Thomas Auditorium</p>
                <p className="mt-2">Event Theme: "A Night to Remember"</p>
                <p className="mt-2">Guest Speakers: John Doe, Jane Smith</p>
              </div>
            </div>
          </div>

          {/* Attendees Card */}
          <div
            className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-dublin-gold cursor-pointer hover-card"
            onClick={() => navigate('/attendees')}
          >
            <div className="flex items-center mb-4">
              <Users aria-label="Attendees" className="w-6 h-6 text-dublin-gold-dark mr-2" />
              <h2 className="text-xl font-semibold">Attendees</h2>
            </div>
            <p>Join your fellow Fighting Irish!</p>
          </div>

          {/* Announcements Card */}
<div
  className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-dublin-gold cursor-pointer hover-card"
  onClick={() => navigate('/updates')}  // Updated path to /updates
>
  <div className="flex items-center mb-4">
    <Bell aria-label="Announcements" className="w-6 h-6 text-dublin-gold-dark mr-2" />
    <h2 className="text-xl font-semibold">Latest Announcements</h2>
  </div>
  {announcements.length > 0 ? (
    announcements.map((announcement) => (
      <p key={announcement.id} className="text-sm text-dublin-green">
        {announcement.message}
      </p>
    ))
  ) : (
    <p className="text-sm text-dublin-green">No announcements yet. Stay tuned!</p>
  )}
</div>


          {/* Photo Gallery Card */}
          <div
            className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-dublin-green-dark cursor-pointer hover-card"
            onClick={() => navigate('/gallery')}
          >
            <div className="flex items-center mb-4">
              <Camera aria-label="Memory Lane" className="w-6 h-6 text-dublin-green-medium mr-2" />
              <h2 className="text-xl font-semibold">Memory Lane</h2>
            </div>
            <p>Upload and view photos from our high school days.</p>
          </div>
        </div>
      </div>

      <style>
        {`
          .hover-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .hover-card:hover {
            transform: translateY(-8px) scale(1.03);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;

