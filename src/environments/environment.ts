// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: "localhost:8080/workout-manager",
  firebase: {
    apiKey: "AIzaSyBvjPbTnxNmSOba0dg1I6BC5gadn-TdG1M",
    authDomain: "sportmanager-4a36e.firebaseapp.com",
    databaseURL: "https://sportmanager-4a36e.firebaseio.com",
    projectId: "sportmanager-4a36e",
    storageBucket: "sportmanager-4a36e.appspot.com",
    messagingSenderId: "60962788798",
    appId: "1:60962788798:web:420df6049ff43ac75155ef",
    measurementId: "G-9FBLDJ747Y"
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
