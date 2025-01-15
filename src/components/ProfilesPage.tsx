import { MapPin } from 'lucide-react';

const EventDetails: React.FC = () => {
  return (
    <div className="event-details">
      <h1 className="text-3xl font-bold mb-4">Reunion Event Details</h1>
      <div className="flex items-center space-x-2">
        <MapPin className="w-5 h-5 text-dublin-gold" />
        <p>123 Reunion Street, Dublin, CA</p>
      </div>
    </div>
  );
};

export default EventDetails;
