const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const { color, emojis } = require('../../config.json')

module.exports = {
    name: 'vote',

    /**
     * @param {Client} client
     * @param {Message} message
     */

    run: async(client, message) => {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setLabel('Gacha Realm')
            .setEmoji(emojis.topgg)
            .setURL('https://discord.gg/gacha-realm-1137178675075362889')
            .setStyle('LINK')
        )
        const embed = new MessageEmbed()
        .setTitle("Shun's Support Server")
        .setDescription('Find Shun at [CDTLVOTOS](https://discord.gg/cdtlvotos)')
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter('shu.chan')
        .setColor(color)

        await message.channel.send({ embeds: [embed], components: [row] }).catch(e => console.log(e))
    }
}