'use strict'

const electron = require('electron')
const fs = require('fs')
const remote = electron.remote
const summonerUtil = remote.require('./app/lib/summonerUtil')

const { ipcRenderer } = require('electron')

function loadSnInfos(){

  // remove row except first row
  let snInfoTable = document.querySelector('#snInfoTable');
  let rowCount = snInfoTable.rows.length;
  for (let i = rowCount - 1; i > 0; i--) {
    snInfoTable.deleteRow(i);
  }

  // get summoner info
  let snNames = getSnNames()
  //let snInfos = getSnInfos(snNames)
  // add last played date to summoner info
  //addLastPlayedDate(snInfos)

  let table = document.querySelector('#snInfoTbody') // Table Body
  let fragment = document.createDocumentFragment();
  let i = 1

  snNames.forEach((snName) => {
    let tr = document.createElement('TR')
    let tdNo = document.createElement('TD')
    let tdSnName = document.createElement('TD')
    let tdCrName = document.createElement('TD')
    let tdPuuid = document.createElement('TD')
    let tdSnId = document.createElement('TD')
    let tdAccId = document.createElement('TD')
    let tdLastPlay = document.createElement('TD')
    tdNo.appendChild(document.createTextNode(i))
    tdSnName.appendChild(document.createTextNode(snName))
    tr.appendChild(tdNo)
    tr.appendChild(tdSnName)
    fragment.appendChild(tr) // add to fragment
    i += 1
  })

  // finally add all to document
  table.appendChild(fragment);
  
  // make url for download json
  let content = JSON.stringify(snNames)
  // console.log('content = ' + content)
  let blob = new Blob([ content ], { 'type' : 'text/plain' })
  let dlButton = document.querySelector('#dlBtn') // Button
  // update url
  let dlUrl = window.URL.createObjectURL(blob)
  // set URL
  dlButton.href = dlUrl

  // stop LCU connector
  //stopLcuCon()
};

function getLcuInfo() {
  let lcuInfo = ipcRenderer.sendSync('getLcuInfo', 'Render getLcuInfo ping')
  return lcuInfo;
}

function stopLcuCon() {
  let stopResult = ipcRenderer.sendSync('stopLcuCon', 'Render process : stopLcuCon call')
  console.log('Render process : stopLcuCon stopResult = ' + stopResult)
  return stopResult;
}

function getSnNames() {
  let snNames = ipcRenderer.sendSync('getSnNames', 'Render getSnNames ping')
  return snNames;
}
/*
function getSnInfos(snNames) {
  let snInfo
  let snInfos = []
  snNames.forEach((snName) => {
    snInfo = ipcRenderer.sendSync('getSnInfo', snName)
    snInfos.push(snInfo[0]);
  })
  return snInfos
}

function addLastPlayedDate(snInfos) {
  let lastPlayedDates = [];
  let lastGame
  snInfos.forEach((snInfo) => {
    lastGame = ipcRenderer.sendSync('getLastGame', snInfo.puuid)
    // add lastPlayedDate to summoner info
    if (lastGame != null) {
      let lastDate = new Date(lastGame.timestamp) // '2012-11-04T14:51:06.157Z'
      snInfo.lastPlayedDate = lastDate.toISOString().
          slice(0,19). // cut end of string '2012-11-04T14:51:06'
          replace(/T/, ' ') // replace T with a space
    } else {
      console.log(snInfo.displayName + ' : lastGame is null !')
      snInfo.lastPlayedDate = 'No Data'
    }
    console.log('addLastPlayedDate : snInfo.lastPlayedDate = ' + snInfo.lastPlayedDate)
  })
  return snInfos
}
*/
function expFile() {
  // get download url from button href
  let dlButton = document.querySelector('#dlBtn') // Button
  let dlUrl = dlButton.href
  //console.log('dlUrl : ' + dlUrl)
  let link = document.createElement('a')
  link.href = dlUrl
  link.download = 'FriendList.txt'
  link.click()
  // release url cache
  window.URL.revokeObjectURL(dlUrl)
}

/*
function setFileNameToInput() {
  let fileNameBtn = document.getElementById("fileNameBtn")
  let fileName = fileNameBtn.files[0].path
  // replace the "Choose a file" label
  document.getElementById('fileNameLabel').innerHTML = fileName
}

function impFile() {
  // get friend list object
  let filePath = document.querySelector('#fileNameLabel').innerHTML 
  let snInfos = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  //console.log(JSON.stringify(friendList));
  
  // remove row except first row
  let snInfoTable = document.querySelector('#snInfoTable');
  let rowCount = snInfoTable.rows.length;
  for (let i = rowCount - 1; i > 0; i--) {
    snInfoTable.deleteRow(i);
  }

  // create row
  // set LCU info to gloval value in main process
  getLcuInfo()
  // set current summoner name to summoner info
  snInfos = setCurrentNames(snInfos)
  // set current last played date
  addLastPlayedDate(snInfos)

  let table = document.querySelector('#snInfoTbody') // Table Body
  let fragment = document.createDocumentFragment();
  let i = 1

  snInfos.forEach((snInfo) => {
    let tr = document.createElement('TR')
    let tdNo = document.createElement('TD')
    let tdSnName = document.createElement('TD')
    let tdCrName = document.createElement('TD')
    let tdPuuid = document.createElement('TD')
    let tdSnId = document.createElement('TD')
    let tdAccId = document.createElement('TD')
    let tdLastPlay = document.createElement('TD')
    tdNo.appendChild(document.createTextNode(i))
    tdSnName.appendChild(document.createTextNode(snInfo.displayName))
    tdCrName.appendChild(document.createTextNode(snInfo.currentName))
    tdPuuid.appendChild(document.createTextNode(snInfo.puuid))
    tdSnId.appendChild(document.createTextNode(snInfo.summonerId))
    tdAccId.appendChild(document.createTextNode(snInfo.accountId))
    tdLastPlay.appendChild(document.createTextNode(snInfo.lastPlayedDate))
    tr.appendChild(tdNo)
    tr.appendChild(tdSnName)
    tr.appendChild(tdCrName)
    tr.appendChild(tdPuuid)
    tr.appendChild(tdSnId)
    tr.appendChild(tdAccId)
    tr.appendChild(tdLastPlay)
    fragment.appendChild(tr) // add to fragment
    i += 1
  })

  // finally add all to document
  table.appendChild(fragment);
  
  // make url for download json
  let content = JSON.stringify(snInfos)
  // console.log('content = ' + content)
  let blob = new Blob([ content ], { 'type' : 'text/plain' })
  let dlButton = document.querySelector('#dlBtn') // Button
  // update url
  let dlUrl = window.URL.createObjectURL(blob)
  // set URL
  dlButton.href = dlUrl

  // stop LCU connector
  stopLcuCon()
}

function setCurrentNames(snInfos) {
  // snInfos is object
  snInfos = ipcRenderer.sendSync('setCurrentNames', snInfos)
  return snInfos
}

*/

