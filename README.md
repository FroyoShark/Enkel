Enkel
=====

![alt tag](http://i.imgur.com/CteWDar.png)
Enkel icon pack for Mac OS. Enkel is Swedish for Simple.

    Enkel (Swedish)
    Adjective
    plain, simple; containing only the most fundamental parts

This icon pack was created by FroyoShark, AKA Undefined Variable. It is inspired by Google's Material Design, but made for Mac OS X applications. This project began with four icons, but due to the immense feedback I received, I decided to pursue making this my first complete icon pack. I hope you enjoy it!

Google Drive:
https://drive.google.com/open?id=0B_J2vTV7LdWTZXBRZV9OdUgxdXM&authuser=0

Original Reddit Post:
http://www.reddit.com/r/mac/comments/2o2wyq/made_a_few_flat_themed_icons_would_anyone_be/

## Automatically generating .icns files

####Prerequisites 
1. A Mac running OSX
1. Basic terminal knowledge
1. This repository - `cd ~ && git clone https://github.com/FroyoShark/Enkel` or [Download as a ZIP](https://github.com/FroyoShark/Enkel/archive/master.zip)
1. Node.js - [Download](https://nodejs.org/)
1. Local dependencies - `cd /path/to/this/repository && npm install` (replace `/path/to/this/repository` with the actual path, e.g. `~/Enkel` or `/Users/bob/Enkel`)

####Convert 'em
1. Open terminal and cd to your Enkel directory
1. Run `node convert.js`
1. Done!

By default, the script will convert all `.png` files in the `png` directory. If you only want to generate a specific subset of these images, pass their names as arguments:
`node convert.js icon1.png icon2.png icon3.png`
