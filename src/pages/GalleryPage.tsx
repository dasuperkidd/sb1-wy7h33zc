import React from 'react';
import Navigation from '../components/Navigation'; // Import Navigation component

function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dublin-gold-light to-white">
      {/* Add Navigation to the Page */}
      <Navigation />

      <h1 className="text-4xl font-bold text-center text-dublin-green-dark py-12">
        Gallery
      </h1>
      <div className="container mx-auto px-4">
        <p className="text-xl text-center text-dublin-green-dark mb-8">
          Enjoy some memories from past reunions and events.
        </p>

        {/* You can replace the divs below with actual image elements */}
        <div className="grid grid-cols-3 gap-4">
          <div className="aspect-square bg-dublin-gold-light rounded"></div>
          <div className="aspect-square bg-dublin-gold-light rounded"></div>
          <div className="aspect-square bg-dublin-gold-light rounded"></div>
          <div className="aspect-square bg-dublin-gold-light rounded"></div>
          <div className="aspect-square bg-dublin-gold-light rounded"></div>
          <div className="aspect-square bg-dublin-gold-light rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
