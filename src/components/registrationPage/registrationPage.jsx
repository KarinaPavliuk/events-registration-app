import { useEffect, useState } from 'react';
import { getUsers, register } from '../../API/register';

const RegistrationPage = eventId => {
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

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const radio = form.radio.value;
    const event = form.event.value;

    const regiterUser = users.some(user => user.email === email);

    if (regiterUser) {
      alert('You are already registered 😀');
    } else {
      register({ name, email, date, radio });
      alert('You are successfully registered 😉');
    }
  };

  return (
    <div>
      <h2>Event registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          // className={css.input}
          type="text"
          id="name"
          name="name"
          autoComplete="given-name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          // className={css.input}
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
        />
        <label htmlFor="date">Date of birth</label>
        <input
          // className={css.input}
          type="text"
          id="date"
          name="date"
          // autoComplete="date"
          required
        />
        <fieldset>
          <legend>Where did you hear about this event?</legend>

          <div>
            <input
              type="radio"
              id="social"
              name="radio"
              value="Social media"
              // checked
            />
            <label htmlFor="social">Social media</label>
          </div>

          <div>
            <input type="radio" id="friends" name="radio" value="Friends" />
            <label htmlFor="friends">Friends</label>
          </div>

          <div>
            <input type="radio" id="myself" name="radio" value="Myself" />
            <label htmlFor="myself">Myself</label>
          </div>
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
