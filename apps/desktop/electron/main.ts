import { app, BrowserWindow } from 'electron'
import { join } from 'node:path'

process.env.DIST = join(__dirname, '../dist')
process.env.PUBLIC = app.isPackaged ? process.env.DIST : join(process.env.DIST, '../public')

let win: BrowserWindow | null
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']

function createWindow() {
    win = new BrowserWindow({
        icon: join(process.env.PUBLIC || '', 'electron-vite.svg'),
        webPreferences: {
            preload: join(__dirname, 'preload.js'),
        },
    })

    // Test active push message to Renderer-process.
    win.webContents.on('did-finish-load', () => {
        win?.webContents.send('main-process-message', (new Date).toLocaleString())
    })

    if (VITE_DEV_SERVER_URL) {
        win.loadURL(VITE_DEV_SERVER_URL)
    } else {
        win.loadFile(join(process.env.DIST || '', 'index.html'))
    }
}

app.on('window-all-closed', () => {
    win = null
})

app.whenReady().then(createWindow)
