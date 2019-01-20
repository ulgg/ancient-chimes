# <img src="build/icon.png" width="48"> Ancient Chimes

League of Legends Friend List Exporter using League Client API

<img src="https://user-images.githubusercontent.com/11805940/51436093-b1e3a080-1cc9-11e9-8ba6-9b5775fb5d02.png">

## Installation & Setup

I checked this app working on windows. I'm not sure mac.

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

## To use

1. Load

Get Summoner names from friend list

<img src="https://user-images.githubusercontent.com/11805940/51436215-5b2b9600-1ccc-11e9-95ff-e1d8997fb1e4.png">

2. Export

Download the friend list as text

<img src="https://user-images.githubusercontent.com/11805940/51436328-667fc100-1cce-11e9-9986-4c405e27de2e.png">

## Run from source

To clone and run this repository you'll need them.

1. [Git](https://git-scm.com/downloads)
2. [Node.js](https://nodejs.org/en/download/) (with [npm](http://npmjs.com)) 
3. [yarn](https://yarnpkg.com/en/docs/install) (like fast npm) 
4.  From command prompt

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

Build exe from source

```bash
# Make exe(zip) of the app
yarn dist
```

## About

- Which technologies do you use?

>Node.js, npm, yarn, Electron, JavaScript, HTML, Bootstrap, Git, Wireshark, Fiddler 4, HttpRequest, SubLime(Editor), Visual Studio Code(Editor), Chromium Embedded Framework(CEF)

- Why did you chose them?

>Because I wanted friends use the app easily. First, I was going to create web app with Express, Pug, Google App Engine. But I noticed I couldn't call League Client API from internet. If my friends want to use the app, they need to install some unpopular softwares and need effort to learn them. Although I spend around 2 weeks to learn them.

- How did you learn about them?

>I had 0 knowledge about Node.js, Express, Pug, Electron, League Client API. I learned them from Qiita, StackOverflow, Personal blogs, [References](#Thanks-and-References), Twitch viewers comments

- Which League Client API are you using?

>(1)lol-game-client-chat

- What has prompted the use of this API?

>Read summoner names in friend list from client. I can't get friend list from normal Riot Games API.

- How are you planning on using the data you gather from this API?

>Download friend list for saving current friend's summoner name. If you transfer your account to other region once and you come back the old region. You can recovery friends by the exported friend list.

- Why did you create this?

>For entry to [The Riot Games API Challenge 2018](https://www.riotgames.com/en/DevRel/the-riot-games-api-challenge-2018). I wanted to download friend list when I transfered my NA account to Japan server 3 years ago. And I and my friend wish friend list would have last login date. Then we can remove some unactive friends and find new friends.

- I can't find/add friend!

>If players change thier name you can't find them by old name.

- Will you add some features to soulve them?

>Yes. After the contest end. I already created features getting current names but it need unallowed APIs. Getting last played date too.

# Task
- [x] Get current summoner name (not includ yet but finished)
- [x] Get last played date from lol-carreer-stats (not include yet but finished)
- [ ] Reduce time to get last played date (very slow. around 5 min for getting 311 friends (.-.))
- [ ] Understand Async/Await (I counldn't use Async. So I used IPC for synchronous request loop)
- [ ] Get correct last played date (I can't get correct lol-carreer-stats. some friend's date is older or null)

# Thanks and References

I counldn't create this app without them.

- [rift-explorer](https://github.com/Pupix/rift-explorer) - API reference. You can test League Client API call easily
- [lcu-connector](https://github.com/pupix/lcu-connector) - You can call League Client APIs in Node.js
- [Pyke_Client_LoL](https://github.com/systeme-cardinal/Pyke_Client_LoL) - You can learn how to use lcu-connector
- [Visual Studio Code (Editor) Electron debugging](https://github.com/Microsoft/vscode-recipes/tree/master/Electron)
- [electron-quick-start](https://github.com/electron/electron-quick-start) - I started to create this app from this
- [electron-builder](https://github.com/electron-userland/electron-builder) - You can make exe of an electron app
- [Community Dragon](https://github.com/CommunityDragon/Docs/blob/master/assets.md) - online asset (exp. summoner icon image)
- [League Client APIs](https://developer.riotgames.com/league-client-apis.html) - About League Client API
- [Communication Channel Refresh (Riot Games API)](https://www.riotgames.com/en/DevRel/new-comms) - You can Ask question. Discord channel, Twitter etc
- [THE ARCHITECTURE OF THE LEAGUE CLIENT UPDATE](https://engineering.riotgames.com/news/architecture-league-client-update)
- [League Client Update Extra Insights](https://medium.com/@behrmann/league-client-update-extra-insights-f9f05c427657)
- [Let's try to create an Electron app (Japanese)](https://qiita.com/Quramy/items/a4be32769366cfe55778)
- [Electron Main process Http Request (via auth proxy)(Japanese)](https://qiita.com/yk-nakamura/items/16c0606012bb0e7c92fa)
- [Electron communication process by IPC(Japanese)](https://qiita.com/Misumi_Rize/items/dde76dbf89abee13991c)
- [async/await with forEach(Japanese)](https://qiita.com/_takeshi_24/items/1403727efb3fd86f0bcd#foreach%E3%81%A7asyncawait)
- A Twitch viewer recommended Visual Studio Code Editor for me. Thanks.

## Me

Playing Games and Drawing.

I hope that this app helps other players to create apps using League Client API(LCU). :)

[Twitter](https://twitter.com/ulg_) / [League of Legends(opgg)](http://jp.op.gg/summoner/userName=ulg) / [Twitch](https://www.twitch.tv/ulg_) / [pixiv](https://pixiv.me/ulg)

## License

MIT

Ancient Chimes isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
