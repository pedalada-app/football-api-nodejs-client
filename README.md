# Football Data Api Node Js Client

Nodejs client with ECMA6 promises for [Football Data](https://api.football-data.org)

Usage:

```javascript

var client= require('football-api-nodejs-client')(api-key);

```

Client method:

API:
- getCompetitions([season])
- getCompetitionById(compId)
- Return Competition object
- getFixtures([{timeFrame: ???, competition: [compId, ...]])
- getFixtureById(fixtureId, [head2head])
- getTeamById(teamId)
    Returns Team client object

Competition API:
- getTeams()
- getTable([matchday])
- getFixtures([{matchday: ???, timeFrame: ???}])
- getInfo()

Team Client object
- getInfo()
- getPlayers()
- getFixtures([{season: ???, timeFrame: ???, venue:  “home”/”away”}])
