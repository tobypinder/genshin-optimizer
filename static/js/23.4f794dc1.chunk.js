(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[23],{214:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return l}));var i=n(4),a=n(189),r=n(71),s=n(14),o=n(1);function u(t,e){var n=e.characterSheet,r=e.weaponSheet,s=e.artifactSheets,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"anemo";if("basicKeys"===t)return"Basic Stats";if("genericAvgHit"===t)return"Generic Optimization Values";if("transReactions"===t)return"Transformation Reaction";if(t.startsWith("talentKey_")){var l,c,d=t.split("talentKey_")[1];return null!==(l=null===n||void 0===n||null===(c=n.getTalentOfKey(d,u))||void 0===c?void 0:c.name)&&void 0!==l?l:d}if(t.startsWith("weapon_")){var p,v=t.split("weapon_")[1];return null!==(p=null===r||void 0===r?void 0:r.name)&&void 0!==p?p:v}if(t.startsWith("artifact_")){var f,h=t.split("_"),b=Object(i.a)(h,3),m=b[1],g=b[2];return Object(o.jsxs)("span",{children:[null===(f=s[m])||void 0===f?void 0:f.name," ",Object(o.jsxs)(a.a,{variant:"success",children:[g,"-Set"]})]})}return""}function l(t){return{key:t,level:1,ascension:0,hitMode:"avgHit",reactionMode:null,equippedArtifacts:Object.fromEntries(s.h.map((function(t){return[t,""]}))),equippedWeapon:"",conditionalValues:{},baseStatOverrides:{},buildSettings:Object(r.a)(),talent:{auto:1,skill:1,burst:1},infusionAura:"",constellation:0}}}}]);
//# sourceMappingURL=23.4f794dc1.chunk.js.map