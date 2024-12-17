const EventEmitter=require('events')     //offers the EventEmitter class, which we'll use to handle our events.
const eventEmitter=new EventEmitter()     //event Emitter is object have many properties


//on emit once                       //emit is used to trigger an event,on is used to add a callback function that's going to be executed when the event is triggered

// eventEmitter.on('start',(number,number1)=>{
//     console.log('started...')
//     console.log(number+number1);
    
// })

// eventEmitter.emit('start',23,12)
// eventEmitter.emit('start',23,10)

//remove listener

// const callbackA = () => {
//     console.log('A');
//     eventEmitter.removeListener('event', callbackB);
//   };
  
//   const callbackB = () => {
//     console.log('B');
//   };
  
//   eventEmitter.on('event', callbackA);
  
//   eventEmitter.on('event', callbackB);
  

//   eventEmitter.emit('event');
 
//   eventEmitter.emit('event');


  
// function pong() {
//     console.log('pong');
//   }
  
//   eventEmitter.on('ping', pong);
//   eventEmitter.removeListener('ping', pong);
//   eventEmitter.once('ping', pong);
  
//   eventEmitter.emit('ping');
//   eventEmitter.emit('ping');


//newListener 

// eventEmitter.on('newListener',()=>{
//     console.log('new eventstarted...')
// })

// eventEmitter.on('start',(number,number1)=>{
//     console.log('started...')
//     console.log(number+number1);
// })

// eventEmitter.emit('start',23,12)

//remove all event listeners

// eventEmitter.on('start',(number,number1)=>{
//     console.log('started...')
//     console.log(number+number1); 
// })
// eventEmitter.on('end',(number,number1)=>{
//     console.log('ended...')
//     console.log(number+number1);    
// })

// eventEmitter.removeAllListeners()
// eventEmitter.emit('start',23,12)
// eventEmitter.emit('end',23,10)
