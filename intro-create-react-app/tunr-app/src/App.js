//* Dependencies
//* ============

//* Packages
//* ========
import React, { Component } from "react";
import data from "./data.json";

//* Component
//* =========

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlists: data,
      artist: "",
      title: "",
      song: "",
      length: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newPlaylist = {
      artist: this.state.artist,
      title: this.state.title,
      song: {
        title: this.state.song,
        length: this.state.length,
      },
    };
    this.setState({playlists: [...this.state.playlists, newPlaylist]})
  };
  render() {
    return (
      <div className="tunr-container">
        <header>
          <h1>TUNR.</h1>
          <h2>{"for all your playlist needs".toUpperCase()}</h2>
        </header>

        <br />

        <div className="playlist">
          <h1>Playlists</h1>

          <div className="songs">
            {this.state.playlists.map((playlist, idx) => (
              <div className="song" key={idx}>
                <h1>{playlist.artist}</h1>
                <h2>{playlist.title}</h2>
                <h3>Songs: </h3>
                <ul>
                  {playlist.songs.map((song, idx) => (
                    <li key={idx}>{song.title}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <form style={{ marginBottom: "20px" }}>
          <label htmlFor="artist">Artist</label>
          <input
            type="text"
            value={this.state.artist}
            id="artist"
            onChange={this.handleChange}
          />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={this.state.title}
            id="title"
            onChange={this.handleChange}
          />
          <label>song</label>
          <input
            type="text"
            value={this.state.song}
            id="song"
            onChange={this.handleChange}
          />
          <label>Song Length</label>
          <input
            type="text"
            value={this.state.length}
            id="length"
            onChange={this.handleChange}
          />

          <input type="submit" onSubmit={this.handleSubmit}/>
        </form>
      </div>
    );
  }
}

//* Export
//* ======
export default App;
