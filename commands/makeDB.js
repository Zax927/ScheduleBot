module.exports = {
    name: 'makedb',
    description: 'Creates a database',
    execute(message, args) {
        if (message.member.permissions.has('ADMINISTRATOR')) {
            if (args.length < 3) {
                return message.channel.send(`Please provide more arguments, ${message.author}`);
            }
            else if (args.length === 3) {
                const fs = require('fs');
                var csv = require('jquery-csv');

                name = args[0];

                let testArray = [];
                var out = csv.fromArrays(testArray);
                fs.appendFile(name + '.csv', out, (err) => {
                    if(err) {
                        console.log(err);
                    }
                });
            }
            else {
                return message.channel.send('Too many arguments');
            }
        } else {
            return message.channel.send("This command is administrator only");
        }
    },
};