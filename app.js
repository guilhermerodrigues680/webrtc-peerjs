const dom = {
  peerjsId: document.querySelector('#peerjs-id'),
  peerId: document.querySelector('#peer-id'),
  btnConnectPeerId: document.querySelector('#btn-connect-peer-id'),
  chatHistory: document.querySelector('#chat-history'),
  chatMsg: document.querySelector('#chat-msg'),
  btnSendMsg: document.querySelector('#btn-send-msg'),
};

// Optionally, you can pass in your own IDs to the Peer constructor.
const peer = new Peer();
// const peer = new Peer(uuidv4(), {
// const peer = new Peer({
//   key: "mypeerjs",
//   host: "peerjs-server.guilhermerodri8.repl.co",
//   port: 443,
//   path: "/",
//   secure: true,
//   debug: 3
// });

peer.on('open', function(id) {
  console.info('My peer ID is:', id);
  dom.peerjsId.innerText = id;

  peer.on('connection', function(conn) {
    console.debug('conexao estabelecida...', conn);

    // Receive messages
    conn.on('data', function(data) {
      console.log('Received', data);
      const div = document.createElement('div');
      div.appendChild(document.createTextNode(data));
      dom.chatHistory.appendChild(div);
    });

    dom.btnSendMsg.addEventListener('click', () => {
      conn.send(dom.chatMsg.value);
    })
  });
});

dom.btnConnectPeerId.addEventListener('click', () => {
  console.debug('abrindo conexao...')
  const conn = peer.connect(dom.peerId.value);
  // on open will be launch when you successfully connect to PeerServer
  conn.on('open', function(){
    // here you have conn.id
    //conn.send('hi!');
    console.debug('open!', conn)

    // Receive messages
    conn.on('data', function(data) {
      console.log('Received', data);
      dom.chatHistory.appendChild(document.createTextNode(data))
    });

    // Send messages
    conn.send('Hello!');

    dom.btnSendMsg.addEventListener('click', () => {
      conn.send(dom.chatMsg.value);
    })
  });
})

