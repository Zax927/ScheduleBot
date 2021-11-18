module.exports = {
    name: 'help',
    description: 'Help for commands',
    help: 'Get help for a command. \nTakes 1 argument: the name of the command you want help for',
    execute(message, args) {
        if (!args.length) {
            return message.channel.send('Please provide a command for help');
        }
        else if (args.length === 1) {
            const fs = require('fs');
            var path = './commands/' + args[0] + '.js';

            fs.access(path, fs.R_OK, (err) => {
                if (err) {
                    console.log(err)
                    return message.channel.send(args[0] + ".js does not exist or has no help text");
                }
                const hc = require('./' + args[0] + '.js');
                out = hc.help;
                return message.channel.send(out);
            })
        }
        else {
            return message.channel.send('Too many arguments');
        }
    }
};