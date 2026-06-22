const fs = require('fs');
const path = require('path');
const dir = process.argv[2];
const files = fs.readdirSync(dir).map(f => {
  const p = path.join(dir, f);
  return { name: f, time: fs.statSync(p).mtime.getTime() };
}).sort((a,b) => b.time - a.time);
console.log(files.slice(0, 10).map(f => f.name + " " + new Date(f.time).toISOString()).join('\n'));
