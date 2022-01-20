const net = require('net');
const { host, port, text } = require('./constants')

const connect = function() {
  const conn = net.createConnection({ host, port });

  // interpret incoming data as text
  conn.setEncoding(text);

  // Connect to the server and set name
  conn.on('connect', () => {
    console.log("Connected to the server!");
    conn.write("Name: BRR")
  });

  conn.on('data', data => {
    console.log(data);
  });
  return conn;
};
module.exports = { connect }