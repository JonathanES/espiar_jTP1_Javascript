# TP0 - Basics

In this TP you will build a small library for handling a Pictures collection.

# Pre-requisites:

Make sure you have installed the following:

* [NodeJS](https://nodejs.org/) ~9.9.0
* [Yarn](https://yarnpkg.com/) ~1.5.1

As soon as you have all of this installed, you can run the code from the application
at any moment by running `node src/index.js` or `npm run start` or `yarn start` (hint: look at `package.json` to see how that works)

You can choose to rush in the next steps straight away, but if you have not done it yet,
I strongly recommand that you take the time to look at all the files in the `src` directory,
and then read all the instructions.

Also, if you did not run `git init` yet, now is a good time to

# Level 0 - Shape model

In the file `./src/fixture.js`, you'll see an unassigned const named `pictures`,
you will use it to store you "default" pictures (a.k.a: the ones that are part of the fist state of the application).

You must have at least five of them and they should all have the same "shape".

Passing this const to `JSON.parse(JSON.stringify(pictures))` should raise no errors.

# Level 1 - List

see FIXME at `./actions/list.js`;

# Level 2 - Get

see FIXME at `./actions/get.js`;

# Level 3 - Add

see FIXME at `./actions/add.js`;

# Level 4 - Remove

see FIXME at `./actions/remove.js`;

# Level 5 - Update

see FIXME at `./actions/update.js`;

# Bonus (for future ninjas)

Write unit tests using [Jest](https://facebook.github.io/jest/) for each and every functions in the `actions` directory.
All tests must be written next to the original code in a file with the same name but a `.test.js` extension (eg: `src/toto.js` will have its tests written in `src/toto.test.js`).
