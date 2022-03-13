import html from "@rollup/plugin-html";
import typescript from "@rollup/plugin-typescript";
import packageJson from "./package.json";

const userScriptBanner = `
// ==UserScript==
// @name ${packageJson.name}
// @namespace https://celesteria.net
// @version ${packageJson.version}
// @description ${packageJson.description}
// @author ${packageJson.author}
// @license ${packageJson.license}
// @supportURL ${packageJson.bugs.url}
// @grant none
// ==/UserScript==
`.trim();

export default [{
  input: "src/main.ts",
  output: {
    banner: userScriptBanner,
    file: "dist/main.js"
  },
  plugins: [
    html({
      include: "**/*.html"
    }),
    typescript()
  ]
}]
