# Simple screenshot task
> Creates screenshots of a given list.

### Installation

`npm install`

Note: You need at least Node.js 4.4.x.

## Usage

Create a websites.json in the root directory and put all URL's in, for example:

```json
{
  "websites": [
    "meinewebseite.de",
    "deinewebseite.de"
  ]
}
```

Run `npm start` to create screenshots, you will find them in the `screenshots` folder
of the project.

## Environment

### browser resolution

process.env.WINDOW_WIDTH
process.env.WINDOW_HEIGHT

### screenshot size

process.env.SHOT_WIDTH
process.env.SHOT_HEIGHT
