
 const EventEmitter=require('events')
 const eventEmitter=new EventEmitter()
// remove listener

const callbackA = () => {
    console.log('A');
    eventEmitter.removeAllListeners()
    // eventEmitter.removeListener('event', callbackB);
  };
  
  const callbackB = () => {
    console.log('B');
  };
  
  eventEmitter.on('event', callbackA);
  
  eventEmitter.on('event', callbackB);
  

  eventEmitter.emit('event');
 
  eventEmitter.emit('event');

