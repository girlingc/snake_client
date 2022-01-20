const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
    
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Connected to the server!");
  });
  
  conn.on('data', data => {
    console.log(data);
  });

  return conn;
};

const conn = connect();

module.exports = { connect }