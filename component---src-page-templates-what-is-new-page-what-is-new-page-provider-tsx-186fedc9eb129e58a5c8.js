(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Tp7n:function(e,t,a){"use strict";a.r(t);var n,c=a("zLVn"),r=a("q1tI"),l=a.n(r),i=a("hGi/"),o=(a("kSBX"),a("T3EJ")),s=a("DEsH"),m=a("1G37"),d=a("eW31"),u=a("8qo5"),v=Object(r.createContext)(null),E=a("pJAA"),_=a("vIQ3"),h=a("FYJp"),f=function(e){Object(i.a)(e);var t=Object(r.useContext)(v),a=Object(h.a)(t),n=Object(h.b)(a.version),c=E.a(a.dateRelease),o=n.mmp+"/metadata/cover.png";return l.a.createElement("section",{className:"content__section"},l.a.createElement("div",{className:"main-presentation"},l.a.createElement("div",{className:"main-meta"},l.a.createElement("span",{className:"main-meta-informer__version"},n.preReleaseName),l.a.createElement("time",{className:"main-meta-informer__date",dateTime:a.dateRelease},c)),l.a.createElement("h1",{className:"main-title"},n.mmp),l.a.createElement("div",{className:"main-cover"},l.a.createElement(_.a,{className:"win-innovation-cover__cover",relativePath:o,alt:"cover"}))))},b=function(e){return Object(i.a)(e),l.a.createElement("div",{className:"social-network__share ya-share2","data-services":"vkontakte,facebook,twitter,whatsapp,telegram"})},k=function(e){return Object(i.a)(e),l.a.createElement("div",{className:"content__under-cover-bar"},l.a.createElement(b,null))},p=a("EKdO"),N=a("AnUa"),g=a("FATx"),O=a("Fatc"),j=a("EaY7"),w=Object(d.a)((function(e){Object(i.a)(e),Object(N.a)(),Object(g.a)(),Object(j.a)();var t=Object(O.d)().innovations;console.log(t.innovationDataAll);var a=t.innovationDataAll.map((function(e,t){return l.a.createElement("section",{key:t,id:e.path,className:"content__section win-content__innovation-list-item"},l.a.createElement(p.a,{commitInfoAll:e.commitInfoAll,contentOnGithubLink:e.fileOnGithubLink}),l.a.createElement("span",{className:"content__html-content-wrapper",dangerouslySetInnerHTML:{__html:e.html}}))}));return l.a.createElement(l.a.Fragment,null,a)})),C=a("kmFt"),A=a("Va/Y"),x=a("KraK"),S=a("ouma"),P=a("OaiF"),I=a("4KgZ"),V=a("TSYQ"),y=a.n(V),L=a("MM21");!function(e){e[e.Active=0]="Active",e[e.Inactive=1]="Inactive"}(n||(n={}));var F=function(e){var t,a=e.isActive,c=e.state,r=void 0===c?n.Active:c,i=y()("activity",((t={})["activity-state_active"]=r===n.Active,t["activity-state_inactive"]=r===n.Inactive,t));return l.a.createElement(L.a,{condition:a},l.a.createElement("div",{className:i}))},D=Object(d.a)((function(e){var t=e.children,a=Object(O.c)();return a.isAllVersionChecked,l.a.createElement(C.a,{className:"filter-dropdown"},l.a.createElement(A.a,null,l.a.createElement(F,{isActive:!a.isAllVersionChecked,state:a.isAllVersionUnchecked?n.Inactive:n.Active}),l.a.createElement(x.a,{size:x.b.SM},l.a.createElement(S.m,null),l.a.createElement(I.a,{position:I.b.BottomCenter},"Фильтр версий"))),l.a.createElement(P.a,{className:"filter-dropdown__menu content__control-bar-dropdown-item",openClassName:"filter-dropdown__menu_open-state",closeClassName:"filter-dropdown__menu_close-state"},t))})),T=a("uRCh"),R=Object(r.createContext)({name:"",setState:function(e){},getState:function(e){return!1}}),B=function(e){var t=e.name,a=e.children,n=Object(r.useState)({}),c=n[0],i=n[1],o={name:null!=t?t:Object(T.generateStringId)(),setState:function(e){var t=e.id,a=e.checked;return i((function(){return Object.keys(c).reduce((function(e,n){var r;return Object.assign(e,((r={})[n]=n===t&&(null!=a?a:!c[n]),r))}),{})}))},getState:function(e){return c[e]}};return l.a.createElement(R.Provider,{value:o},a)},Y=Object(r.createContext)({id:"",checked:!1}),z=function(){return Object(r.useContext)(Y)},J=Object(d.a)((function(e){var t,a,n=e.onChecked,c=e.value,i=e.className,o=e.classNameChecked,s=void 0===o?"checked":o,m=e.classNameNotChecked,d=void 0===m?"not-checked":m,u=e.checked,v=void 0!==u&&u,E=e.id,_=e.children,h=Object(r.useContext)(R),f=h.name,b=h.setState,k=h.getState,p=Object(r.useRef)(null!=E?E:Object(T.generateStringId)()),N=null!==(t=k(p.current))&&void 0!==t?t:v,g={id:p.current,checked:N},O=y()("radio",i,((a={})[s]=N,a[d]=!N,a));return Object(r.useEffect)((function(){b({id:p.current,checked:g.checked!==N?N:v})}),[v]),l.a.createElement(Y.Provider,{value:g},l.a.createElement("label",{htmlFor:p.current,className:O},l.a.createElement("input",{type:"radio",id:p.current,name:f,value:c,className:"radio__input",checked:N,onChange:function(){var e={id:p.current,checked:!N};b(Object.assign({},e)),n&&n(Object.assign({},e))}}),_))})),G=Object(d.a)((function(e){var t,a=e.onChecked,n=e.className,c=e.classNameChecked,i=void 0===c?"checked":c,o=e.classNameNotChecked,s=void 0===o?"not-checked":o,m=e.value,d=e.children,u=e.checked,v=void 0!==u&&u,E=e.id,_=void 0===E?Object(T.generateStringId)():E,h=Object(r.useRef)(null!=_?_:Object(T.generateStringId)()),f=y()("checkbox",n,((t={})[i]=v,t[s]=!v,t)),b={id:h.current,checked:v};return l.a.createElement(Y.Provider,{value:b},l.a.createElement("label",{className:f},l.a.createElement("input",{type:"checkbox",value:m,id:h.current,className:"checkbox__input",onChange:function(){a&&a({checked:!v,id:h.current})},checked:v}),d))})),K=function(e){var t=e.id,a=e.className,n=e.children,c=z().id,r=void 0===c?t:c,i=y()("label",a);return l.a.createElement("label",{htmlFor:r,className:i},n)},M=function(e){var t,a=e.className,n=z().checked,c=y()("checkbox__icon-group",a,((t={})["checkbox__icon-group_checked"]=n,t["checkbox__icon-group_not-checked"]=!n,t));return l.a.createElement("div",{className:c},l.a.createElement(L.a,{condition:n},l.a.createElement(S.h,{className:"checkbox__svg-icon"})),l.a.createElement(L.a,{condition:!n},l.a.createElement(S.i,{className:"checkbox__svg-icon"})))},H=Object(d.a)((function(e){Object(i.a)(e);var t=Object(O.c)();return l.a.createElement("form",{className:"win-filter-dropdown-menu__control-bar"},l.a.createElement("fieldset",{className:"fieldset_md"},l.a.createElement("legend",{className:"legend_md"},"Отобразить:"),l.a.createElement(B,{name:"filter-version"},l.a.createElement(J,{value:"last",className:"win-filter-version__radio",classNameChecked:"win-filter-version__radio_checked",classNameNotChecked:"win-filter-version__radio_not-checked",onChecked:function(e){return e.checked&&t.checkedLastVersion()},checked:t.isLastVersionChecked},l.a.createElement(K,null,"Последнее")),l.a.createElement(J,{value:"all",className:"win-filter-version__radio",classNameChecked:"win-filter-version__radio_checked",classNameNotChecked:"win-filter-version__radio_not-checked",onChecked:function(e){return e.checked&&t.checkedAllVersion()},checked:t.isAllVersionChecked},l.a.createElement(K,null,"Все")))))})),U=Object(d.a)((function(e){Object(i.a)(e);var t=Object(O.c)(),a=t.versionInfoAll.map((function(e,a){return l.a.createElement("li",{key:a,className:"win-filter-content-form__list-item"},l.a.createElement(G,{id:e.data.version,className:"win-filter-content-form__checkbox",value:e.data.version,onChecked:function(){return t.changeByVersion(e.data.version)},checked:e.checked},l.a.createElement(K,{className:"win-filter-content-form__label"},l.a.createElement(M,null),l.a.createElement("span",{className:"win-filter-content-form__label_stage"},e.data.stage),l.a.createElement(L.a,{condition:""!==e.data.updateVersion},l.a.createElement("span",{className:"win-filter-content-form__label_update-version"},"upd",e.data.updateVersion)),l.a.createElement("span",{className:"win-filter-content-form__label_date"},"(",e.data.dateRelease,")"),l.a.createElement("span",{className:"win-filter-content-form__label_count"},e.data.count))))}));return l.a.createElement("form",{className:"win-filter-content-form"},l.a.createElement("fieldset",{className:"fieldset_md"},l.a.createElement("legend",{className:"legend_md legend-with-meta"},l.a.createElement("span",{className:"legend_md_base-info"},"История версий"),l.a.createElement("span",{className:"legend_md_meta-info"},"Всего: ",t.innovationCount)),l.a.createElement("ul",null,a)))})),q=Object(d.a)((function(e){return Object(i.a)(e),l.a.createElement("div",{className:"win-version-filter"},l.a.createElement("header",{className:"win-version-filter__header"},l.a.createElement("span",null,"Версионный фильтр")),l.a.createElement("div",{className:"scroll-wrapper"},l.a.createElement(H,null),l.a.createElement(U,null)))})),Q=a("pFkx"),W=function(e){var t=e.message;return l.a.createElement("div",{className:"content__content-placeholder_empty"},l.a.createElement("div",{className:"content-placeholder__informer"},l.a.createElement("span",{className:"content-placeholder__label"},t)))},X=Object(d.a)((function(e){Object(i.a)(e);var t=Object(O.d)().versionFilter;return l.a.createElement(l.a.Fragment,null,l.a.createElement(L.a,{condition:0===t.checkedLength},l.a.createElement(W,{message:"Ничего не выбранно"})),l.a.createElement(L.a,{condition:t.checkedLength>0&&0===t.checkedInnovationCount},l.a.createElement(L.a,{condition:1===t.checkedLength},l.a.createElement(W,{message:"Выбранная версия не содержит нововведений"})),l.a.createElement(L.a,{condition:t.checkedLength>1},l.a.createElement(W,{message:"Выбранные версии не содержат нововведений"}))))})),Z=a("DaPz"),$=Object(d.a)((function(e){return Object(i.a)(e),l.a.createElement(o.a,{driver:l.a.createElement(m.b,null),content:l.a.createElement(s.a,{controlBar:l.a.createElement(u.a,null,l.a.createElement("div",{className:"content__win-control-bar_wrapper"},l.a.createElement(D,null,l.a.createElement(q,null)))),content:l.a.createElement(Z.a,null,l.a.createElement(f,null),l.a.createElement(k,null),l.a.createElement(w,null),l.a.createElement(X,null),l.a.createElement(Q.a,null))})})})),ee=a("H8eV"),te=a("bnLi"),ae=a("73Uz"),ne=Object(r.createContext)(null),ce=Object(r.createContext)(null),re=a("19Yi"),le=a("h59u"),ie=a("Bapu"),oe=a("mLh/"),se=a("cddY"),me=a("S8kh"),de=a("3ihZ");t.default=function(e){var t=e.pageContext,a=e.location,n=t.localization,i=t.innovationData,o=t.winTocTree,s=t.pageNavDataAll;console.log("winpp",i.mmp);n.pages;var m=Object(c.a)(n,["pages"]),d=O.b.getInstance({winTocTree:o,innovationData:i,pageNavDataAll:s,location:a}),u=d.stores,E=d.validators,_=u.router,h=u.contentDataWinPageStore;return Object(de.a)(_),Object(r.useEffect)((function(){i.mmp!==h.pageContent.mmp&&(h.setPageContent(i),console.log("reset"))}),[i]),l.a.createElement(O.a.Provider,{value:u},l.a.createElement(ce.Provider,{value:E},l.a.createElement(re.a.Provider,{value:u.behaviorNotificationStore},l.a.createElement(ne.Provider,{value:s},l.a.createElement(te.a.Provider,{value:n},l.a.createElement(me.b.Provider,{value:_},l.a.createElement(se.a.Provider,{value:u.contentIntersectionObserver},l.a.createElement(oe.a.Provider,{value:u.contentNav},l.a.createElement(ie.a.Provider,{value:u.contentDownPanelStore},l.a.createElement(ae.a,null,l.a.createElement(ee.a,Object.assign({},m)),l.a.createElement(v.Provider,{value:i},l.a.createElement($,null),l.a.createElement(le.a,null))))))))))))}},kSBX:function(e,t,a){}}]);
//# sourceMappingURL=component---src-page-templates-what-is-new-page-what-is-new-page-provider-tsx-186fedc9eb129e58a5c8.js.map