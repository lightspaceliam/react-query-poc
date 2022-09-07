import { FC } from 'react';
import './App.css';
import {
  useQuery,
} from '@tanstack/react-query';
import IGithub from './interfaces/IGithub';
import { getAsync } from './helpers/ApiService';

const queryAsync = async (): Promise<IGithub> => {
  return await getAsync<IGithub>('https://api.github.com/repos/tannerlinsley/react-query');
};

const App:FC = (): JSX.Element => {
  const {
    isLoading,
    error,
    data,
  } = useQuery(['repoData'], queryAsync);

  if(error){
    const err = error as Error;
    return <p>Error: {err?.message}</p>
  }

  if(isLoading){
    return <p>Loading...</p>
  }

  console.log('APP');

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Query POC</h1>
        <div>
          {data === undefined
            ? <p>No records</p>
            : (
              <>
                <h2>{data.name}</h2>
                <p>{data.description}</p>
                <strong>👀 {data.subscribers_count}</strong>{' '}
                <strong>✨ {data.stargazers_count}</strong>{' '}
                <strong>🍴 {data.forks_count}</strong>
              </>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
