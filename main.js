// ==UserScript==
// @name        replace-redmine-datetime
// @namespace   https://celesteria.net
// @version     0.2.0
// @description Replace DateTime link with text on a Redmine issue page.
// @author      Lucky3028
// @license     MIT
// @supportURL  https://github.com/Lucky3028/replace-redmine-datetime/issues
// @run-at      document-end
// @include     *://redmine.*.*/issues/*
// @include     *://.*redmine.*/issues/*
// @updateURL   https://lucky3028.github.io/replace-redmine-datetime/main.js
// @downloadURL https://lucky3028.github.io/replace-redmine-datetime/main.js
// ==/UserScript==
(function () {
    'use strict';

    const nonNullable = (value) => value != null;
    const replaceDateTime = (element) => {
        var _a;
        const dateTime = element.title;
        const readableDateTime = (_a = element.textContent) !== null && _a !== void 0 ? _a : '';
        element.replaceWith(` [${dateTime}] ${readableDateTime}`);
    };
    const createdDateTimePosition = 2;
    const lastUpdatedDateTimePosition = 3;
    const updatesAnchors = [createdDateTimePosition, lastUpdatedDateTimePosition]
        .map((position) => document.querySelector(`p.author > a:nth-child(${position})`))
        .filter(nonNullable);
    const noteAnchors = document.querySelectorAll('h4.note-header > a:nth-child(3)');
    [...updatesAnchors, ...noteAnchors].forEach(replaceDateTime);

})();
