/* tslint:disable */
/* eslint-disable */
/**
 * Swagger Petstore
 * This is a sample server Petstore server. You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/). For this sample, you can use the api key `special-key` to test the authorization filters.  # Introduction This API is documented in **OpenAPI format** and is based on [Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team. It was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo) tool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard OpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/main/docs/redoc-vendor-extensions.md).  # OpenAPI Specification This API is documented in **OpenAPI format** and is based on [Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team. It was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo) tool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard OpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/main/docs/redoc-vendor-extensions.md).  # Cross-Origin Resource Sharing This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/). And that allows cross-domain communication from the browser. All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.  # Authentication  Petstore offers two forms of authentication:   - API Key   - OAuth2 OAuth2 - an open protocol to allow secure authorization in a simple and standard method from web, mobile and desktop applications.  <!-- ReDoc-Inject: <security-definitions> --> 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { CatAllOf } from './cat-all-of';
// May contain unused imports in some cases
// @ts-ignore
import { Pet } from './pet';
// May contain unused imports in some cases
// @ts-ignore
import { PetCategory } from './pet-category';
// May contain unused imports in some cases
// @ts-ignore
import { PetFriend } from './pet-friend';
// May contain unused imports in some cases
// @ts-ignore
import { Tag } from './tag';

/**
 * @type Cat
 * A representation of a cat
 * @export
 */
export type Cat = CatAllOf & Pet;


