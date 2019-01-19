
// this is called by render process (index.js)
// so this area works on Main process

//const IPC = require('electron').ipcRenderer;
const IPC = require('electron').ipcMain;
// import { ipcRenderer } from 'electron'
const { net } = require('electron')
let request = null;
let username = null;
let password = null;
let address = null;
let port = null;
let header = null
let friendNames = null

const summonerUtil = {
  getFriendNames: function (cb) {
    
    //  IPC.on('lcu-load', (event, data) => {
    //   username = data.username
    //   password = data.password
    //   address = data.address
    //   port = data.port
    //   // username = 'riot'
    //   // password = 'yQxxRYX3_lTzGvb20-0JMw'
    //   // address = '172.0.0.1'
    //   // port = '49744'
    //   console.log(`username: ${username}`)
    //   console.log(`password: ${password}`)
    //   console.log(`address: ${address}`)
    //   console.log(`port: ${port}`)
    //   header = `Basic ${btoa(`${username}:${password}`)}`;
    //   // get friends name from LCU API
    //   // friendNames = getBuddies(data)

    //   request = net.request({
    //     method: 'GET',
    //     protocol: 'https:',
    //     hostname: address,
    //     port: port,
    //     path: '/lol-game-client-chat/v1/buddies'
    //   })

    //   //console.log(`start request.on('response'`)
    //   request.on('response', (response) => {
    //     // logging
    //     console.log(`STATUS: ${response.statusCode}`)
    //     console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
    //     response.on('data', (chunk) => {
    //       //console.log(`BODY: ${chunk}`)
    //       //console.log('in request.on')
    //       friendNames += chunk
    //       console.log(`Received ${chunk.length} bytes of data.`)
    //       console.log(`BODY: chunk`)
    //     })

    //     response.on('end', () => {
    //       console.log('No more data in response.')
    //     })
    //   })
    //   request.end()
    //   console.log(`request.end`)

    //   console.log(`login start`)
    //   request.on('login', (authInfo, callback) => {
    //     console.log(`in login auth`)
    //     // popup Auth Basic
    //     // pass callback function to global value
    //     callback(username, password)
    //   })
    //   console.log(`login end`)
    // });


    console.log('summonerUtil.getFriendNames end friendNames = ' + friendNames)
    cb(null, friendNames);
  }
};


// function getBuddies(data) {

//   return friendNames;
// }

module.exports = summonerUtil;
