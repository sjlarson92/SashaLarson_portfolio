# Node
- A cross-platform JavaScript runtime environment that allows Javascript to be run for a back end application

## Nest.js

## Express
- https://expressjs.com/
- Fast, unopinionated, minimalist web framework for Node.js

## Main ORMs:
1. Prisma
2. Sequelize 
3. TypeORM

# Main Migration Tools: 
1. Umzug - The most popular migration tool in the Sequelize ecosystem
   - Highest npm downloads among Sequelize migration tools
   - Well-maintained with good TypeScript support
   - Doesn't auto-generate migrations, but provides a robust framework

2. Atlas - Rising in popularity, especially in enterprise environments
   - Highest GitHub stars and fastest growing
   - Professional backing from Ariga
   - Works across many ORMs, not just Sequelize
   - Best for schema-driven development approach

## Middleware
- Anything between the request and the response. Typically a function that intercepts incoming request-response cycle in an app.
- Middleware functions are executed in the order in which they are defined.
- Each middleware can modify the req or res objects.
- The next() function is used to pass control to the next middleware in the stack. If next() is not called, the request will be stuck and no response will be sent to the client.

### 3 Types of Middleware
1. Built-in
   - Typically uses `app.use()`
2. Custom
3. Third Parties