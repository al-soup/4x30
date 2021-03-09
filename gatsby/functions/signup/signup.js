const sanityClient = require("@sanity/client");
const { doc } = require("prettier");

/**
 * Sanity client docs: https://www.sanity.io/docs/js-client
 */
const client = sanityClient({
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
      body: JSON.stringify({ message: `Meeeerp. Error Code 1984` })
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

  // TODO: Check if participation has required form

  if (body.password !== process.env.SIGNUP_PASSWORD) {
    return {
      statusCode: 401,
      body: JSON.stringify({
        message: `Falsches Passwort. Du findest das Passwort auf dem Flyer oder frage einer der BirthdayBoys`
      })
    };
  }

  console.log(body)
  try {
    const participation = body.participation.map((attendance, i) => ({
      _type: "attendance",
      _key: attendance.id + i,
      attending: attendance.attending,
      slot: {
        _type: "reference",
        _ref: attendance._id
      }
    }))

    const existing = await client.fetch(
      "*[_type == 'visitor' && email == $currentEmail] {_id}",
      { currentEmail: body.email }
    );

    if (existing.length && existing[0]._id) {
      // Update existing visitor
      const updated = client
        .patch(existing[0]._id)
        .set({ name: body.name, participation })
        .commit();
      console.log(`Updated visitor ${updated}`)
    }
    else {
      // Create new visitor
      const doc = {
        _type: "visitor",
        name: body.name,
        email: body.email, // TODO: lowercase, trim
        participation 
      };
      const created = await client.create(doc);
      console.log(`Created visitor ${created}`)
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Interner Fehler. Bitte gib einem der BirthdayBoys Bescheid :(" })
    }
  }

  // TODO: Save changes to Sanity
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Success" })
  }
}