const Fact = require('./Fact') // eslint-disable-line

class Section {
  /**
  * Send simple message to channel
  * @constructor
  * @param {string} title
  * @param {string} subTitle
  * @param {string} text
  * @param {string} [imageUrl] // todo... is this required?
  * @param {Fact[]} [facts]
  */
  constructor (title, subTitle, text, imageUrl, facts) {
    this.title = title
    this.subTitle = subTitle
    this.text = text
    this.imageUrl = imageUrl
    this.facts = facts || []
  }
}

module.exports = Section
