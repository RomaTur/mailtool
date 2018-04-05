// Basic init
const electron = require('electron')
const {app, BrowserWindow} = electron

// Let electron reloads by itself when react-scripts watch changes in ./src/
if(process.env.ELECTRON_START_URL){
require('electron-reload')(__dirname)
}

const path = require('path');
const url = require('url');

let mainWindow

app.on('ready', () => {
    (process.env.ELECTRON_START_URL) ? console.log('development') : require('./server/bin/www');
    mainWindow = new BrowserWindow({width: 900, height: 800})
    // const startUrl = process.env.ELECTRON_START_URL || url.format({
    //     pathname: path.join(__dirname, './index.html'),
    //     protocol: 'file:',
    //     slashes: true
    // });
    const startUrl = process.env.ELECTRON_START_URL || 'http://localhost:3001';
    mainWindow.loadURL(startUrl);

})

app.on('window-all-closed', () => {
    app.quit()
})