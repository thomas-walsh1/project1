'use strict';
const _ = require('lodash');
const playlistStore = {

  playlistCollection: require('./playlist-store.json').playlistCollection,

  getAllPlaylists() {
    return this.playlistCollection;
  },

  getPlaylist(id) {
    let foundPlaylist = null;
    for (let playlist of this.playlistCollection) {
      if (id == playlist.id) {
        foundPlaylist = playlist;
      }
    }

    return foundPlaylist;
  },  removeSong(id, songId) {
    const playlist = this.getPlaylist(id);
    // remove the song with id songId from the playlist
    
  },
  removeSong(id, songId) {
    const playlist = this.getPlaylist(id);
    _.remove(playlist.songs, { id: songId });
  },
    getPlaylist(id) {
    let foundPlaylist = null;
    for (let playlist of this.playlistCollection) {
      if (id == playlist.id) {
        foundPlaylist = playlist;
      }
    }

    return foundPlaylist;
  },
  getPlaylist(id) {
    return _.find(this.playlistCollection, { id: id });
  },
};

module.exports = playlistStore;