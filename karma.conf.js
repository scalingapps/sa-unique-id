module.exports = function(config) {
    config.set({
        frameworks: ["mocha", "karma-typescript"],
        files: [
            { pattern: "src/**/*.ts" },
            { pattern: "test/**/*.ts" }
        ],
        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },
		karmaTypescriptConfig: {
			coverageOptions: {
        		instrumentation: false,
			},
			compilerOptions: {
				target: "es2015",
				module: "commonjs",
				noImplicitAny: true,
				esModuleInterop: true,
				sourceMap: true,
				outDir: "dist",
				types : [
					"mocha",
					"chai",
					"node"
				],
				baseUrl: ".",
				paths: {
					"@test/*": [
						"test/*"
					],
					"@/*": [
						"./src/*"
					]
				},
			}
		},
        reporters: ["spec", "karma-typescript"],
        browsers: ["ChromeHeadless"],
        singleRun: true
    });
};
