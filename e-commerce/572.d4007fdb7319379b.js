"use strict";(self.webpackChunke_commerce=self.webpackChunke_commerce||[]).push([[572],{7572:(y,u,c)=>{c.r(u),c.d(u,{HomePageModule:()=>Z});var i=c(6814),s=c(9310),a=c(5861),t=c(4946),p=c(9773);let d=(()=>{class e{constructor(o){this._productRepo=o}execute(){var o=this;return(0,a.Z)(function*(){return yield o._productRepo.getAllProducts()})()}static#t=this.\u0275fac=function(r){return new(r||e)(t.LFG(p.k))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),l=(()=>{class e{transform(o){return o.split(" ").slice(0,2).join(" ")}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275pipe=t.Yjl({name:"title",type:e,pure:!0})}return e})();const m=function(e){return[e]};let g=(()=>{class e{constructor(o){this.router=o}ngOnInit(){}onClick(){this.router.navigate(["product-details/"+this.product._id])}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(s.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-Product"]],inputs:{product:"product"},decls:17,vars:14,consts:[[1,"product","p-3","rounded-3","overflow-hidden"],[1,"cursor-pointer",3,"routerLink"],[1,"w-100",3,"src","alt"],[1,"text-main"],[1,"text-wrap","w-100"],[1,"d-flex","justify-content-between"],[1,"fa-solid","fa-star","rating-color","ms-1"],[1,"btn","btn-product","w-100","bg-main","text-white"]],template:function(r,n){1&r&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"p",3),t._uU(4),t.qZA(),t.TgZ(5,"h5",4),t._uU(6),t.ALo(7,"title"),t.qZA(),t.TgZ(8,"div",5)(9,"p"),t._uU(10),t.ALo(11,"currency"),t.qZA(),t.TgZ(12,"p"),t._uU(13),t._UZ(14,"i",6),t.qZA()()(),t.TgZ(15,"button",7),t._uU(16,"Add to Cart"),t.qZA()()),2&r&&(t.xp6(1),t.Q6J("routerLink",t.VKq(12,m,"/product-details/"+n.product._id)),t.xp6(1),t.Q6J("src",n.product.imageCover,t.LSH)("alt",n.product.title),t.xp6(2),t.hij("",n.product.category.name," "),t.xp6(2),t.Oqu(t.lcZ(7,7,n.product.title)),t.xp6(4),t.hij("",t.xi3(11,9,n.product.price,"EGP")," "),t.xp6(3),t.hij(" ",n.product.ratingsAverage," "))},dependencies:[s.rH,i.H9,l]})}return e})();function h(e,P){if(1&e&&(t.TgZ(0,"div",3),t._UZ(1,"app-Product",4),t.qZA()),2&e){const o=P.$implicit;t.xp6(1),t.Q6J("product",o)}}const v=s.Bz.forChild([{path:"",component:(()=>{class e{constructor(o){this.$getAllProductUseCase=o,this.data=[],this.getAllProduct()}ngOnInit(){}getAllProduct(){var o=this;return(0,a.Z)(function*(){o.data=yield o.$getAllProductUseCase.execute(),console.log(o.data)})()}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(d))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-HomePage"]],decls:3,vars:1,consts:[[1,"container","py-4"],[1,"row","g-2"],["class","col-md-3",4,"ngFor","ngForOf"],[1,"col-md-3"],[3,"product"]],template:function(r,n){1&r&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,h,2,1,"div",2),t.qZA()()),2&r&&(t.xp6(2),t.Q6J("ngForOf",n.data))},dependencies:[i.sg,g]})}return e})()}]);let Z=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[i.ez,v]})}return e})()}}]);