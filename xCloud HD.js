// ==UserScript==
// @name xCloud HD
// @namespace https://github.com/sirqaf/xCloud-HD
// @version 0.1
// @description Change the user agent on xbox cloud gaming (mobile web) for better stream quality
// @icon https://www.google.com/s2/favicons?domain=xbox.com
// @author sirqaf
// @match https://www.xbox.com
// @include https://www.xbox.com/*
// @grant none
// @run-at document-start
// ==/UserScript==


(function() {
    'use strict';
    Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1375.0'
    });
})();

