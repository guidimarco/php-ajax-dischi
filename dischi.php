<?php
    $dischi = [
        [
            'poster' => 'https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg',
            'title' => 'New Jersey',
            'author' => 'Bon Jovi',
            'genre' => 'Rock',
            'year' => '1988'
        ],
        [
            'poster' => 'https://images-na.ssl-images-amazon.com/images/I/51NrqJ85VXL._AC_SX425_.jpg',
            'title' => 'Live at Wembley 86',
            'author' => 'Queen',
            'genre' => 'Pop',
            'year' => '1992'
        ],
        [
            'poster' => 'https://images-na.ssl-images-amazon.com/images/I/41JD3CW65HL.jpg',
            'title' => 'Ten\'s Summoner\'s Tales',
            'author' => 'Sting',
            'genre' => 'Pop',
            'year' => '1993'
        ],
        [
            'poster' => 'https://cdn2.jazztimes.com/2018/05/SteveGadd-800x723.jpg',
            'title' => 'Steve Gadd Band',
            'author' => 'Steve Gadd Band',
            'genre' => 'Jazz',
            'year' => '2018'
        ],
        [
            'poster' => 'https://images-na.ssl-images-amazon.com/images/I/810nSIQOLiL._SY355_.jpg',
            'title' => 'Brave new World',
            'author' => 'Iron Maiden',
            'genre' => 'Metal',
            'year' => '2000'
        ],
        [
            'poster' => 'https://upload.wikimedia.org/wikipedia/en/9/97/Eric_Clapton_OMCOMR.jpg',
            'title' => 'One more car, one more raider',
            'author' => 'Eric Clapton',
            'genre' => 'Rock',
            'year' => '2002'
        ],
        [
            'poster' => 'https://images-na.ssl-images-amazon.com/images/I/51rggtPgmRL.jpg',
            'title' => 'Made in Japan',
            'author' => 'Deep Purple',
            'genre' => 'Rock',
            'year' => '1972'
        ],
        [
            'poster' => 'https://images-na.ssl-images-amazon.com/images/I/81r3FVfNG3L._SY355_.jpg',
            'title' => 'And Justice for All',
            'author' => 'Metallica',
            'genre' => 'Metal',
            'year' => '1988'
        ],
        [
            'poster' => 'https://img.discogs.com/KOBsqQwKiNKH-q927oHMyVdDzSo=/fit-in/596x596/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6406665-1418464475-6120.jpeg.jpg',
            'title' => 'Hard Wired',
            'author' => 'Dave Weckl',
            'genre' => 'Jazz',
            'year' => '1994'
        ],
        [
            'poster' => 'https://m.media-amazon.com/images/I/71K9CbNZPsL._SS500_.jpg',
            'title' => 'Bad',
            'author' => 'Michael Jackson',
            'genre' => 'Pop',
            'year' => '1987'
        ]
    ]; // all-album
    $genres = get_genres($dischi); // all-genres

    // if ajax-request not empty && !== "all"
    if (!empty($_GET) && !empty($_GET["genre"] !== "all")) {
        // filter --> dischi
        $genre = $_GET["genre"];

        $request_album = request_album($dischi, $genre);
    } else {
        // no filtering
        $request_album = $dischi;
    }

    // condition: è un x-requested-with di tipo "XMLHttpRequest" (richiesta di header nella chiamata)
    if (!empty($_SERVER["HTTP_X_REQUESTED_WITH"]) && (strtolower($_SERVER["HTTP_X_REQUESTED_WITH"]) == "xmlhttprequest")) {
        header('Content-Type: application/json');
        echo json_encode($request_album);
    }

    // ALL-FUNCTION
    function is_genre($album, $this_genre) {
        return $album["genre"] == $this_genre;
    }; // return true if album has current genre
    function request_album($array_dischi, $this_genre) {
        $new_array = [];
        if ($this_genre == "all") {
            $new_array = $array_dischi;
        } else {
            foreach ($array_dischi as $album) {
                if (is_genre($album, $this_genre)) {
                    array_push($new_array, $album);
                }
            }
        }
        return $new_array;
    }; // push request album (from genre)
    function get_genres($array_dischi) {
        $all_genres = [];

        foreach ($array_dischi as $disco) {
            if (!in_array($disco["genre"], $all_genres)) {
                $all_genres[] = $disco["genre"];
            }
        }

        return $all_genres;
    }; // return array of genres (str)
?>
