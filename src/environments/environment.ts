// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'loginfirebase-65f1a',
    appId: '1:846162777832:web:ef8075d6fef60210f6db5d',
    storageBucket: 'loginfirebase-65f1a.appspot.com',
    apiKey: 'AIzaSyDaZmESkI_7iTtc9l3V-OojTR6kM8pZqas',
    authDomain: 'loginfirebase-65f1a.firebaseapp.com',
    messagingSenderId: '846162777832',
    measurementId: 'G-GMHJEFEWYX',
  },
  production: false,
  base_url: "http://localhost:8080/api/v1"
  //base_url: "https://e59a-45-229-73-5.ngrok-free.app/api/v1"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
