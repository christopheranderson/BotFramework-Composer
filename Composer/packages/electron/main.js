const electron = require('electron');

const { app, BrowserWindow } = electron;

require('../server/build/server');

function main() {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  win.loadURL(`http://localhost:5000/`);
}

app.on('ready', main);
