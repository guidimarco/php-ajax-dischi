$(document).ready(function() {
    $.ajax({
        url: "../jquery/dischi.php",
        method: "GET",
        success: function() {
            console.log("ok");
        },
        error: function() {
            console.log("errore");
        }
    })
});
