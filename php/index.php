<?php include "../dischi.php"; ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>php-dischi</title>

        <!-- css -->
        <link rel="stylesheet" href="../dist/app.css">
        
        <!-- jquery -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </head>
    <body>
        <header>
            <div class="container">
                <div class="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png" alt="brand logo spotify">
                </div>

                <select id="select-genre" name="genre">
                    <option value="all">all</option>
                    <?php foreach ($genres as $genre) { ?>
                        <option value="<?php echo $genre; ?>"><?php echo $genre; ?></option>
                    <?php } ?>
                </select>
            </div>
        </header>
        <main>
            <div class="container">
                <div class="album-container">
                    <?php foreach ($request_album as $album) { ?>
                        <div class="album-card">
                            <img src="<?php echo $album["poster"] ?>" alt="<?php echo $album["title"] ?>">
                            <h2><?php echo $album["title"] ?></h2>
                            <p class="author"><?php echo $album["author"] ?></p>
                            <p><?php echo $album["year"] ?></p>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </main>

        <!-- js -->
        <script src="../dist/app.js" charset="utf-8"></script>
    </body>
</html>
