import React from 'react';
import MusicChartContainer from './containers/MusicChartContainer';
import './App.css';

function App() {

  const chooseGenre =
    [{ name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json" },
    { name: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json" },
    { name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json" },
    { name: "Country", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json" }]

  return (
    <div className="App">
      <h1>Music Chart</h1>
      <MusicChartContainer chooseGenre={chooseGenre} />
    </div>
  );
}

export default App;
