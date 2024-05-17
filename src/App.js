// import { lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';
import BoardPage from './components/BoardPage/boardPage';
// import './App.css';

// const BoardPage = lazy(() => import('./components/boardPage/boardPage'));
// import { getData } from './API/events';
// import { useEffect } from 'react';

const App = () => {
  return (
    <div>
      <BoardPage></BoardPage>
    </div>
  );
};

export default App;
