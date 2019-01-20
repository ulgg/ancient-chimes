# <img src="build/icon.png" width="48"> Ancient Chimes

League of Legends Friend List Exporter.

<img src="https://user-images.githubusercontent.com/11805940/51436093-b1e3a080-1cc9-11e9-8ba6-9b5775fb5d02.png">


## Installation & Setup

1. Download [ancient-chimes-X.X.X-win.zip](https://github.com/ulgg/ancient-chimes/releases)

2. Extract the zip

3. Open "system.yaml" in here

```bash
C:\Riot Games\League of Legends\RADS\projects\league_client\releases\<LATEST_VERSION>\deploy
```

4. Add the 1 line code into 2nd line

```bash
enable_swagger: true
```

<img src="https://user-images.githubusercontent.com/11805940/51436142-8319fa00-1cca-11e9-8367-8a536962f595.png">

*You need to add the code everytime LoL client updated

5. Start League of Legends client

6. Double click "ancient-chimes.exe" in the extracted folder

<img src="https://user-images.githubusercontent.com/11805940/51436154-e2780a00-1cca-11e9-9011-8aa11906eb3e.png">

*if you see "Windows protected your PC" popup, try this

>Desktop > click windows mark > type "Windows Defender" and click > select "App & browser control" > choose Off in "Check apps and files" section

## Quick start

1. Load

Get Summoner names from friend list

<img src="https://user-images.githubusercontent.com/11805940/51436215-5b2b9600-1ccc-11e9-95ff-e1d8997fb1e4.png">

2. Export

Download the friend list as text

<img src="https://user-images.githubusercontent.com/11805940/51436328-667fc100-1cce-11e9-9986-4c405e27de2e.png">

## Run from source

To clone and run this repository you'll need them.

1. [Git](https://git-scm.com)
2. [Node.js](https://nodejs.org/en/download/) (with [npm](http://npmjs.com)) 
3. [yarn](https://yarnpkg.com/en/docs/install) (like fast npm) 
4  From command prompt

```bash
# Clone this repository
git clone https://github.com/ulgg/ancient-chimes
# Go into the repository
cd ancient-chimes
# Install dependencies
yarn install
# Run the app
yarn start
```

## Build from source

```bash
# Make exe(zip) of the app
yarn dist
```

## 

>Which League Client API are you using?
(1)lol-game-client-chat
(2)lol-summoner
(3)lol-career-stats

>What has prompted the use of this API?
You can download friend list for saving current summoner names.
You upload old friend list and you can check current summoner name.
And you can add friends again!
When you transfer your account to other region server,
your friend list'll be removed.
so I created this app for saving friend names.

>How are you planning on using the data you gather from this API?
Read summoner names in friend list.
Read summoner info (summoner id, account id, puuid) by summoner name.
Read last played date by puuid.
Read current summoner name by summoner id.

This is a minimal Electron application based on the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start) within the Electron documentation.

**Use this app along with the [Electron API Demos](https://electronjs.org/#get-started) app for API code examples to help you get started.**

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start).


Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

- [The Riot Games API Challenge 2018](https://www.riotgames.com/en/DevRel/the-riot-games-api-challenge-2018) - The contest rule

## Thanks & References

I counldn't create this app without them.

- [rift-explorer](https://github.com/Pupix/rift-explorer) - I can try calling LCU API easily
- [lcu-connector](https://github.com/pupix/lcu-connector) - I can use LCU APIs in Node.js
- [Pyke_Client_LoL](https://github.com/systeme-cardinal/Pyke_Client_LoL) - I learned how to use lcu-connector
- [League Client APIs](https://developer.riotgames.com/league-client-apis.html) - I use these APIs
- [electron-quick-start](https://github.com/electron/electron-quick-start) - I started to create this app from this
- [electron-builder](https://github.com/electron-userland/electron-builder) - I can make this app as exe file

## License

Ancient Chimes isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
