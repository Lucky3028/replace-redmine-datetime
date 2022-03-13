import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import packageJson from './package.json';

const scriptUrl =
  'https://lucky3028.github.io/replace-redmine-datetime/main.js';
const userScriptBanner = `
// ==UserScript==
// @name        ${packageJson.name}
// @namespace   https://celesteria.net
// @version     0.1.0
// @description ${packageJson.description}
// @author      ${packageJson.author}
// @license     ${packageJson.license}
// @supportURL  ${packageJson.bugs.url}
// @run-at      document-end
// @include     *://redmine.*.*/issues/*
// @include     *://.*redmine.*/issues/*
// @updateURL   ${scriptUrl}
// @downloadURL ${scriptUrl}
// ==/UserScript==
`.trim();

export default [
  {
    input: 'src/main.ts',
    output: {
      banner: userScriptBanner,
      file: 'dist/main.js',
      format: 'iife',
    },
    plugins: [
      typescript({
        module: 'es6',
      }),
      nodeResolve(),
    ],
  },
];
