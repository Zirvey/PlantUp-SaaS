import"./modulepreload-polyfill-B5Qt9EMX.js";import{i as Z}from"./i18n-DBMcqbrP.js";/* empty css               *//* empty css                  *//* empty css                       */import{a as z,_ as K,b as d}from"./auth-BQFZTqTF.js";import{s as C,a as V}from"./loadingStates-C7Iu2bq4.js";import{t as c}from"./toast-CPO50Uqk.js";import"./icons-DrlJFkwI.js";Z();const I={analyticsDays:30},q={submitHandler:null,fieldDefs:[]};document.addEventListener("DOMContentLoaded",()=>{Q()});async function Q(){try{const e=await z.getUser(),t=await z.getUserRole();console.log("Admin Dashboard - User:",e,"Role:",t);const{isOpenBrowse:n}=await K(async()=>{const{isOpenBrowse:a}=await import("./openBrowse-Du5PvDpT.js");return{isOpenBrowse:a}},[],import.meta.url);if(!n()&&(!e||t!=="admin")){console.error("Access denied - not an admin"),window.location.href="index.html";return}X(e||{fullname:"Preview Admin",role:"admin"}),await b(),await ne(),await A(),await M(),await D(),await N(),await B(),await j(),await f(),await G(),fe(),ye()}catch(e){console.error("Admin dashboard initialization error:",e);const{isOpenBrowse:t}=await K(async()=>{const{isOpenBrowse:n}=await import("./openBrowse-Du5PvDpT.js");return{isOpenBrowse:n}},[],import.meta.url);t()||(window.location.href="index.html")}}function X(e){document.getElementById("admin-user-name").textContent=e.fullname||"Админ",document.getElementById("sidebar-admin-name").textContent=e.fullname||"Админ",e.avatar&&(document.getElementById("admin-avatar").innerHTML=`<img src="${e.avatar}" alt="${e.fullname}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`)}async function b(){try{const[e,t,n,r,a]=await Promise.all([d.request("admin/users"),d.request("admin/farms"),d.request("admin/products"),d.request("admin/orders"),d.request("admin/reviews").catch(()=>({data:[]}))]),s=e.data||[],o=t.data||[],i=n.data||[],l=r.data||[],u=a.data||[],p=l.filter(v=>v.paymentStatus==="paid").reduce((v,W)=>v+parseFloat(W.platformFee||0),0),m=l.filter(v=>v.paymentStatus!=="paid").length,y=s.filter(v=>v.role==="buyer").length,P=s.filter(v=>v.role==="farmer").length,k=i.filter(v=>v.available).length,T=u.filter(v=>!v.approved).length,x={revenue:Math.round(p),users:s.length,farms:o.length,products:i.length};document.getElementById("stat-revenue").textContent=`${x.revenue.toLocaleString()} Kč`,document.getElementById("stat-users").textContent=x.users,document.getElementById("stat-farms").textContent=x.farms,document.getElementById("stat-products").textContent=x.products;const U=document.getElementById("stat-revenue-sub"),F=document.getElementById("stat-users-sub"),_=document.getElementById("stat-farms-sub"),J=document.getElementById("stat-products-sub");U&&(U.textContent=m?`Неоплаченных заказов: ${m}`:"Комиссия с оплаченных заказов"),F&&(F.textContent=`Покупатели: ${y} · Фермеры: ${P}`),_&&(_.textContent=T?`Отзывов на модерации: ${T}`:`${o.length} ферм на платформе`),J&&(J.textContent=`Активных: ${k}`),console.log("✅ Dashboard stats loaded:",x)}catch(e){console.error("Load stats error:",e),h("recent-activity","Не удалось загрузить обзорные данные")}}async function A(){C("users-table-body",5);try{const t=(await d.request("admin/users")).data||[],n=document.getElementById("users-table-body");if(t.length===0){n.innerHTML='<tr><td colspan="5" style="text-align:center;padding:2rem;color:var(--text-on-light-muted);">Пользователей нет</td></tr>';return}n.innerHTML=t.map(r=>`
            <tr>
                <td>
                    <div style="display:flex;align-items:center;gap:0.75rem;">
                        <div class="user-avatar">${r.fullname.charAt(0).toUpperCase()}</div>
                        <div>
                            <div style="font-weight:600;">${r.fullname}</div>
                            <div style="font-size:0.75rem;color:var(--text-on-light-muted);">ID: ${r.id.slice(0,8)}...</div>
                        </div>
                    </div>
                </td>
                <td>${r.email}</td>
                <td>
                    <span class="status-badge ${de(r.role)}">
                        ${le(r.role)}
                    </span>
                </td>
                <td>${L(r.createdAt)}</td>
                <td>
                    <button class="btn-action edit" onclick="editUser('${r.id}')">✏️</button>
                    <button class="btn-action delete" onclick="deleteUser('${r.id}')">🗑️</button>
                </td>
            </tr>
        `).join(""),console.log("✅ Users loaded:",t.length)}catch(e){console.error("Load users error:",e),O("users-table-body",5,"Не удалось загрузить пользователей")}}async function M(){C("farms-table-body",5);try{const t=(await d.request("admin/farms")).data||[],n=document.getElementById("farms-table-body");if(t.length===0){n.innerHTML='<tr><td colspan="5" style="text-align:center;padding:2rem;color:var(--text-on-light-muted);">Ферм нет</td></tr>';return}n.innerHTML=t.map(r=>{var a,s;return`
            <tr>
                <td>
                    <div style="display:flex;align-items:center;gap:0.75rem;">
                        ${pe(r)}
                        <div>
                            <div style="font-weight:600;">${r.name}</div>
                            <div style="font-size:0.75rem;color:var(--text-on-light-muted);">${((a=r.description)==null?void 0:a.slice(0,50))||""}...</div>
                        </div>
                    </div>
                </td>
                <td>${((s=r.user)==null?void 0:s.fullname)||"Неизвестно"}</td>
                <td>${r.location||"Чехия"}</td>
                <td>⭐ ${Number(r.rating??0).toFixed(1)}</td>
                <td>
                    <button class="btn-action edit" onclick="editFarm('${r.id}')">✏️</button>
                    <button class="btn-action delete" onclick="deleteFarm('${r.id}')">🗑️</button>
                </td>
            </tr>
        `}).join(""),console.log("✅ Farms loaded:",t.length)}catch(e){console.error("Load farms error:",e),O("farms-table-body",5,"Не удалось загрузить фермы")}}async function D(){C("products-table-body",6);try{const t=(await d.request("admin/products")).data||[],n=document.getElementById("products-table-body");if(t.length===0){n.innerHTML='<tr><td colspan="6" style="text-align:center;padding:2rem;color:var(--text-on-light-muted);">Товаров нет</td></tr>';return}n.innerHTML=t.map(r=>{var a,s;return`
            <tr>
                <td>
                    <div style="display:flex;align-items:center;gap:0.75rem;">
                        <span style="font-size:1.5rem;">${ce(r.category)}</span>
                        <div>
                            <div style="font-weight:600;">${r.name}</div>
                            <div style="font-size:0.75rem;color:var(--text-on-light-muted);">${((a=r.description)==null?void 0:a.slice(0,30))||""}</div>
                        </div>
                    </div>
                </td>
                <td>${((s=r.farm)==null?void 0:s.name)||"Неизвестно"}</td>
                <td style="font-weight:600;">${r.price} Kč</td>
                <td>${ue(r.category)}</td>
                <td>
                    <span class="status-badge ${r.available?"success":"danger"}">
                        ${r.available?"✓ Активен":"✗ Скрыт"}
                    </span>
                </td>
                <td>
                    <button class="btn-action edit" onclick="editProduct('${r.id}')">✏️</button>
                    <button class="btn-action delete" onclick="deleteProduct('${r.id}')">🗑️</button>
                </td>
            </tr>
        `}).join(""),console.log("✅ Products loaded:",t.length)}catch(e){console.error("Load products error:",e),O("products-table-body",6,"Не удалось загрузить товары")}}async function N(){C("orders-table-body",6);try{const t=(await d.request("admin/orders")).data||[];Y(t)}catch(e){console.error("Load orders error:",e),O("orders-table-body",6,"Не удалось загрузить заказы")}}function Y(e){const t=document.getElementById("orders-table-body");if(e.length===0){t.innerHTML='<tr><td colspan="6" style="text-align:center;padding:2rem;color:var(--text-on-light-muted);">Заказов нет</td></tr>';return}t.innerHTML=e.map(n=>{var r,a,s;return`
        <tr>
            <td style="font-weight:600;">#${n.id}</td>
            <td>
                <div style="display:flex;align-items:center;gap:0.5rem;">
                    <div class="user-avatar" style="width:32px;height:32px;font-size:0.875rem;">${(((r=n.user)==null?void 0:r.fullname)||"U").charAt(0).toUpperCase()}</div>
                    <div>
                        <div style="font-weight:600;">${((a=n.user)==null?void 0:a.fullname)||"Пользователь"}</div>
                        <div style="font-size:0.75rem;color:var(--text-on-light-muted);">${((s=n.user)==null?void 0:s.email)||""}</div>
                    </div>
                </div>
            </td>
            <td style="font-weight:600;">${Math.round(parseFloat(n.total))} Kč</td>
            <td style="font-size:0.75rem;color:var(--text-on-light-muted);">
                <div>Платёж: <span style="color:${n.paymentStatus==="paid"?"#10b981":"#f59e0b"}">${n.paymentStatus||"unpaid"}</span></div>
                <div>Статус: ${n.status}</div>
            </td>
            <td>${L(n.deliveryDate)}</td>
            <td>
                <button class="btn-action edit" onclick="editOrder('${n.id}')">✏️</button>
            </td>
        </tr>
    `}).join("")}async function B(){V("payouts-list",{rows:3});try{const e=await d.request("payouts/admin/all"),t=Array.isArray(e.data)?e.data:[];ee(t)}catch(e){console.error("Load payouts error:",e),h("payouts-list","Не удалось загрузить выплаты")}}window.loadPayouts=B;function ee(e){const t=document.getElementById("payouts-list");if(!t)return;if(!e.length){t.innerHTML='<div style="padding:1rem;color:var(--text-on-light-muted);">Заявок на выплату пока нет</div>';return}const n={pending:"Ожидает",processing:"В обработке",paid:"Выплачено",failed:"Отклонено"};t.innerHTML=e.map(r=>{var p,m,y;const a=(p=r.farmer)==null?void 0:p.farm,s=Math.round(parseFloat(r.amount||0)),o=(a==null?void 0:a.bankAccount)||"—",i=(a==null?void 0:a.name)||"Ферма",l=(a==null?void 0:a.balance)!=null?`${Math.round(parseFloat(a.balance))} Kč`:"—",u=r.status==="pending"||r.status==="processing";return`
        <div style="padding:1rem;border-bottom:1px solid rgba(7,80,63,0.08);display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;flex-wrap:wrap;">
            <div>
                <div style="font-weight:600;margin-bottom:0.25rem;">${s} ${r.currency||"CZK"} · ${i}</div>
                <div style="font-size:0.875rem;color:var(--text-on-light-muted);">
                    ${((m=r.farmer)==null?void 0:m.fullname)||"Фермер"} · ${((y=r.farmer)==null?void 0:y.email)||""}
                </div>
                <div style="font-size:0.8rem;margin-top:0.35rem;">Счёт: <strong>${o}</strong> · Баланс фермы: ${l}</div>
                <div style="font-size:0.75rem;color:var(--text-on-light-muted);margin-top:0.25rem;">
                    ${L(r.createdAt)} · ${n[r.status]||r.status}
                    ${r.bankTransferRef?` · ref: ${r.bankTransferRef}`:""}
                </div>
            </div>
            ${u?`
            <div style="display:flex;gap:0.5rem;">
                <button type="button" class="btn-action" style="background:rgba(16,185,129,0.12);color:#059669;padding:0.4rem 0.75rem;" onclick="approvePayout(${r.id})">Одобрить</button>
                <button type="button" class="btn-action delete" style="padding:0.4rem 0.75rem;" onclick="rejectPayout(${r.id})">Отклонить</button>
            </div>`:""}
        </div>`}).join("")}window.approvePayout=async function(e){const t=window.prompt("Комментарий к переводу (необязательно):","")??"";try{await d.request("payouts/admin/approve",{method:"POST",body:JSON.stringify({payoutId:Number(e),transferNote:t.trim()||void 0})}),c.success("Выплата одобрена"),await B()}catch(n){c.error(n.message||"Не удалось одобрить выплату")}};window.rejectPayout=async function(e){const t=window.prompt("Причина отклонения:","");if(t==null||!String(t).trim()){c.warning("Укажите причину отклонения");return}try{await d.request("payouts/admin/reject",{method:"POST",body:JSON.stringify({payoutId:Number(e),reason:String(t).trim()})}),c.info("Заявка отклонена"),await B()}catch(n){c.error(n.message||"Не удалось отклонить выплату")}};async function j(){V("reviews-list",{rows:3});try{const t=(await d.request("admin/reviews")).data||[];te(t)}catch(e){console.error("Load reviews error:",e),h("reviews-list","Не удалось загрузить отзывы")}}function te(e){const t=document.getElementById("reviews-list");if(!e.length){t.innerHTML='<div style="padding:1rem;color:var(--text-on-light-muted);">Отзывов пока нет</div>';return}t.innerHTML=e.map(n=>{var r,a,s;return`
        <div style="padding:1rem;border-bottom:1px solid rgba(7,80,63,0.05);display:flex;justify-content:space-between;align-items:start;">
            <div>
                <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem;flex-wrap:wrap;">
                    <span style="color:#fbbf24;">${"⭐".repeat(n.rating)}</span>
                    <span style="font-weight:600;">${((r=n.user)==null?void 0:r.fullname)||"Пользователь"}</span>
                    <span style="color:var(--text-on-light-muted);font-size:0.875rem;">о ${((a=n.farm)==null?void 0:a.name)||((s=n.product)==null?void 0:s.name)||"объекте"}</span>
                    ${n.approved?'<span style="font-size:0.75rem;color:#10b981;">Одобрен</span>':'<span style="font-size:0.75rem;color:#f59e0b;font-weight:600;">На модерации</span>'}
                </div>
                <div style="color:#374151;margin-bottom:0.5rem;">${n.comment||"Без комментария"}</div>
                <div style="font-size:0.75rem;color:var(--text-on-light-muted);">${L(n.createdAt)}</div>
            </div>
            <div style="display:flex;gap:0.5rem;">
                ${n.approved?"":`<button class="btn-action" style="background:rgba(16,185,129,0.1);color:#10b981;" onclick="approveReview('${n.id}')">✓</button>`}
                <button class="btn-action delete" onclick="deleteReview('${n.id}')">🗑️</button>
            </div>
        </div>
    `}).join("")}async function f(){try{const t=(await d.request("admin/logs")).data||[];re(t),ae(t)}catch(e){console.error("Load logs error:",e),h("logs-list","Не удалось загрузить логи")}}async function G(e=I.analyticsDays){try{I.analyticsDays=Number(e)||30;const n=(await d.request(`admin/analytics?days=${I.analyticsDays}`)).data||{};oe(n),se(n),ie(n.topProducts||[])}catch(t){console.error("Load analytics error:",t),h("overview-visits-chart","Не удалось загрузить график посещаемости"),h("analytics-main-chart","Не удалось загрузить детальную аналитику"),h("analytics-top-products","Не удалось загрузить топ товаров")}}async function ne(){var t,n,r;const e=document.getElementById("admin-health-status");if(e)try{const s=(await d.request("admin/health")).data||{},o=s.checks||{},i=((t=o.database)==null?void 0:t.ok)===!0,l=((n=o.integrations)==null?void 0:n.cloudinaryConfigured)===!0,u=((r=o.integrations)==null?void 0:r.comgateConfigured)===!0,p=Array.isArray(s.issues)?s.issues:[],m=s.status==="ok"?"#16a34a":"#f59e0b",y=i?"#16a34a":"#ef4444";e.innerHTML=`
            <div style="display:grid;gap:8px;">
                <div style="font-weight:600;color:${m};">
                    ${s.status==="ok"?"OK":"DEGRADED"} • ${s.environment||"unknown"}
                </div>
                <div style="display:flex;gap:12px;flex-wrap:wrap;">
                    <span style="color:${y};">DB: ${i?"connected":"error"}</span>
                    <span style="color:${l?"#16a34a":"#f59e0b"};">Cloudinary: ${l?"configured":"incomplete"}</span>
                    <span style="color:${u?"#16a34a":"#f59e0b"};">Comgate: ${u?"configured":"incomplete"}</span>
                </div>
                <div style="font-size:12px;color:var(--text-on-light-muted);">
                    requestId: ${s.requestId||"n/a"} • response: ${s.responseTimeMs||0}ms
                </div>
                ${p.length?`<div style="font-size:12px;color:#b45309;">Issues: ${p.join(", ")}</div>`:""}
            </div>
        `}catch(a){console.error("Load admin health error:",a),h("admin-health-status","Не удалось загрузить состояние системы")}}function re(e){const t=document.getElementById("logs-list");if(!e.length){t.innerHTML='<div style="padding:1rem;color:var(--text-on-light-muted);">Логи пока пусты</div>';return}t.innerHTML=e.map(n=>{var r;return`
        <div style="padding:0.75rem;border-bottom:1px solid rgba(7,80,63,0.05);font-size:0.875rem;">
            <span style="font-weight:600;color:var(--color-forest-ink);">${(n.action||"action").toUpperCase()}</span>
            <span style="color:#374151;"> ${n.entityType||"entity"}</span>
            <span style="color:var(--text-on-light-muted);"> пользователем </span>
            <span style="font-weight:500;color:#374151;">${((r=n.admin)==null?void 0:r.fullname)||"System"}</span>
            <span style="color:#9ca3af;margin-left:0.5rem;">${L(n.createdAt)}</span>
        </div>
    `}).join("")}function ae(e){const t=document.getElementById("recent-activity");if(!t)return;if(!e.length){t.innerHTML='<div style="padding:1rem;color:var(--text-on-light-muted);">Пока нет действий</div>';return}const n=e.slice(0,8);t.innerHTML=n.map(r=>{var a;return`
        <div style="padding:0.75rem;border-bottom:1px solid rgba(7,80,63,0.05);font-size:0.875rem;">
            <span style="font-weight:600;color:var(--color-forest-ink);">${(r.action||"").toUpperCase()}</span>
            <span style="color:#374151;"> ${r.entityType||""}</span>
            <span style="color:var(--text-on-light-muted);">(${r.entityId})</span>
            <div style="font-size:0.75rem;color:#9ca3af;margin-top:0.25rem;">
                ${((a=r.admin)==null?void 0:a.fullname)||"System"} • ${L(r.createdAt)}
            </div>
        </div>
    `}).join("")}function oe(e){var s,o;const t=document.getElementById("overview-visits-chart");if(!t)return;const n=((s=e==null?void 0:e.series)==null?void 0:s.visits)||[];if(!n.length){t.textContent="Нет данных по посещаемости";return}const r=Math.max(...n.map(i=>i.value),1),a=n.slice(-14).map(i=>`
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
                <div style="width:14px;height:${Math.max(8,Math.round(i.value/r*80))}px;border-radius:6px;background:linear-gradient(180deg,var(--color-forest-ink),#054a3a);"></div>
                <span style="font-size:10px;color:var(--text-on-light-muted);">${i.date.slice(8)}</span>
            </div>
        `).join("");t.innerHTML=`
        <div style="width:100%;">
            <div style="font-size:0.875rem;color:#374151;margin-bottom:0.75rem;">
                Всего визитов за ${I.analyticsDays} дн.: <strong>${((o=e==null?void 0:e.totals)==null?void 0:o.visits)||0}</strong>
            </div>
            <div style="display:flex;align-items:flex-end;gap:8px;justify-content:center;min-height:120px;">
                ${a}
            </div>
        </div>
    `}function se(e){var o,i,l,u,p,m,y;const t=document.getElementById("analytics-main-chart");if(!t)return;const n=((o=e==null?void 0:e.series)==null?void 0:o.revenue)||[],r=((i=e==null?void 0:e.series)==null?void 0:i.orders)||[],a=((l=e==null?void 0:e.series)==null?void 0:l.newUsers)||[];if(!n.length){t.textContent="Нет данных для аналитики";return}const s=n.map((P,k)=>{const T=r[k]||{value:0},x=a[k]||{value:0};return`
            <tr>
                <td style="padding:6px 8px;border-bottom:1px solid #f0f0f0;">${me(P.date)}</td>
                <td style="padding:6px 8px;border-bottom:1px solid #f0f0f0;">${P.value} Kč</td>
                <td style="padding:6px 8px;border-bottom:1px solid #f0f0f0;">${T.value}</td>
                <td style="padding:6px 8px;border-bottom:1px solid #f0f0f0;">${x.value}</td>
            </tr>
        `}).join("");t.innerHTML=`
        <div style="width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;">
            <div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-bottom:12px;">
                <div style="background:#f8faf5;border-radius:10px;padding:10px;">
                    <div style="font-size:12px;color:var(--text-on-light-muted);">Выручка платформы</div>
                    <div style="font-weight:700;">${((u=e==null?void 0:e.totals)==null?void 0:u.revenue)||0} Kč</div>
                </div>
                <div style="background:#f8faf5;border-radius:10px;padding:10px;">
                    <div style="font-size:12px;color:var(--text-on-light-muted);">Оплаченные заказы</div>
                    <div style="font-weight:700;">${((p=e==null?void 0:e.totals)==null?void 0:p.paidOrders)||0}</div>
                </div>
                <div style="background:#f8faf5;border-radius:10px;padding:10px;">
                    <div style="font-size:12px;color:var(--text-on-light-muted);">Новые пользователи</div>
                    <div style="font-weight:700;">${((m=e==null?void 0:e.totals)==null?void 0:m.newUsers)||0}</div>
                </div>
                <div style="background:#f8faf5;border-radius:10px;padding:10px;">
                    <div style="font-size:12px;color:var(--text-on-light-muted);">Успешные платежи</div>
                    <div style="font-weight:700;">${((y=e==null?void 0:e.totals)==null?void 0:y.successfulPayments)||0}</div>
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
                    <tbody>${s}</tbody>
                </table>
            </div>
        </div>
    `}function ie(e){const t=document.getElementById("analytics-top-products");if(t){if(!e.length){t.innerHTML='<div style="color:var(--text-on-light-muted);">Нет данных по товарам за выбранный период</div>';return}t.innerHTML=`
        <div class="content-card" style="margin:0;padding:1rem;">
            <div class="card-title" style="font-size:1rem;margin-bottom:0.75rem;">🔥 Топ товаров по выручке</div>
            <div style="display:grid;gap:8px;">
                ${e.map((n,r)=>`
                    <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 10px;background:#f8faf5;border-radius:8px;">
                        <div>
                            <strong>${r+1}. ${n.name}</strong>
                            <div style="font-size:12px;color:var(--text-on-light-muted);">Продано: ${n.quantity} ед.</div>
                        </div>
                        <div style="font-weight:700;">${n.revenue} Kč</div>
                    </div>
                `).join("")}
            </div>
        </div>
    `}}function de(e){return{admin:"danger",farmer:"info",buyer:"success"}[e]||"info"}function le(e){return{admin:"👨‍💼 Админ",farmer:"👨‍🌾 Фермер",buyer:"🛒 Покупатель"}[e]||e}function ce(e){return{vegetables:"🥬",fruits:"🍎",berries:"🍓",herbs:"🌿",potatoes:"🥔",eggs:"🥚",meat:"🥩"}[e]||"📦"}function ue(e){return{vegetables:"Овощи",fruits:"Фрукты",berries:"Ягоды",herbs:"Зелень",potatoes:"Корнеплоды",eggs:"Яйца",meat:"Мясо"}[e]||e}function L(e){return new Date(e).toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"})}function me(e){return new Date(e).toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit"})}function O(e,t,n){const r=document.getElementById(e);r&&(r.innerHTML=`<tr><td colspan="${t}" style="text-align:center;padding:2rem;color:#ef4444;">${n}</td></tr>`)}function h(e,t){const n=document.getElementById(e);n&&(n.innerHTML=`<div style="padding:1rem;color:#ef4444;">${t}</div>`)}function pe(e){const t=e.icon||"🏡";return typeof t=="string"&&t.startsWith("http")?`<img src="${t}" alt="${e.name}" style="width:40px;height:40px;border-radius:50%;object-fit:cover;">`:`<span style="font-size:1.5rem;">${t}</span>`}function fe(){R("user-search","users-table-body"),R("farm-search","farms-table-body"),R("product-search","products-table-body")}function R(e,t){const n=document.getElementById(e),r=document.getElementById(t);!n||!r||n.addEventListener("input",()=>{const a=n.value.trim().toLowerCase();Array.from(r.querySelectorAll("tr")).forEach(o=>{const i=o.textContent.toLowerCase();o.style.display=!a||i.includes(a)?"":"none"})})}function ye(){const e=document.getElementById("analytics-days");!e||e.dataset.bound==="true"||(e.dataset.bound="true",e.value=String(I.analyticsDays),e.addEventListener("change",()=>{G(e.value)}))}function E(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function H(){const e=document.getElementById("admin-edit-error");e&&(e.style.display="none",e.textContent=""),document.querySelectorAll("#admin-edit-fields .field-error").forEach(t=>t.remove()),document.querySelectorAll("#admin-edit-fields .form-input").forEach(t=>{t.style.borderColor=""})}function ve(e){const t=document.getElementById("admin-edit-error");t&&(t.textContent=e,t.style.display="block")}function S(e,t){e.style.borderColor="#ef4444";const n=document.createElement("div");n.className="field-error",n.style.cssText="color:#ef4444;font-size:0.75rem;margin:-0.55rem 0 0.75rem;",n.textContent=t,e.insertAdjacentElement("afterend",n)}function w({title:e,fields:t,submitLabel:n="Сохранить",onSubmit:r}){const a=document.getElementById("admin-edit-modal"),s=document.getElementById("admin-edit-title"),o=document.getElementById("admin-edit-fields"),i=document.getElementById("admin-edit-submit");if(!a||!s||!o||!i){c.error("Редактор недоступен",{duration:4e3});return}H(),s.textContent=e,i.textContent=n,i.disabled=!1,q.fieldDefs=t,o.innerHTML=t.map(l=>{const u=`admin-edit-${l.name}`,p=l.required?" *":"";if(l.type==="select"){const m=(l.options||[]).map(y=>`
                <option value="${E(y.value)}" ${String(y.value)===String(l.value)?"selected":""}>
                    ${E(y.label)}
                </option>
            `).join("");return`
                <label class="form-label" for="${u}" style="margin-bottom:0.35rem;">${E(l.label)}${p}</label>
                <select id="${u}" class="form-input" data-field-name="${E(l.name)}" data-field-type="select" ${l.required?"required":""} style="margin-bottom:0.9rem;">
                    ${m}
                </select>
            `}return`
            <label class="form-label" for="${u}" style="margin-bottom:0.35rem;">${E(l.label)}${p}</label>
            <input
                id="${u}"
                type="${l.type||"text"}"
                class="form-input"
                data-field-name="${E(l.name)}"
                data-field-type="${l.type||"text"}"
                value="${E(l.value??"")}"
                ${l.required?"required":""}
                ${l.min!==void 0?`min="${l.min}"`:""}
                ${l.max!==void 0?`max="${l.max}"`:""}
                ${l.step!==void 0?`step="${l.step}"`:""}
                style="margin-bottom:0.9rem;"
            >
        `}).join(""),q.submitHandler=r,a.classList.remove("hidden")}function g(){const e=document.getElementById("admin-edit-modal");e&&e.classList.add("hidden"),q.submitHandler=null,q.fieldDefs=[],H();const t=document.getElementById("admin-edit-submit");t&&(t.disabled=!1)}function $(){H();const e=Array.from(document.querySelectorAll("#admin-edit-fields [data-field-name]")),t={},n=Object.fromEntries((q.fieldDefs||[]).map(a=>[a.name,a]));let r=!1;if(e.forEach(a=>{const s=a.dataset.fieldName,o=a.dataset.fieldType,i=n[s]||{},l=a.value,u=i.label||s;if(o==="number"){if(l===""){i.required&&(S(a,`Укажите ${u.toLowerCase()}`),r=!0);return}const m=Number(l);if(Number.isNaN(m)){S(a,`«${u}» должно быть числом`),r=!0;return}if(i.min!==void 0&&m<i.min){S(a,`Минимум: ${i.min}`),r=!0;return}if(i.max!==void 0&&m>i.max){S(a,`Максимум: ${i.max}`),r=!0;return}t[s]=m;return}if(o==="checkbox"){t[s]=a.checked;return}const p=l.trim();if(i.required&&!p){S(a,`Заполните «${u}»`),r=!0;return}t[s]=p}),r)throw new Error("Проверьте выделенные поля");return t}window.showSection=function(e){document.querySelectorAll(".admin-section").forEach(t=>{t.classList.remove("active")}),document.querySelectorAll(".admin-nav-item").forEach(t=>{t.classList.remove("active")}),document.getElementById(e).classList.add("active"),document.querySelector(`[data-section="${e}"]`).classList.add("active"),console.log("Section changed to:",e)};window.createUser=function(){w({title:"Создать пользователя",submitLabel:"Создать",fields:[{name:"fullname",label:"Имя",type:"text",value:"",required:!0},{name:"email",label:"Email",type:"text",value:"",required:!0},{name:"password",label:"Пароль",type:"text",value:"",required:!0},{name:"role",label:"Роль",type:"select",value:"buyer",required:!0,options:[{value:"buyer",label:"Покупатель"},{value:"farmer",label:"Фермер"},{value:"admin",label:"Админ"}]},{name:"phone",label:"Телефон",type:"text",value:""},{name:"address",label:"Адрес",type:"text",value:""}],onSubmit:async()=>{const e=$();await d.request("admin/users",{method:"POST",body:JSON.stringify(e)}),g(),await Promise.all([A(),b(),f()])}})};window.createFarm=async function(){try{const e=await d.request("admin/users"),t=await d.request("admin/farms"),n=new Set((t.data||[]).map(a=>{var s;return a.userId||((s=a.user)==null?void 0:s.id)}).filter(Boolean)),r=(e.data||[]).filter(a=>a.role==="farmer"&&!n.has(a.id));if(!r.length){c.error("Нет фермеров без фермы. Сначала создайте пользователя с ролью «Фермер».",{duration:4e3});return}w({title:"Создать ферму",submitLabel:"Создать",fields:[{name:"userId",label:"Владелец (фермер)",type:"select",value:r[0].id,required:!0,options:r.map(a=>({value:a.id,label:`${a.fullname||a.email} (${a.email})`}))},{name:"name",label:"Название",type:"text",value:"",required:!0},{name:"location",label:"Локация",type:"text",value:"",required:!0},{name:"description",label:"Описание",type:"text",value:""},{name:"website",label:"Сайт",type:"text",value:""},{name:"icon",label:"Иконка (emoji или URL)",type:"text",value:"🏡"}],onSubmit:async()=>{const a=$();await d.request("admin/farms",{method:"POST",body:JSON.stringify(a)}),g(),await Promise.all([M(),b(),f()])}})}catch(e){c.error(`Не удалось подготовить форму фермы: ${e.message}`,{duration:5e3})}};window.createProduct=async function(){try{const t=(await d.request("admin/farms")).data||[];if(!t.length){c.error("Сначала создайте ферму.",{duration:4e3});return}w({title:"Создать товар",submitLabel:"Создать",fields:[{name:"farmId",label:"Ферма",type:"select",value:t[0].id,required:!0,options:t.map(n=>({value:n.id,label:n.name||n.id}))},{name:"name",label:"Название",type:"text",value:"",required:!0},{name:"category",label:"Категория",type:"text",value:"vegetables",required:!0},{name:"basePrice",label:"Базовая цена (Kč)",type:"number",value:10,min:.01,step:.01,required:!0},{name:"unit",label:"Ед. измерения",type:"select",value:"kg",required:!0,options:[{value:"kg",label:"кг"},{value:"pcs",label:"шт"},{value:"l",label:"л"},{value:"g",label:"г"}]},{name:"stock",label:"Остаток",type:"number",value:0,min:0,step:1},{name:"description",label:"Описание",type:"text",value:""}],onSubmit:async()=>{const n=$();await d.request("admin/products",{method:"POST",body:JSON.stringify(n)}),g(),await Promise.all([D(),b(),f()])}})}catch(e){c.error(`Не удалось подготовить форму товара: ${e.message}`,{duration:5e3})}};window.createOrder=async function(){try{const[e,t]=await Promise.all([d.request("admin/users"),d.request("admin/products")]),n=(e.data||[]).filter(o=>o.role==="buyer"),r=(t.data||[]).filter(o=>o.available!==!1);if(!n.length){c.error("Нет покупателей. Сначала создайте пользователя с ролью «Покупатель».",{duration:4e3});return}if(!r.length){c.error("Нет доступных товаров для заказа.",{duration:4e3});return}const a=new Date;a.setDate(a.getDate()+1);const s=a.toISOString().slice(0,10);w({title:"Создать B2B-заказ",submitLabel:"Создать",fields:[{name:"userId",label:"Покупатель",type:"select",value:n[0].id,required:!0,options:n.map(o=>({value:o.id,label:`${o.fullname||o.email} (${o.email})`}))},{name:"productId",label:"Товар",type:"select",value:String(r[0].id),required:!0,options:r.map(o=>{var i;return{value:String(o.id),label:`${o.name} — ${((i=o.farm)==null?void 0:i.name)||"ферма"} (${Number(o.price||0)} Kč)`}})},{name:"quantity",label:"Количество",type:"number",value:20,min:1,step:1,required:!0},{name:"deliveryDate",label:"Дата поставки",type:"text",value:s,required:!0},{name:"paymentStatus",label:"Оплата",type:"select",value:"unpaid",required:!0,options:[{value:"unpaid",label:"Не оплачен"},{value:"paid",label:"Оплачен"}]},{name:"status",label:"Статус",type:"select",value:"pending",required:!0,options:[{value:"pending",label:"Ожидает"},{value:"processing",label:"В обработке"},{value:"delivered",label:"Доставлен"}]}],onSubmit:async()=>{const o=$();o.productId=Number(o.productId),o.quantity=Number(o.quantity),await d.request("admin/orders",{method:"POST",body:JSON.stringify(o)}),g(),await Promise.all([N(),b(),f()])}})}catch(e){c.error(`Не удалось подготовить форму заказа: ${e.message}`,{duration:5e3})}};window.editUser=function(e){d.request("admin/users").then(t=>{const n=(t.data||[]).find(r=>r.id===e);if(!n){c.error("Пользователь не найден",{duration:4e3});return}w({title:`Редактирование пользователя: ${n.fullname||n.email}`,fields:[{name:"fullname",label:"Имя",type:"text",value:n.fullname||"",required:!0},{name:"role",label:"Роль",type:"select",value:n.role||"buyer",required:!0,options:[{value:"buyer",label:"Покупатель"},{value:"farmer",label:"Фермер"},{value:"admin",label:"Админ"}]},{name:"phone",label:"Телефон",type:"text",value:n.phone||""},{name:"address",label:"Адрес",type:"text",value:n.address||""}],onSubmit:async()=>{const r=$();await d.request(`admin/users/${e}`,{method:"PATCH",body:JSON.stringify(r)}),g(),await Promise.all([A(),f()])}})}).catch(t=>c.error(`Ошибка загрузки пользователя: ${t.message}`,{duration:5e3}))};window.deleteUser=function(e){confirm("Удалить пользователя? Это действие необратимо.")&&d.request(`admin/users/${e}`,{method:"DELETE"}).then(()=>{A(),b(),f()}).catch(t=>c.error(`Ошибка удаления пользователя: ${t.message}`,{duration:5e3}))};window.editFarm=function(e){d.request("admin/farms").then(t=>{const n=(t.data||[]).find(r=>r.id===e);if(!n){c.error("Ферма не найдена",{duration:4e3});return}w({title:`Редактирование фермы: ${n.name||e}`,fields:[{name:"name",label:"Название",type:"text",value:n.name||"",required:!0},{name:"location",label:"Локация",type:"text",value:n.location||""},{name:"description",label:"Описание",type:"text",value:n.description||""},{name:"website",label:"Сайт",type:"text",value:n.website||""},{name:"icon",label:"Иконка (emoji или URL)",type:"text",value:n.icon||""}],onSubmit:async()=>{const r=$();await d.request(`admin/farms/${e}`,{method:"PATCH",body:JSON.stringify(r)}),g(),await Promise.all([M(),f()])}})}).catch(t=>c.error(`Ошибка загрузки фермы: ${t.message}`,{duration:5e3}))};window.deleteFarm=function(e){confirm("Удалить ферму? Это действие удалит связанные товары.")&&d.request(`admin/farms/${e}`,{method:"DELETE"}).then(()=>{M(),b(),f()}).catch(t=>c.error(`Ошибка удаления фермы: ${t.message}`,{duration:5e3}))};window.editProduct=function(e){d.request("admin/products").then(t=>{const n=(t.data||[]).find(r=>Number(r.id)===Number(e));if(!n){c.error("Товар не найден",{duration:4e3});return}w({title:`Редактирование товара: ${n.name||e}`,fields:[{name:"name",label:"Название",type:"text",value:n.name||"",required:!0},{name:"category",label:"Категория",type:"text",value:n.category||""},{name:"stock",label:"Остаток",type:"number",value:Number(n.stock||0),min:0,step:1},{name:"basePrice",label:"Базовая цена",type:"number",value:Number(n.basePrice||n.price||0),min:0,step:.01,required:!0},{name:"price",label:"Цена для покупателя",type:"number",value:Number(n.price||0),min:0,step:.01,required:!0},{name:"available",label:"Статус",type:"select",value:String(!!n.available),required:!0,options:[{value:"true",label:"Активен"},{value:"false",label:"Скрыт"}]}],onSubmit:async()=>{const r=$();r.available=r.available==="true",await d.request(`admin/products/${e}`,{method:"PATCH",body:JSON.stringify(r)}),g(),await Promise.all([D(),f()])}})}).catch(t=>c.error(`Ошибка загрузки товара: ${t.message}`,{duration:5e3}))};window.deleteProduct=function(e){confirm("Удалить товар?")&&d.request(`admin/products/${e}`,{method:"DELETE"}).then(()=>{D(),b(),f()}).catch(t=>c.error(`Ошибка удаления товара: ${t.message}`,{duration:5e3}))};window.editOrder=function(e){d.request("admin/orders").then(t=>{const n=(t.data||[]).find(r=>String(r.id)===String(e));if(!n){c.error("Заказ не найден",{duration:4e3});return}w({title:`Заказ #${n.id}`,fields:[{name:"status",label:"Статус заказа",type:"select",value:n.status||"pending",required:!0,options:[{value:"pending",label:"Ожидает"},{value:"processing",label:"В обработке"},{value:"delivered",label:"Доставлен"},{value:"cancelled",label:"Отменён"}]},{name:"paymentStatus",label:"Статус оплаты",type:"select",value:n.paymentStatus||"unpaid",required:!0,options:[{value:"unpaid",label:"Не оплачен"},{value:"paid",label:"Оплачен"},{value:"refunded",label:"Возврат"}]}],onSubmit:async()=>{const r=$();await d.request(`admin/orders/${e}/status`,{method:"PATCH",body:JSON.stringify(r)}),g(),await Promise.all([N(),b(),f()])}})}).catch(t=>c.error(`Ошибка загрузки заказа: ${t.message}`,{duration:5e3}))};window.approveReview=function(e){d.request(`admin/reviews/${e}/approve`,{method:"PATCH"}).then(()=>{j(),f()}).catch(t=>c.error(`Ошибка модерации отзыва: ${t.message}`,{duration:5e3}))};window.deleteReview=function(e){confirm("Удалить отзыв?")&&d.request(`admin/reviews/${e}`,{method:"DELETE"}).then(()=>{j(),f()}).catch(t=>c.error(`Ошибка удаления отзыва: ${t.message}`,{duration:5e3}))};window.logout=async function(){try{await z.logout(),window.location.href="index.html"}catch(e){console.error("Logout error:",e),window.location.href="index.html"}};async function ge(){try{const t=(await d.request("settings")).data||{},n=document.getElementById("markup-percent"),r=document.getElementById("platform-fee-rate");n&&(n.value=parseFloat(t.markupPercent||15)),r&&(r.value=parseFloat(t.platformFeeRate||5))}catch(e){console.error("Load platform settings error:",e)}}window.savePlatformSettings=async function(){var e,t;try{const n=parseFloat(((e=document.getElementById("markup-percent"))==null?void 0:e.value)||15),r=parseFloat(((t=document.getElementById("platform-fee-rate"))==null?void 0:t.value)||5),a=await d.request("settings",{method:"PUT",body:JSON.stringify({markupPercent:n,platformFeeRate:r})});c.success("Настройки сохранены!",{duration:4e3}),console.log("Settings saved:",a.data),await Promise.all([b(),f()])}catch(n){console.error("Save platform settings error:",n),c.error("Ошибка: "+n.message,{duration:5e3})}};document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("save-settings-btn"),t=document.getElementById("admin-edit-cancel"),n=document.getElementById("admin-edit-close"),r=document.getElementById("admin-edit-form"),a=document.getElementById("admin-edit-modal");e&&e.addEventListener("click",window.savePlatformSettings),t&&t.addEventListener("click",g),n&&n.addEventListener("click",g),a&&a.addEventListener("click",o=>{o.target===a&&g()}),r&&r.addEventListener("submit",async o=>{if(o.preventDefault(),!q.submitHandler)return;const i=document.getElementById("admin-edit-submit"),l=(i==null?void 0:i.textContent)||"Сохранить";try{H(),i&&(i.disabled=!0,i.textContent="Сохранение…"),await q.submitHandler()}catch(u){ve(u.message||"Ошибка сохранения"),i&&(i.disabled=!1,i.textContent=l)}});const s=window.showSection;window.showSection=function(o){s.call(this,o),o==="settings"&&ge(),o==="payouts"&&B()}});
