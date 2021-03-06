const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        width: 1024,
        height: 680,
        webPreferences: {
            nodeIntegration: true,
        }
    })
    const urlLocation = isDev ? 'http://127.0.0.1:3000' : 'dummyurl'
    mainWindow.loadURL(urlLocation)
})