// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weather: {
    url: "https://api.openweathermap.org/data/2.5/weather?",
    appid: "c5c34be58018016d339da5268ac43c50"
  },
  jsonbin: {
    url: "https://api.jsonbin.io/b/5fc4ac5d9abe4f6e7cad4982",
    key: "$2b$10$YmcgzN4LyVCgD0PpKuwno.CldheAjQBEe3tXIHM9tlGaqFjETmNPi"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
