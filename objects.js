var playlist = {artist:"song title"}

function updatePlaylist(playlist, anotherArtist, anotherSong){
  playlist[anotherArtist]=anotherSong;
  return playlist;
}

function removeFromPlaylist(playlist)