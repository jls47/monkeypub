import{R as e,a as t,b as l,c as n,d as r,B as c,e as a}from"./vendor.eff09231.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const l of e)if("childList"===l.type)for(const e of l.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const o=t=>e.createElement("div",null,"LoginButton"),i=t=>e.createElement("div",null,"TipButton"),m=t({key:"logState",default:!1}),u=t=>{const[r,c]=l(m),a=n(m);let o="logged in";return a||(o="not logged in"),e.createElement("div",{onClick:e=>c(!a)},e.createElement("p",null,"Login"),e.createElement("p",null,"Logged in: ",o))},s=t=>{let l="logged in";return n(m)||(l="not logged in"),e.createElement("div",null,e.createElement("p",null,"ComingUp"),e.createElement("p",null,l))},d=t=>e.createElement("div",null,"Recents"),E=t=>e.createElement("div",null,"Result"),p=t=>e.createElement("div",null,"SearchResults"),f=t=>e.createElement("div",null,"SearchBox"),g=t=>e.createElement("div",null,"TipBox");function v(){return e.createElement(r,null,e.createElement("div",{className:"App"},e.createElement("header",{className:"App-header"},e.createElement("p",null,"Welcome!  Work in Progress."),e.createElement(c,{variant:"contained",color:"primary",href:"https://material-ui.com"},"Made with Material UI"),e.createElement("p",null,"Components:"),e.createElement("div",{className:"Components"},e.createElement(o,null),e.createElement("br",null),e.createElement(i,null),e.createElement("br",null),e.createElement(u,null),e.createElement("br",null),e.createElement(s,null),e.createElement("br",null),e.createElement(d,null),e.createElement("br",null),e.createElement(E,null),e.createElement("br",null),e.createElement(p,null),e.createElement("br",null),e.createElement(f,null),e.createElement("br",null),e.createElement(g,null)))))}a.render(e.createElement(e.StrictMode,null,e.createElement(v,null)),document.getElementById("root"));
