import { useEffect, useState } from 'react';
import { getEvents } from '../../API/events';
import Pagination from '../Pagination/pagination';
import RegistrationPage from '../RegistrationPage/registrationPage';
import ViewPage from '../ViewPage/viewPage';

const BoardPage = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [showRegister, setShowRegister] = useState(false);
  const [showView, setShowView] = useState(false);
  const [eventId, setEventId] = useState(null);

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = events.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => {
    if (
      pageNumber > 0 &&
      pageNumber <= Math.ceil(events.length / itemsPerPage)
    ) {
      setCurrentPage(pageNumber);
    }
  };

  const handleRegisterClick = id => {
    setEventId(id.toString());
    setShowRegister(true);
  };

  const handleViewClick = id => {
    setEventId(id.toString());
    setShowView(true);
  };

  return (
    <div>
      <header className="app-header">
        <h1>Events</h1>
      </header>
      <main className="app-main">
        {events && (
          <ul>
            {currentItems.map(
              ({ _id, title, description, date, organizer }) => (
                <li key={_id}>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <p>{date}</p>
                  <p>{organizer}</p>
                  <button
                    onClick={() => handleRegisterClick(_id)}
                    type="button"
                  >
                    Register
                  </button>
                  <button onClick={() => handleViewClick(_id)} type="button">
                    View
                  </button>
                </li>
              )
            )}
          </ul>
        )}
      </main>
      <footer className="app-footer">
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={events.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </footer>
      {showRegister && <RegistrationPage eventId={eventId} />}
      {showView && <ViewPage eventId={eventId} />}
    </div>
  );
};

export default BoardPage;
