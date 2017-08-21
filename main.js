const {app, BrowserWindow} = require('electron');

const path = require('path');

const url = require('url');

//init win
let win;

function createWindow() {
  //create browser window
  win = new BrowserWindow({width:330,height:550,resizable:false, icon:__dirname+'/img/Calculator-icon.png'});

  //load index.html
  win.loadURL(url.format({
    pathname: path.join(__dirname,'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  //Open devtools
  win.webContents.openDevTools({detach: true});

  win.on('closed', ()=>{
    win = null;
  });
}

//run create window function
app.on('ready', createWindow);


//quit when all windows are closed

app.on('windo-all-closed', ()=>{
  if(process.platform !== 'darwin'){
    app.quite();
  }
});
