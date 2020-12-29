module.exports = {
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "airbnb-base"
    ],
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "no-console": "off",
        "arrow-parens": ["error", "as-needed"],
        "quotes": ["error", "single", { "allowTemplateLiterals": true }],
        "jsx-quotes": ["error", "prefer-single"],
        "max-len": ["error", 120, 2],
        "object-curly-newline": ["error", {"multiline": true, "consistent": true}],
    }
};
