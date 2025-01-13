import { Routes, Route } from 'react-router-dom'; // Import necessary routing components
import HomePage from './pages/HomePage';
import EventDetails from './pages/EventDetails';
import AttendeesPage from './pages/AttendeesPage'; // Import new page
import GalleryPage from './pages/GalleryPage'; // Import new page
import UpdatesPage from './pages/UpdatesPage'; // Import Updates Page (this was missing)
import React from 'react';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/event-details" element={<EventDetails />} />
      <Route path="/attendees" element={<AttendeesPage />} />{' '}
      {/* New Route for Attendees */}
      <Route path="/gallery" element={<GalleryPage />} />{' '}
      {/* New Route for Gallery */}
      <Route path="/updates" element={<UpdatesPage />} />{' '}
      {/* New Route for Updates */}
    </Routes>
  );
}

export default App;
