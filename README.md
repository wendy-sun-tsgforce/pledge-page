## Quick start

1.  Download the project's zip.
2.  Make sure you have node.js (<https://nodejs.org/en/>) installed.
3.  Type `npm install` in terminal/console in the source folder where `package.json` is located.
4.  Change REACT_APP_API_URL in `.env` file to the location of the back-end server.
5.  Run in terminal `npm start`. Also make sure the back-end server is running too.
6.  If you want to deploy this to a server, run `npm run-script build`. This will compile code into minified JavaScript that can be deployed anywhere.

## File Structure

Within the download you'll find the following directories and files:
```
paper-kit-react

├── README.md
├── jsconfig.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo.svg
    ├── assets
    │   ├── css
    │   │   ├── bootstrap.min.css
    │   │   └── bootstrap.min.css.map
    │   │   └── pledge-page.scss // add unique scss here
    │   ├── fonts
    │   ├── img
    │   └── scss
    ├── components
    │   ├── Content // this has the individual sections + components
    │   │   └── AllPledges.js
    │   │   └── Pledge.js
    │   │   └── SignUp.js
    │   ├── Footers
    │   │   └── DemoFooter.js
    │   ├── Headers
    │   │   ├── ShatterproofHeader.js
    │   │   └── ProfilePageHeader.js
    └── views // this has the complete pages
        ├── Index.js // to navigate between the three pages
        ├── pledge-display.js
        ├── pledge.js
        ├── thank-you.js
  ```

### React Hooks support

Paper Kit React is built on top of Bootstrap 4 using React and Reactstrap, so it fully supports React Hooks.

### Bootstrap 4 support

Paper Kit React is built on top of Bootstrap 4 using React and Reactstrap, so it fully supports them. Most of the elements from the framework are re-designed to resemble sheets of paper and color pastels. If the are elements that we have not touched, they will gracefully fall back to the Bootstrap 4 default.

## Documentation
The documentation for the Paper Kit React is hosted at our [website](https://demos.creative-tim.com/paper-kit-react/#/documentation/introduction?ref=pkr-github-readme).


## Licensing

- Copyright 2019 Creative Tim (https://www.creative-tim.com/?ref=pkr-github-readme)

[CHANGELOG]: ./CHANGELOG.md
[LICENSE]: ./LICENSE.md
