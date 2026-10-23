import{d as A,c as m,U as g}from"./auth-BQFZTqTF.js";import{a as k}from"./subscriptionService-CnS6GAXd.js";import{t as i}from"./i18n-DBMcqbrP.js";const l=e=>`https://images.unsplash.com/${e}?w=600&h=400&fit=crop&auto=format&q=80`,z=[{id:1,name:"Bio Brambory z Polabí",priceRegular:25,priceSubscription:18,category:"potatoes",isVegan:!0,image:l("photo-1518977676601-b53f82aba655"),gradient:"from-amber-100 to-yellow-100",farmer:"Ферма Ян",rating:4.8,reviews:234,unit:"кг",farmTag:"HOKI FARMA",farmId:"farm-1",isNew:!1},{id:2,name:"Bio Mrkev",priceRegular:18,priceSubscription:12,category:"vegetables",isVegan:!0,image:l("photo-1598170845058-32b9d6c5f1a7"),gradient:"from-orange-100 to-orange-200",farmer:"Ферма Ян",rating:4.6,reviews:178,unit:"кг",farmTag:"HOKI FARMA",farmId:"farm-1",isNew:!1},{id:3,name:"Bio Jablka Golden",priceRegular:30,priceSubscription:22,category:"fruits",isVegan:!0,image:l("photo-1560806887-1e4cd0b6cbd6"),gradient:"from-green-100 to-emerald-200",farmer:"Сад Мария",rating:4.7,reviews:267,unit:"кг",farmTag:"Farma Kopeček",farmId:"farm-2",isNew:!1},{id:4,name:"Bio Hrušky",priceRegular:35,priceSubscription:28,category:"fruits",isVegan:!0,image:l("photo-1514750150018-bd0e3a4f4f63"),gradient:"from-yellow-100 to-lime-100",farmer:"Сад Мария",rating:4.8,reviews:156,unit:"кг",farmTag:"Farma rodiny Němcovy",farmId:"farm-3",isNew:!0},{id:5,name:"Bio Jahody",priceRegular:65,priceSubscription:52,category:"berries",isVegan:!0,image:l("photo-1464967760563-b100d9f45d33"),gradient:"from-pink-100 to-rose-200",farmer:"Ягодный Рай",rating:4.9,reviews:167,unit:"500г",farmTag:"HOKI FARMA",farmId:"farm-1",isNew:!0},{id:6,name:"Bio Maliny",priceRegular:55,priceSubscription:45,category:"berries",isVegan:!0,image:l("photo-1577069861033-55d04cec4ef5"),gradient:"from-red-100 to-pink-100",farmer:"Ягодный Рай",rating:4.8,reviews:134,unit:"500г",farmTag:"HOKI FARMA",farmId:"farm-1",isNew:!1},{id:7,name:"Bio Rajčata",priceRegular:45,priceSubscription:35,category:"vegetables",isVegan:!0,image:l("photo-1546094097-3c1d0e2b6e0e"),gradient:"from-red-100 to-red-200",farmer:"Био Огород",rating:4.8,reviews:189,unit:"кг",farmTag:"BIO zelenina Uhříněves",isNew:!1},{id:8,name:"Bio Okurky",priceRegular:22,priceSubscription:15,category:"vegetables",isVegan:!0,image:l("photo-1449300363753-0ccb74eb3399"),gradient:"from-green-100 to-emerald-200",farmer:"Био Огород",rating:4.7,reviews:145,unit:"кг",farmTag:"Farma rodiny Němcovy",isNew:!1},{id:9,name:"Bio Salát",priceRegular:20,priceSubscription:15,category:"vegetables",isVegan:!0,image:l("photo-1622206151226-18ca2c9ab4a1"),gradient:"from-emerald-100 to-green-200",farmer:"Био Огород",rating:4.9,reviews:201,unit:"шт",farmTag:"HOKI FARMA",isNew:!0},{id:10,name:"Bio Petržel",priceRegular:15,priceSubscription:10,category:"herbs",isVegan:!0,image:l("photo-1464226184884-fa280b87c399"),gradient:"from-green-50 to-emerald-100",farmer:"Био Огород",rating:4.7,reviews:98,unit:"sv",farmTag:"Farma Kopeček",isNew:!1},{id:11,name:"Bio Cibule",priceRegular:16,priceSubscription:11,category:"potatoes",isVegan:!0,image:l("photo-1518977956812-cd3dbadae13d"),gradient:"from-amber-50 to-yellow-100",farmer:"Ферма Ян",rating:4.6,reviews:167,unit:"кг",farmTag:"BIO zelenina Uhříněves",isNew:!1},{id:12,name:"Bio Červená Řepa",priceRegular:22,priceSubscription:16,category:"vegetables",isVegan:!0,image:l("photo-1598170845058-32b9d6c5f1a7"),gradient:"from-purple-100 to-rose-100",farmer:"Ферма Ян",rating:4.8,reviews:123,unit:"кг",farmTag:"Farma rodiny Němcovy",isNew:!1},{id:13,name:"Bio Vejce M",priceRegular:45,priceSubscription:35,category:"eggs",isVegan:!1,image:l("photo-1582722872405-86c4d054b6a9"),gradient:"from-amber-100 to-yellow-100",farmer:"HOKI FARMA",rating:4.9,reviews:312,unit:"10ks",farmTag:"HOKI FARMA",isNew:!1},{id:14,name:"Bio Vejce L",priceRegular:52,priceSubscription:42,category:"eggs",isVegan:!1,image:l("photo-1569288062833-e74a4d0d7e63"),gradient:"from-amber-50 to-orange-100",farmer:"HOKI FARMA",rating:4.8,reviews:245,unit:"10ks",farmTag:"HOKI FARMA",isNew:!0},{id:15,name:"Hovězí maso",priceRegular:180,priceSubscription:145,category:"meat",isVegan:!1,image:l("photo-1603048297172-c92544798d5a"),gradient:"from-red-100 to-rose-200",farmer:"Farma rodiny Němcovy",rating:4.9,reviews:178,unit:"кг",farmTag:"Farma rodiny Němcovy",isNew:!1},{id:16,name:"Kuřecí prsa",priceRegular:95,priceSubscription:78,category:"meat",isVegan:!1,image:l("photo-1604503468506-a8da13d82791"),gradient:"from-orange-50 to-amber-100",farmer:"Farma rodiny Němcovy",rating:4.7,reviews:156,unit:"кг",farmTag:"Farma rodiny Němcovy",isNew:!1}];let b={hasSubscription:!1};function W(e={}){b={hasSubscription:!!e.hasSubscription}}function G(){return{...b}}function h(e){if(!e||typeof e!="object")return 0;const t=[e.priceSubscription,e.price,e.basePrice,e.priceRegular];for(const a of t){const r=Number(a);if(Number.isFinite(r)&&r>0)return Math.round(r)}for(const a of t){const r=Number(a);if(Number.isFinite(r)&&r>=0)return Math.round(r)}return 0}function B(e){if(!e||typeof e!="object")return 0;const t=Number(e.priceRegular);if(Number.isFinite(t)&&t>0)return Math.round(t);const a=h(e);return Math.round(a*1.2)||a}function O(e){const t=h(e),a=B(e);return b.hasSubscription?{price:t,compareAt:a>t?a:null,isMember:!0,locked:!1}:{price:a,compareAt:null,isMember:!1,locked:!0}}function J(e){const t=h(e),a=Number(e.basePrice),r=Number(e.priceRegular),s=Number.isFinite(a)&&a>0?Math.round(a):t,o=Number.isFinite(r)&&r>0?Math.round(r):Math.round(t*1.2)||t;return{...e,price:t,priceSubscription:t,basePrice:s,priceRegular:o}}function E(e){try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error(`Error reading from storage [${e}]:`,t),null}}function F(e,t){try{return localStorage.setItem(e,JSON.stringify(t)),!0}catch(a){return console.error(`Error writing to storage [${e}]:`,a),!1}}function L(e){return e&&typeof e.id=="number"&&typeof e.name=="string"&&typeof e.priceSubscription=="number"&&e.priceSubscription>=0}class P{constructor(){this.cart=E(A.CART)||[]}getCart(){return this.cart}getCount(){return this.cart.reduce((t,a)=>t+(a.quantity||1),0)}getTotalPrice(){return this.cart.reduce((t,a)=>t+a.priceSubscription*(a.quantity||1),0)}addItem(t){if(!L(t))return console.error("Invalid product:",t),!1;const a=this.cart.find(r=>r.id===t.id);return a?a.quantity=(a.quantity||1)+1:this.cart.push({...t,quantity:1}),this.saveCart(),!0}removeItem(t){const a=this.cart.length;return this.cart=this.cart.filter(r=>r.id!==t),this.cart.length<a?(this.saveCart(),!0):!1}updateQuantity(t,a){const r=this.cart.find(s=>s.id===t);return r?a<=0?this.removeItem(t):(r.quantity=a,this.saveCart(),!0):!1}clearCart(){this.cart=[],this.saveCart()}saveCart(){F(A.CART,this.cart)}}const D=new P;function p(e){return e==="kg"?i("units.kg"):i("units.pcs")}function H(e){if(!e||!String(e).startsWith("https://"))return e;try{const t=new URL(e);return(t.hostname.includes("unsplash.com")||t.hostname.includes("cloudinary.com"))&&(t.searchParams.set("w","400"),t.searchParams.set("h","300"),t.searchParams.set("fit","crop"),t.searchParams.set("auto","format"),t.searchParams.set("q","75")),t.toString()}catch{return e}}function q(e){var S;const t=document.body.classList.contains("arva-home"),a=document.createElement("article");a.className=t?"arva-product-card":"product-card bg-white rounded-2xl p-4 shadow-sm flex flex-col",a.setAttribute("role","listitem"),a.setAttribute("data-category",e.category),a.setAttribute("data-image",e.image),a.setAttribute("data-id",e.id);const r=e.isNew?'<span class="absolute top-2 left-2 text-white text-xs font-bold px-2 py-1 rounded-full" style="background: var(--color-forest-ink);">NEW</span>':"",s=O(e),o=s.price;Math.round(parseFloat(e.basePrice)||o);const n=s.isMember?`<p class="arva-product-card__member-badge">${i("products.memberBadge")}</p>`:`<p class="arva-product-card__member-badge">${i("products.subscriptionPriceLocked")}</p>`,d=s.compareAt?`<span style="text-decoration:line-through;opacity:0.55;margin-right:0.35rem;font-size:0.85em;">${s.compareAt} Kč</span>`:"",c=["from-green-100 to-green-200","from-orange-100 to-orange-200","from-red-100 to-red-200","from-purple-100 to-purple-200","from-blue-100 to-blue-200","from-yellow-100 to-yellow-200"],u={vegetables:"🥬",fruits:"🍎",berries:"🍓",herbs:"🌿",potatoes:"🥔",dairy:"🥛",meat:"🥩",default:"📦"},T=e.gradient||c[e.id%c.length]||c[0],v=e.image&&String(e.image).startsWith("https://"),y=e.image&&e.image.startsWith("data:image"),w=u[e.category]||u.default,$=Number(e.rating??0),x=Number(e.reviews??0),N=p(e.unit);if(t){const f=v||y,C=H(e.image),I=f?`<img src="${C}" alt="${e.name}" loading="lazy" decoding="async" width="400" height="300">`:`<span class="arva-product-card__emoji" aria-hidden="true">${w}</span>`,M=f?'<div class="arva-product-card__overlay" aria-hidden="true"></div>':"";return a.innerHTML=`
            <div class="arva-product-card__media${f?"":" arva-product-card__media--fallback"}">
                ${I}
                ${M}
                ${r}
            </div>
            <div class="arva-product-card__meta">
                <h3 class="arva-product-card__name">${e.name||i("products.defaultName")}</h3>
                <p class="arva-product-card__price">${d}${o} Kč/${N}</p>
                ${n}
                <div class="arva-product-card__rating">
                    <span class="arva-product-card__rating-value">${$.toFixed(1)}</span>
                    <span class="arva-product-card__rating-count">(${x})</span>
                </div>
                <button
                    onclick="window.addToCart(this)"
                    class="arva-btn-pill arva-btn-pill--white arva-product-card__btn"
                    aria-label="${i("products.addToCart")} ${e.name||i("products.defaultName")}"
                    data-product-id="${e.id}"
                    data-product-name="${e.name||i("products.defaultName")}"
                    data-product-price="${o}"
                    data-product-unit="${e.unit||"kg"}"
                >${s.locked?i("products.viewSubscriptionCta"):i("products.addToCart")}</button>
            </div>
        `,a}const R=s.isMember?i("products.memberBadge"):i("products.subscriptionPriceLocked"),_=s.compareAt?`<span class="text-gray-400 line-through text-xs">${s.compareAt} Kč/${p(e.unit)}</span>`:s.locked?`<span class="text-gray-500 text-xs">${i("products.subscriptionPriceLocked")}</span>`:"";return a.innerHTML=`
        <div class="h-36 bg-gradient-to-br ${T} rounded-2xl mb-4 flex items-center justify-center text-5xl relative overflow-hidden">
            ${v||y?`<img src="${e.image}" alt="${e.name}" style="width: 100%; height: 100%; object-fit: cover;">`:`${w}`}
            ${r}
        </div>

        <h3 class="font-bold text-gray-900 mb-1">${e.name||"Товар"}</h3>

        <div class="flex items-center space-x-1 mb-2">
            <span class="text-yellow-400" aria-hidden="true">⭐</span>
            <span class="font-semibold text-gray-800">${$.toFixed(1)}</span>
            <span class="text-gray-400 text-xs">(${x})</span>
        </div>

        <div class="flex flex-wrap gap-1 mb-3">
            <span class="tag-farm">🏡 ${((S=e.farm)==null?void 0:S.name)||"Ферма"}</span>
        </div>

        <div class="mb-3 flex-1">
            <div class="flex items-center space-x-2">
                <span class="font-bold text-xl" style="color: var(--color-forest-ink);">${o} Kč/${p(e.unit)}</span>
                <span class="price-badge">${R}</span>
            </div>
            <div class="flex items-center space-x-2 mt-1">
                ${_}
            </div>
        </div>

        <button
            onclick="window.addToCart(this)"
            class="w-full btn-accent py-2.5 flex items-center justify-center space-x-2 text-sm mt-auto"
            aria-label="Добавить ${e.name||"товар"} в корзину"
            data-product-id="${e.id}"
            data-product-name="${e.name||"Товар"}"
            data-product-price="${o}"
            data-product-unit="${e.unit||"kg"}"
        >
            <span aria-hidden="true">🛒</span>
            <span>${s.locked?i("products.viewSubscriptionCta"):i("products.addToCart")}</span>
        </button>
    `,a}function Q(e){const t=document.querySelector(m.PRODUCTS_GRID);if(!t)return;const a=document.getElementById("products-status");a&&(a.hidden=!0,a.innerHTML="");const r=document.body.classList.contains("arva-home");t.replaceChildren();const s=document.createDocumentFragment();e.forEach((n,d)=>{const c=q(n);r||(c.style.animationDelay=`${d*.05}s`,c.classList.add("animate-fade-in-up")),s.appendChild(c)}),t.appendChild(s);const o=document.querySelector(m.VISIBLE_COUNT);o&&(o.textContent=e.length)}function Y(e){const t=document.querySelector(m.CART_COUNT),a=document.querySelector(m.CART_COUNT_HEADER),r=document.querySelectorAll("[data-cart-count]"),s=document.querySelector(m.CART_TOTAL),o=document.querySelector(m.CART_ITEMS),n=e.count||"0";t&&(t.textContent=n),a&&(a.textContent=n),r.forEach(d=>{d.textContent=n}),s&&(s.textContent=`${e.total||0} Kč`),o&&e.items&&U(o,e.items)}function U(e,t){if(!t||t.length===0){e.innerHTML=`
            <div class="text-center text-gray-400 mt-20">
                <div class="text-6xl mb-4" aria-hidden="true">🛒</div>
                <p>${i("cart.empty")}</p>
                <p class="text-sm mt-2 opacity-80">${i("cart.emptyHint")}</p>
            </div>
        `;return}const a=r=>r==="kg"?i("units.kg"):i("units.pcs");e.innerHTML=t.map(r=>{const s=r.image&&String(r.image).startsWith("https://"),o=r.image&&r.image.startsWith("data:image"),n=r.gradient||"from-green-100 to-green-200",d=r.unit||"kg",c=r.priceSubscription??r.price??0;return`
        <div class="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
            <div class="w-16 h-16 bg-gradient-to-br ${n} rounded-lg flex items-center justify-center text-2xl flex-shrink-0 overflow-hidden">
                ${s||o?`<img src="${r.image}" alt="${r.name}" style="width: 100%; height: 100%; object-fit: cover;">`:`${r.image||"📦"}`}
            </div>
            <div class="flex-1 min-w-0">
                <h4 class="font-semibold text-gray-900 truncate">${r.name}</h4>
                <p class="text-sm text-gray-500">${c} Kč/${a(d)}</p>
                <p class="text-xs text-gray-400">${i("cart.memberPrice")}</p>
            </div>
            <div class="flex items-center gap-2">
                <button onclick="window.updateCartQuantity(${r.id}, -1)" class="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100" aria-label="Уменьшить количество">
                    <span aria-hidden="true">−</span>
                </button>
                <span class="font-medium text-gray-900 w-6 text-center">${r.quantity}</span>
                <button onclick="window.updateCartQuantity(${r.id}, 1)" class="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100" aria-label="Увеличить количество">
                    <span aria-hidden="true">+</span>
                </button>
            </div>
            <button onclick="window.removeFromCart(${r.id})" class="text-gray-400 hover:text-red-500 transition-colors" aria-label="Удалить товар">
                <span aria-hidden="true">×</span>
            </button>
        </div>
    `}).join("")}function X(e){const t=document.querySelectorAll(m.FILTER_BUTTONS),a=Array.from(t).find(r=>r.dataset.category===e);a&&k(Array.from(t),a)}function Z(e,t){const a=document.querySelector(m.AUTH_BUTTONS),r=document.querySelector(m.MOBILE_AUTH_BUTTONS);if(document.body.classList.contains("arva-home")){const n=document.getElementById("nav-touch");let d="";if(e&&t===g.BUYER){const c=e.fullname.split(" ")[0];n&&(n.textContent=c,n.href="member-dashboard.html",n.classList.add("arva-btn-touch--user")),d=`
                <a href="member-dashboard.html" class="arva-mobile-drawer__link">${c}</a>
                <button class="arva-mobile-drawer__link arva-mobile-drawer__link--button logout-btn">${i("nav.logOut")}</button>
            `,document.querySelectorAll("[data-farmer-entry]").forEach(u=>{u.setAttribute("href","register.html?role=farmer")})}else if(e&&t===g.FARMER){const c=e.fullname.split(" ")[0];n&&(n.textContent=c,n.href="farmer-dashboard.html",n.classList.add("arva-btn-touch--user")),d=`
                <a href="farmer-dashboard.html" class="arva-mobile-drawer__link">${c}</a>
                <button class="arva-mobile-drawer__link arva-mobile-drawer__link--button logout-btn">${i("nav.logOut")}</button>
            `,document.querySelectorAll("[data-farmer-entry]").forEach(u=>{u.setAttribute("href","farmer-dashboard.html")})}else n&&(n.textContent=i("nav.getInTouch"),n.href="register.html",n.classList.remove("arva-btn-touch--user"),document.querySelectorAll("[data-farmer-entry]").forEach(c=>{c.setAttribute("href","register.html?role=farmer")}));a&&(a.innerHTML=""),r&&(r.innerHTML=d);return}let o="";e&&t===g.BUYER?o=`
            <div class="flex items-center gap-2 sm:gap-3">
                <a href="member-dashboard.html" class="header-btn role-badge">
                    <span aria-hidden="true">🥕</span>
                    <span class="hidden sm:inline">${e.fullname.split(" ")[0]}</span>
                </a>
                <button class="header-btn btn-logout logout-btn" title="${i("nav.logOut")}" aria-label="${i("nav.logOut")}">
                    <span aria-hidden="true">↪️</span>
                    <span class="hidden sm:inline">${i("nav.logOut")}</span>
                </button>
            </div>
        `:e&&t===g.FARMER?o=`
            <div class="flex items-center gap-2 sm:gap-3">
                <a href="farmer-dashboard.html" class="header-btn role-badge">
                    <span aria-hidden="true">👨‍🌾</span>
                    <span class="hidden sm:inline">${e.fullname.split(" ")[0]}</span>
                </a>
                <button class="header-btn btn-logout logout-btn" title="${i("nav.logOut")}" aria-label="${i("nav.logOut")}">
                    <span aria-hidden="true">↪️</span>
                    <span class="hidden sm:inline">${i("nav.logOut")}</span>
                </button>
            </div>
        `:o=`
            <a href="register.html" class="pu-btn pu-btn--ghost">
                <span>${i("auth.login")}</span>
            </a>
        `,a&&(a.innerHTML=o),r&&(r.innerHTML=o.replace("hidden sm:inline",""))}export{Y as a,X as b,D as c,O as d,G as g,J as n,z as p,Q as r,W as s,Z as u};
