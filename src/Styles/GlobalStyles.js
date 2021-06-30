import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
* {
    box-sizing: border-box;
}
a {
    color: inherit;
    text-decoration: none;
}
strong{
    font-weight:bold;
}

//Config Sidebar
#header{
    position: fixed;
    top: 50px;
    left: 0;
    min-width: 200px;
}

//Sidebar inner config
#header .pro-sidebar-inner{
    background-color: #fff;
    color: black;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    min-width: 200px;
}

//Sidebar size
#header .pro-sidebar {
    height: calc(100vh - 50px);
    min-width: 200px;
}

//Sidebar each text+icon
#header .pro-sidebar-inner .pro-sidebar-layout ul .pro-inner-item .pro-icon-wrapper {
    background-color: #fbf4cd;
    color: #000;
    border-radius: 3px;
    cursor: pointer;
}

//Sidebar each icon
#header .pro-sidebar-content .pro-menu{
    padding: 0px;
}

//Sidebar Submenu & text effect hover
#header .pro-sidebar-inner .pro-menu-item{
    text-decoration: none;
    h4{
        padding-left: 10px;
    }
    li{
        padding-top: 5px;
    }
    .pro-inner-list-item{
        background-color: #fff;
    }
    span{
        color: #000;
    }
    :hover{
        background-color: #b3e4e1;
    }
}

@media (max-width: 450px){
    #header{
        display: none;
    }
}

`;

export default GlobalStyles;