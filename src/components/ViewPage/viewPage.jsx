import { useEffect, useState } from 'react';
import { getUsers } from '../../API/register';
import css from './viewPage.module.css';

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
  }, [eventId]);

  return (
    <div className={css.viewWrapper}>
      <div className={css.viewContent}>
        <h2 className={css.viewHeading}>"Awersome Event" participants</h2>
        {eventGuests && (
          <ul className={css.viewList}>
            {eventGuests.map(({ _id, name, email }) => (
              <li className={css.viewItem} key={_id}>
                <p>{name}</p>
                <p>{email}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ViewPage;
