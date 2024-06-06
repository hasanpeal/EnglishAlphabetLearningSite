# Learn Alphabet

This project is a simple interactive webpage designed to help users learn the alphabet. Users can click on the images or press the corresponding keys on the keyboard to hear the pronunciation of each letter.

## Features

- Displays images of all 26 letters of the alphabet.
- Plays the sound of the corresponding letter when an image is clicked or a key is pressed.
- Animates the image by sliding it up and down when interacted with.

## Technologies Used

- HTML
- CSS
- JavaScript (jQuery)

## Setup and Usage

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/learn-alphabet.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd learn-alphabet
    ```

3. **Ensure your project structure looks like this:**

    ```
    learn-alphabet/
    │
    ├── index.html
    ├── style.css
    ├── index.js
    └── assets/
        ├── images/
        │   ├── A.png
        │   ├── B.png
        │   ├── C.png
        │   ├── D.png
        │   ├── E.png
        │   ├── F.png
        │   ├── G.png
        │   ├── H.png
        │   ├── I.png
        │   ├── J.png
        │   ├── K.png
        │   ├── L.png
        │   ├── M.png
        │   ├── N.png
        │   ├── O.png
        │   ├── P.png
        │   ├── Q.png
        │   ├── R.png
        │   ├── S.png
        │   ├── T.png
        │   ├── U.png
        │   ├── V.png
        │   ├── W.png
        │   ├── X.png
        │   ├── Y.png
        │   ├── Z.png
        └── sounds/
            ├── A.wav
            ├── B.wav
            ├── C.wav
            ├── D.wav
            ├── E.wav
            ├── F.wav
            ├── G.wav
            ├── H.wav
            ├── I.wav
            ├── J.wav
            ├── K.wav
            ├── L.wav
            ├── M.wav
            ├── N.wav
            ├── O.wav
            ├── P.wav
            ├── Q.wav
            ├── R.wav
            ├── S.wav
            ├── T.wav
            ├── U.wav
            ├── V.wav
            ├── W.wav
            ├── X.wav
            ├── Y.wav
            ├── Z.wav
    ```

4. **Open `index.html` in your web browser to view and interact with the project.**

## Code Overview

### HTML (`index.html`)

This file contains the structure of the webpage, including:

- The alphabet images, each with specific class names to identify the letter.
- A footer section with your name and the year.

### CSS (`style.css`)

This file contains the styles for the webpage, including:

- Styling for the header, container, images, and footer.
- Hover effect for the images.

### JavaScript (`index.js`)

This file contains the interactive functionality of the webpage, including:

- Click event listeners for the images to play the corresponding sound and animate the image.
- Keydown event listener to achieve the same effect when a corresponding key is pressed.

```javascript
$(document).ready(function() {
    $("img").on("click", function () {
        var className = $(this).attr("class");
        var secondClass = className.slice(6, 12);
        $("." + secondClass)
            .slideUp()
            .slideDown();
        var slicedName = className.slice(11, 12);
        var audio = new Audio("./assets/sounds/" + slicedName + ".wav");
        audio.play();
    });

    $(document).on("keydown", function (event) {
        var letter = event.key.toUpperCase();
        var targetClass = "image" + letter;
        $("." + targetClass)
            .slideUp()
            .slideDown();
        var audio = new Audio("./assets/sounds/" + letter + ".wav");
        audio.play();
    });
});
