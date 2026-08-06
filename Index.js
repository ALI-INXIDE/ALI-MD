{
  "name": "ALI-MD",
  "description": "Javascript WhatsApp bot made by ali",
  "logo": "https://files.catbox.moe/6ku0eo.jpg",
  "keywords": ["ALI-MD"],
  "success_url": "/",

    "stack": "container",
  "env": {
    "SESSION_ID": {
      "description": "ALI-MD~fQcg3JJK#tve5hw0kWgRZnhtXHJNrpYn3m04l0fOuI_z0TzTYU4I.",
      "required": true,
      "value": ""
    },  
    
    
    "STICKER_NAME": {
      "description": "type your sticker pack name.",
      "required": false,
      "value": "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪"
    }, 
      
    "PREFIX": {
      "description": "paste your bot prefix note! Don't apply null prefix.",
      "required": true,
      "value": "."
    },
    
    "MODE": {
      "description": "select your bot work type public-private-inbox-group.",
      "required": true,
      "value": "public"
      
    },
        
    "REJECT_MSG": {
      "description": "put your own call reject message.",
      "required": false,
      "value": "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*"
    }, 

    "AUTO_REPLY": {
      "description": "Make it true if you want automatic reply.",
      "required": false,
      "value": "false"
    }, 
    
    "ADMIN_ACTION": {
      "description": "make it true if want know who promote or demote a member .",
      "required": false,
      "value": "false"
    },

    "WELCOME": {
      "description": "make it true if want welcome message in groups.",
      "required": false,
      "value": "false"
    },
    
    "GOODBYE": {
      "description": "make it true if want goodbye message in groups.",
      "required": false,
      "value": "false"
    },
    
    "AUTO_STICKER": {
      "description": "Make it true if you want automatic sticker.",
      "required": false,
      "value": "false"
    }, 

    "AUTO_STATUS_SEEN": {
      "description": "Make it true for automatic status seen.",
      "required": true,
      "value": "true"
    }, 
    
     "MENTION_REPLY": {
      "description": "make it true if want mention reply if someone menetion you.",
      "required": false,
      "value": "false"
    }, 

    "AUTO_STATUS_REPLY": {
      "description": "Make it true for auto reply msg on status seen.",
      "required": false,
      "value": "false"
    }, 

    "BOT_NAME": {
      "description": "Type here the bot name.",
      "required": false,
      "value": "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪"

      }, 

    "DESCRIPTION": {
      "description": "Type here the bot description name.",
      "required": false,
      "value": "© ᴘσωєʀє∂ ву αℓι м∂⎯꯭̽💀"

      }, 
    
    "ALIVE_IMG": {
      "description": "put here the bot Menu url if you don't have you can use this public url.",
      "required": true,
      "value": "https://files.catbox.moe/6ku0eo.jpg" 
      },

    
    "ANTI_LINK": {
      "description": "Make it true if you use one antilink warn - kick.",
      "required": true,
      "value": "true"
    }, 
    
    "ANTI_BAD_WORD": {
      "description": "Make it true if you want bot auto delete bad words.",
      "required": false,
      "value": "false"
    }, 

     "ALWAYS_ONLINE": {
      "description": "Make it true if want always online.",
      "required": true,
      "value": "false"  
    },   
    
    "AUTO_RECORDING": {
      "description": "Make it true if you want auto recoding.",
      "required": false,
      "value": "false"
    },

    "AUTO_TYPING": {
      "description": "Make it true if you want auto typing.",
      "required": false,
      "value": "false"
    },

    "AUTO_REACT": {
      "description": "Make it true if you want react on every message.",
      "required": false,
      "value": "false"
    },

    "OWNER_REACT": {
      "description": "Make it true if you want react on every message bot number.",
      "required": false,
      "value": "false"
    },
    
    "CUSTOM_REACT": {
      "description": "Make it true if you want custom reactions.",
      "required": false,
      "value": "false"
      
    }, 
    
    "CUSTOM_REACT_EMOJIS": {
      "description": "put here custom react react emojis.",
      "required": false,
      "value": "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍"
    }, 
    
     "ANTI_CALL": {
       "description": "Make it true if you want bot auto call rejected.",
       "required": false,
       "value": "false"       
     }, 
     
     "ANTI_DEL_PATH": {
      "description": "change it to -same- if you want to resend deleted message in same chat othwise inbox",
      "required": false,
      "value": "inbox"
    }, 
    
     "ANTI_DELETE": {
      "description": "set true for show deleted messages.",
      "required": false,
      "value": "true"  
    },

    "READ_MESSAGE": {
      "description": "Make it true if you want bot read your all sms just now.",
      "required": false,
      "value": "false"
    }

},

     "buildpacks": [
        {
            "url": "https://github.com/heroku/heroku-buildpack-nodejs.git"
        }
     ],
  "stack": "heroku-24"
