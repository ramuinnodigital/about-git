const PROXY_CONFIG = [
  {
    context: [
      "/sendreq",
      "/notification",
      "/updatenotification",
      "/sendNomineeDetails",
      "/NomineeDetails"
    ],
    target: "http://localhost:1998/data",
    secure: false,
  },
]

module.exports = PROXY_CONFIG;
