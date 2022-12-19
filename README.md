# USCCA PAYLOAD

## Pre-requisites

- docker
- node/npm

## Installation / Local Dev

**\_Get the value for NPM_READ_TOKEN from another developer**

1. Add NPM_READ_TOKEN as an environment variable to whatever terminal you use - DO NOT modify the `.npmrc` file.
   - bash - `nano ~/.bashrc`
   - zsh - `nano ~/.zshrc`
   - append `export NPM_READ_TOKEN="${YOUR TOKEN VALUE}"`
2. Create local.env from example `cp .env.example local.env`
   - Update values with ones from another engineer as necessary.
3. Restart terminal
4. start docker container - `docker-compose -f docker-compose.local.yml up`

## Sync Local Mongo Database to another.

**\_Get the value for the mongo connection string from another developer**

1. Attach shell to monogoDB Container
2. exec in terminal `mongodump --uri="<MONGODB CONNECTION STRING>";`
3. exec in terminal `mongorestore dump/`

## Code Quality

- Linting - `npm run lint`
- prettier - `npm run format`
- Testing - `npm run test` | `npm run test-once`

## Deployment

- Dev and Staging Environments
  - Merge a feature branch (any meaningful name is acceptable for feature branches) to `development`
- Production
  - Merge `development` into `main`
- Handled via Northflank
  - Development URL `https://p01--payload--xq7twxhqyk5c.code.run/`
  - Production URL `https://p01--payload--xq7twxhqyk5c.code.run/`

## File Structure

- `src` - files subject to build (.scss, .ts, .tsx, etc.)
  - `collections` - DataModel Configurations
    - `pages`
      - `hooks` - functions that provide help or utility to the pages configuration
      - `collectionName.ts` - These are data models that can be repeatable
    - `index.ts` - configures the Pages data Model
  - `blocks` - these are Types of dataModels in CMS that cabn be chose to add to other DataModels
    - `blockName.tsx`
  - `components` - these are customizeable CMS components to enchance the UI. They can be used in
    - `componentName.tsx`
  - `styles` - Custom Payload CMS Styles for the UI.
  - `endpoints` - Custom Endpoint Functions for CMS
  - `core` - business logic, domain types, and state
  - `styles` - global styles
  - `utilities` - small, shared functions

### Tests

Test (.spec) files should go in the directory with the entity they're testing, or in a contained directory called 'tests'.
