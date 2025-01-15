import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';

function GalleryPage() {
  // Explicitly define the type as string[]
  const [imageLinks, setImageLinks] = useState<string[]>([]);

  useEffect(() => {
    // Simulate fetching image links (replace with actual fetch if needed)
    const fetchImages = () => {
      const links: string[] = [
        'https://www.dropbox.com/scl/fi/k0z2z67ibefxpiuquoqvx/Photo-Jan-10-2025-8-07-01-AM-3-1.jpg?rlkey=4ml31qzfgo5pryxmf58fefur1&st=y2f85fqe&raw=1',
        'https://www.dropbox.com/scl/fi/wkw4582feh12oriwpqjdw/Photo-Jan-10-2025-8-07-01-AM-1.jpg?rlkey=zq3irowzigaiw9ovxf90m0dgs&st=9qvbm6ih&raw=1',
        'https://www.dropbox.com/scl/fi/8rdpm1967wwt2ydw7c72n/Photo-Nov-30-2024-1-12-19-PM.jpg?rlkey=3zfe1tiam1rpf5kozd9bsg8bo&st=xn33f2gi&raw=1',
        'https://www.dropbox.com/scl/fi/vqbiqckah4mx3bbbxrufb/Photo-Nov-25-2024-9-42-00-PM-16.jpg?rlkey=d4g7ezxcg4tfhl7qtruzqowmt&st=tlxsfgla&raw=1',
        'https://www.dropbox.com/scl/fi/glbdsu9t9igzjd0rtd3k6/Photo-Nov-25-2024-9-42-00-PM-15.jpg?rlkey=qp8y9cuycp4t10cxt9dhytaoq&st=conxdvnd&raw=1',
      ];
      setImageLinks(links);  // No more TypeScript error
    };

    fetchImages();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-dublin-gold-light to-white">
      <Navigation />

      <h1 className="text-4xl font-bold text-center text-dublin-green-dark py-12">
        Gallery
      </h1>
      <div className="container mx-auto px-4">
        <p className="text-xl text-center text-dublin-green-dark mb-8">
          Enjoy some memories from the past.
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
