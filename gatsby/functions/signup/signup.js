const sanity = require("@sanity/client");

/**
 * Sanity client docs: https://www.sanity.io/docs/js-client
 */
const sanityClient = sanity({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  useCdn: false
});

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);
  
  if (body.zuppy) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Meeeerp. Error Code 1984" })
    };
  }
  
  const requiredFields = ["name", "email", "password", "participation"];

  for (const field of requiredFields) {
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Es fehlen Angaben. Bitte alle Textfelder ausfüllen! Das Feld ${field} fehlt.`
        })
      };
    }
  }

  if (body.password !== process.env.SIGNUP_PASSWORD) {
    return {
      statusCode: 401,
      body: JSON.stringify({
        message: `Falsches Passwort. Du findest das Passwort auf dem Flyer oder frage einer der BirthdayBoys`
      })
    };
  }

  try {
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
      const updated = sanityClient.patch(existing[0]._id).set(docBase).commit();
      console.log("Updated visitor", updated);
    }
    else {
      // Create new visitor
      const created = await sanityClient.create({
        _type: "visitor",
        email: body.email.trim().toLowerCase(),
        ...docBase,
      });
      console.log("Created visitor", created);
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Interner Fehler. Bitte gib einem der BirthdayBoys Bescheid :(" })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Alles klar! Danke für die Anmeldung, das freut uns sehr!" })
  }
}