#! /usr/bin/env node
const cm = require('commander');
const { HLTV } = require('hltv');
const colors = require('colors');

colors.setTheme({
    custom: ['red', 'underline']
});

cm
    .version('1.0.0')
    .description('CSGO SCORE');

cm
    .command('game <idmatch>')
    .description('Mostra os resul do game')
    .action(idmatch => xama(idmatch));

cm.parse(process.argv);

async function xama(idmatch) {

    HLTV.connectToScorebot({
        id: idmatch,
        onScoreboardUpdate: (data) => {
            console.log(`(${colors.red(data.CT.filter(cur => cur.alive).length)}) ${data.ctTeamName} ${data.ctTeamScore} X ${data.tTeamScore} ${data.terroristTeamName} (${colors.red(data.TERRORIST.filter(cur => cur.alive).length)})`);
            console.log('')
            console.log(`Round: ${data.currentRound}`);
            console.log(`Mapa: ${data.mapName}`);
            console.log(`Bomb Planted: ${data.bombPlanted}`);
            process.exit();
        }
    });

}
