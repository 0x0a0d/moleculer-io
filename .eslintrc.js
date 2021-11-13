module.exports = {
	root: true,
	env: {
		node: true,
		commonjs: true,
		es6: true,
		jquery: false,
		jest: true,
		jasmine: false
	},
	extends: ["eslint:recommended", "plugin:security/recommended", "plugin:prettier/recommended"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		sourceType: "module",
		ecmaVersion: "2018"
	},
	plugins: ["node", "promise", "security"],
	rules: {
		"no-var": ["error"],
		"no-console": ["error"],
		"no-unused-vars": ["warn"],
		"no-trailing-spaces": ["error"],
		"security/detect-object-injection": ["off"],
		"security/detect-non-literal-require": ["off"],
		"security/detect-non-literal-fs-filename": ["off"],
		"node/no-unpublished-require": 0
	},
	overrides: [
		// typescript
		{
			files: ["*.ts", "*.tsx"],
			parser: "@typescript-eslint/parser",
			plugins: ["@typescript-eslint"],
			extends: ["plugin:@typescript-eslint/recommended"],
			rules: {
				"@typescript-eslint/ban-ts-comment": "off",
				"@typescript-eslint/no-explicit-any": "off",
				"@typescript-eslint/explicit-module-boundary-types": "off"
			}
		}
	]
};
