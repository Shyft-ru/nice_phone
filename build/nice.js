"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,s,i){return s&&e(t.prototype,s),i&&e(t,i),t}}();!function(){var e=function(){function e(t){var s=this;_classCallCheck(this,e);var i=this;this.element=t.element,this.emptyChar=t.emptyChar||"",this.pattern=t.pattern,this.lastKey=null,this.filterRegExp=/[^0-9]/g,this.allowedKeys=["Delete","Backspace","ArrowLeft","ArrowRight","F5"],this.oldPos=0,this.specials=[],this.pattern.split("n").filter(function(e,t,s){return e&&s.indexOf(e)===t}).forEach(function(e,t){s.specials=s.specials.concat(0===t?e:e.split(""))}),this.element.addEventListener("click",function(e){i._isCorrectPos()||i._setMinPos()}),this.element.addEventListener("keydown",function(e){var t=1*e.key>=0;if(!e.ctrlKey&&i.allowedKeys.indexOf(e.key)===-1&&!t&&!e.metaKey)return i.lastKey=null,void e.preventDefault();switch(i.lastKey=e.key,i.oldPos=this.selectionStart,i.oldStr=this.value,e.key){case"ArrowLeft":case"Backspace":i._isCorrectPos()||(e.preventDefault(),i._setMinPos())}}),this.element.addEventListener("paste",function(e){this.oldPos=this.selectionStart;var t=e.clipboardData,s=t.getData("text");e.preventDefault();var a=this.value.substr(0,this.oldPos)+s+this.value.substr(this.oldPos+s.length),n=i.passStr(a),l=i._getNewPos(n,null,s);this.value=n,i._setPos(l,l)}),this.element.addEventListener("input",function(e){var t=i.passStr(this.value),s=i._getNewPos(t,i.lastKey);this.value=t,i._setPos(s,s)}),this.updateFromRaw(t.defaultRaw)}return _createClass(e,[{key:"filterStr",value:function(e){return 0===e.lastIndexOf(this.specials[0])&&(e=e.slice(this.specials[0].length)),e=e.replace(this.filterRegExp,"")}},{key:"passStr",value:function(e){for(var t=this.filterStr(e),s="",i=0,a=0;(i<t.length||this.emptyChar)&&a<this.pattern.length;i++,a++){for(var n=t[i]||this.emptyChar;"n"!==this.pattern[a];)s+=this.pattern[a],a++;s+=n}return s}},{key:"updateFromRaw",value:function(e){e=e||"",this.element.value=this.passStr(e)}},{key:"_getNewPos",value:function(e,t,s){var i=this.oldPos;switch(t){case"Backspace":i=this.oldPos-1;break;case"Delete":i=this.oldPos;break;default:i=this.oldPos+(s&&s.length||1)}for(var a=0;a<this.specials.length;a++)for(var n=this.specials[a],l=this.oldPos;l<i;l++){var r=e.substr(l,n.length)===n;r&&(i+=n.length)}return i}},{key:"_setPos",value:function(e){this.element.setSelectionRange(e,e)}},{key:"_isCorrectPos",value:function(){return this.element.selectionStart>this.specials[0].length}},{key:"_setMinPos",value:function(){this._setPos(this.specials[0].length)}}]),e}();window.NicePhone=e}();