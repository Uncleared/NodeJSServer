
const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8081 },()=>{
    console.log('server started')
})
wss.on('connection', function connection(ws) {
   ws.on('message', (data) => {
      console.log('data received \n %o',data.toString('utf8'))
      ws.send(data.toString('utf8'));
   })

   var timer = 0;
    setInterval(function(){
        console.log("This is the second statement");
        timer++;
        ws.send(timer);
    }, 1000);
})
wss.on('listening',()=>{
   console.log('listening on 8081')
})
// export OPENAI_API_KEY="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"s