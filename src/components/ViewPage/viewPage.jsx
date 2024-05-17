import { useEffect, useState } from 'react';
import { getUsers } from '../../API/register';

const ViewPage = eventId => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>"Awersome Event" participants</h2>
      {users && (
        <ul>
          {users.map(({ _id, name, email }) => (
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
