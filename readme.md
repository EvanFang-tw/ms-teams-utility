# Teams Library

## How to use

Use this repository as npm local package, like:
```sh
git clone 'https://this.repository'

mkdir myproject && cd myproject && npm init -y

npm install ../teams --save
```

## Code examples

### Send a simple message
```js
const teams = require('teams')
const url = 'your_teams_web_hook_url'

// Create webhook object
const webhook = new teams.Webhook(url)

webhook.send('Title', 'Text', teams.theme.SUCCESS)
.then(() => {
  console.log('ok');
}).catch(err => {
  console.log(err.message)
})

//Or send without color theme
await webhook.send('Title', 'Text')
```
> `send()` returns a __promise__, so you need to use `then` or `await` it to let it run.

### Send Sections
```js
const section1 = new teams.Section(
  'section title',
  'section sub title',
  'hello, world',
  'https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0.jpg',
  [
    {
      name: 'Name:', 
      value: 'Musk'
    },
    {
      name: 'Age:',
      value: '46'
    }
  ])

await webhook.sendSectionList(section1)

// Or you can send multiple section at the same time
const section2 = new teams.Section('Title', 'Subtitle')

await webhook.sendSectionList([section1, section2])
```

### Send Section with Link Buttons
```js
const section3 = new teams.Section('Title', 'Subtitle')

const links = [
  {
    text: 'Link1',
    url: 'https://github.com'
  },
  {
    text: 'Link2',
    url: 'https://github.com'
  }
]

await webhook.sendSectionList(section3, 'summary', teams.theme.INFO, links)
```