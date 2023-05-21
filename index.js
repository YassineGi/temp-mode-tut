const fs = require('fs');
const path = require('path');

// fs.readFile('./files/starter.txt','utf8',(err, data) => {
//     if (err) throw err;

console.log(path.join(__dirname,'files','starter.txt'));
console.log(path.resolve(__dirname,'files','starter.txt'));


    
   const read = fs.readFile(path.join(__dirname,'files','starter.txt'),'utf8',(err, data) => {
        if (err) throw err;

    console.log(data); //au lieu de mettre utf8 on peut mettre ca //console.log(data.toString());
})





const write=fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'have a good day', (err) => {
    if (err) throw err;

    console.log('writing complete');

    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nnice to meet you', (err) => {
        if (err) throw err;

        console.log('writing complete');

        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
            if (err) throw err;

            console.log('rename complete');
        });
    });
});

fs.writeFile(path.join(__dirname, 'files', 'new.txt'), `this is the result:${write},${read}`,{flag: 'a'}, (err) => {
    if (err) throw err;

    console.log('writing complete');
});



