# Next JS with Typescript Custom Server Boilerplate

## Q & A

- Why do I need this boilerplate?
  I love NextJS, so I create a lot of project with it. The problem is, I kinda have to to the same set up to get started over and over again (like config TypeScript, create pages, dynamic pages, add dependencies,etc.). This is a very basic NextJS boilerplate that has features that mostly all Next app needs.
  Furthermore, this boilerplate also allow you to serve your app with a custom NextJS server without additional server on top like others.

- Hold on, custom server. Why the hell do I need it?
  Well, for most of the Next app, simply by running `next build && next start` is sufficient for deployment. However, a lot of time, you would like to have an ability to run `node server.js` instead as you may not have Next installed on a Node environment. NextJS does not have `server.js` exported by default. This comes in superhandy.

- Sounds good. So why don't they make it by default?
  Yep, custom Next server comes with several trade backs:
  - More manual works maintaining routes
  - A custom server will remove important performance optimizations, like `serverless functions` and [Automatic Static Optimization](https://nextjs.org/docs/advanced-features/automatic-static-optimization).
    With an awareness of the fallbacks aboves, this boilerplate also make custome server optional, if you would like having this, please clone from `with-custom-server` branch instead.

## Getting started

- Clone the project.
  - Without custom server `git clone git@github.com:turbothinh/nextjs-ts-custom-server.git`
- Install dependencies `yarn`
- Develop `yarn start:dev`
- Build app and serve `yarn build`
