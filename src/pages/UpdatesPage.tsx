import Navigation from '../components/Navigation'; // Import Navigation component

function UpdatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dublin-gold-light to-white">
      {/* Add Navigation to the Page */}
      <Navigation />

      <h1 className="text-4xl font-bold text-center text-dublin-green-dark py-12">
        Updates & Announcements
      </h1>
      <div className="container mx-auto px-4">
        <p className="text-xl text-center text-dublin-green-dark mb-8">
          Stay updated on the latest news and announcements for the reunion!
        </p>

        {/* List of announcements */}
        <div className="space-y-6">
          <div className="p-6 bg-dublin-gold-light rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="font-semibold text-xl">
              Early Bird Registration Now Open!
            </h3>
            <p className="text-dublin-green-dark">
              Register before August 1st for special pricing.
            </p>
          </div>
          <div className="p-6 bg-dublin-gold-light rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="font-semibold text-xl">Share Your Memories</h3>
            <p className="text-dublin-green-dark">
              Upload your favorite DHS photos to the gallery.
            </p>
          </div>
          <div className="p-6 bg-dublin-gold-light rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="font-semibold text-xl">Plus One Fees!</h3>
            <p className="text-dublin-green-dark">
              Don't forget to submit your Plus One Fee of $75 by January 31, 2025.
            </p>
          </div>
          {/* Add more announcements */}
        </div>
      </div>
    </div>
  );
}

export default UpdatesPage;
