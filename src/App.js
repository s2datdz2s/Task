import React from 'react';
import PostsList from './features/posts/PostsList';
import PostForm from './features/posts/PostForm';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <PostForm />
      <PostsList />
    </div>
  );
}

export default App;
