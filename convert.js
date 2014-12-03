var fs     = require('fs')
  , _      = require('lodash')
  , lwip   = require('lwip')
  , exec   = require('child_process').exec
  , rimraf = require('rimraf')

  //sips -s format icns PNG/AffinityDesigner.png --out icns/AffinityDesigner.icns

/**
 * Escapes text for use in a shell command - just in case :)
 * Credit: http://stackoverflow.com/a/7685469/947478
 */
var escapeShell = function(cmd) {
  return cmd.replace(/(["\s'$`\\])/g,'\\$1')
}

/**
 * Generates .icns files from .png files
 * @param  {Array} files Array of fileNames, excluding the ./png/ part of the path
 */
var genIcns = function(files) {
   _.each(files, function (rawFileName) {

    var fileNameArr = rawFileName.split('.')

    if(fileNameArr.length < 2) {
      console.log("Skipping " + rawFileName + ": Invalid or no extension.")
      return
    }

    var fileName     = fileNameArr.slice(0, fileNameArr.length-1).join('.')
      , extension    = fileNameArr[fileNameArr.length-1]

    if(extension !== 'png'){
      console.log("Skipping " + rawFileName + ": Invalid extension.")
      return
    }

    if(fileName !== escapeShell(fileName)){
      console.log("Skipping " + rawFileName + ": Illegal file name.")
      return
    }

    if(!fs.existsSync('./tmp/')) {
      fs.mkdirSync('./tmp/')
    }


    lwip.open('./png/' + rawFileName, function(err, image) {

      if(err){
        console.log("Error opening file '" + rawFileName + "' from './png/':")
        console.dir(err)
        process.exit(1)
      }

      image.batch()
        .resize(512, 512)
        .writeFile('./tmp/' + rawFileName, function(err) {

          if(err){
            console.log("Error writing file '" + rawFileName + "' to './tmp/':")
            console.dir(err)
            process.exit(1)
          }

          if(!fs.existsSync('./icns/')) {
            fs.mkdirSync('./icns/')
          }

          exec('sips -s format icns "./tmp/' + escapeShell(fileName) + '.png" --out "./icns/' + escapeShell(fileName) + '.icns"', function(err, stdout, stderr) {
            if(err) {
              console.log("Error converting file '" + rawFileName + ":")
              console.dir(err)
              process.exit(1)
            }
            if(stderr) {
              console.log("Error converting file '" + rawFileName + ": stderr:")
              console.dir(err)
              process.exit(1)
            }
            console.log("Success: " + fileName)
          })

        })
    })

  })
}

if(process.argv.length > 2) {
  var files = process.argv.slice(2)
  genIcns(files)
}else{

  fs.readdir('./png', function(err, files) {

    if(err){
      console.log("Error reading directory 'png':")
      console.dir(err)
      process.exit(1)
    }

    if(files.length < 1) {
      console.log("Error: png directory appears to be empty.")
      process.exit(1)
    }

    genIcns(files)

  })

}

/**
 * Delete the tmp directory on process exit
 */
process.on('exit', function(code) {
  if(fs.existsSync('./tmp/')) {
    rimraf.sync('./tmp/')
    if(fs.existsSync('./tmp/')) {
      console.log("Error deleting tmp dir")
    }
  }
})
