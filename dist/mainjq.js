// GLOBAL VAR
let all_genre = []; // array of all-genre

// handlebar album card
const album_card_html = document.getElementById("album-card-template").innerHTML;
const album_card_template = Handlebars.compile(album_card_html);

function print_album_card(album_array) {
    // get all album-info
    album_array.forEach((album) => {
        // obj-info
        var album_info = {
            poster: album.poster,
            title: album.title,
            author: album.author,
            year: album.year
        };
        var final_album_html = album_card_template(album_info);

        // append in container
        $(".album-container").append(final_album_html);
    });
}; // print in the template
function get_genre(album_array) {
    let genre_array = [];
    // console.log(album_array);

    album_array.forEach((album) => {
        // get all album.genre and push in array if not includes
        if (!genre_array.includes(album.genre)) {
            genre_array.push(album.genre);
        }
    });
    // console.log(genre_array);
    return genre_array;
}; // return an array of all genre

$(document).ready(function() {
    // 1° ajax call
    $.ajax({
        url: "../jquery/dischi.php",
        method: "GET",
        success: function(dischi) {
            // console.log(dischi);
            print_album_card(dischi); // print all card
            all_genre = get_genre(dischi); // get all genre
            console.log(all_genre);
        },
        error: function() {
            console.log("errore");
        }
    })

    $("#select-genre").on("change", function() {
        console.log(this.value);
    });
});
