import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Music, Utensils, ArrowLeft, PartyPopper } from 'lucide-react';
import Navigation from '../components/Navigation';

function EventDetails() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-dublin-gold-light to-white">
      <Navigation />
      
      {/* Header */}
      <div className="bg-dublin-green-dark text-white py-20">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-dublin-gold hover:text-dublin-gold-light transition mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Class Reunion 2025</h1>
          <p className="text-xl text-dublin-gold-light">An Evening of Memories and Celebration</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Event Details */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-dublin-green-dark">Event Schedule</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-dublin-gold-light p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-dublin-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">6:00 PM - Welcome Reception</h3>
                    <p className="text-gray-600">Registration and cocktail hour with light appetizers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-dublin-gold-light p-3 rounded-lg">
                    <Utensils className="w-6 h-6 text-dublin-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">7:00 PM - Dinner Service</h3>
                    <p className="text-gray-600">Elegant plated dinner with vegetarian options available</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-dublin-gold-light p-3 rounded-lg">
                    <PartyPopper className="w-6 h-6 text-dublin-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">8:00 PM - Program & Awards</h3>
                    <p className="text-gray-600">Class memories, awards, and special presentations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-dublin-gold-light p-3 rounded-lg">
                    <Music className="w-6 h-6 text-dublin-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">9:00 PM - Dancing & Entertainment</h3>
                    <p className="text-gray-600">Live music and dancing until 11:00 PM</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-dublin-green-dark">What to Expect</h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">Join us for an unforgettable evening celebrating our time at Dublin High School. The event will feature:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Professional photographer for individual and group photos</li>
                  <li>Memory wall featuring submitted photos and memorabilia</li>
                  <li>Special presentations from faculty and distinguished alumni</li>
                  <li>Silent auction benefiting the DHS scholarship fund</li>
                  <li>Dancing and entertainment featuring hits from our school years</li>
                </ul>
                <p>Dress code is cocktail attire. Don't forget to wear your Dublin High spirit!</p>
              </div>
            </section>
          </div>

          {/* Right Column - Quick Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-dublin-green-dark">Event Details</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-dublin-green-medium mr-3" />
                  <div>
                    <p className="font-semibold">Saturday, October 11th, 2025</p>
                    <p className="text-sm text-gray-600">6:00 PM - 11:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-dublin-green-medium mr-3" />
                  <div>
                    <p className="font-semibold">Dublin High School Grand Hall</p>
                    <p className="text-sm text-gray-600">8151 Village Parkway</p>
                    <p className="text-sm text-gray-600">Dublin, CA 94568</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-dublin-green-dark">Ticket Information</h2>
              <div className="space-y-4">
                <div className="p-4 bg-dublin-gold-light rounded-lg">
                  <p className="font-semibold">Early Bird Special</p>
                  <p className="text-2xl font-bold text-dublin-green-dark">$85</p>
                  <p className="text-sm text-gray-600">Until August 1st, 2025</p>
                </div>
                <div className="p-4 border border-dublin-gold rounded-lg">
                  <p className="font-semibold">Regular Admission</p>
                  <p className="text-2xl font-bold text-dublin-green-dark">$110</p>
                  <p className="text-sm text-gray-600">After August 1st, 2025</p>
                </div>
                <button className="w-full bg-dublin-gold hover:bg-dublin-gold-dark text-dublin-green-dark font-bold py-3 px-6 rounded-lg transition">
                  Purchase Tickets
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-dublin-green-dark">Questions?</h2>
              <p className="text-gray-600 mb-4">Contact the reunion committee at:</p>
              <a href="mailto:reunion2025@dublinhs.org" className="text-dublin-green-medium hover:text-dublin-green-dark">
                reunion2025@dublinhs.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;