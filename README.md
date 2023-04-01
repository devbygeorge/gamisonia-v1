## Overview

This is a one-page portfolio website made for an interior designer. The data comes from the Sanity CMS platform.

## Technologies I have used

- HTML, SASS, TypeScript
- Next.js
- Sanity
- Swiper.js
- Nodemailer
- React social icons

## Setup

1. Create a project on [Sanity.io](https://sanity.io), open sanity.json inside the sanity directory, and replace the project id with yours.
```sh
# type the following command to deploy into your sanity repository
$ sanity deploy
```
2. Integrate Nodemailer service with your Gmail account: https://nodemailer.com/usage/using-gmail/
3. Create a .env.local file, paste content from the .env.example, and fill in with the correct credentials

```sh
# Install necessary packages
$ npm install

# Run with the dev server
$ npm run dev

# To run with production mode
$ npm run build && npm start

# Visit http://localhost:3000
```

For more information about the Sanity CMS platform: https://www.sanity.io/docs
