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

*if you see "Windows protected your PC" popup try this

>Desktop > click windows mark > type "Windows Defender" and click > select "App & browser control" > choose Off in "Check apps and files" section

## Quick start

1. Load

Get Summoner names from friend list

<img src="https://user-images.githubusercontent.com/11805940/51436215-5b2b9600-1ccc-11e9-95ff-e1d8997fb1e4.png">

2. Export

Download the friend list as text

<img src="https://user-images.githubusercontent.com/11805940/51436328-667fc100-1cce-11e9-9986-4c405e27de2e.png">


**Clone and run for a quick way to see Electron in action.**

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

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/electron/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
