import React from 'react';
import './App.css';
import Posts from './components/Posts';
import PostsForm from './components/PostsForm';
import { Provider } from 'react-redux';

import store from './store'



function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <PostsForm />
        <Posts />
      </Provider>
    </div>
  );
}

export default App;
