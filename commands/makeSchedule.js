module.exports = {
    name: 'Make Schedule',
    description: 'Creates a schedule',
    execute(message, args) {
        if (!args.length) {
            return message.channel.send(`Please provide more arguments, ${message.author}`);
        }
        else if (args.length === 1) {

        }
        else if (args.length === 2) {

        }
        else {
            return message.channel.send('Too many arguments');
        }
    },
};