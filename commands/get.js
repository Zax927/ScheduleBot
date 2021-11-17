module.exports = {
    name: 'get',
    description: 'Retrieve a schedule',
    execute(message, args) {
        if (!args.length) {
            return message.channel.send(`Please provide more arguments, ${message.author}`);
        }
        else if (args.length === 1) {
            const fs = require('fs');
            var csv = require('jquery-csv');

            var rqid = args[0].replace('<', ''); // id of the user who's schedule you're requesting
            rqid = rqid.replace('@', '');
            rqid = rqid.replace('!', '');
            rqid = rqid.replace('>', ''); // doing this hurts me inside a little but i don't know a better way and can't be bothered to find one

            var name = message.guild.id;
            var path = './' + name + '.csv';
            var info = "test info";

            try {
                fs.accessSync(path, fs.constants.W_OK)
                info = fs.readFileSync(path).toString();
            } catch (err) {
                return message.channel.send(name + ".csv does not exist, please contact an admin to create it")
            }
        }
        else if (args.length === 2) {
            console.log(args[0]);
        }
        else {
            return message.channel.send('Too many arguments');
        }
    },
};