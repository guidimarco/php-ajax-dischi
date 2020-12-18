// GLOBAL VAR
let all_genre = []; // array of all-genre

$(document).ready(function() {
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

    // ajax version
    if ($("#jquery-vers").length) {
        // handlebar genre option
        const genre_html = document.getElementById("genre-template").innerHTML;
        const genre_template = Handlebars.compile(genre_html);

        function print_genre_option(genre_array) {
            // get all album-info
            genre_array.forEach((genre_value) => {
                // obj-info
                var genre_info = {
                    genre: genre_value,
                };
                var final_genre_html = genre_template(genre_info);

                // append in select
                $("#select-genre").append(final_genre_html);
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
    }

    // 1° ajax call -- only ajax version
    if ($("#jquery-vers").length) {
        $.ajax({
            url: "../dischi.php",
            method: "GET",
            data: {
                genre: "all",
            },
            success: function(dischi) {
                // console.log(dischi);
                print_album_card(dischi); // print all card
                all_genre = get_genre(dischi); // get all genre
                // console.log(all_genre);
                print_genre_option(all_genre); // print all genre
            },
            error: function() {
                console.log("errore");
            }
        });
    };

    // change on select-value
    $("#select-genre").on("change", function() {
        // ajax call -- after select-value change
        $.ajax({
            url: "../dischi.php",
            method: "GET",
            data: {
                genre: this.value,
            },
            success: function(dischi) {
                $(".album-container").empty(); // empty the page

                print_album_card(dischi); // print all card
            },
            error: function() {
                console.log("errore");
            }
        });
    });
});
