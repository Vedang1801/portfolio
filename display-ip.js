const os = require('os');

function getNetworkIP() {
  const interfaces = os.networkInterfaces();
  const addresses = [];
  
  for (const iface in interfaces) {
    for (const details of interfaces[iface]) {
      // Skip internal (i.e. 127.0.0.1) and non-ipv4 addresses
      if (details.family === 'IPv4' && !details.internal) {
        addresses.push(details.address);
      }
    }
  }
  
  return addresses;
}

const networkIPs = getNetworkIP();

console.log('\n🌐 Your website is available at:');
console.log('   Local:    http://localhost:3000');
networkIPs.forEach(ip => {
  console.log(`   Network:  http://${ip}:3000`);
});
console.log('\nUse any of the Network URLs to access from other devices on your network.');
