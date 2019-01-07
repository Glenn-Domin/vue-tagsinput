!function(t){function e(s){if(n[s])return n[s].exports;var a=n[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,s){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=1)}([function(t,e,n){"use strict";e.a={props:{elementId:String,instruction:String,existingTags:{type:Object,default:function(){return{}}},value:{type:[Array,String],default:function(){return[]}},typeahead:{type:Boolean,default:!1},typeaheadStyle:{type:String,default:"badges"},typeaheadActivationThreshold:{type:Number,default:1},typeaheadMaxResults:{type:Number,default:0},placeholder:{type:String,default:"Add a tag"},limit:{type:Number,default:0},onlyExistingTags:{type:Boolean,default:!1},deleteOnBackspace:{type:Boolean,default:!0},allowDuplicates:{type:Boolean,default:!1},validate:{type:Function,default:function(){return!0}},addTagsOnComma:{type:Boolean,default:!1},wrapperClass:{type:String,default:"tags-input-wrapper-default"}},data:function(){return{badgeId:0,tagBadges:[],tags:[],input:"",oldInput:"",hiddenInput:"",searchResults:[],searchSelection:0}},created:function(){this.tagsFromValue(),this.$emit("initialized")},watch:{tags:function(){this.hiddenInput=this.tags.join(","),this.$emit("input",this.tags)},value:function(){this.tagsFromValue()}},methods:{escapeRegExp:function(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},tagFromInput:function(){if(this.searchResults.length&&this.searchSelection>=0)this.tagFromSearch(this.searchResults[this.searchSelection]),this.input="";else{var t=this.input.trim();if(!this.onlyExistingTags&&t.length&&this.validate(t)){this.input="";var e=this.makeSlug(t),n=this.existingTags[e];e=n?e:t,t=n||t,this.addTag(e,t)}}},tagFromSearchOnClick:function(t){this.tagFromSearch(t),this.$refs.taginput.blur()},tagFromSearch:function(t){this.searchResults=[],this.input="",this.oldInput="",this.addTag(t.slug,t.text)},makeSlug:function(t){return t.toLowerCase().replace(/\s/g,"-")},addTag:function(t,e){if(this.limit>0&&this.tags.length>=this.limit)return!1;this.tagSelected(t)||(this.tagBadges.push(e.replace(/\s/g,"&nbsp;")),this.tags.push(t)),this.$emit("tag-added",t),this.$emit("tags-updated")},removeLastTag:function(){!this.input.length&&this.deleteOnBackspace&&this.removeTag(this.tags.length-1)},removeTag:function(t){var e=this.tags[t];this.tags.splice(t,1),this.tagBadges.splice(t,1),this.$emit("tag-removed",e),this.$emit("tags-updated")},searchTag:function(){if(!0===this.typeahead&&(this.oldInput!=this.input||!this.searchResults.length&&0==this.typeaheadActivationThreshold)){this.searchResults=[],this.searchSelection=0;var t=this.input.trim();if(t.length&&t.length>=this.typeaheadActivationThreshold||0==this.typeaheadActivationThreshold){for(var e in this.existingTags){this.existingTags[e].toLowerCase().search(this.escapeRegExp(t.toLowerCase()))>-1&&!this.tagSelected(e)&&this.searchResults.push({slug:e,text:this.existingTags[e]})}this.searchResults.sort(function(t,e){return t.text<e.text?-1:t.text>e.text?1:0}),this.typeaheadMaxResults>0&&(this.searchResults=this.searchResults.slice(0,this.typeaheadMaxResults))}this.oldInput=this.input}},onFocus:function(){this.searchTag()},hideTypeahead:function(){var t=this;this.input.length||this.$nextTick(function(){t.ignoreSearchResults()})},nextSearchResult:function(){this.searchSelection+1<=this.searchResults.length-1&&this.searchSelection++},prevSearchResult:function(){this.searchSelection>0&&this.searchSelection--},ignoreSearchResults:function(){this.searchResults=[],this.searchSelection=0},clearTags:function(){this.tags.splice(0,this.tags.length),this.tagBadges.splice(0,this.tagBadges.length)},tagsFromValue:function(){if(this.value&&this.value.length){var t=Array.isArray(this.value)?this.value:this.value.split(",");if(this.tags==t)return;this.clearTags();var e=!0,n=!1,s=void 0;try{for(var a,i=t[Symbol.iterator]();!(e=(a=i.next()).done);e=!0){var r=a.value,o=this.existingTags[r],u=o||r;this.addTag(r,u)}}catch(t){n=!0,s=t}finally{try{!e&&i.return&&i.return()}finally{if(n)throw s}}}else{if(0==this.tags.length)return;this.clearTags()}},tagSelected:function(t){var e=this;if(this.allowDuplicates)return!1;if(!t)return!1;var n=this.makeSlug(t);return!!this.tags.find(function(t){return n==e.makeSlug(t)})},onKeyDown:function(t){","==t.key&&this.addTagsOnComma&&(t.preventDefault(),this.tagFromInput())}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(2);window.VoerroTagsInput=s.a,e.default=s.a},function(t,e,n){"use strict";function s(t){n(3)}var a=n(0),i=n(9),r=n(8),o=s,u=r(a.a,i.a,!1,o,null,null);e.a=u.exports},function(t,e,n){var s=n(4);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(6)("219082ab",s,!0,{})},function(t,e,n){e=t.exports=n(5)(!1),e.push([t.i,".tags-input-root{position:relative}",""])},function(t,e){function n(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var i=s(a);return[n].concat(a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function s(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var s=n(e,t);return e[2]?"@media "+e[2]+"{"+s+"}":s}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(s[i]=!0)}for(a=0;a<t.length;a++){var r=t[a];"number"==typeof r[0]&&s[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},function(t,e,n){function s(t){for(var e=0;e<t.length;e++){var n=t[e],s=c[n.id];if(s){s.refs++;for(var a=0;a<s.parts.length;a++)s.parts[a](n.parts[a]);for(;a<n.parts.length;a++)s.parts.push(i(n.parts[a]));s.parts.length>n.parts.length&&(s.parts.length=n.parts.length)}else{for(var r=[],a=0;a<n.parts.length;a++)r.push(i(n.parts[a]));c[n.id]={id:n.id,refs:1,parts:r}}}}function a(){var t=document.createElement("style");return t.type="text/css",h.appendChild(t),t}function i(t){var e,n,s=document.querySelector("style["+m+'~="'+t.id+'"]');if(s){if(f)return g;s.parentNode.removeChild(s)}if(y){var i=p++;s=d||(d=a()),e=r.bind(null,s,i,!1),n=r.bind(null,s,i,!0)}else s=a(),e=o.bind(null,s),n=function(){s.parentNode.removeChild(s)};return e(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;e(t=s)}else n()}}function r(t,e,n,s){var a=n?"":s.css;if(t.styleSheet)t.styleSheet.cssText=S(e,a);else{var i=document.createTextNode(a),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(i,r[e]):t.appendChild(i)}}function o(t,e){var n=e.css,s=e.media,a=e.sourceMap;if(s&&t.setAttribute("media",s),v.ssrId&&t.setAttribute(m,e.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(7),c={},h=u&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,f=!1,g=function(){},v=null,m="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,a){f=n,v=a||{};var i=l(t,e);return s(i),function(e){for(var n=[],a=0;a<i.length;a++){var r=i[a],o=c[r.id];o.refs--,n.push(o)}e?(i=l(t,e),s(i)):i=[];for(var a=0;a<n.length;a++){var o=n[a];if(0===o.refs){for(var u=0;u<o.parts.length;u++)o.parts[u]();delete c[o.id]}}}};var S=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],s={},a=0;a<e.length;a++){var i=e[a],r=i[0],o=i[1],u=i[2],l=i[3],c={id:t+":"+a,css:o,media:u,sourceMap:l};s[r]?s[r].parts.push(c):n.push(s[r]={id:r,parts:[c]})}return n}},function(t,e){t.exports=function(t,e,n,s,a,i){var r,o=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(r=t,o=t.default);var l="function"==typeof o?o.options:o;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId=a);var c;if(i?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):s&&(c=s),c){var h=l.functional,d=h?l.render:l.beforeCreate;h?(l._injectStyles=c,l.render=function(t,e){return c.call(e),d(t,e)}):l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:r,exports:o,options:l}}},function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tags-input-root flex-grow-1"},[n("div",{staticClass:"d-flex position-relative"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],ref:"taginput",class:["form-control w-100",{"is-invalid":0===t.tags.length}],attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.input},on:{keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;e.preventDefault(),t.tagFromInput(e)},function(e){if(!("button"in e)&&8!==e.keyCode)return null;t.removeLastTag(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40,e.key))return null;t.nextSearchResult(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38,e.key))return null;t.prevSearchResult(e)},t.onKeyDown],keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key))return null;t.ignoreSearchResults(e)},t.searchTag],focus:t.onFocus,blur:t.hideTypeahead,value:t.tags,input:function(e){e.target.composing||(t.input=e.target.value)}}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.searchResults.length,expression:"searchResults.length"}]},["badges"===t.typeaheadStyle?n("p",{class:"typeahead-"+t.typeaheadStyle},t._l(t.searchResults,function(e,s){return n("span",{key:s,staticClass:"tags-input-badge",class:{"tags-input-typeahead-item-default":s!=t.searchSelection,"tags-input-typeahead-item-highlighted-default":s==t.searchSelection},domProps:{textContent:t._s(e.text)},on:{mouseover:function(e){t.searchSelection=s},mousedown:function(n){n.preventDefault(),t.tagFromSearchOnClick(e)}}})})):"dropdown"===t.typeaheadStyle?n("ul",{class:"typeahead-"+t.typeaheadStyle},t._l(t.searchResults,function(e,s){return n("li",{key:s,class:{"tags-input-typeahead-item-default":s!=t.searchSelection,"tags-input-typeahead-item-highlighted-default":s==t.searchSelection},domProps:{textContent:t._s(e.text)},on:{mouseover:function(e){t.searchSelection=s},mousedown:function(n){n.preventDefault(),t.tagFromSearchOnClick(e)}}})})):t._e()])]),t._v(" "),t.instruction?n("small",[t._v(t._s(t.instruction))]):t._e(),t._v(" "),n("div",{class:t.wrapperClass+" tags-input"},[t._l(t.tagBadges,function(e,s){return n("span",{key:s,staticClass:"badge badge-primary badge-pill tags-input-badge-selected-default",on:{click:function(e){e.preventDefault(),t.removeTag(s)}}},[n("i",{staticClass:"tags-input-remove",attrs:{href:"#"}}),t._v(" "),n("span",{domProps:{innerHTML:t._s(e)}})])}),t._v(" "),t.elementId?n("input",{directives:[{name:"model",rawName:"v-model",value:t.hiddenInput,expression:"hiddenInput"}],attrs:{type:"hidden",name:t.elementId,id:t.elementId},domProps:{value:t.hiddenInput},on:{input:function(e){e.target.composing||(t.hiddenInput=e.target.value)}}}):t._e()],2)])},a=[],i={render:s,staticRenderFns:a};e.a=i}]);
//# sourceMappingURL=voerro-vue-tagsinput.js.map