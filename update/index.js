const fs=require('fs');

const DIRECTORY='/data';
const FILE='/data/.total';
const CACHE='/data/.last';

function syncFile(){
    //Directory라는 경로가 없으면 새로 하나 생성해준다.
    if(!fs.existsSync(DIRECTORY))
        fs.mkdirSync(DIRECTORY);


    if(!fs.existsSync(FILE))
        FS.closeSync(fs.openSync(FILE,'w'));
}

function readLog(){
    syncFile();

    const cache_end=String(fs.readFileSync(CACHE));
    const log=String(fs.readFileSync(FILE));

    const log_end=log.trim().split('\n').slice(-1)[0];

    if(cache_end!==''){
        if(cache_end!==log_end){
            fs.appendFileSync(FILE,log_end+'\n');
            console.log(`Append : ${log_end}`);
        }
    }
    setTimeout(readLog,100);
}

readLog();