<?php include "../dischi.php"; ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>php-dischi</title>

        <!-- css -->
        <link rel="stylesheet" href="../dist/app.css">
    </head>
    <body>
        <header>
            <div class="container">
                <div class="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png" alt="brand logo spotify">
                </div>
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
    </body>
</html>
