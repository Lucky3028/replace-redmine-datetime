import typescript from '@rollup/plugin-typescript';
import packageJson from './package.json';

/**
 * 開発時に読み込ませるスクリプトを出力する設定ファイルです。
 * `yarn bundle:env`を用いて実行すると、./dist/dev.jsが出食されますので、そちらをTamperMonkeyに読み込ませてください。
 */

const userScriptBanner = `
// ==UserScript==
// @name        ${packageJson.name}-dev
// @namespace   https://celesteria.net
// @version     0.1.0
// @description 開発用のスクリプトです。
// @author      ${packageJson.author}
// @license     ${packageJson.license}
// @supportURL  ${packageJson.bugs.url}
// @run-at      document-end
// @require     file://${__dirname}/dist/main.js
// @include     *://redmine.*.*/issues/*
// @include     *://.*redmine.*/issues/*
// ==/UserScript==
`.trim();

export default [
  {
    input: 'dev.ts',
    output: {
      banner: userScriptBanner,
      file: 'dist/dev.js',
    },
    plugins: [
      typescript({
        module: 'es6',
      }),
    ],
  },
];
