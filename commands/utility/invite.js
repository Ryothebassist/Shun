const { Client, Message, MessageActionRow, MessageButton } = require('discord.js')

module.exports = {
    name: 'invite',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async(client, message, args) => {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setLabel('Add ')
            .setURL('https://discord.com/oauth2/authorize?client_id=1237233208295165973&permissions=8&scope=bot+applications.commands')
            .setStyle('LINK')
        )
        .addComponents(
            new MessageButton()
            .setLabel('Support Server')
            .setURL('https://discord.gg/cdtlvotos')
            .setStyle('LINK')
        )

        message.channel.send({ content: 'Invite **Shun** to your server!', components: [row] }).catch(e => console.log(e))
    }
}