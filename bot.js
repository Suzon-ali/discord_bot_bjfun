const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
  ],
});


codes = [
  'x72571', 'x40691', 'f22141', 'u21981', 'f72861', 'e50631', 'x73781', 'i25671', 'b22131', 'z14391',
  'b15371', 'c33931', 'g89221', 'x08421', 'c57391', 'd69611', 'e35921', 'j14671', 'a81681', 'e28561',
  's27901', 'l95431', 'w12901', 'v11741', 'w53581', 'w31101', 'a48561', 'm62931', 'm30181', 'a90911',
  'x89301', 'w35371', 'j23291', 'a98091', 'o11501', 'j98181', 'j79921', 'x25221', 'y82041', 'h22971',
  'm97291', 'z90691', 'o66411', 'm85811', 't25941', 'l39751', 'c13351', 'p43791', 'r72921', 'z74881',
  'j85991', 'u84001', 'k13121', 'x98061', 'b16841', 'o84971', 's21401', 'j13741', 'u92411', 'e80861',
  'c89411', 'c37821', 'z51151', 'y47741', 'm26441', 'l05421', 'c41041', 'j78541', 'c08191', 'p20171',
  'n92351', 'b99691', 'g54291', 'a42641', 'z56801', 'e53771', 'v36571', 'd82761', 'p30331', 'j07471',
  'f30781', 'j92651', 'u66351', 'm53841', 'j76201', 's63441', 'y85391', 'e16061', 'u04581', 'z71541',
  'p98271', 'o39551', 'x52741', 'x28211', 'j32221', 'p79601', 'e69471', 's77561', 'd32221', 'n07951',
  'x54081', 'o25861', 'g30741', 'h55691', 'k83631', 'm85521', 'r70171', 'p08961', 'g70211', 'x88651',
  'e43101', 'h00271', 'l37771', 'a46531', 'c40561', 'n25991', 'l81651', 'z71531', 'f34961', 'k88381',
  'v58971', 'j89571', 't23141', 'd96501', 'y55061', 'k48871', 'g35371', 'd15101', 'a28401', 'i37911',
  'd41181', 'i13941', 'd91661', 'k89331', 'b13921', 's61161'
]

   

client.once("ready", () => {
  console.log("Bot is ready!");
  sendCodes();
});

async function sendCodes() {
  const channel = await client.channels.fetch("1115127702664519770");
  const messageTemplate = "Discord Campaign Code: ";
  const timer = "Next code coming in 30 minutes";

  for (const code of codes) {
    const messageContent = `${messageTemplate} **\`\`\`diff\n${code}\`\`\`**\n${timer}`;
    await channel.send(messageContent);
    await sleep(1800000);
  }

  await channel.send("I am hungry! Once My owner will eat me some codes. I will come back to you. Stay tuned!");
  client.destroy();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

client.login(
  "MTExNzA1NTg5MjgyMzczNjMzMA.Gs9WMD.5tvk_CKDQW6o0_lJJiHWwy6JNQSgC14vFOAgLY"
);
