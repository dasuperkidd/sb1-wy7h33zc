import { useState } from 'react';
import { Calendar, Clock
 } from 'lucide-react';
import Navigation from '../components/Navigation';

const EventDetails = () => {
  const [showTailgateDetails, setShowTailgateDetails] = useState(false);
  const [showDinnerDetails, setShowDinnerDetails] = useState(false);
  
  const tailgateDate = new Date('2025-10-10T16:00:00');
  const dinnerDate = new Date('2025-10-11T18:00:00');

  const tailgateLocation = "Shamrock Bowl, 123-143 Shamrock Drive, Dublin, Georgia 31021";
  const dinnerLocation = "Emory Thomas Auditorium, 300 Riverview Drive, Dublin, Georgia 31021";

  const handleToggleTailgate = () => setShowTailgateDetails(!showTailgateDetails);
  const handleToggleDinner = () => setShowDinnerDetails(!showDinnerDetails);

  const addToCalendarLink = (eventDate: Date, eventTitle: string, eventLocation: string) => {
    const startDate = eventDate.toISOString().replace(/-|:|\.\d+/g, "");
    const endDate = new Date(eventDate.getTime() + 2 * 60 * 60 * 1000).toISOString().replace(/-|:|\.\d+/g, ""); // Adding a 2-hour duration
    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${startDate}/${endDate}&details=Join+us+for+the+event+at+${eventLocation}&location=${eventLocation}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dublin-gold-light to-white">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-dublin-green mb-4">Event Details</h1>
          <p className="text-xl text-dublin-green-light">Find all the information you need for our upcoming reunion events!</p>
        </div>

        {/* Tailgate Party Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-t-4 border-dublin-green-dark cursor-pointer hover-card" onClick={handleToggleTailgate}>
          <div className="flex items-center mb-4">
            <Calendar className="w-6 h-6 text-dublin-green-medium mr-2" />
            <h2 className="text-xl font-semibold">Homecoming Game Tailgate Party</h2>
          </div>
          
          <p className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-dublin-green-medium" />
            Friday, October 10th, 2025 | 4:00 PM - 7:00 PM
          </p>
          <p className="text-md text-dublin-green mt-2">{tailgateLocation}</p>

          <button onClick={handleToggleTailgate} className="text-dublin-gold mt-4">
            {showTailgateDetails ? 'Show Less' : 'Show More Details'}
          </button>

          {showTailgateDetails && (
            <div className="mt-4 text-dublin-green">
              <p>Join us for an exciting tailgate party before the homecoming game! Food, drinks, and fun await.</p>
              <p className="mt-4"><strong>Dress Code:</strong> Casual & Comfortable</p>
            </div>
          )}

          <div className="mt-6">
            <a
              href={addToCalendarLink(tailgateDate, 'Homecoming Tailgate Party', tailgateLocation)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dublin-green-dark text-white px-6 py-2 rounded-lg"
            >
              Add to Calendar
            </a>
          </div>

          {/* Map */}
          <div className="mt-8">
            <iframe
              title="Tailgate Party Location"
              src={`https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(tailgateLocation)}&key=YOUR_GOOGLE_MAPS_API_KEY`}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Reunion Dinner Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-t-4 border-dublin-green-dark cursor-pointer hover-card" onClick={handleToggleDinner}>
          <div className="flex items-center mb-4">
            <Calendar className="w-6 h-6 text-dublin-green-medium mr-2" />
            <h2 className="text-xl font-semibold">The Formal Reunion Dinner</h2>
          </div>
          
          <p className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-dublin-green-medium" />
            Saturday, October 11th, 2025 | 6:00 PM - 11:00 PM
          </p>
          <p className="text-md text-dublin-green mt-2">{dinnerLocation}</p>

          <button onClick={handleToggleDinner} className="text-dublin-gold mt-4">
            {showDinnerDetails ? 'Show Less' : 'Show More Details'}
          </button>

          {showDinnerDetails && (
            <div className="mt-4 text-dublin-green">
              <p>Dress up and enjoy a formal dinner with speeches, music, and dancing!</p>
              <p className="mt-4"><strong>Dress Code:</strong> Formal Attire</p>
              <p className="mt-4"><strong>Guest Speakers:</strong> John Doe, Jane Smith</p>
            </div>
          )}

          <div className="mt-6">
            <a
              href={addToCalendarLink(dinnerDate, 'Reunion Dinner', dinnerLocation)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dublin-green-dark text-white px-6 py-2 rounded-lg"
            >
              Add to Calendar
            </a>
          </div>

          {/* Map */}
          <div className="mt-8">
            <iframe
              title="Reunion Dinner Location"
              src={`https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(dinnerLocation)}&key=YOUR_GOOGLE_MAPS_API_KEY`}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
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

export default EventDetails;
