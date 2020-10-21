const fs = require('fs');
const path = require('path');

const u = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'user.json'
);

const getUsersFromFile = cb => {
    fs.readFile(u, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  };


module.exports = class User{
    constructor(userName, password){
        this.userName = userName;
        this.password = password;
    }

    save() {
        getUsersFromFile(users => {
            users.push(this);
            fs.writeFile(u, JSON.stringify(users), err => {
                console.log(err);
                });
            });
        }
    
        static findByName(name, cb) {
            getUsersFromFile(users => {
                const user = users.find(u => u.userName === name);
                cb(user);
            });
        }
}