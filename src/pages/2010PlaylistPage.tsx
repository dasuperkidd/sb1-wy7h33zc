import React from 'react';
import Navigation from '../components/Navigation';

export default function PlaylistPage() {
  return (
    <div style={{ backgroundColor: '#06362D', minHeight: '100vh' }}>
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-white">
          2010 Playlist
        </h1>
        <p className="text-xl text-center text-white mb-8">
          Enjoy the nostalgic tunes from 2010.
        </p>

        {/* Spotify Embed */}
        <div style={{ backgroundColor: '#06362D', padding: '20px', borderRadius: '12px' }}>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/0SLt8SlNT9qjoUM9Wt9knx?utm_source=generator&theme=0"
            width="100%"
            height="704"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}