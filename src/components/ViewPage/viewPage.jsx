import { useEffect, useState } from 'react';
import { getUsers } from '../../API/register';

const ViewPage = ({ eventId }) => {
  const [eventGuests, setEventGuests] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        const guests = response.filter(guest => guest.event === eventId);
        setEventGuests(guests);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>"Awersome Event" participants</h2>
      {eventGuests && (
        <ul>
          {eventGuests.map(({ _id, name, email }) => (
            <li key={_id}>
              <p>{name}</p>
              <p>{email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewPage;
