# replace-extensions
an easy tool to replace extensions with NodeJs.

## How to use:
* navigate to the project's folder
* run `$ npm` to install the dependencies (if you don't have node click [here](https://nodejs.org/en/download/))
* run the script with 4 params:
  * extension to replace
  * extension to set
  * source folder with "quotes"
  * flag for recursive or not (true/false)
##### Example: `$ node replace.js .HEIC .JPG "C://users/bob/pictures" true`
this should update recursively all *.HEIC files to *.JPG  in that folder.
