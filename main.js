const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

// Sayt internetda bo'lsa, havolani yozing: 'https://saytingiz.uz'
// Bo'sh qolsa, www/index.html ochiladi.
const SITE_URL = 'https://etahlil.netlify.app';


function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true }
  });
  Menu.setApplicationMenu(null);
  if (SITE_URL) win.loadURL(SITE_URL);
  else win.loadFile(path.join(__dirname, 'www', 'index.html'));
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
