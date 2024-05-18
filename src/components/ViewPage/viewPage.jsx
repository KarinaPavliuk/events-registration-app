import { useEffect, useState } from 'react';
import { getUsers } from '../../API/register';
import css from './viewPage.module.css';

const ViewPage = ({ eventId, showView, setShowView }) => {
  const [eventGuests, setEventGuests] = useState([]);
  const [isOpen, setIsOpen] = useState(showView);

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

  const toggleMenuByBackdrop = event => {
    const target = event.target;
    const targetClassName = target.className;
    if (
      typeof targetClassName === 'string' &&
      targetClassName.includes('viewWrapper')
    ) {
      setIsOpen(false);
      setShowView(false);
    }
  };

  return (
    <div
      className={`${css.viewWrapper} ${isOpen && css.open}`}
      onClick={toggleMenuByBackdrop}
    >
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
