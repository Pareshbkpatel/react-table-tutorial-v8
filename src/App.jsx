import { useMemo } from 'react';
import './App.css';

import BasicTable from './components/BasicTable';
import './components/table.css'; // Styles <table> , <tr>, etc

import users from './mock_data/USER_DATA.json';
import movies from './mock_data/MOVIE_DATA.json';

import { userCols } from './mock_data/USER_COLS';
import { movieCols } from './mock_data/MOVIE_COLS';

function App() {
  const userData = useMemo(() => users, []);
  const movieData = useMemo(() => movies, []);

  return (
    <>
      <div>
        <BasicTable
          caption={'Movie-Table'}
          data={movieData}
          columns={movieCols}
        />
      </div>
      <br />
      <br />
      <div>
        <BasicTable
          caption={'User-Table'}
          data={userData}
          columns={userCols}
        />
      </div>
    </>
  );
}

export default App;
