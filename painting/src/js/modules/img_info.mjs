// const fs = require("fs");
// const gm = require("gm");

// document.addEventListener("deviceready", onDeviceReady, false);

// function onDeviceReady() {
//   // получаем обьект филисистем
//   window.requestFileSystem(
//     LocalFileSystem.PERSISTENT,
//     0,
//     onFileSystemSuccess,
//     fail
//   );
// }

// function toArray(list) {
//   return Array.prototype.slice.call(list || [], 0);
// }

// function onFileSystemSuccess(fileSystem) {
//   //console.log(fileSystem.name);

//   var dirReader = fileSystem.root.createReader();
//   var entries = [];
//   var readEntries = function () {
//     dirReader.readEntries(function (results) {
//       if (results.length) {
//         entries = entries.concat(toArray(results));
//         listResults(entries);
//       }
//     }, fail);
//   };
//   readEntries();
// }

// function onFileSystemSuccess(fileSystem) {
//   fileSystem.root.getDirectory(
//     "../img",
//     { create: false, exclusive: false },
//     getDirSuccess,
//     fail
//   );
// }

// function getDirSuccess(dirEntry) {
//   // Get a directory reader
//   var directoryReader = dirEntry.createReader();

//   // Get a list of all the entries in the directory
//   directoryReader.readEntries(listResults, fail);
// }

// function fail(evt) {
//   //   читаем проблеммы
//   console.log("Error trololo " + evt.target.error.code);
// }

// function listResults(entries) {
//   entries.forEach(function (entry) {
//     alert(entry.name);
//   });
// }

export const img = {
  path: "./img/img1.jpg",
  height: "1600",
  width: "1201",
};
