## Overview

This is a one page portfolio website made for an interior designer. The data comes from Sanity CMS platform.

## Technologies I have used

- HTML, SASS, TypeScript
- Next.js
- Sanity
- Swiper.js
- Nodemailer
- React social icons

## Setup

1. Create project on [Sanity.io](https://sanity.io), open sanity.json inside sanity directory and replace project id with yours.
```sh
# type following command to deploy into your sanity repository
$ sanity deploy
```
2. Integrate nodemailer service with your gmail account: https://nodemailer.com/usage/using-gmail/
3. Create .env.local file, paste content from .env.example and fill with correct credentials

```sh
# Install neccessary packages
$ npm install

# Run with dev server
$ npm run dev

# To run with production mode
$ npm run build && npm start

# Visit http://localhost:3000
```

For more information about Sanity CMS platform: https://www.sanity.io/docs
