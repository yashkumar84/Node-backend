import fs from "node:fs";

// Node Core Modules
// single threaded -- One Master thread -- Event Loop
// multi threading -- libuv c++ just like thread pool

//Fs -- File System in Node js

// fs.writeFile("new.txt", "Hello Khushi", (err) => {
//   if (err) {
//     console.log("The error Occurs ", err);
//   }
// });

// fs.appendFile("new.txt", " Hi Khushi", (err) => {
//   if (err) {
//     console.log("Error Occurs ", err);
//   }
// });

// fs.unlink("new.txt", (err) => {
//   if (err) {
//     console.log("Hello Error", err);
//   }
// });

// fs.readFile("newFile.txt", (err, data) => {
//   if (err) {
//     console.log("Error Occurs While Reading the File", err);
//   }
//   console.log(data.toString());
// });

// const data = fs.readFileSync("newFile.txt", "utf-8");
// console.log("New Data is ", data);

// try {
//   fs.rmdirSync("./Hello", { maxRetries: 2, retryDelay: 1000 });
// } catch (err) {
//   console.log(err);
// }

// fs.rmdir("./Hello", (err) => {
//   if (err) {
//     console.log("Error Occurs ", err);
//   }
// });

// fs.mkdir("hello", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

fs.opendir("./hello", (err, dir) => {
  if (err) {
    console.log(err);
  }
  (async () => {
    for await (const dirent of dir) {
      console.log(dirent.name); // Prints each file/folder inside "hello"
    }
  })();
});
