module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: '12',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'import/extensions': [2, 'never', {
      'web.js': 'never',
      json: 'never',
      vue: 'always',
      dto: 'always'
    }],
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'no-console': 2,
    'max-len': ['error', { code: 120 }],
    'newline-per-chained-call': [2, { ignoreChainWithDepth: 2 }], // 未生效
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'never'
    }],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          'state', // for vuex state
          'error',
          'config'
        ]
      }
    ]
  },
  overrides: [
    {
      // files: ['src/views/index.vue', 'src/views/**/index.vue'], // 匹配views和二级目录中的index.vue
      files: ['src/shared/layout/index.vue'],
      rules: {
        'vue/multi-word-component-names': 'off'
      } // 给上面匹配的文件指定规则
    }
  ]
};
