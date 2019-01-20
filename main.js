'use strict'
// Function-level strict mode syntax

// Modules to control application life and create native browser window
const {app, BrowserWindow, net} = require('electron');
const LCUConnector = require('lcu-connector');
const { ipcMain } = require('electron')

const connector = new LCUConnector('');
const root = __dirname + '/app';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// Lcu info
let username
let password
let address
let port

// 
app.commandLine.appendSwitch('--ignore-certificate-errors');

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    title: 'Ancient Chimes',
    icon: __dirname + '/build/icon.png',
    width: 1024,
    height: 600
  })

  // Remove default menu
  //mainWindow.setMenu(null);
  // and load the index.html of the app.
  mainWindow.loadFile(root + '/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null

  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

ipcMain.on('getLcuInfo', (event, arg) => {
  console.log('Main process getLcuInfo arg = ' + arg);

  connector.on('connect', async (lcuInfo) => {
    // set info to gloval value
    username = lcuInfo.username
    password = lcuInfo.password
    address = lcuInfo.address
    port = lcuInfo.port
    console.log(`username: ${username}`) // riot
    console.log(`password: ${password}`)
    console.log(`address: ${address}`)
    console.log(`port: ${port}`)
    event.returnValue = lcuInfo
  })
  connector.start()
})

ipcMain.on('stopLcuCon', (event, arg) => {
  console.log('Main process : stopLcuCon arg = ' + arg)
  connector.stop()
  let stopResult = 'Main process : stopLcuConnector finished'
  event.returnValue = stopResult
})

ipcMain.on('getSnNames', (event, arg) => {
  console.log('Main process getSnNames arg = ' + arg);
  let friendNames = '';

  let request = net.request({
    method: 'GET',
    protocol: 'https:',
    hostname: address,
    port: port,
    path: '/lol-game-client-chat/v1/buddies'
  })

  request.on('response', (response) => {
    // logging
    // console.log(`STATUS: ${response.statusCode}`)
    // console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
    response.on('data', (chunk) => {
      friendNames += chunk
    })

    response.on('end', () => {
      // console.log('getSnNames : No more data in response.')
       friendNames = JSON.parse(friendNames)
       let names = []
      names.push(friendNames[0])
      names.push(friendNames[1])
      names.push(friendNames[2])
      names.push(friendNames[3])
      console.log(`names: ${names}`)

      //event.returnValue = JSON.parse(friendNames)
      event.returnValue = names
    })
  })
  request.end()

  request.on('login', (authInfo, callback) => {
    // popup Auth Basic
    // pass callback function to global value
    callback(username, password)
  })
})

ipcMain.on('getSnInfo', (event, snName) => {
  console.log('Main process getSnInfo snName = ' + snName);
  let snInfo = '';
    
  // creat API call path
  let lolSnPath = `/lol-summoner/v2/summoners?name=` + encodeURIComponent(snName);

  // creat request -> send request 'request.end()'
  let request = net.request({
    method: 'GET',
    protocol: 'https:',
    hostname: address,
    port: port,
    path: lolSnPath
  })
     
  // wait 'response' event back
  request.on('response', (response) => {

    // console.log(`STATUS: ${response.statusCode}`)
    // console.log(`HEADERS: ${JSON.stringify(response.headers)}`)

    response.on('data', (chunk) => {
      // I may get responce data several times
      // so I need to catenate
      snInfo += chunk

    })

    // if I can get all responces data, finally do this
    response.on('end', () => {
      // console.log('getSnInfo : No more data in response.')
      // return result to render prosecce
      event.returnValue = JSON.parse(snInfo)
    })
  }) // request.on end

  // send request 
  request.end()

  // wait 'login' event back
  request.on('login', (authInfo, callback) => {
    // popup Auth Basic
    // pass user 'riot', pw '*from lockfile*' and login
    callback(username, password)
  })
})

ipcMain.on('getLastGame', (event, puuid) => {
  console.log('Main process getLastGame arg = ' + puuid);
  let games = ''

  // creat API call path
  let lolSnPath = `/lol-career-stats/v1/summoner-games/` + puuid;

  // creat request -> send request 'request.end()'
  let request = net.request({
    method: 'GET',
    protocol: 'https:',
    hostname: address,
    port: port,
    path: lolSnPath
  })
     
  // wait 'response' event back
  request.on('response', (response) => {

    // console.log(`STATUS: ${response.statusCode}`)
    // console.log(`HEADERS: ${JSON.stringify(response.headers)}`)

    response.on('data', (chunk) => {
      // I may get responce data several times
      // so I need to catenate
      games += chunk
    })

    // if I can get all responces data, finally do this
    response.on('end', () => {
      // console.log('getLastGame : No more data in response.')
      
      // convert JSON data to JavaScript Object
      games = JSON.parse(games)

      // get last data
      let lastPlayedGame = games[games.length-1]
      event.returnValue = lastPlayedGame
    })
  }) // request.on end

  // send request 
  request.end()

  // wait 'login' event back
  request.on('login', (authInfo, callback) => {
    // popup Auth Basic
    // pass user 'riot', pw '*from lockfile*' and login
    callback(username, password)
  })
})

ipcMain.on('setCurrentNames', (event, inSnInfos) => {
  console.log('Main process getCurrentNames inSnInfos = ' + JSON.stringify(inSnInfos));
  let snIds = []
  let outSnInfos = ''

  // create summoner id array to call
  for(let snId of inSnInfos) {
    snIds.push(snId.summonerId)
  }
  // conver to string for using it as path
  let snIdsStr = JSON.stringify(snIds)
  console.log('Main process getCurrentNames snIdsStr = ' + snIdsStr);
  // encode spaces and etc for path
  let snIdsEnc = encodeURIComponent(snIdsStr)
  console.log('Main process getCurrentNames snIdsEnc = ' + snIdsEnc);
  // creat API call path
  let lolSnPath = `/lol-summoner/v2/summoners?ids=` + snIdsEnc;

  // creat request -> send request 'request.end()'
  let request = net.request({
    method: 'GET',
    protocol: 'https:',
    hostname: address,
    port: port,
    path: lolSnPath
  })
     
  // wait 'response' event back
  request.on('response', (response) => {

    console.log(`STATUS: ${response.statusCode}`)
    console.log(`HEADERS: ${JSON.stringify(response.headers)}`)

    response.on('data', (chunk) => {
      // I may get responce data several times
      // so I need to catenate
      outSnInfos += chunk
    })

    // if I can get all responces data, finally do this
    response.on('end', () => {
      // console.log('getLastGame : No more data in response.')
      let outCrName = ''
      let pickOutSnInfo
      outSnInfos = JSON.parse(outSnInfos)
      console.log('setCurrentNames : outSnInfos = ' + outSnInfos)
      for(let inSnInfo of inSnInfos) {
        pickOutSnInfo = outSnInfos.find(outSnInfo => outSnInfo.summonerId === inSnInfo.summonerId)
        console.log('setCurrentNames : pickOutSnInfo.displayName = ' + pickOutSnInfo.displayName)
        inSnInfo.currentName = pickOutSnInfo.displayName
      }

      // convert JSON data to JavaScript Object
      //let inSnInfoWithCrName = JSON.parse(inSnInfo)

      console.log('setCurrentNames : stringify inSnInfos = ' + JSON.stringify(inSnInfos));
      console.log('setCurrentNames : inSnInfos[0].currentName = ' + inSnInfos[0].currentName)
      event.returnValue = inSnInfos
    })
  }) // request.on end

  // send request 
  request.end()

  // wait 'login' event back
  request.on('login', (authInfo, callback) => {
    // popup Auth Basic
    // pass user 'riot', pw '*from lockfile*' and login
    callback(username, password)
  })
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user s explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
