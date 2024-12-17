const path=require('path')                // working with file and directory paths

// console.log('directory',__dirname);    //give current directory name with full path

// console.log('filename',__filename);    //give current filename with full path

// var file  = path.basename(__dirname)   //give only current directory name
// console.log(file);

// var file  = path.basename(__filename)   //give only current file name
// console.log(file);

//var extension = path.extname('index.js') //gives the extension name like .js,.txt
//console.log('extension',extension);

// const relativePath = path.join('folder', 'subfolder', 'file.txt');
// console.log('relativePath',relativePath);  // Outputs path with appropriate separators


// const absolutePath = path.join(__dirname, 'assets', 'images', 'logo.png');
// console.log('absolutePath',absolutePath);  // Outputs the full path based on the directory name


 //path.join('foo', '/bar'); // Reads left to right, e.g., 'foo/bar'
 //path.resolve('foo', '/bar'); // Reads right to left, e.g., '/bar'

console.log('test', path.resolve('/foo', 'bar.js' ));  //when reaches '/' its stop executing

console.log('absolute', path.resolve('test', 'prince.js')); //when we not give '/' it will give us full absolute path


// // Initial path
// const originalPath = '/foo/bar/qux/test'; // '/foo/bar/qux/test'

// Construct new path with additional folder
// const modifiedPath = path.join('/foo', 'bar', 'newFolder', 'qux', 'test');

// console.log('modifiedPath',modifiedPath); // Outputs: '/foo/bar/newFolder/qux/test' (cross-platform safe)

// const data = path.join('/folder1','/folder2', '..', 'folder3', 'file.txt');

// console.log('data', data);
// Output: '/folder1/folder3/file.txt'