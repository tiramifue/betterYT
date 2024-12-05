// ==UserScript==
// @name        Youtube Black Mode
// @version     3.6.1
// @author      tiramifue
// @description Prettier youtube with red sub button and less rounded edges (BLACK EDITION)
// @match       https://*.youtube.com/*
// @exclude     *://music.youtube.com/*
// @exclude     *://*.music.youtube.com/*
// @run-at      document-end
// @grant       GM_addStyle
// @namespace   https://greasyfork.org/users/570213
// @license     Apache-2.0
// ==/UserScript==

// updated      2024-12-05

(function(){
    GM_addStyle(
`
html:not(.style-scope)[dark],:not(.style-scope)[dark]{
    --yt-spec-brand-background-solid:#000;
    --yt-spec-brand-background-primary:#000;
    --yt-spec-brand-background-secondary:#000;
    --yt-spec-general-background-a:#000;
    --yt-spec-base-background:#000;
    --yt-spec-10-percent-layer:rgb(255 255 255 / 10%);
    --yt-spec-badge-chip-background:rgb(255 255 255 / 7%);
    --yt-spec-additive-background:rgb(255 255 255 / 7%);
    --yt-spec-menu-background:rgb(0 0 0 / 98%);
}
#ytp-id-18 {
    background:rgb(0 0 0 / 98%);
    border:1px solid rgb(255 255 255 / 10%);
    box-shadow: 0px 0px 30px 6px rgba(0, 0, 0, 0.7);
}
div.sbdd_b {
    backdrop-filter: blur(90px);
}
html[dark] div.sbsb_a {
    background:rgb(0 0 0 / 80%);
}
div.sbfl_b {
    background:transparent;
    color:var(--yt-spec-text-primary);
}
li.gsfs {
    color:var(--yt-spec-text-primary);
}
li.sbsb_d {
    background:hsla(0, 0%, 100%, 0.08);
}
tp-yt-iron-dropdown.style-scope.ytd-popup-container {
    backdrop-filter: blur(90px);
    border: 1px solid rgb(255 255 255 / 10%);
    border-radius: 12px;
    box-shadow: 0px 0px 30px 6px rgba(0, 0, 0, 0.7);
}
.YtSearchboxComponentSuggestionsContainer {
    backdrop-filter: blur(90px);
    border: 1px solid rgb(255 255 255 / 10%);
    border-radius: 12px;
    box-shadow: 0px 0px 30px 6px rgba(0, 0, 0, 0.7);
    background:rgb(0 0 0 / 80%);
}
#cinematics {
    visibility: hidden;
}
ytd-thumbnail[size=large] a.ytd-thumbnail, ytd-thumbnail[size=large]:before {
    border-radius: 1px;
}
#thumbnail {
    border-radius: 1px;
}
.yt-spec-button-shape-next.yt-spec-button-shape-next--filled.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--size-m {
    color: var(--yt-spec-text-primary);
    background: #cc0000;
    border-radius: 2px;
    text-transform: uppercase;
}
button.yt-spec-button-shape-next.yt-spec-button-shape-next--filled.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--size-m:hover {
    background: #880000;
}
.yt-spec-button-shape-next.yt-spec-button-shape-next--filled.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--size-m[aria-label="Join this channel"] {
    background: var(--yt-spec-badge-chip-background);
    text-transform: capitalize;
}
button.yt-spec-button-shape-next.yt-spec-button-shape-next--filled.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--size-m[aria-label="Join this channel"]:hover {
    background: #333333;
}
.yt-spec-button-shape-next--size-m {
    border-radius: 2px;
}
.yt-spec-button-shape-next--size-m.yt-spec-button-shape-next--segmented-start {
    border-radius: 2px 0 0 2px;
}
.yt-spec-button-shape-next--size-m.yt-spec-button-shape-next--segmented-end {
    border-radius: 0 2px 2px 0;
}
yt-chip-cloud-chip-renderer[modern-chips][chip-style] {
    border-radius: 2px;
}
#container.ytd-searchbox {
    border-radius: 2px 0 0 2px;
}
#search-icon-legacy.ytd-searchbox {
    border-radius: 0 2px 2px 0;
}
.sbdd_b {
    border-radius: 8px;
}
ytd-watch-metadata[modern-metapanel] #description.ytd-watch-metadata {
    border-radius: 2px;
}
ytd-guide-entry-renderer[guide-refresh] {
    border-radius: 2px;
}
.yt-spec-touch-feedback-shape {
    border-radius: 2px;
}
ytd-rich-metadata-renderer[rounded] {
    border-radius: 2px;
}
#tooltip {
    display: none;
}
ytd-engagement-panel-section-list-renderer[dialog] #content.ytd-engagement-panel-section-list-renderer {
    background: transparent;
}
#header.ytd-engagement-panel-title-header-renderer {
    background: rgb(0 0 0 / 80%);
    border-bottom: 1px solid rgb(255 255 255 / 5%);
}
ytd-engagement-panel-section-list-renderer[dialog] #header.ytd-engagement-panel-section-list-renderer {
    margin: 0;
}
ytd-engagement-panel-section-list-renderer[dialog] ytd-section-list-renderer.ytd-engagement-panel-section-list-renderer {
    background: rgb(0 0 0 / 50%);
}
ytd-engagement-panel-section-list-renderer[dialog][target-id=engagement-panel-comments-section] {
    width: 40vmax;
}
#menu.ytd-engagement-panel-title-header-renderer:not(:empty) {
    flex: 1;
}
#title-container.ytd-engagement-panel-title-header-renderer {
    max-width: 150px;
}
tp-yt-paper-dialog[modern] {
    background: rgb(0 0 0 / 98%);
    border: 1px solid rgb(255 255 255 / 10%);
}
tp-yt-iron-overlay-backdrop.opened {
    opacity: 0.6;
}
ytd-dismissal-follow-up-renderer[darker-dark-theme][dialog][dialog][dialog] {
    background-color: transparent;
}
ytd-guide-entry-renderer[guide-refresh] #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:hover, ytd-guide-entry-renderer[guide-refresh] #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:focus {
    border-radius: 2px;
}
ytd-guide-entry-renderer[guide-refresh] #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:active {
    border-radius: 2px;
}
ytd-guide-entry-renderer[guide-refresh] yt-interaction.ytd-guide-entry-renderer {
    border-radius: 2px;
}
#search-clear-button > ytd-button-renderer > yt-button-shape > button {
    margin-right: 6px;
}
.yt-spec-button-shape-next--size-s {
    border-radius: 2px;
}
button.yt-spec-button-shape-next.yt-spec-button-shape-next--text.yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--size-m.yt-spec-button-shape-next--icon-leading.yt-spec-button-shape-next--align-by-text:hover {
    background-color: rgb(38 56 80 / 55%);
}
.yt-spec-button-shape-next--size-l {
    border-radius: 2px;
}
.yt-spec-button-shape-next--size-l.yt-spec-button-shape-next--icon-button {
    width: 44px;
    height: 44px;
}
#content.ytd-engagement-panel-section-list-renderer, ytd-item-section-renderer[static-comments-header] #header.ytd-item-section-renderer, .watch-while-engagement-panel.ytd-reel-video-renderer {
    background: #000;
}
ytd-reel-video-renderer[is-watch-while-mode] .watch-while-engagement-panel.ytd-reel-video-renderer {
    border-radius: 12px;
}
ytd-item-section-renderer[static-comments-header] #header.ytd-item-section-renderer {
    border-top: 1px solid rgb(255 255 255 / 10%);
}
yt-chip-cloud-chip-renderer, ytd-guide-entry-renderer, #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:active, #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:hover, #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:focus, yt-interaction.ytd-guide-entry-renderer, #description.ytd-watch-metadata {
    border-radius: 2px;
}
tp-yt-paper-item.ytd-guide-entry-renderer {
    --paper-item-focused-before-border-radius: 2px;
}
#sponsor-button > ytd-button-renderer {
    background: rgb(18 18 18);
    border-radius: 2px;
}
#sponsor-button > ytd-button-renderer > yt-button-shape > button {
    border: none;
}
#navigation-button-down > ytd-button-renderer > yt-button-shape > button > yt-touch-feedback-shape > div {
    border-radius: 28px;
}
#voice-search-button.ytd-masthead {
    background-color: transparent;
}
yt-interaction.rounded-large .fill.yt-interaction, yt-interaction.rounded-large .stroke.yt-interaction {
    border-radius: 2px;
}
#target[title="Email"] > yt-icon > span > div {
    filter: invert(1);
}
ytd-engagement-panel-section-list-renderer[modern-panels]:not([live-chat-engagement-panel]) {
    border-radius: 2px;
}
ytd-reel-video-renderer:not([enable-player-metadata-container]) .watch-while-engagement-panel.ytd-reel-video-renderer {
    background: rgb(15 15 15);
}
yt-interaction.circular .fill.yt-interaction, yt-interaction.circular .stroke.yt-interaction {
    border-radius: 2px;
}
yt-icon-button.ytd-masthead:hover, ytd-topbar-menu-button-renderer.ytd-masthead:hover, ytd-notification-topbar-button-renderer.ytd-masthead:hover {
    border-radius: 2px;
}
#overlays > yt-thumbnail-overlay-badge-view-model {
    display: none;
}
ytd-watch-flexy[rounded-player-large][default-layout] #ytd-player.ytd-watch-flexy {
    border-radius: 2px;
}
#ONLY-FOR-BLACK-MODE, #page-manager > ytd-shorts, #masthead, #content:not(.yt-live-chat-poll-choice), #card.yt-live-chat-viewer-engagement-message-renderer {
    background: #000;
}
.YtSearchboxComponentInputBox {
    border-radius: 2px 0 0 2px;
}
.YtSearchboxComponentSearchButton {
    border-radius: 0 2px 2px 0;
}
`
    );
})();
