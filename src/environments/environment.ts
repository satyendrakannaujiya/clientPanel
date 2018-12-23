// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
  	apiKey: "AIzaSyCv6o2gCSYcwedl6y5-J0thfY_KNFICCHA",
    authDomain: "clientpanelprod-d51ec.firebaseapp.com",
    databaseURL: "https://clientpanelprod-d51ec.firebaseio.com",
    projectId: "clientpanelprod-d51ec",
    storageBucket: "clientpanelprod-d51ec.appspot.com",
    messagingSenderId: "949823880516"
  }
};
