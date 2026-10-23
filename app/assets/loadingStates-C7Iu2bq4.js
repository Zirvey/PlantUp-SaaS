import{i as a}from"./icons-DrlJFkwI.js";const c=`
@keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}
`;function l(e="100%"){return`
        <div style="
            height: 16px;
            width: ${e};
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite;
            border-radius: 0.5rem;
        "></div>
    `}function g(e,n={}){const t=document.getElementById(e);if(!t)return;const s=n.rows??3,o=Array.from({length:s},(r,i)=>l(i%2===0?"70%":"45%")).join("");t.innerHTML=`
        <div class="loading-skeleton" style="display:grid;gap:0.75rem;padding:1.25rem;">
            ${o}
            <style>${c}</style>
        </div>
    `}function y(e,n){const t=document.getElementById(e);t&&(t.innerHTML=`
        <tr>
            <td colspan="${n}" style="text-align:center;padding:1.5rem;color:var(--text-on-light-muted);">
                Загрузка…
            </td>
        </tr>
    `)}function v(e,n={}){const t=document.getElementById(e);if(!t)return;const{iconName:s="package",icon:o,title:r="Пока пусто",text:i=""}=n,d=o||a(s);t.innerHTML=`
        <div class="empty-state">
            <div class="empty-icon">${d}</div>
            <div class="empty-state__title">${r}</div>
            ${i?`<div class="empty-state__text">${i}</div>`:""}
        </div>
    `}function p(e,n){const t=document.getElementById(e);t&&(t.innerHTML=`
        <div class="empty-state">
            <div class="empty-icon">${a("x")}</div>
            <div class="empty-state__title">Ошибка</div>
            <div class="empty-state__text">${n}</div>
        </div>
    `)}export{g as a,v as b,p as c,y as s};
