const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	const data = await fs.writeFile(fileName, fileContent, (err)=>{
		if (err)
		    console.log(err);
		else
		    console.log(data);
	});
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const data = await fs.readFile(fileName, {encoding: "utf-8"});
    console.log(data);
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
   const data = await fs.appendFile(fileName, fileContent, (err)=>{
	if (err)
		console.log(err);
	else
		console.log(data);
   })
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
   await fs.unlink(fileName)
}

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }


myFileWriter("file.txt", "Hello");
myFileWriter("file1.txt", "Delete")
myFileReader("file.txt");
myFileUpdater('file.txt',' World');
myFileDeleter("file1.txt")
//node index.js myFileUpdater('File.txt',' World')
