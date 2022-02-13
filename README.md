# Agifly Website

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Code Quality:

- Code linting is done with `eslint`
- Code formatting is done with `prettier`
- Code typechecking (Javascript) is done with `prop-types`
- this checks are performed automatically before every commit using the `husky` pkg, adding `--no-verify` at the end of `git commit` will nullify the check.

**Note:** there are a series of `eslint` errors that are **unavoidable**, rules such as (`// eslint-disable rule_i_want_disable`) can be added on the code to make sure that those eslint errors are not triggered. This was decided against since it will defeat the purpose of the check. Another approach would be to disable the rule globally inside the `eslintrc.json`

Made with ❤️ by Agifly &copy; 2021.
