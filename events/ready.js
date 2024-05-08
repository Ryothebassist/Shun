const client = require('../index')

client.once('ready', async () => {
    console.log(`${client.user.tag} is ready!`)
    client.user.setActivity('~help', {type: 'STREAMING', url: 'https://www.youtube.com/watch?v=KfJmn9lBgUE'})

    client.guilds.cache.forEach(async (guild) => {
        if(guild.available){
            await guild.members.fetch().then((member) => {
                console.log(`Cached ${member.size} users in ${guild.name}`)
            })
        }
    })
})