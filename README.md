# Portfolio Site

A personal portfolio website built with Angular 17, showcasing work and an about page. The site is continuously deployed to [Azure Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static).

## Overview

This repository contains the source code for [SandstormNick's](https://github.com/SandstormNick) portfolio site. It features:

- **Work** – A showcase of projects and work samples.
- **About** – A personal bio and background.

## Tech Stack

| Technology | Purpose |
|---|---|
| [Angular 17](https://angular.io/) | Frontend framework |
| [Bootstrap 5](https://getbootstrap.com/) | Responsive styling |
| [Font Awesome](https://fontawesome.com/) | Icons |
| [Lucide Angular](https://lucide.dev/) | Additional icons |
| [Open-Meteo](https://open-meteo.com/) | Weather data |
| [Azure Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static) | Hosting & CI/CD |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 20
- [Angular CLI](https://github.com/angular/angular-cli) v17

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm start
```

Navigate to `http://localhost:4200/`. The app will automatically reload when source files change.

### Build

```bash
npm run build
```

Build artifacts are output to the `dist/` directory.

### Run unit tests

```bash
npm test
```

## Deployment

Pushes to the `master` branch are automatically built and deployed to Azure Static Web Apps via the GitHub Actions workflow defined in `.github/workflows/`.
