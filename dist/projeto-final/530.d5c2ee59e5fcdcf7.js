"use strict";(self.webpackChunkprojetoFinal=self.webpackChunkprojetoFinal||[]).push([[530],{2950:(ge,b,u)=>{u.d(b,{m:()=>z});var o=u(6895),h=u(8256);let $=(()=>{class a{}return a.\u0275fac=function(g){return new(g||a)},a.\u0275mod=h.oAB({type:a}),a.\u0275inj=h.cJS({imports:[o.ez]}),a})();var W=u(3128);let N=(()=>{class a{}return a.\u0275fac=function(g){return new(g||a)},a.\u0275mod=h.oAB({type:a}),a.\u0275inj=h.cJS({imports:[o.ez,W.Bz,$]}),a})(),S=(()=>{class a{}return a.\u0275fac=function(g){return new(g||a)},a.\u0275mod=h.oAB({type:a}),a.\u0275inj=h.cJS({imports:[o.ez]}),a})(),z=(()=>{class a{}return a.\u0275fac=function(g){return new(g||a)},a.\u0275mod=h.oAB({type:a}),a.\u0275inj=h.cJS({imports:[o.ez,S,N,S,N]}),a})()},9019:(ge,b,u)=>{u.d(b,{N:()=>o});const o={production:!0,apiURL:"http://localhost:3000"}},433:(ge,b,u)=>{u.d(b,{Fj:()=>G,NI:()=>ae,oH:()=>de,u5:()=>An,JJ:()=>je,JL:()=>Le,F:()=>j,On:()=>le,YN:()=>ft,UX:()=>Mn,Q7:()=>q,EJ:()=>L,_Y:()=>it,Kr:()=>mt});var o=u(8256),h=u(6895),$=u(9751),W=u(4742),N=u(8421),S=u(7669),z=u(5403),a=u(3268),m=u(1810),Ft=u(2076),Et=u(4004);let _e=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),C=(()=>{class n extends _e{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const p=new o.OlP("NgValueAccessor"),wt={provide:p,useExisting:(0,o.Gpc)(()=>G),multi:!0},St=new o.OlP("CompositionEventMode");let G=(()=>{class n extends _e{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Nt(){const n=(0,h.q)()?(0,h.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(St,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([wt]),o.qOj]}),n})();const d=new o.OlP("NgValidators"),y=new o.OlP("NgAsyncValidators");function Ae(n){return function _(n){return null==n||("string"==typeof n||Array.isArray(n))&&0===n.length}(n.value)?{required:!0}:null}function B(n){return null}function Oe(n){return null!=n}function we(n){return(0,o.QGY)(n)?(0,Ft.D)(n):n}function Ne(n){let t={};return n.forEach(e=>{t=null!=e?{...t,...e}:t}),0===Object.keys(t).length?null:t}function Se(n,t){return t.map(e=>e(n))}function Ge(n){return n.map(t=>function xt(n){return!n.validate}(t)?t:e=>t.validate(e))}function J(n){return null!=n?function Be(n){if(!n)return null;const t=n.filter(Oe);return 0==t.length?null:function(e){return Ne(Se(e,t))}}(Ge(n)):null}function Q(n){return null!=n?function xe(n){if(!n)return null;const t=n.filter(Oe);return 0==t.length?null:function(e){return function g(...n){const t=(0,S.jO)(n),{args:e,keys:r}=(0,W.D)(n),i=new $.y(s=>{const{length:l}=e;if(!l)return void s.complete();const f=new Array(l);let A=l,D=l;for(let Y=0;Y<l;Y++){let me=!1;(0,N.Xf)(e[Y]).subscribe((0,z.x)(s,bn=>{me||(me=!0,D--),f[Y]=bn},()=>A--,void 0,()=>{(!A||!me)&&(D||s.next(r?(0,m.n)(r,f):f),s.complete())}))}});return t?i.pipe((0,a.Z)(t)):i}(Se(e,t).map(we)).pipe((0,Et.U)(Ne))}}(Ge(n)):null}function Ie(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function ke(n){return n._rawValidators}function Pe(n){return n._rawAsyncValidators}function Z(n){return n?Array.isArray(n)?n:[n]:[]}function x(n,t){return Array.isArray(n)?n.includes(t):n===t}function He(n,t){const e=Z(t);return Z(n).forEach(i=>{x(e,i)||e.push(i)}),e}function Te(n,t){return Z(t).filter(e=>!x(n,e))}class Re{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=J(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Q(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class c extends Re{get formDirective(){return null}get path(){return null}}class v extends Re{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Ue{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let je=(()=>{class n extends Ue{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(v,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[o.qOj]}),n})(),Le=(()=>{class n extends Ue{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(c,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[o.qOj]}),n})();const F="VALID",k="INVALID",M="PENDING",E="DISABLED";function te(n){return(P(n)?n.validators:n)||null}function Ye(n){return Array.isArray(n)?J(n):n||null}function ne(n,t){return(P(t)?t.asyncValidators:n)||null}function $e(n){return Array.isArray(n)?Q(n):n||null}function P(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class Je{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=Ye(this._rawValidators),this._composedAsyncValidatorFn=$e(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===F}get invalid(){return this.status===k}get pending(){return this.status==M}get disabled(){return this.status===E}get enabled(){return this.status!==E}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=Ye(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=$e(t)}addValidators(t){this.setValidators(He(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(He(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Te(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Te(t,this._rawAsyncValidators))}hasValidator(t){return x(this._rawValidators,t)}hasAsyncValidator(t){return x(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=M,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=E,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=F,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===F||this.status===M)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?E:F}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=M,this._hasOwnPendingAsyncValidator=!0;const e=we(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){let e=t;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?E:this.errors?k:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(M)?M:this._anyControlsHaveStatus(k)?k:F}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){P(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}}class re extends Je{constructor(t,e,r){super(te(e),ne(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){(function ze(n,t,e){n._forEachChild((r,i)=>{if(void 0===e[i])throw new o.vHH(1002,"")})})(this,0,t),Object.keys(t).forEach(r=>{(function We(n,t,e){const r=n.controls;if(!(t?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[e])throw new o.vHH(1001,"")})(this,!0,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{const i=this.controls[r];i&&i.patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const[e,r]of Object.entries(this.controls))if(this.contains(e)&&t(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,r,i)=>((r.enabled||this.disabled)&&(e[i]=r.value),e))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,s)=>{r=e(r,i,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}}function O(n,t){oe(n,t),t.valueAccessor.writeValue(n.value),n.disabled&&t.valueAccessor.setDisabledState?.(!0),function Lt(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Qe(n,t)})}(n,t),function Yt(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function qt(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Qe(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function jt(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function T(n,t,e=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),function U(n,t){let e=!1;if(null!==n){if(null!==t.validator){const i=ke(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(l=>l!==t.validator);s.length!==i.length&&(e=!0,n.setValidators(s))}}if(null!==t.asyncValidator){const i=Pe(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(l=>l!==t.asyncValidator);s.length!==i.length&&(e=!0,n.setAsyncValidators(s))}}}const r=()=>{};return R(t._rawValidators,r),R(t._rawAsyncValidators,r),e}(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function R(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function oe(n,t){const e=ke(n);null!==t.validator?n.setValidators(Ie(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=Pe(n);null!==t.asyncValidator?n.setAsyncValidators(Ie(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();R(t._rawValidators,i),R(t._rawAsyncValidators,i)}function Qe(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function ie(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}function se(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===G?e=s:function zt(n){return Object.getPrototypeOf(n.constructor)===C}(s)?r=s:i=s}),i||r||e||null}const Qt={provide:c,useExisting:(0,o.Gpc)(()=>j)},w=(()=>Promise.resolve(null))();let j=(()=>{class n extends c{constructor(e,r){super(),this.submitted=!1,this._directives=new Set,this.ngSubmit=new o.vpe,this.form=new re({},J(e),Q(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){w.then(()=>{const r=this._findContainer(e.path);e.control=r.registerControl(e.name,e.control),O(e.control,e),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){w.then(()=>{const r=this._findContainer(e.path);r&&r.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){w.then(()=>{const r=this._findContainer(e.path),i=new re({});(function Ze(n,t){oe(n,t)})(i,e),r.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){w.then(()=>{const r=this._findContainer(e.path);r&&r.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,r){w.then(()=>{this.form.get(e.path).setValue(r)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submitted=!0,function Ke(n,t){n._syncPendingControls(),t.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this._directives),this.ngSubmit.emit(e),!1}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(d,10),o.Y36(y,10))},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(e,r){1&e&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([Qt]),o.qOj]}),n})();function et(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}function tt(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const ae=class extends Je{constructor(t=null,e,r){super(te(e),ne(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),P(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=tt(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){et(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){et(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){tt(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}},Kt={provide:v,useExisting:(0,o.Gpc)(()=>le)},ot=(()=>Promise.resolve(null))();let le=(()=>{class n extends v{constructor(e,r,i,s,l){super(),this._changeDetectorRef=l,this.control=new ae,this._registered=!1,this.update=new o.vpe,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=se(0,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){const r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),ie(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){O(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){ot.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){const r=e.isDisabled.currentValue,i=0!==r&&(0,o.D6c)(r);ot.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?function H(n,t){return[...t.path,n]}(e,this._parent):[e]}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(c,9),o.Y36(d,10),o.Y36(y,10),o.Y36(p,10),o.Y36(o.sBO,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([Kt]),o.qOj,o.TTD]}),n})(),it=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),at=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();const ue=new o.OlP("NgModelWithFormControlWarning"),on={provide:v,useExisting:(0,o.Gpc)(()=>de)};let de=(()=>{class n extends v{constructor(e,r,i,s){super(),this._ngModelWarningConfig=s,this.update=new o.vpe,this._ngModelWarningSent=!1,this._setValidators(e),this._setAsyncValidators(r),this.valueAccessor=se(0,i)}set isDisabled(e){}ngOnChanges(e){if(this._isControlChanged(e)){const r=e.form.previousValue;r&&T(r,this,!1),O(this.form,this),this.form.updateValueAndValidity({emitEvent:!1})}ie(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&T(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(e){return new(e||n)(o.Y36(d,10),o.Y36(y,10),o.Y36(p,10),o.Y36(ue,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[o._Bn([on]),o.qOj,o.TTD]}),n})();const dn={provide:p,useExisting:(0,o.Gpc)(()=>L),multi:!0};function ht(n,t){return null==n?`${t}`:(t&&"object"==typeof t&&(t="Object"),`${n}: ${t}`.slice(0,50))}let L=(()=>{class n extends C{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;const i=ht(this._getOptionId(e),e);this.setProperty("value",i)}registerOnChange(e){this.onChange=r=>{this.value=this._getOptionValue(r),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(const r of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(r),e))return r;return null}_getOptionValue(e){const r=function cn(n){return n.split(":")[0]}(e);return this._optionMap.has(r)?this._optionMap.get(r):e}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(e,r){1&e&&o.NdJ("change",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[o._Bn([dn]),o.qOj]}),n})(),ft=(()=>{class n{constructor(e,r,i){this._element=e,this._renderer=r,this._select=i,this._select&&(this.id=this._select._registerOption())}set ngValue(e){null!=this._select&&(this._select._optionMap.set(this.id,e),this._setElementValue(ht(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._setElementValue(e),this._select&&this._select.writeValue(this._select.value)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(L,9))},n.\u0275dir=o.lG2({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),n})();const hn={provide:p,useExisting:(0,o.Gpc)(()=>pe),multi:!0};function pt(n,t){return null==n?`${t}`:("string"==typeof t&&(t=`'${t}'`),t&&"object"==typeof t&&(t="Object"),`${n}: ${t}`.slice(0,50))}let pe=(()=>{class n extends C{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){let r;if(this.value=e,Array.isArray(e)){const i=e.map(s=>this._getOptionId(s));r=(s,l)=>{s._setSelected(i.indexOf(l.toString())>-1)}}else r=(i,s)=>{i._setSelected(!1)};this._optionMap.forEach(r)}registerOnChange(e){this.onChange=r=>{const i=[],s=r.selectedOptions;if(void 0!==s){const l=s;for(let f=0;f<l.length;f++){const D=this._getOptionValue(l[f].value);i.push(D)}}else{const l=r.options;for(let f=0;f<l.length;f++){const A=l[f];if(A.selected){const D=this._getOptionValue(A.value);i.push(D)}}}this.value=i,e(i)}}_registerOption(e){const r=(this._idCounter++).toString();return this._optionMap.set(r,e),r}_getOptionId(e){for(const r of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(r)._value,e))return r;return null}_getOptionValue(e){const r=function fn(n){return n.split(":")[0]}(e);return this._optionMap.has(r)?this._optionMap.get(r)._value:e}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(e,r){1&e&&o.NdJ("change",function(s){return r.onChange(s.target)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[o._Bn([hn]),o.qOj]}),n})(),mt=(()=>{class n{constructor(e,r,i){this._element=e,this._renderer=r,this._select=i,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){null!=this._select&&(this._value=e,this._setElementValue(pt(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(pt(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(pe,9))},n.\u0275dir=o.lG2({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),n})(),V=(()=>{class n{constructor(){this._validator=B}ngOnChanges(e){if(this.inputName in e){const r=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):B,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return null!=e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,features:[o.TTD]}),n})();const gn={provide:d,useExisting:(0,o.Gpc)(()=>q),multi:!0};let q=(()=>{class n extends V{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=o.D6c,this.createValidator=e=>Ae}enabled(e){return e}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(e,r){2&e&&o.uIk("required",r._enabled?"":null)},inputs:{required:"required"},features:[o._Bn([gn]),o.qOj]}),n})(),bt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[at]}),n})(),An=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[bt]}),n})(),Mn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:ue,useValue:e.warnOnNgModelWithFormControl}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[bt]}),n})()}}]);