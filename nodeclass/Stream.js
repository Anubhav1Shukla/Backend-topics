const {Readable} =require('stream');
const inStream=new Readable({
    read(){}
});
inStream.push("here to study int222");
inStream.push('an industry oriented course');
inStream.push(null);
inStream.pipe(process.stdout)


var fs=require('fs');
var data=' '
var readerStream=fs.createReadStream('file.txt');
readerStream.setEncoding('utf-8');
readerStream.on('data',function(chunk){
    data+=chunk;
});
readerStream.on('end',function(){
    console.log(data);
})
readerStream.on('error',function(err){
    console.log(err.stack);
})
console.log("Programm End Here! Happy hacking");




var fs=require('fs');
var data='Simply easy learning node js with mamta mam ';
var writerStream=fs.createWriteStream('file.txt');
writerStream.write(data,'utf-8');
writerStream.end();
writerStream.on('finish',function(){
    console.log("Write completed.");
});
writerStream.on('error',function(err){
    console.log(err.stack);
})
console.log("Programm End Here! Happy hacking");




var zlib=require('zlib');
var fs=require('fs');
var brot=zlib.createBrotliCompress();
var r=fs.createReadStream('test.txt');
var s=fs.createWriteStream('test.txt.gz');
r.pipe(brot).pipe(s);




