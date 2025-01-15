import { useState } from 'react';
import Navigation from '../components/Navigation';

// Define the type for an attendee
interface Attendee {
  name: string;
}

function AttendeesPage() {
  const [selectedAttendee, setSelectedAttendee] = useState<Attendee | null>(null);

  const openModal = (attendee: Attendee) => {
    setSelectedAttendee(attendee);
  };

  const closeModal = () => setSelectedAttendee(null);

  // Type the attendees array as an array of Attendee objects
  const attendees: Attendee[] = [
  { name: 'Nick Wright' }, 
  { name: 'Janea Watkins' },
  { name: 'Kaitlyn Vanvalkenburg' },
  { name: 'Channing Thomas' }, 
  { name: 'Will Southern'},
  { name: 'Jasmine Smith' } ,
  { name: 'Lyntrell Robinson' },
  { name: 'Mya Ringwood'}, 
  { name: 'Lindsey Price' },
  { name: 'Shanice Pauldo' },
  { name: 'Bobby O\'Neal' },
  { name: 'Demi Murray' },
  { name: 'Jessica Muller'},
  { name: 'Jasmine Montgomery' },
  { name: 'Tyreek Mitchell'},
  { name: 'Lamar McNeil' },
  { name: 'Ali Ward' },
  { name: 'Henry Mason' },
  { name: 'Tameshia Marion' },
  { name: 'Brittany Smith' },
  { name: 'Rachel Marion' },
  { name: 'Destiny Maddox' }, 
  { name: 'Jenniya Lowery' },
  { name: 'Jacinda Lindsey' },
  { name: 'Christian Lewis' },
  { name: 'Kiyara Lanier' },
  { name: 'Essence King' },
  { name: 'Josh Jordan' },
  { name: 'Jahmeka Jones' },
  { name: 'LaCourtney Johnson' },
  { name: 'Tabitha Johns' },
  { name: 'Ervin James' },
  { name: 'Caral Ann Taylor' }, 
  { name: 'Patrese Jackson' }, 
  { name: 'Jamel Jackson' },
  { name: 'Antonio Henley' }, 
  { name: 'Amber Sikes' }, 
  { name: 'Brianna Gibson' },
  { name: 'Kendrick Gainey' },
  { name: 'Ashley Fordham' },
  { name: 'Sasha Duffie' },
  { name: 'Kristen Dixon' },
  { name: 'Tevin Carswell' }, 
  { name: 'Morrow Carr' },
  { name: 'Ashley Ancrum' },
  { name: 'Victoria Allen' },
  { name: 'Tawaski King' },
  { name: 'Ciara Griggs' },
  { name: 'Martez Thomas' },
  { name: 'Kira Carswell' },
  { name: 'Valerie Trimmings' }, 
  { name: 'Dani Palmer' },
  { name: 'Morgan Edwards'},
  {name: 'Dawn Coney' }, 
  { name: 'Gabriel Butler' },
  { name: 'Keyondria O\'Neal' },
  { name: 'Shay Marshall' }, 
  { name: 'Ethan He' },
  { name: 'Derrell O\'Neal' },
  { name: 'Jahmel Carr' },
  { name: 'Shanetra Harden' },
  { name: 'Aniqua Grey' },
  { name: 'Ambria Searles'},
  { name: 'Shelbie Patterson' },
  { name: 'Alisha Royal'},
  { name: 'Kiara Foster'}, 
  { name: 'Monique Dixon' },
  { name: 'Karina Patterson'} ,
  { name: 'Emanuel Gilmore' },
  { name: 'Devonte Johnson' } 
  ];

  

 // Function to generate initials from the name
 const getInitials = (name: string): string => {
  const nameParts = name.split(' ');
  const initials = nameParts.map(part => part.charAt(0).toUpperCase()).join('');
  return initials;
};

return (
  <div className="min-h-screen bg-gradient-to-b from-dublin-gold-light to-white">
    <Navigation />
    <h1 className="text-4xl font-bold text-center text-dublin-green-dark py-12">Attendees</h1>
    <div className="container mx-auto px-4">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {attendees.map((attendee, index) => (
          <li key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg cursor-pointer" onClick={() => openModal(attendee)}>
            <div className="flex items-center space-x-4">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-semibold ${
                  index % 2 === 0 ? 'bg-dublin-green-dark' : 'bg-dublin-gold'
                }`}
              >
                {getInitials(attendee.name)}
              </div>
              <span className="text-lg font-semibold text-dublin-green-dark">{attendee.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>

    {selectedAttendee && (
      <div id="modal-backdrop" className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeModal}>
        <div className="bg-white p-8 rounded-lg" onClick={(e) => e.stopPropagation()}>
          <h2 className="text-2xl font-bold text-dublin-green-dark">{selectedAttendee.name}</h2>
          <button onClick={closeModal} className="mt-4 px-4 py-2 bg-dublin-gold rounded">Close</button>
        </div>
      </div>
    )}
  </div>
);
}

export default AttendeesPage;