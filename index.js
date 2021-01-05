const axios = require("axios")
const urls = ["https://bot-discord-warkop.glitch.me"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Anjay, Uptime At. " + Date.now())).catch(() => {});
        })
    }, 30 * 1000);
