module.exports = {
    name: 'makedb',
    description: 'Creates a database',
    execute(message, args) {
        if (message.member.permissions.has('ADMINISTRATOR')) {
            if (args.length < 3) {
                return message.channel.send(`Please provide more arguments, ${message.author}`);
            }
            else if (args.length === 3) {

            }
            else {
                return message.channel.send('Too many arguments');
            }
        } else {
            return message.channel.send("This command is administrator only");
        }
    },
};