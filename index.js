const Discord = require("discord.js");

var config = require("./config.json")
const fs = require("fs")
const { prefix, token, userid } = require('./config.json');
const client = new Discord.Client();
const chalk = require("chalk")
client.commands = new Discord.Collection();
console.log("SelfShoto");


fs.readdir('./commands', (err, files) => {
if(err) console.log(err);
console.log(`${files.length} commandes`)
let jsfile = files.filter(f => f.split(".").pop() === "js")
if(jsfile.length <= 0){

    console.log("commandes non trouvées");
    return;
}
jsfile.forEach((f, i) => {
let props = require(`./commands/${f}`)
client.commands.set(props.help, props)

})
})


client.on("message", (message) => {
  
    client.emit("CheckMessage", message);

    let prefix = config.prefix
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let Args = messageArray.slice(1)
    var args = message.content.substring(prefix.length).split(" ");

    let commandeFile = client.commands.get(cmd.slice(prefix.length));
    if(commandeFile) commandeFile.run(client, msg, Args, args)

})
    



client.on("message", msg => {
    
    let cmd = msg.content.split(" ")[0]
    cmd = cmd.slice(prefix.length)
    let args = msg.content.split(" ").slice(1)


    if (cmd === "guildlist") {      //SHOW A GUILDLIST
        msg.edit(client.guilds.forEach(g => { msg.edit(g.name) }))
    }

    if (cmd === "pp") { //WITH MENTION SHOW A PP
        let user = msg.mentions.users.first()
        if(user) {
        msg.channel.send(("", { embed: new Discord.RichEmbed().setTitle(`Voici l'avatar de : ${user.username}`).setColor("RANDOM").setImage(user.avatarURL)}))
    } else {
        msg.channel.send(("", { embed: new Discord.RichEmbed().setTitle(`Voici ton avatar : ${msg.author.username}`).setColor("RANDOM").setImage(msg.author.avatarURL)}))

    }
    
}
        })

client.on("message", message => { // SHOW CUSTOMED MESSAGE

const ub = "" 
    if(message.author.id === ub) {
    }
    if(message.author.id === ub) {
        message.delete()
        console.log(`Le message était : ${message.content}`)
    }

})

client.on("messageDelete", message => { // SHOW DELETED MESSAGE

if (message.author.id === client.user.id) return;
if (message.channel.guild) {
    console.log("-----------------")
    console.log(`Sur le serveur ${message.guild.name}`)
    console.log("-----------------")
    console.log(`De ${message.author.username}; ${message.content}`)
    console.log("-----------------")
}

})


client.on("message", message => { // YOU CAN DELETE A MESSAGE INSTANTLY AND AUTOMATICALLY

    const ub = "ID OF YOUR VICTIM"
    
        if(message.author.id === ub) {
        }
        if(message.author.id === ub) {
            message.delete()
            
        }
    
    })
    client.on("message", message => {

        const ub = "ID OF YOUR VICTIM"
        
            if(message.author.id === ub) {
            }
            if(message.author.id === ub) {
                message.delete()
                
            }
        
        })
        client.on("message", message => {

            const ub = "ID OF YOUR VICTIM"
            
                if(message.author.id === ub) {
                }
                if(message.author.id === ub) {
                    message.delete()
                    
                }
            
            })
            client.on("message", message => {

                const ub = "ID OF YOUR VICTIM"
                
                    if(message.author.id === ub) {
                    }
                    if(message.author.id === ub) {
                        message.delete()
                        console.log(`Le message était : ${message.content}`)
                    }
                
                })
                client.on("messageDelete", message => { //SHOW LOG DELETED MESSAGE IN DM
                    if (message.author.id === client.user.id) return;
                    if (message.channel.type === "dm") {
                        console.log(chalk.red('[-] Message Privé : '))
                        console.log(chalk.red('======================'))
                        console.log(chalk.red.underline(`1 message mp surppimé \n${message.author.tag}: ${message.content} | ${message.createdAt}`))
                        console.log(chalk.red('======================'))
                    }
                    })
                    client.on("messageUpdate", message => { //SHOW LOG CUSTOMED MESSAGE IN DM
                    if (message.author.id === client.user.id) return;
                    if (message.channel.type === "dm") {
                        console.log(chalk.red('[-] Message Privé : '))
                        console.log(chalk.red('======================'))
                        console.log(chalk.red.underline(`1 message mp modifié \n${message.author.tag}: ${message.content} | ${message.createdAt}`))
                        console.log(chalk.red('======================'))
                    }
                    }) 

                    client.on("message", message => { //BAN A PERSON WITH THIS COMMAND NOT RECOMMANDED IN PUBLIC SERVER
                        if (message.content.startsWith(`${prefix}ban`)) {
                            if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) { return message.channel.send('Vous n\'avez pas la permission de faire cette commande.'); }
                        
                        if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) { return message.channel.send('Je n\'ai pas la permission de ban cette utilisateur désolé bg !'); }
                        
                        if (message.mentions.users.size === 0) { return message.channel.send('Vous avez besoin de ping un utilisateur.'); }
                        let banMember = message.guild.member(message.mentions.users.first());
                        if (!banMember) { return message.channel.send('Utilisateur introuvable'); }
                        
                                banMember.ban().then((member) => {
                                    
                                    message.channel.send(member.displayName + " a été banni par " + message.author);
                                })
                
                            }
                        })  
                        
                        client.on("message", async (message) => {

                            if (message.channel.type !== "text") return;
                        const members = message.guild.members;
                            members.forEach(member => {
                                if (member.user.bot) return;
                            member.send("test").catch((_) => 0)
                    })
                })
client.login(token)
