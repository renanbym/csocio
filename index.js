#! /usr/bin/env node
const cm = require('commander');
const { HLTV } = require('hltv');

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
            console.log(`(${data.CT.length}) ${data.ctTeamName} ${data.ctTeamScore} X ${data.tTeamScore} ${data.terroristTeamName} (${data.TERRORIST.length})`);
            console.log('')
            console.log(`Mapa: ${data.mapName}`);
            console.log(`BombPlanted: ${data.bombPlanted}`);
            process.exit();
        }
    });

}
