(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3ihZ":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("q1tI"),c=function(e,t){Object(a.useLayoutEffect)((function(){return t.setLocation(e),t.scrollToAnchor(t.anchor),function(){return t.reset()}}),[e.hash])}},AnUa:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("LH4d"),c=n("e9vv"),r=n("q1tI"),o=n("S8kh"),i=function(){var e=Object(c.a)(),t=Object(o.c)(),n=function(n){var c=n.target.getAttribute("path"),r=""+t.origin+t.pathname+"#"+c;a.a(r),e.copyLink()};Object(r.useLayoutEffect)((function(){return document.querySelectorAll(".content__button_copy-to-buffer").forEach((function(e){return e.addEventListener("click",n)})),function(){document.querySelectorAll(".content__button_copy-to-buffer").forEach((function(e){return e.removeEventListener("click",n)}))}}),[t.pathname])}},Bapu:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r}));var a=n("q1tI"),c=Object(a.createContext)(null),r=function(){return Object(a.useContext)(c)}},DaPz:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var a=n("q1tI"),c=n.n(a),r=n("TSYQ"),o=n.n(r),i=function(e){var t=e.className,n=e.children,a=o()("content__aside-bar",t);return c.a.createElement("div",{className:a},n)},l=n("hGi/"),s=n("ouma"),u=n("KraK"),m=n("4KgZ"),d=n("eW31"),_=n("Bapu"),f=n("mLh/"),b=n("CVwT"),h=Object(d.a)((function(e){var t=e.children,n=Object(_.b)();return c.a.createElement("div",{className:"content-bar__control content-bar__control_left","toggle-state":n.state},t)})),v=Object(d.a)((function(e){var t=e.children,n=Object(_.b)();return c.a.createElement("div",{className:"content-bar__control content-bar__control_right","toggle-state":n.state},t)})),p=Object(d.a)((function(e){Object(l.a)(e);var t=Object(_.b)();return c.a.createElement(u.a,{className:"down-aside-bar__toggle-button_toggle-panel","toggle-state":t.state,onClick:function(){return t.toggle()}},c.a.createElement(b.a,{position:b.b.Horizontal,state:t.state}))})),E=Object(d.a)((function(e){Object(l.a)(e);var t=Object(f.b)();return c.a.createElement(u.a,{className:"control-bar__button",onClick:function(){return t.goPrevAnchor()},disabled:!t.isPrevAnchor},c.a.createElement(s.f,{className:"control-bar__svg-icon"}),c.a.createElement(m.a,{position:m.b.LeftCenter},"Предыдущий подраздел"))})),N=Object(d.a)((function(){var e=Object(f.b)();return c.a.createElement(u.a,{className:"control-bar__button",onClick:function(){return e.goNextAnchor()},disabled:!e.isNextAnchor},c.a.createElement(s.c,{className:"control-bar__svg-icon"}),c.a.createElement(m.a,{position:m.b.LeftCenter},"Следующий подраздел"))})),g=Object(d.a)((function(){var e=Object(f.b)();return c.a.createElement(u.a,{className:"control-bar__button",onClick:function(){return e.goPrevPage()},disabled:!e.isPrevPage},c.a.createElement(s.b,{className:"control-bar__svg-icon"}),c.a.createElement(m.a,{position:m.b.RightCenter},"Предыдущая страница"))})),y=Object(d.a)((function(){var e=Object(f.b)();return c.a.createElement(u.a,{className:"control-bar__button control-bar__button_next-page",onClick:function(){return e.goNextPage()},disabled:!e.isNextPage},c.a.createElement(s.e,{className:"control-bar__svg-icon"}),c.a.createElement(m.a,{position:m.b.LeftCenter},"Следующая страница"))})),w=Object(d.a)((function(e){Object(l.a)(e);var t=Object(_.b)();return c.a.createElement("div",{className:"content__aside-bar_down"},c.a.createElement("div",{className:"content__panel-down_auxiliary-animated-layer","toggle-state":t.state}),c.a.createElement("div",{className:"down-aside-bar__control"},c.a.createElement("div",{className:"down-aside-bar__control-section_content-nav content-nav"},c.a.createElement("div",{className:"content-nav__section content-nav__section_left","toggle-state":t.state},c.a.createElement("div",{className:"content-nav__animation-item content-nav__animation-item_fade-effect_3"},c.a.createElement(g,null))),c.a.createElement("div",{className:"content-nav__section content-nav__section_right","toggle-state":t.state},c.a.createElement("div",{className:"content-nav__animation-item content-nav__animation-item_fade-effect_2"},c.a.createElement(E,null)),c.a.createElement("div",{className:"content-nav__animation-item content-nav__animation-item_fade-effect_1"},c.a.createElement(N,null)),c.a.createElement("div",{className:"content-nav__animation-item content-nav__animation-item_fade-effect_0"},c.a.createElement(y,null)))),c.a.createElement("div",{className:"down-aside-bar__control-section_bar-toggle-button"},c.a.createElement(p,null))))})),O=n("vuIU"),j=n("Wnol"),x=n("N1E9"),k=function(){function e(){}return Object(O.a)(e,null,[{key:"XsUp",get:function(){var e=Object(j.a)(x.a.ContentNavXsMedia);return isNaN(e)?"":"(min-width:"+e+"px)"}},{key:"XsDown",get:function(){var e=Object(j.a)(x.a.ContentNavXsMedia);return isNaN(e)?"":"(max-width:"+e+"px)"}}]),e}(),C=n("yHKW"),I=function(e){var t=e.children,n=k.XsUp,a=k.XsDown;return c.a.createElement("div",{className:"content-layout-grid"},c.a.createElement(C.a,{query:n},c.a.createElement("div",{className:"content-layout-grid-item__aside-bar_left"},c.a.createElement(i,{className:"content__aside-bar_left"},c.a.createElement(h,null,c.a.createElement(g,null))))),c.a.createElement("div",{className:"content-layout-grid-item__main"},c.a.createElement("main",{className:"content content-with-control"},t)),c.a.createElement(C.a,{query:n},c.a.createElement("div",{className:"content-layout-grid-item__aside-bar_right"},c.a.createElement(i,{className:"content__aside-bar_right"},c.a.createElement(v,null,c.a.createElement(E,null),c.a.createElement(y,null),c.a.createElement(N,null))))),c.a.createElement(C.a,{query:a},c.a.createElement("div",{className:"content-layout-grid-item__aside-bar_down"},c.a.createElement(w,null))))}},EKdO:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("q1tI"),c=n.n(a),r=n("TSYQ"),o=n.n(r),i=n("pJAA"),l=n("kmFt"),s=n("Va/Y"),u=n("OaiF"),m=n("MM21"),d=function(e){var t=e.commitInfoAll,n=(e.contentOnGithubLink,o()("content__section-informer")),a=function(e){var t;return o()("section-informer__contributor",((t={})["section-informer__contributor_is-creator"]=e,t))},r=t.slice(0,6).map((function(e,t){return c.a.createElement(l.a,{key:t,className:a(e.authoredByCommitter)},c.a.createElement(s.a,null,c.a.createElement("button",{className:a(e.authoredByCommitter)},c.a.createElement("img",{className:"contributor__avatar",src:e.committer.avatarUrl,alt:"аватар пользователя"}))),c.a.createElement(u.a,{className:"contributor-dropdown__menu",openClassName:"contributor-dropdown__menu_open-state",closeClassName:"contributor-dropdown__menu_close-state"},c.a.createElement("div",{className:"contributor__card"},c.a.createElement("div",{className:"card__section card__section_avatar"},c.a.createElement("img",{src:e.committer.avatarUrl,alt:"аватар пользователя",className:"card__avatar"})),c.a.createElement("div",{className:"card__section card__section_info"},c.a.createElement(m.a,{condition:e.authoredByCommitter},c.a.createElement("span",{className:"contributor__label_creator"},"создатель"))),c.a.createElement("div",{className:"card__section"},c.a.createElement("span",{className:"contributor__label_username"},e.committer.name)),c.a.createElement("div",{className:"card__section"},c.a.createElement("span",{className:"contributor__label_bio"},e.committer.bio)),c.a.createElement("div",{className:"card__section card__section_control"},c.a.createElement("a",{className:"contributor__link_github-profile",href:"https://github.com/"+e.committer.name,target:"__blank"},"Github профиль".toUpperCase())))))})),d=t[0].committedDate,_=i.a(d);return c.a.createElement("aside",{className:n},c.a.createElement("section",{className:"section-informer__section section-informer__section_contributor"},c.a.createElement("header",{className:"section-informer__header"},c.a.createElement("span",{className:"section-informer__label"},"Контрибьютеры")),c.a.createElement("div",{className:"section-informer__body"},r)),c.a.createElement("section",{className:"section-informer__section section-informer__section_contributor"},c.a.createElement("header",{className:"section-informer__he/*<a href={}></a>*/}ader section-informer__header_section-contributer"},c.a.createElement("span",{className:"section-informer__label"},"Обнавлено:")),c.a.createElement("div",{className:"section-informer__body"},c.a.createElement("time",{className:"section-informer__last-update-date",dateTime:d},_))))}},EaY7:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI"),c=n("S8kh"),r=function(){var e=Object(c.c)(),t=function(t){t.preventDefault();var n=t.target;e.goTo(n.href)};Object(a.useLayoutEffect)((function(){return document.querySelectorAll(".content__html-content-wrapper a").forEach((function(e){return e.addEventListener("click",t)})),function(){document.querySelectorAll(".content__html-content-wrapper a").forEach((function(e){return e.removeEventListener("click",t)}))}}),[e.pathname])}},FATx:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var a=n("q1tI"),c=n("cddY"),r=n("S8kh"),o=n("rleN"),i=n("mrSG"),l=n("FFOo"),s=n("T1DM");var u=function(){function e(e,t){this.dueTime=e,this.scheduler=t}return e.prototype.call=function(e,t){return t.subscribe(new m(e,this.dueTime,this.scheduler))},e}(),m=function(e){function t(t,n,a){var c=e.call(this,t)||this;return c.dueTime=n,c.scheduler=a,c.debouncedSubscription=null,c.lastValue=null,c.hasValue=!1,c}return i.a(t,e),t.prototype._next=function(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(d,this.dueTime,this))},t.prototype._complete=function(){this.debouncedNext(),this.destination.complete()},t.prototype.debouncedNext=function(){if(this.clearDebounce(),this.hasValue){var e=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(e)}},t.prototype.clearDebounce=function(){var e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)},t}(l.a);function d(e){e.debouncedNext()}var _=function(){var e=Object(r.c)(),t=Object(c.b)();Object(a.useLayoutEffect)((function(){e.scrollToAnchor(e.anchor),t.init();var n,a,c=o.a.resizeGlobalObserver.pipe((n=2e3,void 0===a&&(a=s.a),function(e){return e.lift(new u(n,a))})).subscribe((function(){}));return function(){c.unsubscribe(),t.destroy()}}),[])}},LH4d:function(e,t,n){"use strict";function a(e){var t=document.createElement("input"),n=document.activeElement;t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),n.focus()}n.d(t,"a",(function(){return a}))},T1DM:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("mrSG"),c=function(e){function t(t,n){var a=e.call(this,t,n)||this;return a.scheduler=t,a.work=n,a.pending=!1,a}return a.a(t,e),t.prototype.schedule=function(e,t){if(void 0===t&&(t=0),this.closed)return this;this.state=e;var n=this.id,a=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(a,n,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(a,this.id,t),this},t.prototype.requestAsyncId=function(e,t,n){return void 0===n&&(n=0),setInterval(e.flush.bind(e,this),n)},t.prototype.recycleAsyncId=function(e,t,n){if(void 0===n&&(n=0),null!==n&&this.delay===n&&!1===this.pending)return t;clearInterval(t)},t.prototype.execute=function(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(e,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(e,t){var n=!1,a=void 0;try{this.work(e)}catch(c){n=!0,a=!!c&&c||new Error(c)}if(n)return this.unsubscribe(),a},t.prototype._unsubscribe=function(){var e=this.id,t=this.scheduler,n=t.actions,a=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==a&&n.splice(a,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null},t}(function(e){function t(t,n){return e.call(this)||this}return a.a(t,e),t.prototype.schedule=function(e,t){return void 0===t&&(t=0),this},t}(n("pugT").a)),r=function(){function e(t,n){void 0===n&&(n=e.now),this.SchedulerAction=t,this.now=n}return e.prototype.schedule=function(e,t,n){return void 0===t&&(t=0),new this.SchedulerAction(this,e).schedule(n,t)},e.now=function(){return Date.now()},e}(),o=new(function(e){function t(n,a){void 0===a&&(a=r.now);var c=e.call(this,n,(function(){return t.delegate&&t.delegate!==c?t.delegate.now():a()}))||this;return c.actions=[],c.active=!1,c.scheduled=void 0,c}return a.a(t,e),t.prototype.schedule=function(n,a,c){return void 0===a&&(a=0),t.delegate&&t.delegate!==this?t.delegate.schedule(n,a,c):e.prototype.schedule.call(this,n,a,c)},t.prototype.flush=function(e){var t=this.actions;if(this.active)t.push(e);else{var n;this.active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}},t}(r))(c)},cddY:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r}));var a=n("q1tI"),c=Object(a.createContext)(null),r=function(){return Object(a.useContext)(c)}},e9vv:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("bnLi"),c=n("q1tI"),r=n("Z+f3"),o=n("uRCh"),i=n("19Yi"),l=n("Qi+0"),s=function(){var e=Object(a.b)(r.a.BehaviorNotification)[0],t=Object(i.b)();return Object(c.useRef)({copyLink:function(){return t.send({type:l.b.CopyLinkDefaultNotice,id:Object(o.generateStringId)(),message:e.copyLink})}}).current}},h59u:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n("hGi/"),c=n("q1tI"),r=n.n(c),o=n("TSYQ"),i=n.n(o),l=n("eW31"),s=n("Qi+0"),u=Object(l.a)((function(e){var t,n,a=e.model,o=e.children,l=i()("behavior-notice_default-notice_opacity-container",((t={})["behavior-notice_default-notice_opacity-container_hidden"]=a.phase===s.a.BeforeShow,t)),u=i()("behavior-notice_default-notice",((n={})["behavior-notice_default-notice_show"]=a.phase===s.a.Show,n["behavior-notice_default-notice_hide"]=a.phase===s.a.Hide,n));return function(e){return e.index.current+1===e.index.total}(a)||a.destroy(),Object(c.useLayoutEffect)((function(){window.setTimeout((function(){return a.show()}),0)}),[]),r.a.createElement("div",{className:l},r.a.createElement("div",{className:u,onTransitionEnd:function(e){a.phase===s.a.Show?a.hide():a.phase===s.a.Hide&&a.destroy()}},null!=o?o:a.message))})),m=n("ouma"),d=n("19Yi"),_=function(){};_.componentMap=new Map([[s.b.DefaultNotice,u],[s.b.CopyLinkDefaultNotice,function(e){var t=e.model;return r.a.createElement(u,{model:t},r.a.createElement("div",{className:"copy-link-default-behavior-notice"},r.a.createElement("div",{className:"copy-link-default-behavior-notice__icon_wrapper"},r.a.createElement(m.p,{className:"copy-link-default-behavior-notice__icon"})),r.a.createElement("span",{className:"copy-link-default-behavior-notice__label"},t.message)))}]]),_.getNoticeComponentByType=function(e){return _.componentMap.get(e)};var f=Object(l.a)((function(e){Object(a.a)(e);var t=Object(d.b)().noticeAll.map((function(e){var t=_.getNoticeComponentByType(e.type);if(t)return r.a.createElement(t,{key:e.id,model:e})}));return r.a.createElement("div",{className:"behavior-notification"},t)}))},"mLh/":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r}));var a=n("q1tI"),c=Object(a.createContext)(null),r=function(){return Object(a.useContext)(c)}},pFkx:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n("hGi/"),c=n("q1tI"),r=n.n(c),o=n("ouma"),i=n("bnLi"),l=n("Z+f3"),s=n("mLh/"),u=n("eW31"),m=Object(u.a)((function(){var e,t,n=Object(i.b)(l.a.AppContent)[0],a=Object(s.b)();return r.a.createElement("nav",{className:"content-conclusion__nav"},r.a.createElement("button",{className:"conclusion-button conclusion-button_prev",onClick:function(){return a.goPrevPage()},disabled:!a.isPrevPage},r.a.createElement(o.g,{className:"conclusion-button__svg-icon"}),r.a.createElement("span",{className:"conclusion-label conclusion-label_prev"},null===(e=a.pageItem.prevPage)||void 0===e?void 0:e.name),r.a.createElement("span",{className:"conclusion-label_placeholder_xs conclusion-label_prev"},n.contentNav.prevButton.label)),r.a.createElement("button",{className:"conclusion-button conclusion-button_next",onClick:function(){return a.goNextPage()},disabled:!a.isNextPage},r.a.createElement("span",{className:"conclusion-label conclusion-label_next"},null===(t=a.pageItem.nextPage)||void 0===t?void 0:t.name),r.a.createElement("span",{className:"conclusion-label_placeholder_xs conclusion-label_next"},n.contentNav.nextButton.label),r.a.createElement(o.n,{className:"conclusion-button__svg-icon"})))})),d=function(){var e=Object(i.b)(l.a.Informers,l.a.Links),t=e[0],n=e[1],a=t.watchWithTelegramInformer.text,c=a[0],o=a[1];return o=o.replace(/Telegram/,'<span class="wwt__text_telegram-name">Telegram</span>'),r.a.createElement("div",{className:"informer__watch-with-telegram"},r.a.createElement("div",{className:"watch-with-telegram-informer__text_container"},r.a.createElement("p",{className:"watch-with-telegram-informer__text_primary"},c),r.a.createElement("p",{className:"watch-with-telegram-informer__text_secondary",dangerouslySetInnerHTML:{__html:o}})),r.a.createElement("div",{className:"watch-with-telegram-informer__subscribe-button_container"},r.a.createElement("a",{className:"watch-with-telegram-informer__subscribe-button",href:n.telegram},t.watchWithTelegramInformer.subscribeButton.label)))},_=function(){return r.a.createElement("div",{className:"content-conclusion__informer"},r.a.createElement(d,null))},f=function(e){return Object(a.a)(e),r.a.createElement("aside",{className:"content__section content-conclusion"},r.a.createElement("div",{className:"content-conclusion__item"},r.a.createElement(m,null)),r.a.createElement("div",{className:"content-conclusion__item"},r.a.createElement(_,null)))}},pJAA:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r}));var a=function(e,t,n){return void 0===n&&(n="ru"),new Date(e).toLocaleDateString(n,t)},c=function(e,t){void 0===t&&(t="ru");return a(e,{year:"numeric",month:"long",day:"numeric"},t)},r=function(e,t){void 0===t&&(t="ru");return a(e,{year:"numeric",month:"numeric",day:"numeric"},t)}}}]);
//# sourceMappingURL=792c5272720ebc74e71f0a7e0bccf767860c7ed3-e5dfe7e4a7f6880aa709.js.map