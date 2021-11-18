module.exports = {
    name: 'add',
    description: 'Adds a schedule',
    help: 'Adds your schedule to a database. \nTakes 7 arguments: the name of the class you have for each block in order from A block to G block',
    execute(message, args) {
        if (args.length < 7) {
            return message.channel.send(`Please provide more arguments, ${message.author}`);
        }
        else if (args.length === 7) {
            const fs = require('fs');
            var csv = require('jquery-csv');

            var a = args[0].replace(/_/, " "); // replace underscores with spaces
            var b = args[1].replace(/_/, " ");
            var c = args[2].replace(/_/, " ");
            var d = args[3].replace(/_/, " ");
            var e = args[4].replace(/_/, " ");
            var f = args[5].replace(/_/, " ");
            var g = args[6].replace(/_/, " ");
            var u = message.author.id;

            var outArr = [[u, a, b, c, d, e, f, g]]; // needs to be an array of arrays because that's how the library jquery-csv works
            var out = csv.fromArrays(outArr); // translate to a csv string

            var name = message.guild.id;
            var path = './' + name + '.csv';
            fs.access(path, fs.F_OK, (err) => {
                if (err) { // there could be another error but this is good enough
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
    }
};