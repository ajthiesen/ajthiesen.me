By default, the ~/Library/ folder is hidden from users as it contains sensitive files that are critical for the operating system to work properly. To permanently enable the ~/Library/ folder and show hidden directories found there, you can again use a Terminal command to apply this setting.

Step 1.Open the Terminal app by opening Finder > Applications > Utilities > Terminal app.

Step 2.Type the following command and press enter:
 
chflags nohidden ~/Library/

Step 3.To reverse this setting, type the following command into Terminal and press enter:

chflags hidden ~/Library/