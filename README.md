### Fullstack app that saves android app bundles in MySQL

##### Using react, node, styled-components, typescript, mysql, and an express router

#### To Run the App in local environment or using your own Database

1. CD to root of app
2. npm install
3. Add .env file in root with values
   - DB_HOST
   - DB_PORT
   - DB_USER
   - DB_PASSWORD
   - DB_SCHEMA
4. npm run dev
5. Go to localhost:3000 in browser

TODO if i had more time:

7. Fix Searchbar
8. Re-create error handling of sql connection so server does not disconnect during runtime.
9. Remove typescript errors by extending tsconfig and typeguarding each argument, even where it's not needed.
