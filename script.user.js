  // ==UserScript==
// @name Discord Theme Changer
// @author John Ronnix AKA The Ronnixinator
// @description Discord Theme Changer
// @version 1.0.0
// @license CC-BY-SA 4.0
// @grant GM_addStyle
// @run-at document-start
// @match https://discord.com/*
// @include https://discord.com/*
// ==/UserScript==
(function() {
let v = document.createElement('style')
v.innerHTML=`

/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

.title_b7d661 .scrollerInner__059a5{
background-color: black !important;
}

:root {
--background-image: url("https://cdn.discordapp.com/attachments/1028741567047024701/1198639817001545859/eIhU2Bk.png");
--main-color: #89FF99;
--hover-color: #0000FFFF;
--success-color: #00FF10FF;
--danger-color: #982929;
--url-color: #E60000FF;
--online-color: #00B50BFF;
--idle-color: #FA9700FF;
--dnd-color: #FF0000FF;
--streamig-color: #7245BFFF;
--offline-color: #000000FF;
--main-font: 'Roboto';
--code-font: 'Consolas';
--text-normal: #DEDEDEFF;
--text-muted: #4B4E52FF;
--channels-width: 220px;
--members-width: 209px;
--background-shading: 54%;
--background-image: url('https://cdn.discordapp.com/attachments/1028741567047024701/1198639817001545859/eIhU2Bk.png') !important;
--background-size: contain;
--background-position: center;
--background-repeat: no-repeat;
--background-attachment: fixed;
--background-brightness: 0%;
--background-constrast: 100%;
--background-saturation: 0%;
--background-invert: 0%;
--background-grayscale: 0%;
--background-sepia: 0%;
--background-blur: 0px;
--home-icon: url('https://i.imgur.com/6nLBv2q.png');
--home-position: center;
--home-size: 49px;
--background-overlay: #000000C4;
--backdrop-size: cover;
--background-repeat: repeat-xy;
--backdrop-attachment: fixed;
--backdrop-brightness: 100%;
--backdrop-constrast: 100%;
--backdrop-saturation: 100%;
--backdrop-invert: 0%;
--backdrop-grayscale: 0%;
--backdrop-sepia: 0%;
--backdrop-blur: 0px;
--user-popout-image: url('https://cdn.discordapp.com/attachments/1028741567047024701/1190402471034626128/rltvPt9.png?ex=65a1abb1&is=658f36b1&hm=268df315731e7667d10fab9e8c8efef1322ad98a939cc7b8386c2a7ce51be102&');
--user-popout-image: center;
--user-popout-size: cover;
--user-popout-repeat: repeat;
--user-popout-attachment: fixed;
--user-popout-brightness: 100%;
--user-popout-constrast: 100%;
--user-popout-saturation: 100%;
--user-popout-invert: 0%;
--user-popout-grayscale: 0%;
--user-popout-sepia: 0%;
--user-popout-blur: 0px;
--user-popout-overlay: #FF00006F;
--user-modal-image: url('https://cdn.discordapp.com/attachments/1028741567047024701/1190402471034626128/rltvPt9.png?ex=65a1abb1&is=658f36b1&hm=268df315731e7667d10fab9e8c8efef1322ad98a939cc7b8386c2a7ce51be102&');
--user-modal-image: center;
--user-modal-size: cover;
--user-modal-repeat: repeat;
--user-modal-attachment: fixed;
--user-modal-brightness: 100%;
--user-modal-constrast: 100%;
--user-modal-saturation: 100%;
--user-modal-invert: 0%;
--user-modal-grayscale: 0%;
--user-modal-sepia: 0%;
--user-modal-blur: 0px;
--bd-blue: #E60000FF;
--bd-blue-hover: #0532B3FF;
--bd-blue-active: #636BB3FF;
--rs-small-spacing: 2px;
--rs-medium-spacing: 3px;
--rs-large-spacing: 4px;
--rs-small-width: 2px;
--rs-medium-width: 3px;
--rs-large-width: 4px;
--rs-avatar-shape: 50%;
--rs-online-color: #00B50BFF;
--rs-idle-color: #FA6700FF;
--rs-dnd-color: #F00000FF;
--rs-offline-color: #000000FF;
--rs-streaming-color: #3E2667FF;
--rs-invisible-color: #747f8d;
--rs-phone-visible: block;
--customFont: 'Roboto';
--columns: 2;
--guildsize: 50;
--guildgap: 2;
--aligndms: 0;
	--columns: 		3;
	--guildsize: 		50;
	--guildgap: 		3;
	--aligndms: 		1;

	--columns_v: 		var(--columns_s, var(--columns));
	--guildsize_v: 		var(--guildsize_s, var(--guildsize));
	--guildgap_v: 		var(--guildgap_s, var(--guildgap));
	--aligndms_v: 		var(--aligndms_s, var(--aligndms));
}

.titleBar__01af6.typeMacOS__496b0,
.titleBar__01af6.typeMacOS__496b0 .macButtons__7b1bc,
.wrapper_a7e7a8,
.wrapper_a7e7a8 .unreadMentionsIndicatorTop_ada847,
.wrapper_a7e7a8 .unreadMentionsIndicatorBottom_fdb943 {
	width: calc(1px * (var(--guildsize_v) * var(--columns_v) + 20 * (var(--guildsize_v)/50) + 14 * (var(--guildsize_v)/50) * (var(--columns_v) - 1))) !important;
}
.titleBar__01af6.typeMacOS__496b0 .macButtons__7b1bc {
	padding-right: calc(1px * ((var(--guildsize_v) + 12 * var(--guildsize_v)/50) * var(--columns) - 50)) !important;
}
body.folderContentIsOpen_zz6FgW .titleBar__01af6.typeMacOS__496b0,
body.folderContentIsOpen_zz6FgW .titleBar__01af6.typeMacOS__496b0 .macButtons__7b1bc {
	width: calc(2px * ((var(--guildsize_v) + 12 * var(--guildsize_v)/50) * var(--columns_v) + 35 - 25)) !important;
}
body.folderContentIsOpen_zz6FgW .titleBar__01af6.typeMacOS__496b0 .macButtons__7b1bc {
	padding-right: calc(1px * ((var(--guildsize_v) + 12 * var(--guildsize_v)/50) * var(--columns_v) * 2 - 40)) !important;
}
.titleBar__01af6.typeMacOS__496b0.typeMacOSWithFrame_db4a7d .macButtons__7b1bc {
	margin-top: 0 !important;
	margin-right: 0 !important;
}
.wrapper_a7e7a8 {
	padding: 0 !important;
}
.wrapper_a7e7a8.hidden__7c832,
.wrapper_a7e7a8[style*="width: 0px"] {
	width: 0 !important;
}
.wrapper_a7e7a8 .scroller__3d071 {
	padding: 0 0 calc(10px * var(--guildsize_v)/50) calc(10px * var(--guildsize_v)/50) !important;
}
.wrapper_a7e7a8 .scroller__3d071.none__51a8f::-webkit-scrollbar {
	width: 0 !important;
}
.wrapper_a7e7a8 .scroller__3d071,
.wrapper_a7e7a8 .scroller__3d071 > [role="tree"],
.wrapper_a7e7a8 .listItem_fa7b36 + div[aria-label]:not([class]) {
	margin: 0 !important;
	display: flex !important;
	flex-flow: row wrap !important;
	align-content: flex-start !important;
}
.wrapper_a7e7a8 .listItem_fa7b36 {
	margin: calc(1px * var(--guildgap_v)) calc(1px * (12 * var(--guildsize_v)/50)) calc(1px * var(--guildgap_v)) 0 !important;
}
.wrapper_a7e7a8 #server-search {
	margin: calc(1px * var(--guildgap_v)) calc(1px * (((var(--guildsize_v) + 12 * var(--guildsize_v)/50) * (var(--columns_v) - 1))/2)) !important;
}
.wrapper_a7e7a8 #server-search .pill-3YxEhL {
	display: none;
}
.wrapper_a7e7a8 .listItem_fa7b36:first-child .listItemWrapper__1f93b,	/*	home	*/
.wrapper_a7e7a8 .listItem_fa7b36 .pill__66ac8 ~ div:not([className]) {	/*	fav		*/
	margin: 0 calc(1px * (((var(--guildsize_v) + 12 * var(--guildsize_v)/50) * (var(--columns_v) - 1))/2)) calc(1px * var(--guildgap_v)) calc(1px * ((((var(--guildsize_v) + 12 * var(--guildsize_v)/50) * (var(--columns_v) - 1))/2))) !important;
}
.wrapper_a7e7a8 .listItem_fa7b36:first-child .pill__357e7 ~ .listItemWrapper__1f93b {
	margin: 0 calc(1px * ((((var(--guildsize_v) + 12 * var(--guildsize_v)/50) * (var(--columns_v) - 1))/2) * (1 - var(--aligndms_v)))) 0 calc(1px * (((0 * var(--aligndms_v)) + ((((var(--guildsize_v) + 12 * var(--guildsize_v)/50) * (var(--columns_v) - 1))/2) * (1 - var(--aligndms_v)))))) !important;
}
.wrapper_a7e7a8 .blobContainer__5ee50,
.wrapper_a7e7a8 .guildsError__0aa84 {
	margin: 0 !important;
}
.wrapper_a7e7a8 .listItem_fa7b36 {
	width: auto !important;
}
.wrapper_a7e7a8 .tutorialContainer__90eac {
	width: 100%;
}
.wrapper_a7e7a8 .placeholderMask__6e4f0,
.wrapper_a7e7a8 .svg_ad7356,
.wrapper_a7e7a8 .wrapper__3af0b {
	height: calc(1px * var(--guildsize_v)) !important;
	width: calc(1px * var(--guildsize_v)) !important;
}
.wrapper_a7e7a8 .scroller__3d071 > div[style*="height"]:not([class]) {
	height: calc(1px * var(--guildsize_v) * (58/50)) !important;
}
.wrapper_a7e7a8 .upperBadge_c7cfb3 .base__92a12 {
	transform: translate(calc(1.5px * ((50 - var(--guildsize_v))/10)), calc(-1.5px * ((50 - var(--guildsize_v))/10))) scale(calc(var(--guildsize_v)/50)) !important;
}
.wrapper_a7e7a8 .upperLeftBadge_e35IpL .base__92a12 {
	transform: translate(calc(-1.5px * ((50 - var(--guildsize_v))/10)), calc(-1.5px * ((50 - var(--guildsize_v))/10))) scale(calc(var(--guildsize_v)/50)) !important;
}
.wrapper_a7e7a8 .lowerBadge__669e7 .base__92a12 {
	transform: translate(calc(1.5px * ((50 - var(--guildsize_v))/10)), calc(1.5px * ((50 - var(--guildsize_v))/10))) scale(calc(var(--guildsize_v)/50)) !important;
}
.wrapper_a7e7a8 .lowerLeftBadge_zr4T_9 .base__92a12 {
	transform: translate(calc(-1.5px * ((50 - var(--guildsize_v))/10)), calc(1.5px * ((50 - var(--guildsize_v))/10))) scale(calc(var(--guildsize_v)/50)) !important;
}
.wrapper_a7e7a8 .wrapper__3670f {
	top: calc(-5px * var(--guildsize_v)/50) !important;
	height: calc(1px * (var(--guildsize_v) + 10 * var(--guildsize_v)/50)) !important;
	transform: scale(calc(var(--guildsize_v)/50)) !important;
	transform-origin: 0 50% !important;
}
.wrapper_a7e7a8 .pill_d1140c,	/*	home	*/
.wrapper_a7e7a8 .pill__66ac8 {	/*	fav		*/
	left: calc(1px * ((((var(--guildsize_v) + 10 * var(--guildsize_v)/50) * (var(--columns_v) - 1))/2) - 9)) !important;
}
.wrapper_a7e7a8 .pill__357e7 {	/*	dm		*/
	left: calc(1px * ((var(--aligndms_v) + ((((var(--guildsize_v) + 10 * var(--guildsize_v)/50) * (var(--columns_v) - 1))/2) * (1 - var(--aligndms_v)))) - 8)) !important;
}
.wrapper_a7e7a8 .pill__6b31b,	/*	guild	*/
.wrapper_a7e7a8 .pill__13f64 {	/* 	button	*/
	left: calc(-10px * var(--guildsize_v)/50) !important;
}
.wrapper_a7e7a8 .guildSeparator_dcb3cc {
	width: calc(1px * ((var(--guildsize_v) + 12 * var(--guildsize_v)/50) * var(--columns_v) - (12 * var(--guildsize_v)/50))) !important;
	margin: calc(1px * (var(--guildsize_v)/10)) 0 !important;
	display: block !important;
}
.wrapper_a7e7a8 [role=tree] ~ .listItem_fa7b36 .listItemWrapper__1f93b,
.wrapper_a7e7a8 [role=tree] ~ * .listItem_fa7b36 .listItemWrapper__1f93b,
.wrapper_a7e7a8 .listItem_fa7b36 + div[aria-label]:not([class]) ~ .listItem_fa7b36 .listItemWrapper__1f93b,
.wrapper_a7e7a8 .listItem_fa7b36 + div[aria-label]:not([class]) ~ * .listItem_fa7b36 .listItemWrapper__1f93b {
	margin: 0 !important;
}
.wrapper_a7e7a8 .guildsError__0aa84 {
	height: calc(1px * var(--guildsize_v)) !important;
	width: calc(1px * var(--guildsize_v)) !important;
	font-size: calc(1px * (var(--guildsize_v)/4 + 7.5)) !important;
	line-height: calc(1px * (var(--guildsize_v)/4 + 6.5)) !important;
}
.wrapper_a7e7a8 #sort-button,
.wrapper_a7e7a8 #sort-button > div,
.wrapper_a7e7a8 .frame_oXWS21,
.wrapper_a7e7a8 .frame_oXWS21 .button_Jt-tIg {
	height: calc(1px * ((var(--guildsize_v)/5) + 10)) !important;
}
.wrapper_a7e7a8 .friendsOnline_2JkivW,
.wrapper_a7e7a8 .label_2wRs_g {
	display: flex !important;
	justify-content: center !important;
	width: calc(1px * (var(--guildsize_v) * var(--columns_v) + 20 * (var(--guildsize_v)/50) + 14 * (var(--guildsize_v)/50) * (var(--columns_v) - 1) - (20 * var(--guildsize_v)/50) calc(10px * var(--guildsize_v)/50))) !important;
	margin: 0 !important;
	font-size: calc(1px * ((var(--guildsize_v)/8) + 3)) !important;
}
.wrapper_a7e7a8 #sort-button,
.wrapper_a7e7a8 .frame_oXWS21 {
	width: calc(1px * ((var(--guildsize_v)*4/5) + 12 * var(--guildsize_v)/50)) !important;
}
.wrapper_a7e7a8 #sort-button,
.wrapper_a7e7a8 .frame_oXWS21 {
	text-align: center !important;
	margin: calc(1px * var(--guildgap_v)) calc(1px * (((var(--guildsize_v) + 12 * var(--guildsize_v)/50) * (var(--columns_v) - 1) - ((var(--guildsize_v)*4/5) + 12 * var(--guildsize_v)/50) + var(--guildsize_v))/2)) calc(1px * var(--guildgap_v)) calc(1px * (((var(--guildsize_v) + 12 * var(--guildsize_v)/50) * (var(--columns_v) - 1) - ((var(--guildsize_v)*4/5) + 12 * var(--guildsize_v)/50) + var(--guildsize_v))/2)) !important;
}
.wrapper_a7e7a8 #sort-button > div,
.wrapper_a7e7a8 .frame_oXWS21 .innerFrame_8Hg64E,
.wrapper_a7e7a8 .frame_oXWS21 .button_Jt-tIg {
	white-space: pre !important;
	font-size: calc(1px * ((var(--guildsize_v)/8) + 5)) !important;
	line-height: calc(1px * ((var(--guildsize_v)/5) + 10)) !important;
}
.wrapper_a7e7a8 #sort-button > div,
.wrapper_a7e7a8 .frame_oXWS21 .innerFrame_8Hg64E,
.wrapper_a7e7a8 .frame_oXWS21 .button_Jt-tIg {
	width: 100% !important;
}

.wrapper_a7e7a8 .wrapper_ed1dea {
	border-bottom: calc(1px * var(--guildgap_v)) solid transparent !important;
	margin: calc(1px * var(--guildgap_v)) calc(1px * (12 * var(--guildsize_v)/50)) auto 0 !important;
	width: calc(1px * var(--guildsize_v)) !important;
}
.wrapper_a7e7a8 .wrapper_ed1dea > .listItem_fa7b36 {
	margin: 0 !important;
}
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"] {
	overflow: visible !important;
	margin-left: -1px !important;
	margin-bottom: 0 !important;
	padding-left: 1px !important;
}
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"] .listItem_fa7b36 {
	margin: 6px 0 !important;
}
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"] .listItem_fa7b36:last-child {
	margin-bottom: 0 !important;
}
.wrapper_a7e7a8 .expandedFolderBackground__1bec6 {
	width: calc(1px * var(--guildsize_v)) !important;
	top: 0 !important;
	bottom: 0 !important;
	left: 0 !important;
	margin-bottom: 0 !important;
}

/* SERVERFOLDERS */

.wrapper_a7e7a8.content_Pph8t6 .scroller__3d071 {
	padding-left: 0 !important;
}
.wrapper_a7e7a8.content_Pph8t6 .wrapper_ed1dea {
	width: calc(1px * (var(--guildsize_v) * var(--columns_v) + 20 * (var(--guildsize_v)/50) + 14 * (var(--guildsize_v)/50) * (var(--columns_v) - 1))) !important;
}
.wrapper_a7e7a8.content_Pph8t6 .wrapper_ed1dea > .listItem_fa7b36 {
	margin: calc(1px * var(--guildgap_v)) calc(5px * var(--guildsize_v)/50) calc(1px * var(--guildgap_v)) 0 !important;
}
.wrapper_a7e7a8.content_Pph8t6 .wrapper_ed1dea .expandedFolderBackground__1bec6 {
	right: 0 !important;
	width: calc(100% - calc(5px * var(--guildsize_v)/50)) !important;
}
.wrapper_a7e7a8.content_Pph8t6 .wrapper_ed1dea [role="group"] {
	margin: 0 !important;
	padding: 0 calc(13px * var(--guildsize_v)/50) 0 calc(10px * var(--guildsize_v)/50) !important;
	display: flex !important;
	flex-flow: row wrap !important;
	justify-content: space-between !important;
}
.wrapper_a7e7a8.content_Pph8t6 .wrapper_ed1dea .expandedFolderBackground__1bec6 ~ [role="group"] {
	padding-bottom: calc(8px * var(--guildsize_v)/50) !important;
}

html .typingindicator-guild,
html .typingindicator-dms,
html .typingindicator-folder {
	right: 3px !important;
	top: calc(var(--guildsize_v) * 1px - 5px) !important;
	bottom: unset !important;
}

.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 56px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 112px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 168px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 224px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 280px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 336px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 392px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 448px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 504px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 560px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 616px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 672px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 728px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 784px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 840px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 896px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 952px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 1008px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 1064px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 1120px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 1176px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 1232px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 1288px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 1344px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 1400px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 1456px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 1512px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 1568px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 1624px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 1680px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 1736px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 1792px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 1848px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 1904px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 1960px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 2016px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 2072px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 2128px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 2184px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 2240px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 2296px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 2352px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 2408px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 2464px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 2520px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 2576px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 2632px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 2688px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 2744px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 2800px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 2856px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 2912px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 2968px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 3024px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 3080px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 3136px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 3192px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 3248px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 3304px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 3360px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 3416px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 3472px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 3528px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 3584px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 3640px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 3696px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 3752px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 3808px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 3864px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 3920px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 3976px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 4032px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 4088px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 4144px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 4200px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 4256px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 4312px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 4368px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 4424px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 4480px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 4536px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 4592px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 4648px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 4704px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 4760px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 4816px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 4872px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 4928px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 4984px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 5040px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 5096px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 5152px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 5208px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 5264px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 5320px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 5376px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 5432px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 5488px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 5544px;"],
.wrapper_a7e7a8 .wrapper_ed1dea [role="group"][style="height: 5600px;"] {
	height: unset !important;
}
`
document.head.appendChild(v)
let a = document.createElement('style')
a.innerHTML=`
:root {
  --rs-version: "2.0.9";
  --rs-small-spacing: 2px; /* Gap between avatar and status for members list/dms | MUST end in px */
  --rs-medium-spacing: 3px; /* Gap between avatar and status for User popout | MUST end in px */
  --rs-large-spacing: 4px; /* Gap between avatar and status for User profiles | MUST end in px */

  --rs-small-width: 2px; /* Thickness of status border for members list/dms | MUST end in px */
  --rs-medium-width: 3px; /* Thickness of status border for User popout | MUST end in px */
  --rs-large-width: 4px; /* Thickness of status border for User profile | MUST end in px */

  --rs-avatar-shape: 50%; /* 50% for round - 0% for square */

  --rs-online-color: #43b581; /* Colour for online status */
  --rs-idle-color: #faa61a; /* Colour for idle status */
  --rs-dnd-color: #f04747; /* Colour for dnd status */
  --rs-offline-color: #636b75; /* Colour for offline status */
  --rs-streaming-color: #643da7; /* Colour for streaming status */
  --rs-invisible-color: #747f8d; /* Colour for invisible status - Note: this will only show for your own invisibility */
  --rs-phone-color: var(--rs-online-color); /* Colour of the ring and phone icon when a user is on their phone |  */

  --rs-phone-visible: block; /* Visibility of the phone icon next to a users avatar. | block = visible | none = hidden */
}
#app-mount .wrapper_edb6e0 {
  border-radius: var(--rs-avatar-shape);
}
#app-mount .wrapper_edb6e0 svg:not(:root) {
  overflow: visible;
  contain: none;
}
#app-mount .wrapper_edb6e0 foreignObject {
  -webkit-mask: none;
          mask: none;
}
#app-mount .wrapper_edb6e0 .dots_a97068 circle {
  cy: -8 !important;
}
#app-mount .wrapper_edb6e0 .dots_a97068 circle:nth-child(1) {
  cx: -8.5 !important;
}
#app-mount .wrapper_edb6e0 .dots_a97068 circle:nth-child(2) {
  cx: -2.25 !important;
}
#app-mount .wrapper_edb6e0 .dots_a97068 circle:nth-child(3) {
  cx: 4 !important;
}
#app-mount .wrapper_edb6e0 .mask__1979f > rect[x="22"] {
  x: 0;
  y: 0;
}
#app-mount .wrapper_edb6e0 .mask__1979f > circle {
  opacity: 0 !important;
  width: 100%;
  height: 100%;
  cx: 43%;
  cy: 20;
}
#app-mount .wrapper_edb6e0 .pointerEvents__33f6a[x="14.5"] {
  fill: rgba(0, 0, 0, 0.5) !important;
  width: 30px;
  height: 30px;
  x: 1;
  y: 1;
}
#app-mount .wrapper_edb6e0 img, #app-mount .wrapper_edb6e0.avatar__6337f {
  border-radius: var(--rs-avatar-shape);
}
#app-mount .wrapper_edb6e0 svg[width="25"][height="15"] > rect {
  rx: calc(var(--rs-avatar-shape) * 2) !important;
  ry: calc(var(--rs-avatar-shape) * 2) !important;
}
#app-mount .wrapper_edb6e0[style*="80px"] svg.cursorDefault_e4f616 rect, #app-mount .wrapper_edb6e0[style*="120px"] svg.cursorDefault_e4f616 rect {
  ry: calc(var(--rs-avatar-shape) * 3.3);
  rx: calc(var(--rs-avatar-shape) * 3.3);
}
#app-mount .wrapper_edb6e0 rect {
  x: 0;
  y: 0;
  width: 100%;
  height: 100%;
  -webkit-mask: none;
          mask: none;
  display: block;
  rx: var(--rs-avatar-shape);
  ry: var(--rs-avatar-shape);
  fill: transparent !important;
  stroke-width: var(--rs-small-width);
}
#app-mount .wrapper_edb6e0 rect[fill="#43b581"], #app-mount .wrapper_edb6e0 rect[fill="#3ba55c"], #app-mount .wrapper_edb6e0 rect[fill="rgba(67, 181, 129, 1)"], #app-mount .wrapper_edb6e0 rect[mask*=online], #app-mount .wrapper_edb6e0 rect[fill*="hsl(139"], #app-mount .wrapper_edb6e0 rect[fill*="var(--status-green"], #app-mount .wrapper_edb6e0 rect[fill="#23a55a"] {
  stroke: var(--rs-online-color);
}
#app-mount .wrapper_edb6e0 rect[fill="#faa61a"], #app-mount .wrapper_edb6e0 rect[fill="rgba(250, 166, 26, 1)"], #app-mount .wrapper_edb6e0 rect[mask*=idle], #app-mount .wrapper_edb6e0 rect[fill*="hsl(38"], #app-mount .wrapper_edb6e0 rect[fill*="var(--status-yellow"], #app-mount .wrapper_edb6e0 rect[fill="#f0b232"] {
  stroke: var(--rs-idle-color);
}
#app-mount .wrapper_edb6e0 rect[fill="#f04747"], #app-mount .wrapper_edb6e0 rect[fill="rgba(240, 71, 71, 1)"], #app-mount .wrapper_edb6e0 rect[fill="#ed4245"], #app-mount .wrapper_edb6e0 rect[mask*=dnd], #app-mount .wrapper_edb6e0 rect[fill*="hsl(359"], #app-mount .wrapper_edb6e0 rect[fill*="var(--status-red"], #app-mount .wrapper_edb6e0 rect[fill="#f23f43"] {
  stroke: var(--rs-dnd-color);
}
#app-mount .wrapper_edb6e0 rect[fill="#593695"], #app-mount .wrapper_edb6e0 rect[mask*=streaming], #app-mount .wrapper_edb6e0 rect[fill*="var(--status-purple"] {
  stroke: var(--rs-streaming-color);
}
#app-mount .wrapper_edb6e0 rect[fill="#747f8d"], #app-mount .wrapper_edb6e0 rect[mask*=offline], #app-mount .wrapper_edb6e0 rect[fill="#80848e"], #app-mount .wrapper_edb6e0 rect[fill=NaN] {
  stroke: var(--rs-offline-color);
}
#app-mount .wrapper_edb6e0 rect[fill="#747f8d"], #app-mount .wrapper_edb6e0 rect[mask*=invisible], #app-mount .wrapper_edb6e0 rect[fill="rgba(116, 127, 141, 1)"], #app-mount .wrapper_edb6e0 rect[fill*="hsl(214"], #app-mount .wrapper_edb6e0 rect[fill="var(--status-grey-500)"], #app-mount .wrapper_edb6e0 rect[fill="#82858f"] {
  stroke: var(--rs-invisible-color);
}
#app-mount .wrapper_edb6e0 rect[x="16"] {
  width: 24px;
  height: 24px;
}
#app-mount .wrapper_edb6e0 rect[x="28"] {
  width: 40px;
  height: 40px;
  overflow: visible;
}
#app-mount .wrapper_edb6e0[style*="32px"] rect {
  width: 32px;
  height: 32px;
  x: -14.5;
  y: -17;
  position: relative;
  z-index: 0;
}
#app-mount .wrapper_edb6e0[style*="40px"] > svg > svg rect {
  width: 40px;
  height: 40px;
  x: -19;
  y: -20;
  ry: calc(var(--rs-avatar-shape) * 3.3);
  rx: calc(var(--rs-avatar-shape) * 3.3);
}
#app-mount .wrapper_edb6e0[style*="40px"] foreignObject[mask*=mobile] img {
  width: calc(100% - 12px);
}
#app-mount .wrapper_edb6e0[style*="80px"] svg.cursorDefault_e4f616 rect {
  x: -48;
  y: -52;
}
#app-mount .wrapper_edb6e0[style*="80px"] rect {
  width: 80px;
  height: 80px;
  stroke-width: var(--rs-medium-width);
}
#app-mount .wrapper_edb6e0[style*="80px"] img {
  -webkit-clip-path: inset(calc(var(--rs-medium-spacing) + 1px) calc(var(--rs-medium-spacing) + 1px) round var(--rs-avatar-shape));
          clip-path: inset(calc(var(--rs-medium-spacing) + 1px) calc(var(--rs-medium-spacing) + 1px) round var(--rs-avatar-shape));
}
#app-mount .wrapper_edb6e0[style*="120px"] svg.cursorDefault_e4f616 rect {
  x: -70;
  y: -76;
}
#app-mount .wrapper_edb6e0[style*="120px"] rect {
  width: 120px;
  height: 120px;
  stroke-width: var(--rs-large-width);
  pointer-events: none;
}
#app-mount .wrapper_edb6e0[style*="120px"] img {
  -webkit-clip-path: inset(calc(var(--rs-large-spacing) + 1px) calc(var(--rs-large-spacing) + 1px) round var(--rs-avatar-shape));
          clip-path: inset(calc(var(--rs-large-spacing) + 1px) calc(var(--rs-large-spacing) + 1px) round var(--rs-avatar-shape));
}
#app-mount .wrapper_edb6e0:not([style*="80px;"], [style*="120px;"], [style*="16px"]) > svg > foreignObject:not(:only-child) img {
  -webkit-clip-path: inset(calc(var(--rs-small-spacing) + 1px) calc(var(--rs-small-spacing) + 1px) round var(--rs-avatar-shape));
          clip-path: inset(calc(var(--rs-small-spacing) + 1px) calc(var(--rs-small-spacing) + 1px) round var(--rs-avatar-shape));
}
#app-mount .wrapper_edb6e0[style="width: 16px; height: 16px;"] rect {
  display: none;
}
#app-mount .wrapper_edb6e0[style="width: 16px; height: 16px;"] img {
  -webkit-clip-path: none;
          clip-path: none;
}
#app-mount .wrapper_edb6e0 foreignObject[mask*=mobile] {
  width: calc(100% + 4px);
}
#app-mount .wrapper_edb6e0 foreignObject[mask*=mobile][width="32"] img {
  width: calc(100% - 12px);
}
#app-mount .wrapper_edb6e0 foreignObject[mask*=mobile][width="80"] img {
  width: calc(100% - 16px);
}
#app-mount .wrapper_edb6e0 foreignObject[mask*=mobile][width="80"]:after {
  width: 14px;
  height: 18px;
  top: 75%;
}
#app-mount .wrapper_edb6e0 foreignObject[mask*=mobile][width="120"] img {
  width: calc(100% - 22px);
}
#app-mount .wrapper_edb6e0 foreignObject[mask*=mobile][width="120"]:after {
  width: 24px;
  height: 20px;
  top: 75%;
}
#app-mount .wrapper_edb6e0 foreignObject[mask*=mobile]:after {
  content: "";
  display: var(--rs-phone-visible, block);
  -webkit-mask: url('data:image/svg+xml; utf-8,<svg aria-hidden="true" focusable="false" data-prefix="fas" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg>') center no-repeat;
          mask: url('data:image/svg+xml; utf-8,<svg aria-hidden="true" focusable="false" data-prefix="fas" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg>') center no-repeat;
  position: absolute;
  width: 10px;
  height: 14px;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  background: var(--rs-phone-color, var(--rs-online-color));
  z-index: 1;
}
#app-mount .wrapper_edb6e0 foreignObject[mask*=mobile] + rect {
  stroke: var(--rs-phone-color, var(--rs-online-color));
}
#app-mount .avatarStack__6604a {
  position: relative;
}
#app-mount .avatarSpeaking__61fb1 {
  position: absolute;
  top: 2px;
  left: 2px;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  border-radius: var(--rs-avatar-shape);
  box-shadow: inset 0 0 0 2px var(--rs-self-speaking-colour, #57d39b), inset 0 0 0 3px var(--background-secondary);
}
#app-mount .message__80c10 .wrapper_edb6e0 foreignObject[mask*=mobile] {
  width: calc(100% + 3px);
}
#app-mount .message__80c10 .wrapper_edb6e0 rect[mask*=typing] {
  width: calc(100% - 9px);
}
#app-mount .avatarHint__8e5b9 foreignObject {
  -webkit-mask: none;
          mask: none;
}
#app-mount .avatarHintInner__3d1c9 {
  border-radius: var(--rs-avatar-shape) !important;
  padding-top: 0;
  width: calc(100% - var(--rs-medium-width) - var(--rs-medium-spacing) + 2px);
  height: calc(100% - var(--rs-medium-width) - var(--rs-medium-spacing) + 2px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
}
#app-mount .memberOffline-2lN7gt img {
  -webkit-clip-path: none !important;
          clip-path: none !important;
}
#app-mount .offline_c1fd80 img {
  -webkit-clip-path: none !important;
          clip-path: none !important;
}
#app-mount .avatarWrapperNonUserBot_d27212 .wrapper_edb6e0 img {
  -webkit-clip-path: none !important;
          clip-path: none !important;
}
#app-mount .userInfo__18240 .wrapper_edb6e0 {
  margin-top: 1px;
  margin-left: 1px;
}
#app-mount .info__755e1 .line__75801:last-child:after {
  content: "RadialStatus " var(--rs-version);
  display: block;
}
`
document.head.appendChild(a)
let b = document.createElement('style')
wbh8r2mib3i2
document.head.appendChild(b)
let c = document.createElement('style')
c.innerHTML=`:root {
--main-color: #FF0000FF !important;
--hover-color: #0000FFFF !important;
--success-color: #00FF10FF;
--danger-color: #982929;
--url-color: #E60000FF;
--online-color: #00B50BFF;
--idle-color: #FA9700FF;
--dnd-color: #FF0000FF;
--streaming-color: #7245BFFF;
--offline-color: #000000FF;
--main-font: 'Roboto';
--code-font: 'Consolas';
--text-normal: #DEDEDEFF;
--text-muted: #4B4E52FF;
--channels-width: 220px;
--members-width: 209px;
--background-shading: 54%;
--background-image: url('https://cdn.discordapp.com/attachments/1028741567047024701/1198639817001545859/eIhU2Bk.png') !important;
--background-size: contain;
--background-position: center;
--background-repeat: no-repeat;
--background-attachment: fixed;
--background-brightness: 0%;
--background-constrast: 100%;
--background-saturation: 0%;
--background-invert: 0%;
--background-grayscale: 0%;
--background-sepia: 0%;
--background-blur: 0px;
--home-icon: url('https://i.imgur.com/qruNead.png') !important;
--home-position: center;
--home-size: 49px;
--background-overlay: #000000C4;
--backdrop-image: center;
--backdrop-size: cover;
--backdrop-repeat: repeat;
--backdrop-attachment: fixed;
--backdrop-brightness: 100%;
--backdrop-constrast: 100%;
--backdrop-saturation: 100%;
--backdrop-invert: 0%;
--backdrop-grayscale: 0%;
--backdrop-sepia: 0%;
--backdrop-blur: 0px;
--user-popout-image: url('https://cdn.discordapp.com/attachments/1028741567047024701/1190402471034626128/rltvPt9.png') !important;
--user-popout-image: center;
--user-popout-size: cover;
--user-popout-repeat: repeat;
--user-popout-attachment: fixed;
--user-popout-brightness: 100%;
--user-popout-constrast: 100%;
--user-popout-saturation: 100%;
--user-popout-invert: 0%;
--user-popout-grayscale: 0%;
--user-popout-sepia: 0%;
--user-popout-blur: 0px;
--user-popout-overlay: #FF00006F;
--user-modal-image: url('https://clearvision.gitlab.io/images/sapphire.jpg');
--user-modal-image: center;
--user-modal-size: cover;
--user-modal-repeat: repeat;
--user-modal-attachment: fixed;
--user-modal-brightness: 100%;
--user-modal-constrast: 100%;
--user-modal-saturation: 100%;
--user-modal-invert: 0%;
--user-modal-grayscale: 0%;
--user-modal-sepia: 0%;
--user-modal-blur: 0px;
--bd-blue: #E60000FF;
--bd-blue-hover: #0532B3FF;
--bd-blue-active: #636BB3FF;
--rs-small-spacing: 2px;
--rs-medium-spacing: 3px;
--rs-large-spacing: 4px;
--rs-small-width: 2px;
--rs-medium-width: 3px;
--rs-large-width: 4px;
--rs-avatar-shape: 50%;
--rs-online-color: #00B50BFF;
--rs-idle-color: #FA6700FF;
--rs-dnd-color: #F00000FF;
--rs-offline-color: #000000FF;
--rs-streaming-color: #3E2667FF;
--rs-invisible-color: #747f8d;
--rs-phone-visible: block;
--customFont: 'Roboto';
--columns: 2;
--guildsize: 50;
--guildgap: 2;
--aligndms: 0;
}

.anchor_c8ddc0 {
 color: var(--main-color)
}

.sizeMin__94642,.item_f9d377,.topPill__0cdf1 .themed_b957e8.selected__5711d.item__48dda, .side_b4b3f6 .themed_b957e8.selected__5711d.item__48dda .addFriend__80542 .item_e4ca95 newChannel_f99b92{
background-color: #FF0000FF !important;
color: white !important;
}
`
document.head.appendChild(c)
})();
