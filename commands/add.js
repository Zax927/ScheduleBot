module.exports = {
    name: 'add',
    description: 'Adds a schedule',
    execute(message, args) {
        if (args.length < 7) {
            return message.channel.send(`Please provide more arguments, ${message.author}`);
        }
        else if (args.length === 7) {
            const fs = require('fs');
            var csv = require('jquery-csv');
            var name = message.guild.id;

            var a = args[0];
            var b = args[1];
            var c = args[2];
            var d = args[3];
            var e = args[4];
            var f = args[5];
            var g = args[6];
            var u = message.author.id;

            var outArr = [[u, a, b, c, d, e, f, g]];
            var out = csv.fromArrays(outArr);

            var path = './' + name + '.csv';
            fs.access(path, fs.F_OK, (err) => {
                if (err) {
                    return message.channel.send(name + ".csv does not exist, please contact an admin to create it")
                }
                fs.appendFile(name + '.csv', out, (err) => {
                    if (err) {
                        return console.log(err);
                    }
                    return message.channel.send(`Schedule saved for ${message.author}`);
                });
            });
        }
        else {
            return message.channel.send('Too many arguments');
        }
    },
};