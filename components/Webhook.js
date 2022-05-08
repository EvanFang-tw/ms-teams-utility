const Section = require('./Section') // eslint-disable-line
const Link = require('./Link') // eslint-disable-line
const helper = require('../lib/helper')
const theme = require('../lib/themes')
const axios = require('axios').default

class Webhook {
  /**
  * Send simple message to channel
  * @constructor
  * @param {string} url - The url of the webhook.
  */
  constructor (url) {
    this.url = url
  }

  /**
  * Send simple message to channel
  * @param {string} title - The title of the message.
  * @param {string} text - The text of the message.
  * @param {string} [color] - The text of the message.
  */
  send (title, text, color) {
    const obj = { title, text }
    if (color) {
      obj.themeColor = color
    }
    return axios.post(this.url, obj)
  }

  /**
  * Send multiple sections message to channel
  * @param {Section[]} sections - Section list
  * @param {string} [summary]
  * @param {string} [color]
  * @param {Link[]} [links]
  */
  sendSectionList (sections, summary, color, links) {
    //
    if (!sections || sections.length === 0) { throw new Error('sections is required') }
    //
    // If sections is passed as an object, make it to be an array
    if (Array.isArray(sections) === false) { sections = [sections] }
    //
    // Set up default value
    if (!summary) { summary = 'Summary' }
    if (!color) { color = theme.PRIMARY }
    if (!links || links.length === 0) { links = [] }
    //
    const obj = {
      summary: summary,
      themeColor: color,
      sections: sections.map((s) => {
        return {
          activityTitle: s.title,
          activitySubtitle: s.subTitle,
          activityImage: s.imageUrl,
          activityText: s.text,
          facts: s.facts
        }
      }),
      potentialAction: links.map((link) => helper.getActionObject(link))
    }
    //
    return axios.post(this.url, obj)
  }
}

module.exports = Webhook
