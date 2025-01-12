import { Calendar, Users, Camera, Bell, Clock, Clover } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Countdown from '../components/Countdown';
import Navigation from '../components/Navigation';

function HomePage() {
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
          <Clover className="w-24 h-24 text-dublin-gold animate-pulse" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <Clover className="w-24 h-24 text-dublin-gold animate-pulse" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Clover className="w-16 h-16 text-dublin-gold mx-auto mb-4" />
              <h2 className="text-dublin-gold font-bold text-xl mb-2">
                Dublin High School Presents
              </h2>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white">
              Class Reunion
              <span className="block text-dublin-gold mt-2">2025</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-dublin-gold-light">
              Join Your Fellow Fighting Irish for an Unforgettable Evening
            </p>

            <div className="inline-block mb-12">
              <Countdown targetDate={reunionDate} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-dublin-gold hover:bg-dublin-gold-dark text-dublin-green-dark font-bold px-8 py-3 rounded-lg transform hover:scale-105 transition-all">
                RSVP Now
              </button>
              <button className="border-2 border-dublin-gold text-dublin-gold hover:bg-dublin-gold hover:text-dublin-green-dark font-bold px-8 py-3 rounded-lg transform hover:scale-105 transition-all">
                View Schedule
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Event Details Card */}
          <div
            className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-dublin-green-dark cursor-pointer transform hover:scale-105 transition-all"
            onClick={() => navigate('/event-details')}
          >
            <div className="flex items-center mb-4">
              <Calendar className="w-6 h-6 text-dublin-green-medium mr-2" />
              <h2 className="text-xl font-semibold">Event Details</h2>
            </div>
            <div className="space-y-3">
              <p className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-dublin-green-medium" />
                Saturday, October 11th, 2025
              </p>
              <p>6:00 PM - 11:00 PM</p>
              <p>Dublin High School Grand Hall</p>
            </div>
          </div>

          {/* Attendee List Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-dublin-gold">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-dublin-gold-dark mr-2" />
              <h2 className="text-xl font-semibold">Attendees</h2>
            </div>
            <p className="mb-4">Join your fellow Fighting Irish!</p>
            <button className="bg-dublin-gold hover:bg-dublin-gold-dark text-dublin-green-dark font-semibold px-4 py-2 rounded transition">
              RSVP Now
            </button>
          </div>

          {/* Photo Gallery Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-dublin-green-dark">
            <div className="flex items-center mb-4">
              <Camera className="w-6 h-6 text-dublin-green-medium mr-2" />
              <h2 className="text-xl font-semibold">Memory Lane</h2>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square bg-dublin-gold-light rounded"></div>
              <div className="aspect-square bg-dublin-gold-light rounded"></div>
              <div className="aspect-square bg-dublin-gold-light rounded"></div>
            </div>
          </div>

          {/* Announcements Card */}
          <div className="md:col-span-2 lg:col-span-3 bg-white rounded-lg shadow-lg p-6 border-t-4 border-dublin-gold">
            <div className="flex items-center mb-4">
              <Bell className="w-6 h-6 text-dublin-gold-dark mr-2" />
              <h2 className="text-xl font-semibold">Latest Announcements</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-dublin-gold-light rounded-lg">
                <h3 className="font-semibold">
                  Early Bird Registration Now Open!
                </h3>
                <p className="text-dublin-green-dark">
                  Register before August 1st for special pricing.
                </p>
              </div>
              <div className="p-4 bg-dublin-gold-light rounded-lg">
                <h3 className="font-semibold">Share Your Memories</h3>
                <p className="text-dublin-green-dark">
                  Upload your favorite DHS photos to the gallery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
