import"./styles-DX17wzzM.js";/* empty css               *//* empty css                  *//* empty css                       */import{a as L,c as d}from"./auth-CQpDYLA_.js";const v={analyticsDays:30},w={submitHandler:null};document.addEventListener("DOMContentLoaded",()=>{z()});async function z(){try{const e=await L.getUser(),t=await L.getUserRole();if(console.log("Admin Dashboard - User:",e,"Role:",t),!e||t!=="admin"){console.error("Access denied - not an admin"),window.location.href="index.html";return}R(e),await b(),await F(),await I(),await B(),await S(),await H(),await k(),await u(),await q(),_(),ee()}catch(e){console.error("Admin dashboard initialization error:",e),window.location.href="index.html"}}function R(e){document.getElementById("admin-user-name").textContent=e.fullname||"Админ",document.getElementById("sidebar-admin-name").textContent=e.fullname||"Админ",e.avatar&&(document.getElementById("admin-avatar").innerHTML=`<img src="${e.avatar}" alt="${e.fullname}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`)}async function b(){try{const[e,t,n,a]=await Promise.all([d.request("admin/users"),d.request("admin/farms"),d.request("admin/products"),d.request("admin/orders")]),o=e.data||[],r=t.data||[],s=n.data||[],i=(a.data||[]).filter(m=>m.paymentStatus==="paid").reduce((m,p)=>m+parseFloat(p.platformFee||0),0),c={revenue:Math.round(i),users:o.length,farms:r.length,products:s.length};document.getElementById("stat-revenue").textContent=`${c.revenue.toLocaleString()} Kč`,document.getElementById("stat-users").textContent=c.users,document.getElementById("stat-farms").textContent=c.farms,document.getElementById("stat-products").textContent=c.products,console.log("✅ Dashboard stats loaded:",c)}catch(e){console.error("Load stats error:",e),y("recent-activity","Не удалось загрузить обзорные данные")}}async function I(){try{const t=(await d.request("admin/users")).data||[],n=document.getElementById("users-table-body");if(t.length===0){n.innerHTML='<tr><td colspan="5" style="text-align:center;padding:2rem;color:#6b7280;">Пользователей нет</td></tr>';return}n.innerHTML=t.map(a=>`
            <tr>
                <td>
                    <div style="display:flex;align-items:center;gap:0.75rem;">
                        <div class="user-avatar">${a.fullname.charAt(0).toUpperCase()}</div>
                        <div>
                            <div style="font-weight:600;">${a.fullname}</div>
                            <div style="font-size:0.75rem;color:#6b7280;">ID: ${a.id.slice(0,8)}...</div>
                        </div>
                    </div>
                </td>
                <td>${a.email}</td>
                <td>
                    <span class="status-badge ${G(a.role)}">
                        ${W(a.role)}
                    </span>
                </td>
                <td>${h(a.createdAt)}</td>
                <td>
                    <button class="btn-action edit" onclick="editUser('${a.id}')">✏️</button>
                    <button class="btn-action delete" onclick="deleteUser('${a.id}')">🗑️</button>
                </td>
            </tr>
        `).join(""),console.log("✅ Users loaded:",t.length)}catch(e){console.error("Load users error:",e),x("users-table-body",5,"Не удалось загрузить пользователей")}}async function B(){try{const t=(await d.request("admin/farms")).data||[],n=document.getElementById("farms-table-body");if(t.length===0){n.innerHTML='<tr><td colspan="5" style="text-align:center;padding:2rem;color:#6b7280;">Ферм нет</td></tr>';return}n.innerHTML=t.map(a=>{var o,r;return`
            <tr>
                <td>
                    <div style="display:flex;align-items:center;gap:0.75rem;">
                        ${Z(a)}
                        <div>
                            <div style="font-weight:600;">${a.name}</div>
                            <div style="font-size:0.75rem;color:#6b7280;">${((o=a.description)==null?void 0:o.slice(0,50))||""}...</div>
                        </div>
                    </div>
                </td>
                <td>${((r=a.user)==null?void 0:r.fullname)||"Неизвестно"}</td>
                <td>${a.location||"Чехия"}</td>
                <td>⭐ ${Number(a.rating??0).toFixed(1)}</td>
                <td>
                    <button class="btn-action edit" onclick="editFarm('${a.id}')">✏️</button>
                    <button class="btn-action delete" onclick="deleteFarm('${a.id}')">🗑️</button>
                </td>
            </tr>
        `}).join(""),console.log("✅ Farms loaded:",t.length)}catch(e){console.error("Load farms error:",e),x("farms-table-body",5,"Не удалось загрузить фермы")}}async function S(){try{const t=(await d.request("admin/products")).data||[],n=document.getElementById("products-table-body");if(t.length===0){n.innerHTML='<tr><td colspan="6" style="text-align:center;padding:2rem;color:#6b7280;">Товаров нет</td></tr>';return}n.innerHTML=t.map(a=>{var o,r;return`
            <tr>
                <td>
                    <div style="display:flex;align-items:center;gap:0.75rem;">
                        <span style="font-size:1.5rem;">${Q(a.category)}</span>
                        <div>
                            <div style="font-weight:600;">${a.name}</div>
                            <div style="font-size:0.75rem;color:#6b7280;">${((o=a.description)==null?void 0:o.slice(0,30))||""}</div>
                        </div>
                    </div>
                </td>
                <td>${((r=a.farm)==null?void 0:r.name)||"Неизвестно"}</td>
                <td style="font-weight:600;">${a.price} Kč</td>
                <td>${X(a.category)}</td>
                <td>
                    <span class="status-badge ${a.available?"success":"danger"}">
                        ${a.available?"✓ Активен":"✗ Скрыт"}
                    </span>
                </td>
                <td>
                    <button class="btn-action edit" onclick="editProduct('${a.id}')">✏️</button>
                    <button class="btn-action delete" onclick="deleteProduct('${a.id}')">🗑️</button>
                </td>
            </tr>
        `}).join(""),console.log("✅ Products loaded:",t.length)}catch(e){console.error("Load products error:",e),x("products-table-body",6,"Не удалось загрузить товары")}}async function H(){try{const t=(await d.request("admin/orders")).data||[];U(t)}catch(e){console.error("Load orders error:",e),x("orders-table-body",6,"Не удалось загрузить заказы")}}function U(e){const t=document.getElementById("orders-table-body");if(e.length===0){t.innerHTML='<tr><td colspan="6" style="text-align:center;padding:2rem;color:#6b7280;">Заказов нет</td></tr>';return}t.innerHTML=e.map(n=>{var a,o,r;return`
        <tr>
            <td style="font-weight:600;">#${n.id}</td>
            <td>
                <div style="display:flex;align-items:center;gap:0.5rem;">
                    <div class="user-avatar" style="width:32px;height:32px;font-size:0.875rem;">${(((a=n.user)==null?void 0:a.fullname)||"U").charAt(0).toUpperCase()}</div>
                    <div>
                        <div style="font-weight:600;">${((o=n.user)==null?void 0:o.fullname)||"Пользователь"}</div>
                        <div style="font-size:0.75rem;color:#6b7280;">${((r=n.user)==null?void 0:r.email)||""}</div>
                    </div>
                </div>
            </td>
            <td style="font-weight:600;">${Math.round(parseFloat(n.total))} Kč</td>
            <td style="font-size:0.75rem;color:#6b7280;">
                <div>Платёж: <span style="color:${n.paymentStatus==="paid"?"#10b981":"#f59e0b"}">${n.paymentStatus||"unpaid"}</span></div>
                <div>Статус: ${n.status}</div>
            </td>
            <td>${h(n.deliveryDate)}</td>
            <td>
                <button class="btn-action edit" onclick="editOrder('${n.id}')">✏️</button>
            </td>
        </tr>
    `}).join("")}async function k(){try{const t=(await d.request("admin/reviews")).data||[];j(t)}catch(e){console.error("Load reviews error:",e),y("reviews-list","Не удалось загрузить отзывы")}}function j(e){const t=document.getElementById("reviews-list");if(!e.length){t.innerHTML='<div style="padding:1rem;color:#6b7280;">Отзывов пока нет</div>';return}t.innerHTML=e.map(n=>{var a,o,r;return`
        <div style="padding:1rem;border-bottom:1px solid rgba(132,169,60,0.05);display:flex;justify-content:space-between;align-items:start;">
            <div>
                <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem;">
                    <span style="color:#fbbf24;">${"⭐".repeat(n.rating)}</span>
                    <span style="font-weight:600;">${((a=n.user)==null?void 0:a.fullname)||"Пользователь"}</span>
                    <span style="color:#6b7280;font-size:0.875rem;">о ${((o=n.farm)==null?void 0:o.name)||((r=n.product)==null?void 0:r.name)||"объекте"}</span>
                </div>
                <div style="color:#374151;margin-bottom:0.5rem;">${n.comment||"Без комментария"}</div>
                <div style="font-size:0.75rem;color:#6b7280;">${h(n.createdAt)}</div>
            </div>
            <div style="display:flex;gap:0.5rem;">
                ${n.approved?"":`<button class="btn-action" style="background:rgba(16,185,129,0.1);color:#10b981;" onclick="approveReview('${n.id}')">✓</button>`}
                <button class="btn-action delete" onclick="deleteReview('${n.id}')">🗑️</button>
            </div>
        </div>
    `}).join("")}async function u(){try{const t=(await d.request("admin/logs")).data||[];O(t),N(t)}catch(e){console.error("Load logs error:",e),y("logs-list","Не удалось загрузить логи")}}async function q(e=v.analyticsDays){try{v.analyticsDays=Number(e)||30;const n=(await d.request(`admin/analytics?days=${v.analyticsDays}`)).data||{};K(n),J(n),V(n.topProducts||[])}catch(t){console.error("Load analytics error:",t),y("overview-visits-chart","Не удалось загрузить график посещаемости"),y("analytics-main-chart","Не удалось загрузить детальную аналитику"),y("analytics-top-products","Не удалось загрузить топ товаров")}}async function F(){var t,n,a;const e=document.getElementById("admin-health-status");if(e)try{const r=(await d.request("admin/health")).data||{},s=r.checks||{},l=((t=s.database)==null?void 0:t.ok)===!0,i=((n=s.integrations)==null?void 0:n.cloudinaryConfigured)===!0,c=((a=s.integrations)==null?void 0:a.comgateConfigured)===!0,m=Array.isArray(r.issues)?r.issues:[],p=r.status==="ok"?"#16a34a":"#f59e0b",$=l?"#16a34a":"#ef4444";e.innerHTML=`
            <div style="display:grid;gap:8px;">
                <div style="font-weight:600;color:${p};">
                    ${r.status==="ok"?"OK":"DEGRADED"} • ${r.environment||"unknown"}
                </div>
                <div style="display:flex;gap:12px;flex-wrap:wrap;">
                    <span style="color:${$};">DB: ${l?"connected":"error"}</span>
                    <span style="color:${i?"#16a34a":"#f59e0b"};">Cloudinary: ${i?"configured":"incomplete"}</span>
                    <span style="color:${c?"#16a34a":"#f59e0b"};">Comgate: ${c?"configured":"incomplete"}</span>
                </div>
                <div style="font-size:12px;color:#6b7280;">
                    requestId: ${r.requestId||"n/a"} • response: ${r.responseTimeMs||0}ms
                </div>
                ${m.length?`<div style="font-size:12px;color:#b45309;">Issues: ${m.join(", ")}</div>`:""}
            </div>
        `}catch(o){console.error("Load admin health error:",o),y("admin-health-status","Не удалось загрузить состояние системы")}}function O(e){const t=document.getElementById("logs-list");if(!e.length){t.innerHTML='<div style="padding:1rem;color:#6b7280;">Логи пока пусты</div>';return}t.innerHTML=e.map(n=>{var a;return`
        <div style="padding:0.75rem;border-bottom:1px solid rgba(132,169,60,0.05);font-size:0.875rem;">
            <span style="font-weight:600;color:#84A93C;">${(n.action||"action").toUpperCase()}</span>
            <span style="color:#374151;"> ${n.entityType||"entity"}</span>
            <span style="color:#6b7280;"> пользователем </span>
            <span style="font-weight:500;color:#374151;">${((a=n.admin)==null?void 0:a.fullname)||"System"}</span>
            <span style="color:#9ca3af;margin-left:0.5rem;">${h(n.createdAt)}</span>
        </div>
    `}).join("")}function N(e){const t=document.getElementById("recent-activity");if(!t)return;if(!e.length){t.innerHTML='<div style="padding:1rem;color:#6b7280;">Пока нет действий</div>';return}const n=e.slice(0,8);t.innerHTML=n.map(a=>{var o;return`
        <div style="padding:0.75rem;border-bottom:1px solid rgba(132,169,60,0.05);font-size:0.875rem;">
            <span style="font-weight:600;color:#84A93C;">${(a.action||"").toUpperCase()}</span>
            <span style="color:#374151;"> ${a.entityType||""}</span>
            <span style="color:#6b7280;">(${a.entityId})</span>
            <div style="font-size:0.75rem;color:#9ca3af;margin-top:0.25rem;">
                ${((o=a.admin)==null?void 0:o.fullname)||"System"} • ${h(a.createdAt)}
            </div>
        </div>
    `}).join("")}function K(e){var r,s;const t=document.getElementById("overview-visits-chart");if(!t)return;const n=((r=e==null?void 0:e.series)==null?void 0:r.visits)||[];if(!n.length){t.textContent="Нет данных по посещаемости";return}const a=Math.max(...n.map(l=>l.value),1),o=n.slice(-14).map(l=>`
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
                <div style="width:14px;height:${Math.max(8,Math.round(l.value/a*80))}px;border-radius:6px;background:linear-gradient(180deg,#84A93C,#6B8A31);"></div>
                <span style="font-size:10px;color:#6b7280;">${l.date.slice(8)}</span>
            </div>
        `).join("");t.innerHTML=`
        <div style="width:100%;">
            <div style="font-size:0.875rem;color:#374151;margin-bottom:0.75rem;">
                Всего визитов за ${v.analyticsDays} дн.: <strong>${((s=e==null?void 0:e.totals)==null?void 0:s.visits)||0}</strong>
            </div>
            <div style="display:flex;align-items:flex-end;gap:8px;justify-content:center;min-height:120px;">
                ${o}
            </div>
        </div>
    `}function J(e){var s,l,i,c,m,p,$;const t=document.getElementById("analytics-main-chart");if(!t)return;const n=((s=e==null?void 0:e.series)==null?void 0:s.revenue)||[],a=((l=e==null?void 0:e.series)==null?void 0:l.orders)||[],o=((i=e==null?void 0:e.series)==null?void 0:i.newUsers)||[];if(!n.length){t.textContent="Нет данных для аналитики";return}const r=n.map((M,C)=>{const P=a[C]||{value:0},D=o[C]||{value:0};return`
            <tr>
                <td style="padding:6px 8px;border-bottom:1px solid #f0f0f0;">${Y(M.date)}</td>
                <td style="padding:6px 8px;border-bottom:1px solid #f0f0f0;">${M.value} Kč</td>
                <td style="padding:6px 8px;border-bottom:1px solid #f0f0f0;">${P.value}</td>
                <td style="padding:6px 8px;border-bottom:1px solid #f0f0f0;">${D.value}</td>
            </tr>
        `}).join("");t.innerHTML=`
        <div style="width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;">
            <div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-bottom:12px;">
                <div style="background:#f8faf5;border-radius:10px;padding:10px;">
                    <div style="font-size:12px;color:#6b7280;">Выручка платформы</div>
                    <div style="font-weight:700;">${((c=e==null?void 0:e.totals)==null?void 0:c.revenue)||0} Kč</div>
                </div>
                <div style="background:#f8faf5;border-radius:10px;padding:10px;">
                    <div style="font-size:12px;color:#6b7280;">Оплаченные заказы</div>
                    <div style="font-weight:700;">${((m=e==null?void 0:e.totals)==null?void 0:m.paidOrders)||0}</div>
                </div>
                <div style="background:#f8faf5;border-radius:10px;padding:10px;">
                    <div style="font-size:12px;color:#6b7280;">Новые пользователи</div>
                    <div style="font-weight:700;">${((p=e==null?void 0:e.totals)==null?void 0:p.newUsers)||0}</div>
                </div>
                <div style="background:#f8faf5;border-radius:10px;padding:10px;">
                    <div style="font-size:12px;color:#6b7280;">Успешные платежи</div>
                    <div style="font-weight:700;">${(($=e==null?void 0:e.totals)==null?void 0:$.successfulPayments)||0}</div>
                </div>
            </div>
            <div style="overflow:auto;background:#fff;border-radius:10px;border:1px solid #edf0e6;">
                <table style="width:100%;font-size:13px;border-collapse:collapse;">
                    <thead>
                        <tr style="background:#f8faf5;text-align:left;">
                            <th style="padding:8px;">Дата</th>
                            <th style="padding:8px;">Доход</th>
                            <th style="padding:8px;">Заказы</th>
                            <th style="padding:8px;">Новые пользователи</th>
                        </tr>
                    </thead>
                    <tbody>${r}</tbody>
                </table>
            </div>
        </div>
    `}function V(e){const t=document.getElementById("analytics-top-products");if(t){if(!e.length){t.innerHTML='<div style="color:#6b7280;">Нет данных по товарам за выбранный период</div>';return}t.innerHTML=`
        <div class="content-card" style="margin:0;padding:1rem;">
            <div class="card-title" style="font-size:1rem;margin-bottom:0.75rem;">🔥 Топ товаров по выручке</div>
            <div style="display:grid;gap:8px;">
                ${e.map((n,a)=>`
                    <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 10px;background:#f8faf5;border-radius:8px;">
                        <div>
                            <strong>${a+1}. ${n.name}</strong>
                            <div style="font-size:12px;color:#6b7280;">Продано: ${n.quantity} ед.</div>
                        </div>
                        <div style="font-weight:700;">${n.revenue} Kč</div>
                    </div>
                `).join("")}
            </div>
        </div>
    `}}function G(e){return{admin:"danger",farmer:"info",buyer:"success"}[e]||"info"}function W(e){return{admin:"👨‍💼 Админ",farmer:"👨‍🌾 Фермер",buyer:"🛒 Покупатель"}[e]||e}function Q(e){return{vegetables:"🥬",fruits:"🍎",berries:"🍓",herbs:"🌿",potatoes:"🥔",eggs:"🥚",meat:"🥩"}[e]||"📦"}function X(e){return{vegetables:"Овощи",fruits:"Фрукты",berries:"Ягоды",herbs:"Зелень",potatoes:"Корнеплоды",eggs:"Яйца",meat:"Мясо"}[e]||e}function h(e){return new Date(e).toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"})}function Y(e){return new Date(e).toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit"})}function x(e,t,n){const a=document.getElementById(e);a&&(a.innerHTML=`<tr><td colspan="${t}" style="text-align:center;padding:2rem;color:#ef4444;">${n}</td></tr>`)}function y(e,t){const n=document.getElementById(e);n&&(n.innerHTML=`<div style="padding:1rem;color:#ef4444;">${t}</div>`)}function Z(e){const t=e.icon||"🏡";return typeof t=="string"&&t.startsWith("http")?`<img src="${t}" alt="${e.name}" style="width:40px;height:40px;border-radius:50%;object-fit:cover;">`:`<span style="font-size:1.5rem;">${t}</span>`}function _(){E("user-search","users-table-body"),E("farm-search","farms-table-body"),E("product-search","products-table-body")}function E(e,t){const n=document.getElementById(e),a=document.getElementById(t);!n||!a||n.addEventListener("input",()=>{const o=n.value.trim().toLowerCase();Array.from(a.querySelectorAll("tr")).forEach(s=>{const l=s.textContent.toLowerCase();s.style.display=!o||l.includes(o)?"":"none"})})}function ee(){const e=document.getElementById("analytics-days");!e||e.dataset.bound==="true"||(e.dataset.bound="true",e.value=String(v.analyticsDays),e.addEventListener("change",()=>{q(e.value)}))}function f(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function T({title:e,fields:t,submitLabel:n="Сохранить",onSubmit:a}){const o=document.getElementById("admin-edit-modal"),r=document.getElementById("admin-edit-title"),s=document.getElementById("admin-edit-fields"),l=document.getElementById("admin-edit-submit");if(!o||!r||!s||!l){alert("Редактор недоступен");return}r.textContent=e,l.textContent=n,s.innerHTML=t.map(i=>{const c=`admin-edit-${i.name}`;if(i.type==="select"){const m=(i.options||[]).map(p=>`
                <option value="${f(p.value)}" ${String(p.value)===String(i.value)?"selected":""}>
                    ${f(p.label)}
                </option>
            `).join("");return`
                <label class="form-label" for="${c}" style="margin-bottom:0.35rem;">${f(i.label)}</label>
                <select id="${c}" class="form-input" data-field-name="${f(i.name)}" data-field-type="select" style="margin-bottom:0.9rem;">
                    ${m}
                </select>
            `}return`
            <label class="form-label" for="${c}" style="margin-bottom:0.35rem;">${f(i.label)}</label>
            <input
                id="${c}"
                type="${i.type||"text"}"
                class="form-input"
                data-field-name="${f(i.name)}"
                data-field-type="${i.type||"text"}"
                value="${f(i.value??"")}"
                ${i.min!==void 0?`min="${i.min}"`:""}
                ${i.max!==void 0?`max="${i.max}"`:""}
                ${i.step!==void 0?`step="${i.step}"`:""}
                style="margin-bottom:0.9rem;"
            >
        `}).join(""),w.submitHandler=a,o.classList.remove("hidden")}function g(){const e=document.getElementById("admin-edit-modal");e&&e.classList.add("hidden"),w.submitHandler=null}function A(){const e=Array.from(document.querySelectorAll("#admin-edit-fields [data-field-name]")),t={};return e.forEach(n=>{const a=n.dataset.fieldName,o=n.dataset.fieldType,r=n.value;if(o==="number"){if(r==="")return;const s=Number(r);if(Number.isNaN(s))throw new Error(`Поле "${a}" должно быть числом`);t[a]=s;return}if(o==="checkbox"){t[a]=n.checked;return}t[a]=r.trim()}),t}window.showSection=function(e){document.querySelectorAll(".admin-section").forEach(t=>{t.classList.remove("active")}),document.querySelectorAll(".admin-nav-item").forEach(t=>{t.classList.remove("active")}),document.getElementById(e).classList.add("active"),document.querySelector(`[data-section="${e}"]`).classList.add("active"),console.log("Section changed to:",e)};window.editUser=function(e){d.request("admin/users").then(t=>{const n=(t.data||[]).find(a=>a.id===e);if(!n){alert("Пользователь не найден");return}T({title:`Редактирование пользователя: ${n.fullname||n.email}`,fields:[{name:"fullname",label:"Имя",type:"text",value:n.fullname||""},{name:"role",label:"Роль",type:"select",value:n.role||"buyer",options:[{value:"buyer",label:"Покупатель"},{value:"farmer",label:"Фермер"},{value:"admin",label:"Админ"}]},{name:"phone",label:"Телефон",type:"text",value:n.phone||""},{name:"address",label:"Адрес",type:"text",value:n.address||""}],onSubmit:async()=>{const a=A();await d.request(`admin/users/${e}`,{method:"PATCH",body:JSON.stringify(a)}),g(),await Promise.all([I(),u()])}})}).catch(t=>alert(`Ошибка загрузки пользователя: ${t.message}`))};window.deleteUser=function(e){confirm("Удалить пользователя? Это действие необратимо.")&&d.request(`admin/users/${e}`,{method:"DELETE"}).then(()=>{I(),b(),u()}).catch(t=>alert(`Ошибка удаления пользователя: ${t.message}`))};window.editFarm=function(e){d.request("admin/farms").then(t=>{const n=(t.data||[]).find(a=>a.id===e);if(!n){alert("Ферма не найдена");return}T({title:`Редактирование фермы: ${n.name||e}`,fields:[{name:"name",label:"Название",type:"text",value:n.name||""},{name:"location",label:"Локация",type:"text",value:n.location||""},{name:"description",label:"Описание",type:"text",value:n.description||""},{name:"website",label:"Сайт",type:"text",value:n.website||""},{name:"icon",label:"Иконка (emoji или URL)",type:"text",value:n.icon||""}],onSubmit:async()=>{const a=A();await d.request(`admin/farms/${e}`,{method:"PATCH",body:JSON.stringify(a)}),g(),await Promise.all([B(),u()])}})}).catch(t=>alert(`Ошибка загрузки фермы: ${t.message}`))};window.deleteFarm=function(e){confirm("Удалить ферму? Это действие удалит связанные товары.")&&d.request(`admin/farms/${e}`,{method:"DELETE"}).then(()=>{B(),b(),u()}).catch(t=>alert(`Ошибка удаления фермы: ${t.message}`))};window.editProduct=function(e){d.request("admin/products").then(t=>{const n=(t.data||[]).find(a=>Number(a.id)===Number(e));if(!n){alert("Товар не найден");return}T({title:`Редактирование товара: ${n.name||e}`,fields:[{name:"name",label:"Название",type:"text",value:n.name||""},{name:"category",label:"Категория",type:"text",value:n.category||""},{name:"stock",label:"Остаток",type:"number",value:Number(n.stock||0),min:0,step:1},{name:"basePrice",label:"Базовая цена",type:"number",value:Number(n.basePrice||n.price||0),min:0,step:.01},{name:"price",label:"Цена для покупателя",type:"number",value:Number(n.price||0),min:0,step:.01},{name:"available",label:"Статус",type:"select",value:String(!!n.available),options:[{value:"true",label:"Активен"},{value:"false",label:"Скрыт"}]}],onSubmit:async()=>{const a=A();a.available=a.available==="true",await d.request(`admin/products/${e}`,{method:"PATCH",body:JSON.stringify(a)}),g(),await Promise.all([S(),u()])}})}).catch(t=>alert(`Ошибка загрузки товара: ${t.message}`))};window.deleteProduct=function(e){confirm("Удалить товар?")&&d.request(`admin/products/${e}`,{method:"DELETE"}).then(()=>{S(),b(),u()}).catch(t=>alert(`Ошибка удаления товара: ${t.message}`))};window.editOrder=function(e){const t=prompt("Новый статус заказа (pending, processing, delivered, cancelled):","processing");if(!t)return;const n=prompt("Новый статус оплаты (unpaid, paid, refunded):","paid");d.request(`admin/orders/${e}/status`,{method:"PATCH",body:JSON.stringify({status:t,paymentStatus:n})}).then(()=>{H(),u()}).catch(a=>alert(`Ошибка обновления заказа: ${a.message}`))};window.approveReview=function(e){d.request(`admin/reviews/${e}/approve`,{method:"PATCH"}).then(()=>{k(),u()}).catch(t=>alert(`Ошибка модерации отзыва: ${t.message}`))};window.deleteReview=function(e){confirm("Удалить отзыв?")&&d.request(`admin/reviews/${e}`,{method:"DELETE"}).then(()=>{k(),u()}).catch(t=>alert(`Ошибка удаления отзыва: ${t.message}`))};window.logout=async function(){try{await L.logout(),window.location.href="index.html"}catch(e){console.error("Logout error:",e),window.location.href="index.html"}};async function te(){try{const t=(await d.request("settings")).data||{},n=document.getElementById("markup-percent"),a=document.getElementById("platform-fee-rate");n&&(n.value=parseFloat(t.markupPercent||15)),a&&(a.value=parseFloat(t.platformFeeRate||5))}catch(e){console.error("Load platform settings error:",e)}}window.savePlatformSettings=async function(){var e,t;try{const n=parseFloat(((e=document.getElementById("markup-percent"))==null?void 0:e.value)||15),a=parseFloat(((t=document.getElementById("platform-fee-rate"))==null?void 0:t.value)||5),o=await d.request("settings",{method:"PUT",body:JSON.stringify({markupPercent:n,platformFeeRate:a})});alert("✅ Настройки сохранены!"),console.log("Settings saved:",o.data),await Promise.all([b(),u()])}catch(n){console.error("Save platform settings error:",n),alert("❌ Ошибка: "+n.message)}};document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("save-settings-btn"),t=document.getElementById("admin-edit-cancel"),n=document.getElementById("admin-edit-close"),a=document.getElementById("admin-edit-form"),o=document.getElementById("admin-edit-modal");e&&e.addEventListener("click",window.savePlatformSettings),t&&t.addEventListener("click",g),n&&n.addEventListener("click",g),o&&o.addEventListener("click",s=>{s.target===o&&g()}),a&&a.addEventListener("submit",async s=>{if(s.preventDefault(),!!w.submitHandler)try{await w.submitHandler()}catch(l){alert(`Ошибка сохранения: ${l.message}`)}});const r=window.showSection;window.showSection=function(s){r.call(this,s),s==="settings"&&te()}});
