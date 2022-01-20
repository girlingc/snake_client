const net = require('net');
const {IP, PORT, TEXT} = require('./constants')


const connect = function() {
  const conn = net.createConnection({ IP, PORT });

  // interpret incoming data as text
  conn.setEncoding(TEXT);

  // Connect to server and set name
  conn.on('connect', () => {
    console.log("Connected to the server!");
    conn.write("Name: BRR");
  });
  
  conn.on('data', data => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect }