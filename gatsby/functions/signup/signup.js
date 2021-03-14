const Sanity = require("@sanity/client");
const Discord = require("discord.js");

/**
 * Discord client docs: https://discordjs.guide/
 */
const discordClient = new Discord.Client();

/**
 * Sanity client docs: https://www.sanity.io/docs/js-client
 */
const sanityClient = Sanity({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  useCdn: false
});

function initDiscord(client) {
  return new Promise((resolve, reject) => {
    client.once("ready", () => resolve());
  })
}

function createResponse(statusCode, message) {
  return {
    statusCode,
    body: JSON.stringify(message)
  };
}

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);

  if (body.zuppy) {
    return createResponse(400, "Meeeerp. Error Code 1984");
  }

  const requiredFields = ["name", "email", "password", "participation"];

  for (const requiredField of requiredFields) {
    if (!body[requiredField]) {
      return createResponse(400, `Es fehlen Angaben. Bitte alle Textfelder ausfüllen! Das Feld ${requiredField} fehlt.`);
    }
  }

  if (body.password !== process.env.SIGNUP_PASSWORD) {
    return createResponse(401, "Falsches Passwort. Du findest das Passwort auf dem Flyer oder frage einer der BirthdayBoys");
  }

  try {
    let created;
    let updated;
    const participation = body.participation.map((attendance, i) => ({
      _type: "attendance",
      _key: `${attendance.slotId}_key_${i}`,
      attending: attendance.attending,
      slot: {
        _type: "reference",
        _ref: attendance.slotId
      }
    }))

    const existing = await sanityClient.fetch(
      "*[_type == 'visitor' && email == $currentEmail] {_id}",
      { currentEmail: body.email.trim().toLowerCase() }
    );

    const docBase = {
      name: body.name.trim(),
      plusone: body.plusone ? body.plusone.trim() : "",
      participation
    }

    if (existing.length && existing[0]._id) {
      // Update existing visitor
      updated = sanityClient.patch(existing[0]._id).set(docBase).commit();
      console.log("Updated visitor", updated);
    }
    else {
      // Create new visitor
      created = await sanityClient.create({
        _type: "visitor",
        email: body.email.trim().toLowerCase(),
        ...docBase,
      });
      console.log("Created visitor", created);
    }
    // Notify via Discord
    try {
      await Promise.all([
        initDiscord(discordClient),
        discordClient.login(process.env.DISCORD_BOT_TOKEN)
      ]);
  
      const channel = discordClient.channels.cache.get(process.env.DISCORD_CHANNEL_ID)
      const timeSlots = body.participation.filter((a) => a.attending).map((a) => a.title).sort().join(" | ");
      channel.send(
        `${created ? "NEUE ANMELDUNG:" : "ÄNDERUNG:"} ${body.name} (${body.email}) ${body.plusone ? ("mit " + body.plusone) : ""} -> ${timeSlots || "Keine Anmeldung"}`
      );
    } catch (err) {
      console.error("Could not send visitor notification:", err)
    }

  } catch (err) {
    console.error("Visitor update error", err)
    return createResponse(500, "Interner Fehler. Bitte gib einem der BirthdayBoys Bescheid :(")
  }

  return createResponse(200, "Success");
}