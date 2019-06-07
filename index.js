#! /usr/bin/env node
const program = require('commander');
const { HLTV } = require('hltv');
const colors = require('colors');

colors.setTheme({
    custom: ['red', 'underline']
});

program
    .version('1.0.0')
    .description('CSGO SCORE');


program
    .option('-g, --game <idmatch>')
    .option('-l, --live', 'live game')

program.parse(process.argv);


const piruVaiParaCantoDoNip = (game) => {
    HLTV.connectToScorebot({
        id: game,
        onScoreboardUpdate: (data) => {
            console.log(`CT (${colors.red(data.CT.filter(cur => cur.alive).length)}) ${data.ctTeamName} ${data.ctTeamScore} X ${data.tTeamScore} ${data.terroristTeamName} (${colors.red(data.TERRORIST.filter(cur => cur.alive).length)}) TR`);
            console.log('')
            console.log(`Round: ${data.currentRound}`);
            console.log(`Mapa: ${data.mapName}`);
            console.log(`Bomb Planted: ${data.bombPlanted}`);
            process.exit();
        }
    });
}


if (program.game && program.live) {
  
}

if (program.game) piruVaiParaCantoDoNip(program.game)
