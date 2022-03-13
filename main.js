// ==UserScript==
// @name        replace-redmine-datetime
// @namespace   https://celesteria.net
// @version     0.1.0
// @description Replace DateTime link with text on a Redmine issue page.
// @author      Lucky3028
// @license     MIT
// @supportURL  https://github.com/Lucky3028/replace-redmine-datetime/issues
// @run-at      document-end
// @include     *://redmine.*.*/issues/*
// @include     *://.*redmine.*/issues/*
// @updateURL   https://raw.githubusercontent.com/Lucky3028/replace-redmine-datetime/gh-pages/main.js
// @downloadURL https://raw.githubusercontent.com/Lucky3028/replace-redmine-datetime/gh-pages/main.js
// ==/UserScript==
(function () {
    'use strict';

    const dateTimes = [
        {
            ja: '追加',
            position: 1,
        },
        {
            ja: '更新',
            position: 2,
        },
    ];

    // チケットの作成・更新を表示するPタグ
    const authorsPTag = document.querySelector('p.author');
    if (!(authorsPTag instanceof HTMLParagraphElement))
        throw new Error();
    // 作成者のテキストとリンクを生成
    const author = authorsPTag.children[0];
    if (!(author instanceof HTMLAnchorElement))
        throw new Error();
    const authorInfo = [author, ' さんが'];
    // 作成・更新日時をテキスト化
    // 更新日時はnullable
    const dateTimeSentences = dateTimes.map((dt) => {
        var _a;
        const dateTimeTag = authorsPTag.children[dt.position];
        if (!(dateTimeTag instanceof HTMLAnchorElement))
            return '';
        const dateTime = dateTimeTag.title;
        const readableDateTime = (_a = dateTimeTag.textContent) !== null && _a !== void 0 ? _a : '';
        return ` [${dateTime}] ${readableDateTime}前に${dt.ja}`;
    });
    authorsPTag.replaceChildren(...authorInfo, ...dateTimeSentences);

})();
