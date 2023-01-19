import './App.css';
import React, { useState, useEffect } from 'react';
import Board from './components/Board';

function App() {
  
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    const res = await fetch('/posts');
    const data = await res.json();
    setPosts(data);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    const intervalCall = setInterval(() => {
      fetchPosts();
    }, 1000);
    return () => {
      clearInterval(intervalCall);
    };
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
      <Board posts={posts} />
  );
}

export default App;
