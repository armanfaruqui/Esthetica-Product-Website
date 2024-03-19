document
  .getElementById("playlist-placeholder")
  .addEventListener("click", function () {
    const playlistUrl = prompt(
      "Please enter the link of your Spotify playlist:"
    );
    if (
      playlistUrl &&
      playlistUrl.startsWith("https://open.spotify.com/playlist/")
    ) {
      const embedUrl = playlistUrl.replace(
        "open.spotify.com",
        "open.spotify.com/embed"
      );
      document.getElementById("playlist-placeholder").style.display = "none";
      document.getElementById("playlist-iframe").style.display = "block";
      document.getElementById("spotify-iframe").src =
        embedUrl + "?utm_source=generator";
    } else {
      alert("Invalid Spotify playlist link. Please try again.");
    }
  });
