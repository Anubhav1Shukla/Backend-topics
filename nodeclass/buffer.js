const myBuffer=Buffer.alloc(20);
myBuffer.write("Using buffer!");
console.log(myBuffer);//it is showing ascii character
console.log(myBuffer.toString());//it is showing data into string

//Depreciated
// var myBuffer1=new Buffer("node");
// console.log(myBuffer1)
//in new version
var myBuffer1 = Buffer.from("node");
console.log(myBuffer1);
console.log(myBuffer1.toString())
console.log(myBuffer1.length)
console.log(myBuffer.length)
var list=[myBuffer,myBuffer1];
var buff=Buffer.concat(list);
console.log(buff);
console.log(buff.toString())



const bufferOld = Buffer.from("Node Js is high value in industry!");
var list = [bufferOld];
const bufferNew = Buffer.concat(list).slice(0, 4);
console.log(bufferNew);
console.log(bufferNew.toString());



const comp1=Buffer.from('p');
const comp2=Buffer.from('p');
var result=comp1.compare(comp2)
console.log(result);
console.log(result.toString())
//EventEmitter
// const even=require('events');

// var eventEmitter=new even();
// eventEmitter.on('grade',(err,msg)=>{
//     console.log(msg);
// });
// eventEmitter.emit('grade','First Event');


// const { EventEmitter } = require('events');

// var eventEmitter = new EventEmitter();
// eventEmitter.on('grade', (msg) => {
//     console.log(msg); 
// });
// eventEmitter.emit('grade', 'First Event');
const { EventEmitter } = require('events');

var eventEmitter = new EventEmitter();
eventEmitter.on('grade', (a,b,c,d) => {
    console.log(a+b+c+d); 
});
eventEmitter.emit('grade',10,20,30,40);

