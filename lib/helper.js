const Link = require('../components/Link') // eslint-disable-line

/**
* @param {Link} link - The title of the message.
*/
function getActionObject (link) {
  return {
    '@type': 'openUri',
    name: link.text,
    targets: [
      {
        os: 'default',
        uri: link.url
      }
    ]
  }
}

module.exports = { getActionObject }
