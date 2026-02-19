"use strict";
const electron = require("electron");
const node_path = require("node:path");
process.env.DIST = node_path.join(__dirname, "../dist");
process.env.PUBLIC = electron.app.isPackaged ? process.env.DIST : node_path.join(process.env.DIST, "../public");
let win;
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
function createWindow() {
  win = new electron.BrowserWindow({
    icon: node_path.join(process.env.PUBLIC || "", "electron-vite.svg"),
    webPreferences: {
      preload: node_path.join(__dirname, "preload.js")
    }
  });
  win.webContents.on("did-finish-load", () => {
    win == null ? void 0 : win.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  });
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(node_path.join(process.env.DIST || "", "index.html"));
  }
}
electron.app.on("window-all-closed", () => {
  win = null;
});
electron.app.whenReady().then(createWindow);
