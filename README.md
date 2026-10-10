# Auctores MVP Lead

This is a single-page application for Auctores.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm (or yarn/pnpm/bun) installed on your machine.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/your_project.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Development

To run the app in the development mode, run:
```sh
npm run dev
```
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.

### Building for Production

To build the app for production, run:
```sh
npm run build
```
This will create a `dist` folder with the static assets.

## Deploy

You can deploy the contents of the `dist` folder to any static site hosting service.

### Legacy-site migration

`overbooking.auctores.ai` is retained for permanent redirects to the current site and app legal pages. Once the maintained public app guide is verified live, `/onboarding/apaleo` redirects to `https://app.auctores.ai/training/getting-started` on this deployment and its aliases. Vercel preserves incoming query parameters; its existing no-trailing-slash rule handles the slash variant. Do not delete the old hostname or restore the legacy homepage as the public destination.

The maintained guide covers the 7% recovered-room-revenue offer and current Apaleo connection/configuration flow. The redirect does not change billing, OAuth permissions or hotel settings. Rollback reference before this guide migration: `94e955f`.
