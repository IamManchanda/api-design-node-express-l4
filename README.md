# API design in Node.js with Express, v3

> Practice Project - Lesson 4 / Exercise 3

## Controllers

- test command - `npm run test-controllers`

So far we have routes and models. Now we need to hook our routes up to our models so we can perfom CRUD on the models based on the routes + verbs. That's exactly what controllers do.

- create CRUD resolvers in `utils/crud.js`
- create controllers for the Item resources using the base crud resolvers
- ensure all tests pass by running test command
