// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import config from '../../auth_config.json';

const { domain, clientId, authorizationParams: { audience }, apiUri, errorPath } = config as {
  domain: string;
  clientId: string;
  authorizationParams: {
    audience?: string;
  },
  apiUri: string;
  errorPath: string;
};

// export const environment = {
//   production: false,
//   auth: {
//     domain,
//     clientId,
//     authorizationParams: {
//       ...(audience && audience !== '{yourApiIdentifier}' ? { audience } : null),
//       redirect_uri: window.location.origin,
//     },
//     errorPath,
//   },
//   httpInterceptor: {
//     allowedList: [`${apiUri}/*`],
//   },
// };

export const environment = {
  production: false,
  auth: {
    domain: 'dev-8m4sesuukq7r4rep.us.auth0.com',
    clientId: 'USY4Orl4Fqg4jqSyHBRNGwyhkI6IGnhv',
    authorizationParams: {
      redirect_uri: 'https://localhost:39805', 
      audience: 'https://dev-8m4sesuukq7r4rep.us.auth0.com/api/v2/',
    }
  },
  httpInterceptor: {
    allowedList: [
      {
        uri: 'http://localhost:3001/api/*',
        tokenOptions: {
          // You can keep this default:
          authorizationParams: {
            audience: 'https://dev-8m4sesuukq7r4rep.us.auth0.com/api/v2/'
          }
        }
      }
    ]
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
