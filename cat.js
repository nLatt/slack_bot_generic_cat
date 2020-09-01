const { WebClient } = require("@slack/web-api");

const web = new WebClient(process.env.SLACK_TOKEN);

const current_time = new Date().toTimeString().slice(0, 5);

(async () => {
  console.log(process.env.SLACK_TOKEN)
  try {
    await web.chat.postMessage({
      channel: "#testing",
      text: `The current time in Cat-topia is ${current_time}!`,
    });
    console.log("Message posted!")
  } catch (error) {
    console.log(error);
  }
})();
