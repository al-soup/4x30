
exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);

  if (body.zuppy) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: `Meeeerp. Error Code 1984` })
    };
  }
  
  const requiredFields = ["name", "email", "password", "attendance"];

  console.log(body);
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

  // TODO: Save changes to Sanity
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Success" })
  }
}