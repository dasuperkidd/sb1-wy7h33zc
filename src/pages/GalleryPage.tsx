// import React from 'react'; // Remove this line
import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import React from 'react';

function GalleryPage() {
  // Define local image links
  const imageLinks = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    // Add more image paths as needed
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dublin-gold-light to-white">
      <Navigation />

      <h1 className="text-4xl font-bold text-center text-dublin-green-dark py-12">
        Gallery
      </h1>
      <div className="container mx-auto px-4">
        <p className="text-xl text-center text-dublin-green-dark mb-8">
          Enjoy some memories from past reunions and events.
        </p>

        <div className="grid grid-cols-3 gap-4">
          {imageLinks.length > 0 ? (
            imageLinks.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Reunion Memory ${index + 1}`}
                className="aspect-square object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            ))
          ) : (
            <p className="text-center text-dublin-green-dark col-span-3">
              No images available yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;