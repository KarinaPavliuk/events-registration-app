import { useEffect, useState } from 'react';
import { getEvents } from '../../API/events';

const BoardPage = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getEvents();
        setEvents(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <header className="app-header">
        <h1>Events</h1>
      </header>
      <main className="app-main">
        {events && (
          <ul>
            {events.forEach(({ _id, title, description, date, organizer }) => (
              <li key={_id}>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{date}</p>
                <p>{organizer}</p>
                <button>register</button>
                <button>view</button>
              </li>
            ))}
          </ul>
        )}
      </main>
      <footer className="app-footer">
        <button>left</button>
        <p>pagination</p>
        <button>rigt</button>
      </footer>
    </div>
  );
};

export default BoardPage;
