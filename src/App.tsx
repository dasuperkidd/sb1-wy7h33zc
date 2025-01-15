import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventDetails from './pages/EventDetails';
import AttendeesPage from './pages/AttendeesPage';
import GalleryPage from './pages/GalleryPage';
import UpdatesPage from './pages/UpdatesPage';
import PlaylistPage from './pages/2010PlaylistPage';
import { useEffect, useState } from 'react';
import ProfilesPage from './pages/ProfilePage';
import React from 'react';

interface Announcement {
  id: number;
  message: string;
}

function App() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  const fetchedData: Announcement[] = [
    { id: 1, message: "The reunion date is confirmed: September 12th, 2025!" },
    { id: 2, message: "Check out the schedule for the weekend’s events!" },
    { id: 3, message: "Don't forget to RSVP before the end of the month!" }
  ];

  useEffect(() => {
    setAnnouncements(fetchedData);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage announcements={announcements} />} />
      <Route path="/event-details" element={<EventDetails />} />
      <Route path="/attendees" element={<AttendeesPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/updates" element={<UpdatesPage />} />
      <Route path="/playlist" element={<PlaylistPage />} />
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      <Route path="/profiles" element={<ProfilesPage />} />
    </Routes>
  );
}

export default App;
