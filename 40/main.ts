function make_album(artistName:string, albumTitle:string,tracks?:number){
    let album: {artist:string, title:string, tracks?:number}={
        artist: artistName,
        title: albumTitle,
};
if (tracks !== undefined){
    album.tracks = tracks;
}
return album;
}
let album1 = make_album("Azka","Album title 1");
let album2 = make_album("Khizer","Album title 2");
let album3 = make_album("Aafia", "Album title 3" , 12);

console.log(album1);
console.log(album2);
console.log(album3);