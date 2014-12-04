Enkel
=====

NOTE: All icons made before Tweetbot will be redone with a lighter, solid (no fade) shadow.
![alt tag](http://i.imgur.com/CteWDar.png)

    Enkel (Swedish)
    Adjective
    plain, simple; containing only the most fundamental parts

This icon pack was created by FroyoShark, AKA Undefined Variable. It is inspired by Google's Material Design, but made for Mac OS X applications. This project began with four icons, but due to the immense feedback I received, I decided to pursue making this my first complete icon pack. I hope you enjoy it!

Google Drive:
https://drive.google.com/open?id=0B_J2vTV7LdWTZXBRZV9OdUgxdXM&authuser=0

Original Reddit Post:
http://www.reddit.com/r/mac/comments/2o2wyq/made_a_few_flat_themed_icons_would_anyone_be/

## How to use the icons on a Mac

1. Download the icns files from the icns folder
2. Open the icns file in Preview
3. Press cmd+a in the preview window, then press cmd+c
4. Right click on the application (in the applications folder), choose “get info”, then click on the icon in the top left and press cmd+v
5. Close the icon and remove it from your dock. When you open it again, you should see the new icon! (Rebooting should work too, haven’t tried that though)
To revert to the default icon, click on the icon in the "get info" window of the application and press delete.

### Alternate Method
Download [LiteIcon](http://www.freemacsoft.net/liteicon/) and have it do the "grunt work" for you.

After you've updated the icons with LiteIcon (or the original method), open Terminal and type
    
    killall Dock
    
Don't be alarmed if you see your screen flashes black for a second, this is normal. Your dock just reset itself and should be back to normal (with the new icons!) in a matter of seconds.


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
