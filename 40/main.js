function make_album(artistName, albumTitle, tracks) {
    var album = {
        artist: artistName,
        title: albumTitle,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Azka", "Album title 1");
var album2 = make_album("Khizer", "Album title 2");
var album3 = make_album("Aafia", "Album title 3", 12);
console.log(album1);
console.log(album2);
console.log(album3);
