# light-dark mode

## Project Overview

light-dark mode is a simple project that teaches solidifying skills in light and dark mode toggle.

## Project Architecture

MVC Architecture

### Folder Structure

```text
.
├── README.md
├── favicon-32x32.png
├── index.html
├── robots.txt
├── src
│   ├── controller
│   │   └── main.js
│   ├── model
│   │   ├── darkmode.js
│   │   └── lightmode.js
│   └── view
│       └── style.css
├── tailwind.config.js
└── vite.config.ts
```

## How to run light-dark mode project

1. Clone repo
   ```
   git clone git@github.com:STEPHEN-EMMAHI/light-dark-theme.git
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Run development environment
   ```
   npm run dev
   ```
4. Copy local host and send to browser </br>
   Example: http://localhost:5173/

## Tech Stack

[![Tech Skills](https://skillicons.dev/icons?i=html,css,js,tailwind,vite,git)](https://skillicons.dev)

## Concepts Learnt

1. window.matchMedia('(prefers-color-scheme: dark)') is used to determine the user's theme system which is in this case set to dark.
