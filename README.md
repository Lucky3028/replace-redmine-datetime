# replace-redmine-datetime

Replace DateTime link with text on a Redmine issue page.

Chrome及びChromeをもとにしたブラウザでRedmineの各チケットを開いた際に、チケットの作成・更新日時の上でカーソルをもっていくと無限にリンクがバグるという現象を改善するユーザースクリプト。

## Development

1. `yarn bundle:dev`
Generate a dummy script for development
1. `yarn bundle`
Generate a production build
1. Add `./dist/dev.js` to Tampermonkey.

## License

MIT
