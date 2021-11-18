module.exports = {
    name: 'makedb',
    description: 'Creates a database',
    help: 'Creates a csv database. \nTakes no arguments',
    execute(message, args) {
        if (message.member.permissions.has('ADMINISTRATOR')) {
            if (args.length === 0) {
                const fs = require('fs');

                name = message.guild.id;

                var path = './';
                path += name;
                path += '.csv';
                fs.access(path, fs.F_OK, (err) => {
                    if (err) {
                        fs.appendFile(name + '.csv', "", (err) => {
                            if (err) {
                                console.log(err);
                            }
                        });
                        return message.channel.send("Database " + name + ".csv created");
                    }
                    return message.channel.send(name + ".csv already exists")
                })
                
            }
            else {
                return message.channel.send('Too many arguments');
            }
        } else {
            return message.channel.send("This command is administrator only");
        }
    }
};