# netweather - demo

React + Typescript + Redux + Material-UI + ESLint + Styleguidist

period: 2020/02/23 (1 day)  

![main view](https://github.com/ibarapascal/netweather/blob/master/src/temp/screenshot-01.jpg)

## 1. How to run this  

1.1. Try it online

[![Edit tender-lamport-4dn36](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/tender-lamport-4dn36?fontsize=14&hidenavigation=1&theme=dark)

1.2. Try it locally by [http://localhost:3000](http://localhost:3000)

```shell
yarn install
yarn start
```

1.3. TSI (typescript import sorter)

```json
  "importSorter.generalConfiguration.sortOnBeforeSave": true,
  "importSorter.importStringConfiguration.tabSize": 2,
  "importSorter.importStringConfiguration.maximumNumberOfImportExpressionsPerLine.type": "words",
  "importSorter.importStringConfiguration.maximumNumberOfImportExpressionsPerLine.count": 1,
```

1.4. File history visualization by [gource](https://github.com/acaudwell/Gource)  

```shell
gource --seconds-per-day 10 -1920x1080 --auto-skip-seconds 0.5
```

## 2. What this is doing  

1.Using React create a web application to display important weather information for the next 5 days.  
2.The display should list out the expected weather for the next 5 days given a city as the input.  
3.Display the following information.  

- Best day to sell an umbrella.  
- Best day to sell a jacket.  

Using API from [openweathermap](https://openweathermap.org/forecast5)

## 3. What we can see

File structure and commit history visualization at 2020/02/24 10:00

![2020/02/24 10:00](https://github.com/ibarapascal/netweather/blob/master/src/temp/screenshot-file-structure.jpg)

## 4. Related repo

### [netbooks](https://github.com/ibarapascal/netbooks)

React + Typescript + Redux + Material-UI + ESLint + Styleguidist

period: 2020/01/31 - 2020/02/02 (3 days)  

[![Edit netbooks](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/ibarapascal/netbooks/tree/master/?fontsize=14&hidenavigation=1&theme=dark)

![main view](https://github.com/ibarapascal/netbooks/blob/master/src/temp/screenshot-main-view-20200202162746.jpg)