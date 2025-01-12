import React from 'react';

function AnnouncementCard({ title, description }) {
  return (
    <div className="p-6 bg-dublin-gold-light rounded-lg shadow-lg">
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-dublin-green-dark">{description}</p>
    </div>
  );
}

export default AnnouncementCard;
