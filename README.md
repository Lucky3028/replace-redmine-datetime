# replace-redmine-datetime

Replace DateTime link with text on a Redmine issue page.

Chrome及びChromeをもとにしたブラウザでRedmineの各チケットを開いた際に、チケットの作成・更新日時の上でカーソルをもっていくと無限にリンクがバグるという現象を改善するユーザースクリプト。

## Usage

Add the link below to Tampermonkey.  
<https://lucky3028.github.io/replace-redmine-datetime/main.js>

## Development

1. `yarn bundle:dev`  
Generate a dummy script for development
1. `yarn bundle`  
Generate a production build
1. Add `./dist/dev.js` to Tampermonkey.

## License

[MIT](./LICENSE)
