const { Client, Message, MessageEmbed } = require('discord.js')
const { color, emojis } = require('../../config.json')

module.exports = {
    name: 'about',

    /**
     * @param {Client} client
     * @param {Message} message
     */

    run: async(client, message) => {
        let days = Math.floor(client.uptime / 86400000 );
        let hours = Math.floor(client.uptime / 3600000 ) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;

        const about = new MessageEmbed()
        .setAuthor('About', message.author.displayAvatarURL())
        .setDescription(`<@${client.user.id}> is an bot that can snipe any deleted and edited messages, [Invite Shun](https://discord.com/oauth2/authorize?client_id=1237233208295165973&permissions=8&scope=bot+applications.commands)`)
        .addField('Developer', `[shu.chan](https://discord.com/users/1237202902511124541)`)
        .addField("Stats", `${emojis.home} ${client.guilds.cache.size}/100 servers\n${emojis.add} ${client.users.cache.size} users`)
        .addField("Info", `${emojis.djs} Discord.js \`v13.1.0\`\n${emojis.js} Node.js \`v22.1.0\``)
        .addField('Uptime', `\`\`\`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds\`\`\``)
        .setColor(color)

        await message.channel.send({ embeds: [about] }).catch(e => console.log(e))
    }
}