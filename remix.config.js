const { createRoutesFromFolders } = require("@remix-run/v1-route-convention");
const { config } = require("@netlify/remix-adapter");

/**
 * @type {import('@remix-run/dev').AppConfig}
 */


module.exports = {
	...config,
	future: {
	},

	ignoredRouteFiles: ['**/.*'],
	routes(defineRoutes) {
		// uses the v1 convention, works in v1.15+ and v2
		return createRoutesFromFolders(defineRoutes,
			// optionally add the real ignored route files here as needed
      			{ ignoredRouteFiles: ['routes/__main/index.tsx'] }
		);
	},

//	serverBuildTarget: 'netlify',
	server: './server.js',
	devServerPort: 8002,
	serverModuleFormat: "esm",
	serverDependenciesToBundle: [
		/^remix-auth*/,
		/^arctic/,
		/^dayjs*/,
	],

	appDirectory: "app",
	assetsBuildDirectory: "public/build",
	//serverBuildPath: ".netlify/functions-internal/server.js",
	

};
