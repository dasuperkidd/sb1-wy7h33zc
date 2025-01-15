import { useState } from 'react';

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    profilePicture: '',
    bio: '',
    contactInfo: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileURL = URL.createObjectURL(file);
      setProfile({ ...profile, profilePicture: fileURL });
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>

      {/* Profile Picture */}
      <div className="mb-6">
        {profile.profilePicture ? (
          <img
            src={profile.profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mx-auto"
          />
        ) : (
          <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto flex items-center justify-center">
            <span className="text-gray-700">No Image</span>
          </div>
        )}
        <input type="file" accept="image/*" onChange={handleFileUpload} className="mt-4 block mx-auto" />
      </div>

      {/* Name and Bio */}
      <div className="mb-6">
        <label className="block text-lg font-semibold">Name</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg font-semibold">Short Bio</label>
        <textarea
          name="bio"
          value={profile.bio}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          rows={4}
        />
      </div>

      {/* Save Button */}
      <button className="px-6 py-2 bg-dublin-green text-white rounded hover:bg-dublin-green-dark">
        Save Changes
      </button>
    </div>
  );
};

export default ProfilePage;
