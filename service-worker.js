                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/2021/11/05/kaiyuanshe-oss-con-2021-wechaty-gsod/","revision":"339bc1a8fa94d9b5bc51fe8e499bbec1"},{"url":"/2021/10/30/gsod-2021-report-on-improve-the-grpc-and-openapi-ecosystem/","revision":"3dec27fcb9b82c6fcab592465123bfe1"},{"url":"/2021/10/29/zilliz-milvus-open-source-panel/","revision":"893d411c22736c1ed1027054cc60cff8"},{"url":"/2021/10/28/osschat-is-what-you-need-for-opensouce-community-operations/","revision":"dcc6edb573b05782d78faf43acba61a9"},{"url":"/2021/10/28/opentekr-oss-pioneer-interview-huan/","revision":"e9f7abbc19321e602c4be4c1f451a55f"}];
            // set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'Wechaty',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);
