import './App.css';
// import { getData } from './API/events';
// import { useEffect } from 'react';

function App() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getData();
  //       console.log(data)
  //     } catch (message) {
  //       setError(message);
  //     } 
  //   }

  //   fetchData();
  // }, [])

  return (
    <div className="app">
      <header className="app-header">
        <h1>Events</h1>
      </header>
      <main className="app-main">
        <ul>
          <li>
            <h2>title</h2>
            <p>description</p>
            <p>event date</p>
            <p>organizer</p>
            <button>register</button>
            <button>view</button>
          </li>
        </ul>
      </main>
      <footer className="app-footer">
        <button>left</button>
        <p>pagination</p>
        <button>rigt</button>
      </footer>
    </div>
  );
}

export default App;
