import React from 'react';

// Define the props type
interface AnnouncementCardProps {
  title: string;
  description: string;
}

// Apply the props type to the component
const AnnouncementCard: React.FC<AnnouncementCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default AnnouncementCard;

