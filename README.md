#Node-Sports-Data


An API wrapper for sports data

##Install
`npm install node-sports-data`

##Instantiate

```
var SportsData = require('node-sports-data');

var sportsData = new SportsData({
  apiKey : YOUR_API_KEY
});

```

##Commands

###Team Rosters

Retrieve all projects

```
sportsData.teamRosters(function(response) {
  // team rosters : response.teams in an array
})
```


###Project

Retrieve a specific player

```
sportsData.players(playerId,function(response) {
  // your player
})
```
