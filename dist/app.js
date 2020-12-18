/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

// GLOBAL VAR
var all_genre = []; // array of all-genre

$(document).ready(function () {
  // handlebar album card
  var album_card_html = document.getElementById("album-card-template").innerHTML;
  var album_card_template = Handlebars.compile(album_card_html);

  function print_album_card(album_array) {
    // get all album-info
    album_array.forEach(function (album) {
      // obj-info
      var album_info = {
        poster: album.poster,
        title: album.title,
        author: album.author,
        year: album.year
      };
      var final_album_html = album_card_template(album_info); // append in container

      $(".album-container").append(final_album_html);
    });
  }

  ; // print in the template
  // ajax version

  if ($("#jquery-vers").length) {
    var print_genre_option = function print_genre_option(genre_array) {
      // get all album-info
      genre_array.forEach(function (genre_value) {
        // obj-info
        var genre_info = {
          genre: genre_value
        };
        var final_genre_html = genre_template(genre_info); // append in select

        $("#select-genre").append(final_genre_html);
      });
    };

    // print in the template
    var get_genre = function get_genre(album_array) {
      var genre_array = []; // console.log(album_array);

      album_array.forEach(function (album) {
        // get all album.genre and push in array if not includes
        if (!genre_array.includes(album.genre)) {
          genre_array.push(album.genre);
        }
      }); // console.log(genre_array);

      return genre_array;
    };

    // handlebar genre option
    var genre_html = document.getElementById("genre-template").innerHTML;
    var genre_template = Handlebars.compile(genre_html);
    ;
    ; // return an array of all genre
  } // 1° ajax call -- only ajax version


  if ($("#jquery-vers").length) {
    $.ajax({
      url: "../dischi.php",
      method: "GET",
      data: {
        genre: "all"
      },
      success: function success(dischi) {
        // console.log(dischi);
        print_album_card(dischi); // print all card

        all_genre = get_genre(dischi); // get all genre
        // console.log(all_genre);

        print_genre_option(all_genre); // print all genre
      },
      error: function error() {
        console.log("errore");
      }
    });
  }

  ; // change on select-value

  $("#select-genre").on("change", function () {
    // ajax call -- after select-value change
    $.ajax({
      url: "../dischi.php",
      method: "GET",
      data: {
        genre: this.value
      },
      success: function success(dischi) {
        $(".album-container").empty(); // empty the page

        print_album_card(dischi); // print all card
      },
      error: function error() {
        console.log("errore");
      }
    });
  });
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/app.js ./src/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\MAMP\htdocs\boolean\20201217_php-ajax-dischi\php-ajax-dischi\src\app.js */"./src/app.js");
module.exports = __webpack_require__(/*! C:\MAMP\htdocs\boolean\20201217_php-ajax-dischi\php-ajax-dischi\src\app.scss */"./src/app.scss");


/***/ })

/******/ });