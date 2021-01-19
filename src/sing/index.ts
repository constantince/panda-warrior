type Song = {
    name: string,
    singer: string
}



export default function(song: Song) {


    

    return `A song named ${song.name} sang by ${song.singer}`
}