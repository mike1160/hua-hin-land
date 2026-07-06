"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/contact/route";
exports.ids = ["app/api/contact/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=%2FUsers%2Fmike%2FDownloads%2Fhua-hin-land%203%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmike%2FDownloads%2Fhua-hin-land%203&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=%2FUsers%2Fmike%2FDownloads%2Fhua-hin-land%203%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmike%2FDownloads%2Fhua-hin-land%203&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_mike_Downloads_hua_hin_land_3_src_app_api_contact_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/contact/route.ts */ \"(rsc)/./src/app/api/contact/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/contact/route\",\n        pathname: \"/api/contact\",\n        filename: \"route\",\n        bundlePath: \"app/api/contact/route\"\n    },\n    resolvedPagePath: \"/Users/mike/Downloads/hua-hin-land 3/src/app/api/contact/route.ts\",\n    nextConfigOutput,\n    userland: _Users_mike_Downloads_hua_hin_land_3_src_app_api_contact_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/contact/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjb250YWN0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjb250YWN0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY29udGFjdCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm1pa2UlMkZEb3dubG9hZHMlMkZodWEtaGluLWxhbmQlMjAzJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRm1pa2UlMkZEb3dubG9hZHMlMkZodWEtaGluLWxhbmQlMjAzJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNpQjtBQUM5RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2h1YS1oaW4tbGFuZC8/ZmJlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvbWlrZS9Eb3dubG9hZHMvaHVhLWhpbi1sYW5kIDMvc3JjL2FwcC9hcGkvY29udGFjdC9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY29udGFjdC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NvbnRhY3RcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NvbnRhY3Qvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvbWlrZS9Eb3dubG9hZHMvaHVhLWhpbi1sYW5kIDMvc3JjL2FwcC9hcGkvY29udGFjdC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvY29udGFjdC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=%2FUsers%2Fmike%2FDownloads%2Fhua-hin-land%203%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmike%2FDownloads%2Fhua-hin-land%203&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/contact/route.ts":
/*!**************************************!*\
  !*** ./src/app/api/contact/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resend */ \"(rsc)/./node_modules/resend/dist/index.mjs\");\n// SETUP: 1. Go to resend.com, create free account, get API key\n// 2. Replace re_REPLACE_WITH_YOUR_KEY in .env.local with your real key\n// 3. Run: npm install resend\n// 4. Verify your domain at resend.com OR use onboarding@resend.dev as from address for testing\n\n\nconst resend = new resend__WEBPACK_IMPORTED_MODULE_1__.Resend(process.env.RESEND_API_KEY);\nasync function POST(req) {\n    try {\n        const { name, email, phone, message, lang } = await req.json();\n        await resend.emails.send({\n            from: \"Hua Hin Land <onboarding@resend.dev>\",\n            to: \"kleinjansmike@gmail.com\",\n            replyTo: email,\n            subject: `New enquiry — Hua Hin Land Soi 112 [${lang}]`,\n            html: `\n        <div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0d1120; color: #f0f4ff; padding: 32px; border-radius: 12px;\">\n          <h2 style=\"color: #60a5fa; margin-bottom: 24px;\">New land enquiry — Hua Hin Soi 112</h2>\n          <table style=\"width: 100%; border-collapse: collapse;\">\n            <tr><td style=\"padding: 8px 0; color: #94a3b8; width: 120px;\">Name</td><td style=\"padding: 8px 0; color: #f0f4ff;\">${name}</td></tr>\n            <tr><td style=\"padding: 8px 0; color: #94a3b8;\">Email</td><td style=\"padding: 8px 0; color: #60a5fa;\"><a href=\"mailto:${email}\" style=\"color: #60a5fa;\">${email}</a></td></tr>\n            <tr><td style=\"padding: 8px 0; color: #94a3b8;\">Phone / WhatsApp</td><td style=\"padding: 8px 0; color: #f0f4ff;\">${phone || \"—\"}</td></tr>\n            <tr><td style=\"padding: 8px 0; color: #94a3b8;\">Language</td><td style=\"padding: 8px 0; color: #f0f4ff;\">${lang}</td></tr>\n            <tr><td style=\"padding: 8px 0; color: #94a3b8; vertical-align: top;\">Message</td><td style=\"padding: 8px 0; color: #f0f4ff;\">${message}</td></tr>\n          </table>\n          <div style=\"margin-top: 24px; padding: 16px; background: #1e2a4a; border-radius: 8px;\">\n            <p style=\"margin: 0; color: #64748b; font-size: 12px;\">Sent from huahin-land website · ${new Date().toISOString()}</p>\n          </div>\n        </div>\n      `\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true\n        });\n    } catch (error) {\n        console.error(error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to send\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jb250YWN0L3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLCtEQUErRDtBQUMvRCx1RUFBdUU7QUFDdkUsNkJBQTZCO0FBQzdCLCtGQUErRjtBQUV4QztBQUN4QjtBQUUvQixNQUFNRSxTQUFTLElBQUlELDBDQUFNQSxDQUFDRSxRQUFRQyxHQUFHLENBQUNDLGNBQWM7QUFFN0MsZUFBZUMsS0FBS0MsR0FBZ0I7SUFDekMsSUFBSTtRQUNGLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNTCxJQUFJTSxJQUFJO1FBRTVELE1BQU1YLE9BQU9ZLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO1lBQ3ZCQyxNQUFNO1lBQ05DLElBQUk7WUFDSkMsU0FBU1Q7WUFDVFUsU0FBUyxDQUFDLG9DQUFvQyxFQUFFUCxLQUFLLENBQUMsQ0FBQztZQUN2RFEsTUFBTSxDQUFDOzs7OytIQUlrSCxFQUFFWixLQUFLO2tJQUNKLEVBQUVDLE1BQU0sMEJBQTBCLEVBQUVBLE1BQU07NkhBQy9DLEVBQUVDLFNBQVMsSUFBSTtxSEFDdkIsRUFBRUUsS0FBSzt5SUFDYSxFQUFFRCxRQUFROzs7bUdBR2hELEVBQUUsSUFBSVUsT0FBT0MsV0FBVyxHQUFHOzs7TUFHeEgsQ0FBQztRQUNIO1FBRUEsT0FBT3RCLHFEQUFZQSxDQUFDYSxJQUFJLENBQUM7WUFBRVUsU0FBUztRQUFLO0lBQzNDLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2QsT0FBT3hCLHFEQUFZQSxDQUFDYSxJQUFJLENBQUM7WUFBRVcsT0FBTztRQUFpQixHQUFHO1lBQUVFLFFBQVE7UUFBSTtJQUN0RTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHVhLWhpbi1sYW5kLy4vc3JjL2FwcC9hcGkvY29udGFjdC9yb3V0ZS50cz8wMjBhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFNFVFVQOiAxLiBHbyB0byByZXNlbmQuY29tLCBjcmVhdGUgZnJlZSBhY2NvdW50LCBnZXQgQVBJIGtleVxuLy8gMi4gUmVwbGFjZSByZV9SRVBMQUNFX1dJVEhfWU9VUl9LRVkgaW4gLmVudi5sb2NhbCB3aXRoIHlvdXIgcmVhbCBrZXlcbi8vIDMuIFJ1bjogbnBtIGluc3RhbGwgcmVzZW5kXG4vLyA0LiBWZXJpZnkgeW91ciBkb21haW4gYXQgcmVzZW5kLmNvbSBPUiB1c2Ugb25ib2FyZGluZ0ByZXNlbmQuZGV2IGFzIGZyb20gYWRkcmVzcyBmb3IgdGVzdGluZ1xuXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5pbXBvcnQgeyBSZXNlbmQgfSBmcm9tICdyZXNlbmQnXG5cbmNvbnN0IHJlc2VuZCA9IG5ldyBSZXNlbmQocHJvY2Vzcy5lbnYuUkVTRU5EX0FQSV9LRVkpXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwaG9uZSwgbWVzc2FnZSwgbGFuZyB9ID0gYXdhaXQgcmVxLmpzb24oKVxuXG4gICAgYXdhaXQgcmVzZW5kLmVtYWlscy5zZW5kKHtcbiAgICAgIGZyb206ICdIdWEgSGluIExhbmQgPG9uYm9hcmRpbmdAcmVzZW5kLmRldj4nLFxuICAgICAgdG86ICdrbGVpbmphbnNtaWtlQGdtYWlsLmNvbScsXG4gICAgICByZXBseVRvOiBlbWFpbCxcbiAgICAgIHN1YmplY3Q6IGBOZXcgZW5xdWlyeSDigJQgSHVhIEhpbiBMYW5kIFNvaSAxMTIgWyR7bGFuZ31dYCxcbiAgICAgIGh0bWw6IGBcbiAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjsgbWF4LXdpZHRoOiA2MDBweDsgbWFyZ2luOiAwIGF1dG87IGJhY2tncm91bmQ6ICMwZDExMjA7IGNvbG9yOiAjZjBmNGZmOyBwYWRkaW5nOiAzMnB4OyBib3JkZXItcmFkaXVzOiAxMnB4O1wiPlxuICAgICAgICAgIDxoMiBzdHlsZT1cImNvbG9yOiAjNjBhNWZhOyBtYXJnaW4tYm90dG9tOiAyNHB4O1wiPk5ldyBsYW5kIGVucXVpcnkg4oCUIEh1YSBIaW4gU29pIDExMjwvaDI+XG4gICAgICAgICAgPHRhYmxlIHN0eWxlPVwid2lkdGg6IDEwMCU7IGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XCI+XG4gICAgICAgICAgICA8dHI+PHRkIHN0eWxlPVwicGFkZGluZzogOHB4IDA7IGNvbG9yOiAjOTRhM2I4OyB3aWR0aDogMTIwcHg7XCI+TmFtZTwvdGQ+PHRkIHN0eWxlPVwicGFkZGluZzogOHB4IDA7IGNvbG9yOiAjZjBmNGZmO1wiPiR7bmFtZX08L3RkPjwvdHI+XG4gICAgICAgICAgICA8dHI+PHRkIHN0eWxlPVwicGFkZGluZzogOHB4IDA7IGNvbG9yOiAjOTRhM2I4O1wiPkVtYWlsPC90ZD48dGQgc3R5bGU9XCJwYWRkaW5nOiA4cHggMDsgY29sb3I6ICM2MGE1ZmE7XCI+PGEgaHJlZj1cIm1haWx0bzoke2VtYWlsfVwiIHN0eWxlPVwiY29sb3I6ICM2MGE1ZmE7XCI+JHtlbWFpbH08L2E+PC90ZD48L3RyPlxuICAgICAgICAgICAgPHRyPjx0ZCBzdHlsZT1cInBhZGRpbmc6IDhweCAwOyBjb2xvcjogIzk0YTNiODtcIj5QaG9uZSAvIFdoYXRzQXBwPC90ZD48dGQgc3R5bGU9XCJwYWRkaW5nOiA4cHggMDsgY29sb3I6ICNmMGY0ZmY7XCI+JHtwaG9uZSB8fCAn4oCUJ308L3RkPjwvdHI+XG4gICAgICAgICAgICA8dHI+PHRkIHN0eWxlPVwicGFkZGluZzogOHB4IDA7IGNvbG9yOiAjOTRhM2I4O1wiPkxhbmd1YWdlPC90ZD48dGQgc3R5bGU9XCJwYWRkaW5nOiA4cHggMDsgY29sb3I6ICNmMGY0ZmY7XCI+JHtsYW5nfTwvdGQ+PC90cj5cbiAgICAgICAgICAgIDx0cj48dGQgc3R5bGU9XCJwYWRkaW5nOiA4cHggMDsgY29sb3I6ICM5NGEzYjg7IHZlcnRpY2FsLWFsaWduOiB0b3A7XCI+TWVzc2FnZTwvdGQ+PHRkIHN0eWxlPVwicGFkZGluZzogOHB4IDA7IGNvbG9yOiAjZjBmNGZmO1wiPiR7bWVzc2FnZX08L3RkPjwvdHI+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogMjRweDsgcGFkZGluZzogMTZweDsgYmFja2dyb3VuZDogIzFlMmE0YTsgYm9yZGVyLXJhZGl1czogOHB4O1wiPlxuICAgICAgICAgICAgPHAgc3R5bGU9XCJtYXJnaW46IDA7IGNvbG9yOiAjNjQ3NDhiOyBmb250LXNpemU6IDEycHg7XCI+U2VudCBmcm9tIGh1YWhpbi1sYW5kIHdlYnNpdGUgwrcgJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGAsXG4gICAgfSlcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIHNlbmQnIH0sIHsgc3RhdHVzOiA1MDAgfSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlJlc2VuZCIsInJlc2VuZCIsInByb2Nlc3MiLCJlbnYiLCJSRVNFTkRfQVBJX0tFWSIsIlBPU1QiLCJyZXEiLCJuYW1lIiwiZW1haWwiLCJwaG9uZSIsIm1lc3NhZ2UiLCJsYW5nIiwianNvbiIsImVtYWlscyIsInNlbmQiLCJmcm9tIiwidG8iLCJyZXBseVRvIiwic3ViamVjdCIsImh0bWwiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzdWNjZXNzIiwiZXJyb3IiLCJjb25zb2xlIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/contact/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/entities","vendor-chunks/domutils","vendor-chunks/js-beautify","vendor-chunks/htmlparser2","vendor-chunks/peberminta","vendor-chunks/domhandler","vendor-chunks/dom-serializer","vendor-chunks/selderee","vendor-chunks/resend","vendor-chunks/parseley","vendor-chunks/leac","vendor-chunks/html-to-text","vendor-chunks/domelementtype","vendor-chunks/@selderee","vendor-chunks/@react-email","vendor-chunks/deepmerge"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=%2FUsers%2Fmike%2FDownloads%2Fhua-hin-land%203%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmike%2FDownloads%2Fhua-hin-land%203&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();