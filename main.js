(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function n(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=t}var r,o;return r=n,(o=[{key:"_showErrorMessage",value:function(e){var t=this._form.querySelector("#"+e.id+"-error");t.textContent=e.validationMessage,t.classList.add(this._errorClass),e.classList.add(this._inputErrorClass)}},{key:"_hideErrorMessage",value:function(e){var t=this._form.querySelector("#"+e.id+"-error");t.textContent="",t.classList.remove(this._errorClass),e.classList.remove(this._inputErrorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideErrorMessage(e,e.validationMessage):this._showErrorMessage(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(e)?(t.classList.add(this._inactiveButtonClass),t.disabled=!0):(t.classList.remove(this._inactiveButtonClass),t.disabled=!1)}},{key:"_setEventListeners",value:function(){var t,n=this,r=function(t){if(Array.isArray(t))return e(t)}(t=this._form.querySelectorAll(this._inputSelector))||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=this._form.querySelector(this._submitButtonSelector);this._form.addEventListener("reset",(function(){r.forEach((function(e){n._hideErrorMessage(e)})),n._toggleButtonState(r,o)})),r.forEach((function(e){e.addEventListener("input",(function(){n._checkInputValidity(e,e.validationMessage),n._toggleButtonState(r,o)}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&t(r.prototype,o),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n,r){var o=t.data,i=t.handleCardClick,a=t.handleDeleteClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=o.name,this._link=o.link,this._id=o._id,this._ownerId=o.owner._id,this._likes=o.likes,this._templateSelector=n,this._api=r,this._handleCardClick=i,this._handleDeleteClick=a}var t,n;return t=e,(n=[{key:"getId",value:function(){return this._id}},{key:"_getCardTemplate",value:function(){return document.querySelector(this._templateSelector).content.cloneNode(!0).querySelector(".card")}},{key:"removeCard",value:function(){this._card.remove()}},{key:"_toggleLike",value:function(e){e.target.classList.toggle("places__like-btn_active")}},{key:"_didLike",value:function(e){return!!this._likes.find((function(t){return t._id===e}))}},{key:"_updateLikeCounter",value:function(){this._card.querySelector(".places__counter").textContent=this._likes.length}},{key:"_setEventListeners",value:function(e){var t=this,n=this._card.querySelector(".places__remove"),r=this._card.querySelector(".places__picture"),o=this._card.querySelector(".places__like-btn");e===this._ownerId?n.addEventListener("click",(function(){t._handleDeleteClick(t.getId())})):n.style.display="none",o.addEventListener("click",(function(n){t._toggleLike(n),t._didLike(e)?(t._api.removeLikeCard(t._id),t._likes=t._likes.filter((function(t){return t._id!==e}))):(t._api.addLikeCard(t._id),t._likes.push({_id:e})),t._updateLikeCounter()})),r.addEventListener("click",(function(){return t._handleCardClick(t._link,t._name)}))}},{key:"generateCard",value:function(e){this._card=this._getCardTemplate();var t=this._card.querySelector(".places__picture"),n=this._card.querySelector(".places__location"),r=this._card.querySelector(".places__like-btn");return this._didLike(e)&&r.classList.add("places__like-btn_active"),t.src=this._link,n.textContent=this._name,this._updateLikeCounter(),this._setEventListeners(e),this._card}}])&&r(t.prototype,n),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n,r){var o=t.data,i=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=o,this._renderer=i,this._container=document.querySelector(n),this._api=r}var t,n;return t=e,(n=[{key:"prependItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"refreshItems",value:function(){var e=this;this._api.getCardList().then((function(t){e._renderedItems=t,e.renderItems()}))}}])&&i(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this.close=this.close.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close(e)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){(t.target.classList.contains("popup__close")||t.target.classList.contains("popup__background"))&&e.close()}))}}])&&u(t.prototype,n),e}();function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function a(e){var t,n=e.handleSubmit,r=e.popupSelector,o=e.openButton;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,r))._handleSubmit=n,t._openButton=o,t._inputList=t._popupElement.querySelectorAll(".popup__field"),t._form=t._popupElement.querySelector(".popup__container"),t._submitButton=t._popupElement.querySelector(".popup__save"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"close",value:function(){f(h(a.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var e=this;f(h(a.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(t){t.preventDefault();var n=e._submitButton.textContent;e._submitButton.textContent="Saving...",e._handleSubmit(e._getInputValues()).then((function(){e.close(),e._submitButton.textContent=n}))})),this._openButton.addEventListener("click",(function(){e.open()}))}}])&&l(t.prototype,n),a}(c);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popupElement.querySelector(".popup__image"),t._title=t._popupElement.querySelector(".popup__image-title"),t}return t=a,(n=[{key:"open",value:function(e,t){this._image.src=e,this._title.textContent=t,m(g(a.prototype),"open",this).call(this)}}])&&v(t.prototype,n),a}(c);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t,n){return(w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._deleteButton=n._popupElement.querySelector(".popup__save_type_remove-card"),n._api=t,n}return t=a,(n=[{key:"setDeleteFunction",value:function(e){this._deleteFunction=e}},{key:"setEventListeners",value:function(){var e=this;w(j(a.prototype),"setEventListeners",this).call(this),this._deleteButton.addEventListener("click",(function(){e._deleteFunction()}))}}])&&C(t.prototype,n),a}(c);function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){var n=t.userNameSelector,r=t.userSubtitleSelector,o=t.nameInput,i=t.subtitleInput,a=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameSelector=n,this._userSubtitleSelector=r,this._name=document.querySelector(this._userNameSelector),this._subtitle=document.querySelector(this._userSubtitleSelector),this._nameInput=document.getElementById(o),this._subtitleInput=document.getElementById(i),this._avatar=document.querySelector(a)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return[this._name.innerText,this._subtitle.innerText]}},{key:"setUserInfo",value:function(e,t,n,r){this.id=n,this._name.innerText=e,this._subtitle.innerText=t,this._nameInput.value=e,this._subtitleInput.value=t,this._avatar.src=r}}])&&P(t.prototype,n),e}();function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"getCardList",value:function(){return fetch(this._baseUrl+"/cards",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(new Error("Error:"+e.statusText))}))}},{key:"getUserInfo",value:function(){return fetch(this._baseUrl+"/users/me",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error:"+e.statusText)}))}},{key:"addCard",value:function(e){var t=e.name,n=e.link;return fetch(this._baseUrl+"/cards",{headers:this._headers,method:"POST",body:JSON.stringify({name:t,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("Error:"+e.statusText)}))}},{key:"removeCard",value:function(e){return fetch(this._baseUrl+"/cards/"+e,{headers:this._headers,method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject("Error:"+e.statusText)}))}},{key:"addLikeCard",value:function(e){return fetch(this._baseUrl+"/cards/likes/"+e,{headers:this._headers,method:"PUT"}).then((function(e){return e.ok?e.json():Promise.reject("Error:"+e.statusText)}))}},{key:"removeLikeCard",value:function(e){return fetch(this._baseUrl+"/cards/likes/"+e,{headers:this._headers,method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject("Error:"+e.statusText)}))}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;return fetch(this._baseUrl+"/users/me",{headers:this._headers,method:"PATCH",body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("Error:"+e.statusText)}))}},{key:"setUserAvatar",value:function(e){var t=e.avatar;return fetch(this._baseUrl+"/users/me/avatar",{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Error:"+e.statusText)}))}}])&&T(t.prototype,n),e}(),x={formSelector:".popup__container",inputSelector:".popup__field",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__field_type_error",errorClass:"popup__error_visible"},R=document.querySelector(".popup_type_addcard"),U=document.querySelector(".popup_type_edit-profile"),D=document.querySelector(".popup_type_avatar"),A=R.querySelector(".popup__container"),M=U.querySelector(".popup__container"),N=D.querySelector(".popup__container"),V=document.querySelector(".profile__avatar"),F=document.querySelector(".profile__avatar-container"),J=document.querySelector(".profile__edit-box"),H=document.querySelector(".profile__add-pic"),z=new B({baseUrl:"https://around.nomoreparties.co/v1/group-7",headers:{authorization:"78665cc3-4ac9-40da-9978-6b5e0bf3da61","Content-Type":"application/json"}}),$=new q({userNameSelector:".profile__name",userSubtitleSelector:".profile__subtitle",nameInput:"nameInput",subtitleInput:"subtitleInput",avatar:".profile__avatar"});z.getUserInfo().then((function(e){$.setUserInfo(e.name,e.about,e._id,e.avatar),z.getCardList().then((function(e){var t=new a({data:e,renderer:function(e){var n=new o({data:e,handleCardClick:function(e,t){G.open(e,t)},handleDeleteClick:function(){K.open(),K.setDeleteFunction((function(){z.removeCard(n.getId()).then((function(){n.removeCard(),K.close()})).catch((function(e){return console.log(e)}))}))}},".card-template",z);t.addItem(n.generateCard($.id))}},".places__list");t.renderItems(),new _({popupSelector:".popup_type_addcard",handleSubmit:function(e){return z.addCard(e).then((function(e){var n=new o({data:e,handleCardClick:function(e,t){G.open(e,t)},handleDeleteClick:function(){K.open(),K.setDeleteFunction((function(){z.removeCard(n.getId()).then((function(){n.removeCard(),K.close()})).catch((function(e){return console.log(e)}))}))}},".card-template",z);t.prependItem(n.generateCard($.id))})).catch((function(e){return console.log(e)}))},openButton:H}).setEventListeners()})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)})),new n(x,M).enableValidation(),new n(x,A).enableValidation(),new n(x,N).enableValidation(),new _({popupSelector:".popup_type_avatar",handleSubmit:function(e){return z.setUserAvatar({avatar:e.link}).then((function(e){V.src=e.avatar})).catch((function(e){return console.log(e)}))},openButton:F}).setEventListeners(),new _({popupSelector:".popup_type_edit-profile",handleSubmit:function(e){var t=e.name,n=e.subtitle;return z.setUserInfo({name:t,about:n}).then((function(e){$.setUserInfo(e.name,e.about,e._id,e.avatar)})).catch((function(e){return console.log(e)}))},openButton:J}).setEventListeners();var G=new S(".popup_type_image");G.setEventListeners();var K=new I(".popup_type_remove-card",z);K.setEventListeners()})();