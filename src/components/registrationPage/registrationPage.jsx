import { useEffect, useState } from 'react';
import { getUsers, register } from '../../API/register';
import css from './registrationPage.module.css';

const RegistrationPage = ({ eventId, showRegister, setShowRegister }) => {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(showRegister);

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
    const event = eventId;

    const regiterUser = users.some(user => user.email === email);

    if (regiterUser) {
      alert('You are already registered 😀');
    } else {
      register({ name, email, date, radio, event });
      setIsOpen(false);
      setShowRegister(false);
      alert('You are successfully registered 😉');
    }
  };

  const toggleMenuByBackdrop = event => {
    const target = event.target;
    const targetClassName = target.className;
    if (
      typeof targetClassName === 'string' &&
      targetClassName.includes('registrationWrapper')
    ) {
      setIsOpen(false);
      setShowRegister(false);
    }
  };

  return (
    <div
      className={`${css.registrationWrapper} ${isOpen && css.open}`}
      onClick={toggleMenuByBackdrop}
    >
      <div className={css.registerFormWrapper}>
        <h2>Event registration</h2>
        <form className={css.registerForm} onSubmit={handleSubmit}>
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

          <button className={css.submitButton} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
