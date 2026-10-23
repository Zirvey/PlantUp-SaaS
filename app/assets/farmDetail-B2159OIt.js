import"./modulepreload-polyfill-B5Qt9EMX.js";import{i as R,a as A,t as a}from"./mobile-nav-D-62_0C6.js";/* empty css               *//* empty css                  */import{a as p}from"./auth-DknWqdUn.js";import{s as D,a as L,c as g,n as B,d as H,g as j,p as U}from"./ui-DHz_Wx-B.js";import{f as P}from"./farms-KeF2EHQe.js";import{s as E}from"./subscriptionService-WhpzBnZx.js";import{a as T,b as _,c as N}from"./loadingStates-C7Iu2bq4.js";import{t as M}from"./toast-CPO50Uqk.js";import{i as S}from"./icons-DrlJFkwI.js";R();A();const h="real",w="http://localhost:3000";let k=null,$=[],y="";document.addEventListener("DOMContentLoaded",()=>{O()});async function O(){try{const t=new URLSearchParams(window.location.search).get("id");if(console.log("🔍 Farm ID from URL:",t),console.log("🔍 Full URL:",window.location.href),console.log("🔍 Search:",window.location.search),!t){C("missingId");return}const o=await q(t);if(console.log("🏡 Farm loaded:",o),!o){C("notFound");return}k=o.id||t,G(o);let i=!1;try{const n=await p.getUser(),s=await p.getUserRole();if(n&&s==="buyer"){const c=await E.getSubscription();i=E.isActive(c)}}catch(n){console.warn("Farm detail subscription lookup failed; locking member prices",n),i=!1}D({hasSubscription:i}),T("products-grid",{rows:4});const r=await W(t);$=r||[],console.log("📦 Products for farm:",r),J(r),await z(k),await ee(k),await V(),L({count:g.getCount(),total:g.getTotalPrice(),items:g.getCart()}),Q()}catch(e){console.error("Farm detail initialization error:",e),F(a("farmDetail.loadError")||"Nepodařilo se načíst data farmy")}}function x(e){const t=P.find(o=>o.id===e)||null;return t?{...t,location:String(t.location||"").replace(/^📍\s*/,""),owner:t.name,productsCount:Number(t.productsCount||0),reviewCount:Number(t.reviews||0)}:null}async function q(e){try{if(h==="real"){const t=await fetch(`${w}/api/farms/${e}`);return t.ok?await t.json():(console.warn("Load farm API error; falling back to mock",t.status),x(e))}return x(e)}catch(t){return console.error("Load farm error; falling back to mock",t),x(e)}}function I(e){const t=P.find(o=>o.id===e);return t?U.filter(o=>o.farmTag===t.name).map(o=>B({id:o.id,name:o.name,description:"",priceSubscription:o.priceSubscription,priceRegular:o.priceRegular,unit:o.unit||"kg",image:o.image,category:o.category,available:!0,farmId:e})):[]}async function W(e){try{if(console.log("🔍 Loading products for farm:",e),h==="real"){const t=await fetch(`${w}/api/products?farmId=${e}`);if(console.log("📦 Products API response status:",t.status),t.ok){const o=await t.json();return console.log("📦 Products loaded:",o.length),(o||[]).map(i=>B(i))}return console.warn("Load farm products API error; falling back to mock",t.status),I(e)}return I(e)}catch(t){return console.error("Load products error; falling back to mock",t),I(e)}}function K(e){const t=["from-green-100 to-green-200","from-orange-100 to-orange-200","from-red-100 to-red-200","from-purple-100 to-purple-200","from-blue-100 to-blue-200","from-yellow-100 to-yellow-200"];return t[e%t.length]||t[0]}function Z(e){const t={vegetables:"🥬",fruits:"🍎",berries:"🍓",herbs:"🌿",potatoes:"🥔",dairy:"🥛",meat:"🥩",default:"📦"};return t[e]||t.default}function G(e){var c,d;const t=document.getElementById("farm-icon");e!=null&&e.icon&&e.icon.startsWith("https://")?(t.style.backgroundImage=`url(${e.icon})`,t.style.backgroundSize="cover",t.style.backgroundPosition="center",t.textContent=""):(t.style.backgroundImage="",e!=null&&e.icon&&!String(e.icon).includes("<")?t.textContent=e.icon:t.querySelector("svg")||(t.innerHTML=S("home"))),document.getElementById("farm-name").textContent=e.name||"Farma",document.getElementById("farm-description").textContent=e.description||"",document.getElementById("farm-owner").textContent=e.owner||((c=e.user)==null?void 0:c.fullname)||"Provozovatel",document.getElementById("farm-location").textContent=e.location||"Česko",document.getElementById("farm-rating-value").textContent=(e.rating??0).toFixed(1);const o=e.productsCount||((d=e._count)==null?void 0:d.products)||0;document.getElementById("farm-products-count").textContent=`${o} produktů`;const i=e.reviewCount||0,r=document.getElementById("farm-reviews-count");r&&(r.textContent=`(${i} recenzí)`);const n=e.rating??0,s="★".repeat(Math.floor(n))+"☆".repeat(5-Math.floor(n));document.getElementById("farm-stars").textContent=s}function J(e){const t=document.getElementById("products-grid");if(!e||e.length===0){t.innerHTML=`
            <div class="no-products">
                <div class="empty-state">
                    <div class="empty-icon">${S("sprout")}</div>
                    <p class="empty-state__title">${a("farmDetail.productsSoon")}</p>
                    <p class="empty-state__text">${a("farmDetail.productsSoonHint")}</p>
                </div>
            </div>
        `;return}t.innerHTML=e.map(o=>{const r=(o.unit||"kg")==="kg"?a("units.kg"):a("units.pcs"),n=o.image&&o.image.startsWith("https://res.cloudinary.com"),s=o.image&&o.image.startsWith("data:image"),c=n||s,d=c?`<img src="${o.image}" alt="${o.name}" style="width: 100%; height: 100%; object-fit: cover;">`:Z(o.category);return`
        <div class="product-card">
            ${c?`<div class="product-image" style="width: 100%; height: 200px; overflow: hidden; border-radius: 12px; margin-bottom: 1rem;">${d}</div>`:`<div class="product-image" style="background: linear-gradient(135deg, ${K(o.id)}), #f0f0f0; display: flex; align-items: center; justify-content: center; font-size: 3rem; width: 100%; height: 200px; border-radius: 12px; margin-bottom: 1rem;">${d}</div>`}
            <h3 class="product-name">${o.name}</h3>
            ${o.description?`<p style="color: var(--text-on-light-muted); font-size: 0.875rem; margin-bottom: 0.5rem;">${o.description}</p>`:""}
            ${(()=>{const l=H(o),m=l.isMember?a("products.memberBadge"):a("products.subscriptionPriceLocked"),u=l.compareAt?`<span style="text-decoration:line-through;opacity:0.55;font-size:0.8rem;margin-right:0.35rem;">${l.compareAt} Kč</span>`:"",v=l.locked?a("products.viewSubscriptionCta"):a("products.addToCart");return`
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
                <span class="product-price">${u}${l.price} Kč</span>
                <span class="product-unit">/ ${r}</span>
            </div>
            <div style="font-size:0.75rem;color:var(--text-on-light-muted);margin-bottom:0.75rem;">${m}</div>
            <button class="btn-add-to-cart" onclick="addToCartFromFarm(${o.id}, '${String(o.name).replace(/'/g,"\\'")}', ${l.price}, ${o.farmId?`'${o.farmId}'`:"null"})">
                ${v}
            </button>`})()}
        </div>
    `}).join("")}window.addToCartFromFarm=function(e,t,o,i=null){if(!j().hasSubscription){M.warning(a("products.subscriptionPriceLocked"),{duration:4e3}),window.location.href="index.html#membership";return}const r={id:e,name:t,price:o,priceSubscription:o,farmId:i||void 0,image:"",quantity:1};if(g.addItem(r)){L({count:g.getCount(),total:g.getTotalPrice(),items:g.getCart()});const n=event.target,s=n.innerHTML;n.innerHTML=`<span>✓</span><span>${a("products.added")}</span>`,setTimeout(()=>{n.innerHTML=s},1500)}};async function V(){const e=await p.getUser(),t=await p.getUserRole(),o=document.getElementById("auth-buttons");if(!o)return;const i=document.getElementById("mobile-auth-buttons");if(e){const r=t==="farmer"?"farmer-dashboard.html":"member-dashboard.html";o.innerHTML=`
            <a href="${r}" class="pu-btn pu-btn--forest">${a("dash.cabinet")}</a>
            <button type="button" onclick="logout()" class="pu-btn pu-btn--ghost">${a("nav.logOut")}</button>
        `,i&&(i.innerHTML=`
                <a href="${r}" class="arva-mobile-drawer__link">${a("dash.cabinet")}</a>
                <button type="button" onclick="logout()" class="arva-mobile-drawer__link arva-mobile-drawer__link--button">${a("nav.logOut")}</button>
            `)}else o.innerHTML=`
            <a href="register.html" class="pu-btn pu-btn--ghost">${a("auth.login")}</a>
        `,i&&(i.innerHTML=`
                <a href="register.html" class="arva-btn-touch">${a("auth.login")}</a>
            `)}function Q(){const e=document.getElementById("mobile-menu-btn"),t=document.getElementById("mobile-menu");e&&t&&e.addEventListener("click",()=>{const o=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",!o),t.classList.toggle("hidden")})}function b(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function X(e){try{return new Date(e).toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"})}catch{return""}}function Y(e){var i;const t=document.getElementById("reviews-filter-bar");if(!t)return;const o=[{value:"",label:"Все отзывы"},...$.map(r=>({value:String(r.id),label:r.name}))];t.innerHTML=`
        <label style="font-size:0.875rem;color:var(--text-on-light-muted);display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;">
            Фильтр по товару
            <select id="reviews-product-filter" style="padding:0.45rem 0.65rem;border:1px solid rgba(7,80,63,0.25);border-radius:0.65rem;background:white;">
                ${o.map(r=>`
                    <option value="${b(r.value)}" ${String(y)===String(r.value)?"selected":""}>
                        ${b(r.label)}
                    </option>
                `).join("")}
            </select>
        </label>
    `,(i=document.getElementById("reviews-product-filter"))==null||i.addEventListener("change",r=>{y=r.target.value||"",z(e)})}async function z(e){const t=document.getElementById("reviews-list");if(t){Y(e),T("reviews-list",{rows:3});try{let o=[];if(h==="real"){const r=y?`?productId=${encodeURIComponent(y)}`:"",n=await fetch(`${w}/api/reviews/farm/${e}${r}`);if(!n.ok)throw new Error(`HTTP ${n.status}`);o=await n.json()}if(!o.length){_("reviews-list",{icon:"💬",title:y?a("farmDetail.noReviewsProduct"):a("farmDetail.noReviews"),text:a("farmDetail.noReviewsHint")});return}t.innerHTML=o.map(r=>{var f,l,m;const n=b(((f=r.user)==null?void 0:f.fullname)||"Партнёр"),s=b(r.comment||""),c=((l=r.product)==null?void 0:l.name)||((m=$.find(u=>Number(u.id)===Number(r.productId)))==null?void 0:m.name)||"",d="★".repeat(r.rating||0)+"☆".repeat(5-(r.rating||0));return`
                <div class="review-item" style="padding:1rem 0;border-bottom:1px solid rgba(7,80,63,0.12);">
                    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;margin-bottom:0.5rem;">
                        <div>
                            <div style="font-weight:600;color:#1a1a1a;">${n}</div>
                            <div style="font-size:0.8rem;color:var(--text-on-light-muted);">${X(r.createdAt)}</div>
                            ${c?`<div style="font-size:0.8rem;color:var(--color-forest-ink);margin-top:0.25rem;">${b(c)}</div>`:""}
                        </div>
                        <div style="color:var(--color-forest-ink);letter-spacing:0.05em;">${d}</div>
                    </div>
                    ${s?`<p style="color:#374151;margin:0;line-height:1.5;">${s}</p>`:""}
                </div>
            `}).join("");const i=document.getElementById("farm-reviews-count");i&&(i.textContent=a("farmDetail.reviewsCount").replace("{n}",String(o.length)))}catch(o){console.error("Load farm reviews error:",o),N("reviews-list",a("farmDetail.reviewsLoadError"))}}}async function ee(e){const t=document.getElementById("review-form-container");if(!t)return;const o=await p.getUser(),i=await p.getUserRole();if(!o){t.innerHTML=`
            <p style="margin:0;color:var(--text-on-light-muted);font-size:0.95rem;">
                ${a("farmDetail.loginToReview")}
                <a href="register.html" style="color:var(--color-forest-ink);font-weight:600;">${a("farmDetail.loginLink")}</a>
            </p>
        `;return}if(i!=="buyer"){t.innerHTML=`
            <p style="margin:0;color:var(--text-on-light-muted);font-size:0.95rem;">
                ${a("farmDetail.reviewsBuyersOnly")}
            </p>
        `;return}const r=['<option value="">Вся ферма / поставка</option>',...$.map(s=>`<option value="${s.id}">${b(s.name)}</option>`)].join("");t.innerHTML=`
        <form id="farm-review-form" style="display:grid;gap:0.75rem;">
            <p style="margin:0;font-size:0.875rem;color:var(--text-on-light-muted);">
                Оцените сотрудничество с фермой или конкретный товар после поставки. Отзыв появится после модерации.
            </p>
            <label style="font-weight:600;color:#1a1a1a;font-size:0.9rem;">
                Товар (необязательно)
                <select id="review-product" style="display:block;width:100%;margin-top:0.35rem;padding:0.6rem 0.75rem;border:1px solid rgba(7,80,63,0.25);border-radius:0.75rem;background:white;">
                    ${r}
                </select>
            </label>
            <label style="font-weight:600;color:#1a1a1a;font-size:0.9rem;">
                Оценка
                <select id="review-rating" required style="display:block;width:100%;margin-top:0.35rem;padding:0.6rem 0.75rem;border:1px solid rgba(7,80,63,0.25);border-radius:0.75rem;background:white;">
                    <option value="5">5 — Отлично</option>
                    <option value="4">4 — Хорошо</option>
                    <option value="3">3 — Нормально</option>
                    <option value="2">2 — Слабо</option>
                    <option value="1">1 — Плохо</option>
                </select>
            </label>
            <label style="font-weight:600;color:#1a1a1a;font-size:0.9rem;">
                Комментарий
                <textarea id="review-comment" rows="3" placeholder="Качество поставки, сроки, коммуникация…"
                    style="display:block;width:100%;margin-top:0.35rem;padding:0.6rem 0.75rem;border:1px solid rgba(7,80,63,0.25);border-radius:0.75rem;background:white;resize:vertical;"></textarea>
            </label>
            <div id="review-form-message" style="display:none;font-size:0.875rem;"></div>
            <button type="submit" id="review-submit-btn"
                style="justify-self:start;padding:0.65rem 1.25rem;background:var(--color-forest-ink);color:white;border:none;border-radius:999px;font-weight:600;cursor:pointer;">
                Отправить отзыв
            </button>
        </form>
    `;const n=document.getElementById("farm-review-form");n==null||n.addEventListener("submit",s=>{s.preventDefault(),te(e)})}async function te(e){const t=document.getElementById("review-rating"),o=document.getElementById("review-comment"),i=document.getElementById("review-product"),r=document.getElementById("review-form-message"),n=document.getElementById("review-submit-btn"),s=Number((t==null?void 0:t.value)||0),c=((o==null?void 0:o.value)||"").trim(),d=(i==null?void 0:i.value)||"",f=d?Number(d):void 0;if(!s||s<1||s>5){r&&(r.style.display="block",r.style.color="#ef4444",r.textContent="Выберите оценку от 1 до 5");return}n&&(n.disabled=!0,n.textContent="Отправка…");try{const l=sessionStorage.getItem("biomarket_token");if(!l)throw new Error("Требуется авторизация");const m={farmId:e,rating:s,comment:c};f&&(m.productId=f);const u=await fetch(`${w}/api/reviews`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${l}`},body:JSON.stringify(m)}),v=await u.json().catch(()=>({}));if(!u.ok)throw new Error(v.error||v.message||`HTTP ${u.status}`);r&&(r.style.display="block",r.style.color="var(--color-forest-ink)",r.textContent="Отзыв на модерации. После проверки он появится на странице фермы."),o&&(o.value=""),n&&(n.disabled=!1,n.textContent="Отправить отзыв")}catch(l){console.error("Submit farm review error:",l),r&&(r.style.display="block",r.style.color="#ef4444",r.textContent=l.message||"Не удалось отправить отзыв"),n&&(n.disabled=!1,n.textContent="Отправить отзыв")}}window.logout=async function(){try{await p.logout(),window.location.href="index.html"}catch(e){console.error("Logout error:",e),window.location.href="index.html"}};function F(e){M.error(e,{duration:5e3,closable:!0})}function C(e){const t=e==="missingId"?"Chybí ID farmy":"Farma nenalezena",o=e==="missingId"?"Otevřete farmu z výlohy nebo ze seznamu farmářů.":"Tato farma v katalogu není. Zkuste jinou z výlohy.",i=document.querySelector(".pu-farm-detail")||document.querySelector("main")||document.body;i&&(i.innerHTML=`
            <div class="pu-farm-missing" role="alert" style="max-width:36rem;margin:3rem auto;padding:2rem;text-align:center;">
                <h1 style="font-family:var(--font-display);font-size:1.75rem;margin-bottom:0.75rem;">${t}</h1>
                <p style="color:var(--text-on-light-muted);margin-bottom:1.5rem;">${o}</p>
                <a href="index.html#farmers" class="pu-btn pu-btn--forest">Zpět k farmářům</a>
            </div>
        `),F(t)}
