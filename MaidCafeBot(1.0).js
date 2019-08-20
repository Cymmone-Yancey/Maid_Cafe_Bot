const Discord = require('discord.js');
const bot = new Discord.Client();
const token = /*Token omitted for confidentiality purposes*/;
const PREFIX = '-';


bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    if(msg.content === "I can see them"){
        msg.reply('Every Haru... He was right. There are so many!')
    }
})

bot.on('message', msg=>{
    if(msg.content === "bottle episode"){
        msg.reply('What if there was an elevator in a bottle... :thinking: ')
    }
})

bot.on('message', msg=>{
    if(msg.content === "run buns"){
        msg.reply('You like to run, and I like your buns.')
    }
})

bot.on('message', msg=>{
    if(msg.content === "track back"){
        msg.reply('You run track, and I like seeing you from the back.')
    }
})

bot.on('message', msg=>{
    if(msg.content === "I'd vault his pole"){
        msg.reply('Do not say that out loud... Sounds stupid.')
    }
})

bot.on('message', msg=>{
    if(msg.content === "you broke out didn't you"){
        msg.reply('Who told you dat!')
    }
})

bot.on('message', msg=>{
    if(msg.content === "you can't catch me gay thoughts!"){
        msg.reply('Oh yes we can')
    }
})

bot.on('message', msg=>{
    if(msg.content === "splash free"){
        msg.reply('Make us free na Splash! Kasaneta hikari no KONTORASUTO abite. Feel so free na kyou  tobikomu ore-tachi no Brand new blue, yeh! Omou you ni sei! sei! sei! a-oh Jibunrashiku kick! kick! kick! a-oh Tsukamitainda pull! pull! pull! a-oh Todokisou na deep! deep! deep! Splash Free')
    }
})



bot.on('message', msg=>{
    if(msg.content === "looks like a dolphin"){
        msg.reply('A dolphin with legs... and arms... and a jet pack.')
    }
})

bot.on('message', message=>{
   let args = message.content.substring(PREFIX.length).split(" ");

   switch(args[0].toLowerCase()){
    case "hello":
    message.reply('Welcome home, master! How can I serve you today?');
        break;
    case "bye":
    message.reply('Goodbye Master! Come home soon!');
        break;
    case "see":
        if(!args[1]) return message.reply('I apologize, master. I am not sure what you want me to do')      
        if(args[1] === "menu"){
              message.reply('DRINKS:')
        }
    case "get":
        if(!args[1]) return message.reply('I apologize, master. I am not sure what you want me to do')      
        if(args[1] === "drink"){
              message.reply('What kind of drink would you like today, master? We have tea, coffee, lemonade, soda, or water.');
        }
            if(args[1] === "tea"){
              message.reply('What kind of tea will ease your mind, master? We have chamomile, jasmine, oolong, herbal.');
            }
                if(args[1] === "chamomile"){
                    message.reply('How considerate of you, master, to take care of your heart so that it is healthy when you finally give it to me *UwU*. Enjoy your drink!');
                }

                if(args[1] === "jasmine"){
                    message.reply('Hopefully this provides some relief from the stress of your duties, master. Enjoy your drink!');
                }

                if(args[1] === "oolong"){
                    message.reply('There are other ways to wake you up besides having oolong tea, master :wink: But if this is what you prefer, I suppose I should let you be... Enjoy your drink!');
                }

                if(args[1] === "herbal"){
                    message.reply(':worried: Are you feeling alright, master? You seem unwell. Maybe this herbal tea will help. I should throw in a healing kiss just in case :kissing_heart:. Enjoy your drink!');
                }


            if(args[1] === "coffee"){
                message.reply('What kind of coffee will heighten your spirits, master? We have blonde or dark.');
            }

                if(args[1] === "blonde"){
                    message.reply(':flushed: I see. So that is your type, master...E-enjoy your coffee...');
                }
            
                if(args[1] === "dark"){
                    message.reply(':flushed: I see. So that is your type, master...E-enjoy your coffee...');
                }


            if(args[1] === "lemonade"){
                message.reply('What flavor of lemonade would you like to try today, master? We have strawberry, blueberry, rasberry, pink, cherry, frozen, or classic.');
            }

                if(args[1] === "strawberry"){
                    message.reply('Here you are, master. I hope you like it *berry* much :grin: !');
                }

                if(args[1] === "blueberry"){
                    message.reply('Here you are, master. I hope you like it *berry* much :grin: !');
                }

                if(args[1] === "rasberry"){
                    message.reply('Here you are, master. I hope you like it *berry* much :grin: !');
                }

                if(args[1] === "pink"){
                    message.reply('Here you are, master. I hope you enjoy it :grin: !');
                }

                if(args[1] === "cherry"){
                    message.reply('Here you are, master. I hope you enjoy it :grin: !');
                }

                if(args[1] === "frozen"){
                    message.reply('Here you are, master: something cold to contrast your warm smile :grin: !');
                }

                if(args[1] === "classic"){
                    message.reply('You truly are wonderful, master, for appreciating the classic way of living. Enjoy your drink!');
                }
            

            if(args[1] === "soda"){
                message.reply('Which soda suits your tastes today, master? We have fanta, pepsi, sprite, sunkist, or crush.');
            }

                if(args[1] === "fanta"){
                    message.reply('I knew I would like you from the start, master. Enjoy your drink!');
                }

                if(args[1] === "pepsi"){
                    message.reply('A bold choice, master. I hope you find it refreshing!');
                }

                if(args[1] === "sprite"){
                    message.reply('The choice of a truly respectable master. Enjoy your drink!');
                }

                if(args[1] === "sunkist"){
                    message.reply('Here you are, master. I hope you enjoy it :grin: !');
                }

                if(args[1] === "crush"){
                    message.reply(':flushed: B-but you are right here, master... Oh! I suppose you mean the drink :sweat_smile: that makes more sense. Here you go, enjoy your drink!');
                }


            if(args[1] === "water"){
                message.reply('I am glad to see you are hydrating properly, master. I would feel profound despair if you were not in good health. Enjoy your drink!');
            }
            break;


        if(args[1] === "food"){
              message.reply('What would you like from the menu, master? (If you do not know, type -see menu)')
        }
        break;

    }
})

bot.login(token);
