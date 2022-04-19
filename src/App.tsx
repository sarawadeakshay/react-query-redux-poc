/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import './App.scss';
import Characters from './components/characters/Characters';
import Characters1 from './components/characters/Characters1';
import CharDetail from './components/characters/CharDetail';
import { UserContext } from './components/characters/UserContext';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={{ name: 'Jason Smith', email: 'jason.smith@gmail.com', age: 42 }}>
        <div>learn react</div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Characters />} />
            <Route path='/1' element={<Characters1 />} />
            <Route path='/char/:id' element={<CharDetail />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
