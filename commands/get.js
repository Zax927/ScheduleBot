module.exports = {
    name: 'get',
    description: 'Retrieve a schedule',
    help: 'Fetches a users schedule. \nTakes 1 argument: @mention of a user who\'s schedule you want',
    execute(message, args) {
        if (!args.length) {
            return message.channel.send(`Please provide more arguments, ${message.author}`);
        }
        else if (args.length === 1 || args.length === 2) { // eventually you will be able to select a specific block
            const fs = require('fs');

            var rqid = args[0].replace('<', ''); // id of the user who's schedule is being requested
            rqid = rqid.replace('@', '');
            rqid = rqid.replace('!', '');
            rqid = rqid.replace('>', ''); // doing this hurts me inside a little but i don't know a better way and can't be bothered to find one

            var name = message.guild.id; // name of file is the id of the server where the database was generated to keep all servers separate
            var path = './' + name + '.csv';
            var rawIn = "test info"; // initializing the variable with test data 

            try {
                fs.accessSync(path, fs.constants.W_OK)
                    rawIn = fs.readFileSync(path).toString(); // unprocessed input
            } catch (err) { 
                return message.channel.send(name + ".csv does not exist, please contact an admin to create it")
            }

            arrIn = rawIn.split('\n');
            var outNC; // output with no capitals
            var outC = ""; // in between variable to store first letter
            var out = ["", "", "", "", "", "", ""]; // final output

            for (i = arrIn.length - 1; i >= 0; i--) {
                if (arrIn[i].indexOf(rqid) != -1) {
                    outNC = arrIn[i].split(',');
                    for (j = 1; j < outNC.length; j++) { // each period starting on the second index since first is user id
                        outC = outNC[j].split("", 1); // split into characters with a limit of 1 to get the first letter
                        outC = outC.toString();
                        outC = outC.toUpperCase();
                        out[j] = outNC[j].replace(/^[a-z]/, outC); // replace first character with capital letter
                    }
                    return message.channel.send("This user's schedule is:" + "\nA: " + out[1] + "\nB: " + out[2] + "\nC: " + out[3] + "\nD: " + out[4] + "\nE: " + out[5] + "\nF: " + out[6] + "\nG: " + out[7]); // yeah i could use a for loop but it's the same every time
                }
            }
            return message.channel.send("This user has not added a schedule");
        }
        else {
            return message.channel.send('Too many arguments');
        }
    }
};  