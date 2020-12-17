$(document).ready(function() {
    // handlebar album card
    const album_card_html = document.getElementById("album-card-template").innerHTML;
    const album_card_template = Handlebars.compile(album_card_html);

    // ajax call
    $.ajax({
        url: "../jquery/dischi.php",
        method: "GET",
        success: function(dischi) {
            // console.log(dischi);

            // get all album-info
            dischi.forEach((album) => {
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
        },
        error: function() {
            console.log("errore");
        }
    })
});
