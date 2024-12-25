(function(){"use strict";var t={2900:function(t,e,a){var r=a(5130),c=a(6768);const o={class:"navbar navbar-expand-lg navbar-light bg-light"},n={class:"container"},s={class:"navbar-nav"},i={class:"container mt-4"};function l(t,e){const a=(0,c.g2)("router-link"),r=(0,c.g2)("router-view");return(0,c.uX)(),(0,c.CE)("div",null,[(0,c.Lk)("header",null,[(0,c.Lk)("nav",o,[(0,c.Lk)("div",n,[e[2]||(e[2]=(0,c.Lk)("div",{class:"tovar"},null,-1)),(0,c.Lk)("div",s,[(0,c.bF)(a,{to:"/products",class:"navbar-brand"},{default:(0,c.k6)((()=>e[0]||(e[0]=[(0,c.eW)("shop")]))),_:1}),(0,c.bF)(a,{to:"/cart",class:"nav-link2"},{default:(0,c.k6)((()=>e[1]||(e[1]=[(0,c.Lk)("svg",{class:"basket",version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"980.000000pt",height:"880.000000pt",viewBox:"0 0 980.000000 880.000000",preserveAspectRatio:"xMidYMid meet"},[(0,c.Lk)("g",{class:"basket_color",transform:"translate(0.000000,880.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"},[(0,c.Lk)("path",{d:"M215 8791 c-83 -21 -150 -85 -186 -177 -33 -85 -33 -218 0 -292 28\n-62 110 -141 167 -161 27 -10 126 -16 334 -21 273 -6 299 -8 352 -28 122 -49\n203 -147 243 -299 9 -32 202 -1302 431 -2823 228 -1521 422 -2790 431 -2820\n19 -69 74 -181 118 -240 105 -144 291 -261 491 -312 l89 -23 2945 0 c2800 0\n2948 1 2996 18 70 24 126 75 154 139 31 69 33 188 6 268 -24 70 -101 149 -171\n176 -49 19 -117 19 -2895 24 -2624 5 -2848 6 -2886 22 -111 44 -189 122 -228\n228 -13 36 -96 519 -96 560 0 6 966 11 2808 12 l2807 3 94 28 c242 71 425 215\n526 414 43 85 1019 3230 1040 3352 29 163 11 313 -51 440 -91 184 -279 289\n-576 321 -65 7 -1279 10 -3703 10 -1983 0 -3605 3 -3605 7 0 30 -104 762 -116\n813 -33 146 -109 251 -220 301 -123 56 -178 61 -749 65 -286 1 -533 -1 -550\n-5z m8649 -1844 c87 -26 153 -65 179 -106 31 -50 29 -161 -6 -302 -48 -198\n-807 -2642 -836 -2694 -34 -61 -105 -117 -186 -147 l-60 -23 -2777 -3 -2776\n-2 -6 37 c-3 21 -103 747 -221 1613 -118 866 -218 1592 -221 1613 l-6 37 3429\n-2 c3256 -3 3431 -4 3487 -21z"}),(0,c.Lk)("path",{d:"M3102 1260 c-212 -56 -386 -221 -455 -433 -30 -94 -30 -267 1 -367\n94 -299 384 -490 686 -451 254 33 447 192 532 436 25 71 28 94 28 200 0 98 -5\n132 -23 185 -76 219 -242 375 -457 430 -98 25 -215 25 -312 0z"}),(0,c.Lk)("path",{d:"M7210 1273 c-54 -9 -158 -46 -210 -76 -76 -42 -199 -168 -243 -248\n-72 -128 -96 -311 -62 -458 24 -101 90 -216 170 -297 123 -124 273 -187 445\n-188 117 0 181 14 289 66 158 75 292 240 336 413 18 70 20 222 4 297 -39 183\n-183 360 -358 440 -106 49 -259 70 -371 51z"})])],-1)]))),_:1})])])])]),(0,c.Lk)("main",i,[(0,c.bF)(r)])])}var d=a(1241);const u={},g=(0,d.A)(u,[["render",l]]);var p=g,h=a(1387);const v={class:"row"};function f(t,e,a,r,o,n){const s=(0,c.g2)("ProductFilter"),i=(0,c.g2)("ProductCard"),l=(0,c.g2)("ProductPagination");return(0,c.uX)(),(0,c.CE)("div",null,[(0,c.bF)(s,{categories:o.categories,onFilter:n.filterCategory},null,8,["categories","onFilter"]),(0,c.Lk)("div",v,[((0,c.uX)(!0),(0,c.CE)(c.FK,null,(0,c.pI)(n.paginatedProducts,(e=>((0,c.uX)(),(0,c.Wv)(i,{key:e.id,product:e,"exchange-rate":o.exchangeRate,onAddToCart:t.addToCart},null,8,["product","exchange-rate","onAddToCart"])))),128))]),(0,c.bF)(l,{"total-items":o.filteredProducts.length,"items-per-page":10,onPageChange:n.changePage},null,8,["total-items","onPageChange"])])}a(4114),a(8992),a(4520);var k=a(4232);const m={class:"col-md-4 mb-4"},C=["src"],b={class:"card-body"},P={class:"card-title"},L={class:"card-text"},y={class:"card-text"},x={class:"card-text"},w={class:"card-footer"},_={class:"modal-header"},E={class:"modal-body"},O=["src"],F={class:"modal-description"};function M(t,e,a,o,n,s){return(0,c.uX)(),(0,c.CE)("div",m,[(0,c.Lk)("div",{class:"card h-100 product-card",onClick:e[1]||(e[1]=(...t)=>s.openModal&&s.openModal(...t))},[(0,c.Lk)("img",{src:a.product.image,class:"card-img-top product-image",alt:"Product Image"},null,8,C),(0,c.Lk)("div",b,[(0,c.Lk)("h5",P,(0,k.v_)(a.product.title),1),(0,c.Lk)("p",L,"Цена: "+(0,k.v_)((a.product.price*a.exchangeRate).toFixed(2))+" ₽",1),(0,c.Lk)("p",y,"Категория: "+(0,k.v_)(a.product.category),1),(0,c.Lk)("p",x,[(0,c.eW)("Оценка: "+(0,k.v_)(a.product.rating.rate.toFixed(1))+" ",1),e[5]||(e[5]=(0,c.Lk)("span",{class:"star"},"★",-1)),(0,c.eW)(" / 5 ("+(0,k.v_)(a.product.rating.count)+" оценок) ",1)])]),(0,c.Lk)("div",w,[(0,c.Lk)("button",{onClick:e[0]||(e[0]=(0,r.D$)(((...t)=>s.addToCart&&s.addToCart(...t)),["stop"])),class:"btn btn-success"},"В корзину")])]),n.isModalOpen?((0,c.uX)(),(0,c.CE)("div",{key:0,class:"modal-overlay",onClick:e[4]||(e[4]=(...t)=>s.closeModal&&s.closeModal(...t))},[(0,c.Lk)("div",{class:"modal-content container",onClick:e[3]||(e[3]=(0,r.D$)((()=>{}),["stop"]))},[(0,c.Lk)("button",{class:"modal-close",onClick:e[2]||(e[2]=(...t)=>s.closeModal&&s.closeModal(...t))},"×"),(0,c.Lk)("div",_,[(0,c.Lk)("h4",null,(0,k.v_)(a.product.title),1)]),(0,c.Lk)("div",E,[(0,c.Lk)("img",{src:a.product.image,alt:"Product Image",class:"modal-image"},null,8,O),(0,c.Lk)("div",F,[(0,c.Lk)("p",null,"Описание: "+(0,k.v_)(a.product.description),1),(0,c.Lk)("p",null,[(0,c.eW)("Оценка: "+(0,k.v_)(a.product.rating.rate),1),e[6]||(e[6]=(0,c.Lk)("span",{class:"star"},"★",-1)),(0,c.eW)(" (Всего оценок: "+(0,k.v_)(a.product.rating.count)+")",1)])])])])])):(0,c.Q3)("",!0)])}var X={props:{product:Object,exchangeRate:Number},data(){return{isModalOpen:!1}},methods:{addToCart(){let t=JSON.parse(localStorage.getItem("cart"))||[];t.push({...this.product,quantity:1}),localStorage.setItem("cart",JSON.stringify(t)),alert("Товар добавлен в корзину")},openModal(){this.isModalOpen=!0},closeModal(){this.isModalOpen=!1}}};const j=(0,d.A)(X,[["render",M]]);var S=j;const I={class:"pagination"},R=["onClick"],A={class:"page-link"};function T(t,e,a,r,o,n){return(0,c.uX)(),(0,c.CE)("nav",null,[(0,c.Lk)("div",I,[(0,c.Lk)("div",{class:(0,k.C4)(["page-item",{disabled:1===o.currentPage}]),onClick:e[0]||(e[0]=t=>n.changePage(o.currentPage-1))},e[2]||(e[2]=[(0,c.Lk)("a",{class:"page-link"},"Предыдущая",-1)]),2),((0,c.uX)(!0),(0,c.CE)(c.FK,null,(0,c.pI)(n.totalPages,(t=>((0,c.uX)(),(0,c.CE)("div",{class:(0,k.C4)(["page-item",{active:t===o.currentPage}]),key:t,onClick:e=>n.changePage(t)},[(0,c.Lk)("a",A,(0,k.v_)(t),1)],10,R)))),128)),(0,c.Lk)("div",{class:(0,k.C4)(["page-item",{disabled:o.currentPage===n.totalPages}]),onClick:e[1]||(e[1]=t=>n.changePage(o.currentPage+1))},e[3]||(e[3]=[(0,c.Lk)("a",{class:"page-link"},"Следующая",-1)]),2)])])}var N={props:{totalItems:Number,itemsPerPage:Number},data(){return{currentPage:1}},computed:{totalPages(){return Math.ceil(this.totalItems/this.itemsPerPage)}},methods:{changePage(t){t<1||t>this.totalPages||(this.currentPage=t,this.$emit("page-change",t))}}};const W=(0,d.A)(N,[["render",T]]);var $=W;const z={class:"s1 mb-4"},V=["value"];function D(t,e,a,o,n,s){return(0,c.uX)(),(0,c.CE)("div",z,[(0,c.bo)((0,c.Lk)("select",{class:"form-select",onChange:e[0]||(e[0]=(...t)=>s.filter&&s.filter(...t)),"onUpdate:modelValue":e[1]||(e[1]=t=>n.selectedCategory=t)},[e[2]||(e[2]=(0,c.Lk)("option",{value:""},"Все категории",-1)),((0,c.uX)(!0),(0,c.CE)(c.FK,null,(0,c.pI)(a.categories,(t=>((0,c.uX)(),(0,c.CE)("option",{key:t,value:t},(0,k.v_)(t),9,V)))),128))],544),[[r.u1,n.selectedCategory]])])}var J={props:{categories:Array},data(){return{selectedCategory:""}},methods:{filter(){this.$emit("filter",this.selectedCategory)}}};const K=(0,d.A)(J,[["render",D]]);var q=K,U=a(4373),B={components:{ProductCard:S,ProductPagination:$,ProductFilter:q},data(){return{products:[],filteredProducts:[],categories:[],currentPage:1,exchangeRate:75}},methods:{async fetchProducts(){try{const t=await fetch("https://fakestoreapi.com/products");this.products=await t.json(),this.filteredProducts=this.products}catch(t){console.error("Failed to fetch products:",t),this.filteredProducts=this.products}},async fetchCategories(){const t=await fetch("https://fakestoreapi.com/products/categories");this.categories=await t.json()},async fetchExchangeRate(){try{const t=await U.A.get("https://www.cbr-xml-daily.ru/daily_json.js");this.exchangeRate=t.data.Valute.USD.Value}catch(t){console.error("Ошибка получения курса валют:",t)}},filterCategory(t){this.filteredProducts=t?this.products.filter((e=>e.category===t)):this.products,this.currentPage=1},changePage(t){this.currentPage=t},selectProduct(t){this.$router.push(`/products/${t.id}`)}},created(){this.fetchProducts(),this.fetchCategories(),this.fetchExchangeRate()},computed:{paginatedProducts(){const t=10*(this.currentPage-1);return this.filteredProducts.slice(t,t+10)}}};const Q=(0,d.A)(B,[["render",f],["__scopeId","data-v-58a506d0"]]);var Y=Q;const G={class:"korzina"},H={key:0,class:"row"},Z={class:"card h-100"},tt=["src"],et={class:"card-body"},at={class:"card-title"},rt={class:"card-text"},ct={class:"card-text"},ot=["onClick"],nt={key:1},st={class:"mt-4"};function it(t,e,a,r,o,n){return(0,c.uX)(),(0,c.CE)("div",G,[e[1]||(e[1]=(0,c.Lk)("h3",null,"Корзина",-1)),o.cart.length?((0,c.uX)(),(0,c.CE)("div",H,[((0,c.uX)(!0),(0,c.CE)(c.FK,null,(0,c.pI)(o.cart,(t=>((0,c.uX)(),(0,c.CE)("div",{key:t.id,class:"col-md-4 mb-4"},[(0,c.Lk)("div",Z,[(0,c.Lk)("img",{src:t.image,class:"card-img-top",alt:"Product Image"},null,8,tt),(0,c.Lk)("div",et,[(0,c.Lk)("h5",at,(0,k.v_)(t.title),1),(0,c.Lk)("p",rt,"Цена: "+(0,k.v_)((t.price*o.exchangeRate).toFixed(2))+" ₽",1),(0,c.Lk)("p",ct,"Количество: "+(0,k.v_)(t.quantity),1),(0,c.Lk)("button",{onClick:e=>n.removeFromCart(t),class:"btn btn-danger"},"Удалить",8,ot)])])])))),128))])):((0,c.uX)(),(0,c.CE)("div",nt,e[0]||(e[0]=[(0,c.Lk)("p",null,"Корзина пуста",-1)]))),(0,c.Lk)("div",st,[(0,c.Lk)("h4",null,"Общая стоимость: ₽"+(0,k.v_)((n.totalCost*o.exchangeRate).toFixed(2)),1)])])}a(8872);var lt={data(){return{cart:[],exchangeRate:75}},computed:{totalCost(){return this.cart.reduce(((t,e)=>t+e.price*e.quantity),0)}},methods:{loadCart(){this.cart=JSON.parse(localStorage.getItem("cart"))||[]},removeFromCart(t){this.cart=this.cart.filter((e=>e.id!==t.id)),localStorage.setItem("cart",JSON.stringify(this.cart))},async fetchExchangeRate(){try{const t=await U.A.get("https://www.cbr-xml-daily.ru/daily_json.js");this.exchangeRate=t.data.Valute.USD.Value}catch(t){console.error("Ошибка загрузки курса валют:",t)}}},created(){this.loadCart(),this.fetchExchangeRate()}};const dt=(0,d.A)(lt,[["render",it]]);var ut=dt;const gt=[{path:"/",redirect:"/products"},{path:"/products",component:Y},{path:"/cart",component:ut}],pt=(0,h.aE)({history:(0,h.LA)(),routes:gt});var ht=pt;const vt=(0,r.Ef)(p);vt.use(ht),vt.mount("#app")}},e={};function a(r){var c=e[r];if(void 0!==c)return c.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,r,c,o){if(!r){var n=1/0;for(d=0;d<t.length;d++){r=t[d][0],c=t[d][1],o=t[d][2];for(var s=!0,i=0;i<r.length;i++)(!1&o||n>=o)&&Object.keys(a.O).every((function(t){return a.O[t](r[i])}))?r.splice(i--,1):(s=!1,o<n&&(n=o));if(s){t.splice(d--,1);var l=c();void 0!==l&&(e=l)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[r,c,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var c,o,n=r[0],s=r[1],i=r[2],l=0;if(n.some((function(e){return 0!==t[e]}))){for(c in s)a.o(s,c)&&(a.m[c]=s[c]);if(i)var d=i(a)}for(e&&e(r);l<n.length;l++)o=n[l],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},r=self["webpackChunkstore"]=self["webpackChunkstore"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(2900)}));r=a.O(r)})();
//# sourceMappingURL=app.530bed35.js.map