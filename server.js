const express = require("express");
const OktaJwtVerifier = require("@okta/jwt-verifier");
var cors = require("cors");
const PORT = process.env.PORT || 3001;
var db = require("./models");
const routes = require("./controllers");

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: "https://dev-675110/oauth2/default",
  clientId: "0oardocu5Ha2cFQ7V356",
  assertClaims: {
    aud: "api://default",
  },
});

/**
 * A simple middleware that asserts valid access tokens and sends 401 responses
 * if the token is not present or fails validation.  If the token is valid its
 * contents are attached to req.jwt
 */
function authenticationRequired(req, res, next) {
  const authHeader = req.headers.authorization || "";
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    return res.status(401).end();
  }

  const accessToken = match[1];

  return oktaJwtVerifier.verifyAccessToken(accessToken)
    .then((jwt) => {
      req.jwt = jwt;
      next();
    })
    .catch((err) => {
      res.status(401).send(err.message);
    });
}

const app = express();

/**
 * For local testing only!  Enables CORS for all domains
 */
app.use(cors());

/**
 * An example route that requires a valid access token for authentication, it
 * will echo the contents of the access token if the middleware successfully
 * validated the token.
 */
app.get("/secure", authenticationRequired, (req, res) => {
  res.json(req.jwt);
});

/**
 * Another example route that requires a valid access token for authentication, and
 * print some messages for the user if they are authenticated
 */
app.get("/api/messages", authenticationRequired, (req, res) => {
  res.json([{
    message: "Hello, word!"
  }]);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

db.sequelize.sync({ }).then(() => {
  var run = require("./scripts/seedDB");

  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});