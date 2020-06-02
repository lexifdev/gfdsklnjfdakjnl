const { app, BrowserWindow } = require('electron')


function createWindow () {
    let window = new BrowserWindow({
        width: 800,
        height: 600,
        titleBarStyle: 'customButtonsOnHover',
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false
        }
    })
    window.loadFile('index.html')
    window.setAlwaysOnTop(true)
}

app.whenReady().then(createWindow)