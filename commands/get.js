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

            var rqid = args[0].replace('<', ''); // id of the user who's schedule is being requested
            rqid = rqid.replace('@', '');
            rqid = rqid.replace('!', '');
            rqid = rqid.replace('>', ''); // doing this hurts me inside a little but i don't know a better way and can't be bothered to find one

            var name = message.guild.id;
            var path = './' + name + '.csv';
            var rawIn = "test info";

            try {
                fs.accessSync(path, fs.constants.W_OK)
                    rawIn = fs.readFileSync(path).toString();
            } catch (err) { 
                return message.channel.send(name + ".csv does not exist, please contact an admin to create it")
            }

            arrIn = rawIn.split('\n');
            var out;

            for (i = arrIn.length - 1; i => 0; i--) {
                if (arrIn[i].indexOf(rqid) != -1) {
                    out = arrIn[i].split(',');
                    return message.channel.send("This user's schedule is:" + "\na: " + out[1] + "\nb: " + out[2] + "\nc: " + out[3] + "\nd: " + out[4] + "\ne: " + out[5] + "\nf: " + out[6] + "\ng: " + out[7]); // yeah i could use a for loop but it's the same every time
                }
            }

            return message.channel.send("This user has not added a schedule");
        }
        else if (args.length === 2) {
            console.log(args[0]);
        }
        else {
            return message.channel.send('Too many arguments');
        }
    },
};  