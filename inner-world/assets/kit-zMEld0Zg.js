import{Q as st,X as dt,l as F,M as Xe,r as pt,J as pe,a5 as Ze,s as D,z as mt,a6 as vt,T as qe,B as ee,a7 as gt,b as O,C as xt,S as ot,f as Mt,O as wt,P as St,a3 as Tt,a8 as bt,a9 as Pt,aa as $,a1 as U,a2 as L,ab as Ee,V as N,a0 as te,H as ie,ac as z,x as Ct,g as ve,D as at,o as ge,y as me,ad as _t,ae as Te,af as be,ag as $e,ah as Ke,ai as yt,aj as Et,ak as Dt,al as Rt,N as Je,R as At,am as Nt,K as Ut,m as It,an as zt,ao as Ft,ap as Ot,aq as Lt,ar as Vt,as as Bt,A as kt,at as Ht,au as Gt,av as jt,k as Wt,aw as We,q as Qt}from"./style-MjI-JEDg.js";function rt(m,e=!1){const t=m[0].index!==null,a=new Set(Object.keys(m[0].attributes)),s=new Set(Object.keys(m[0].morphAttributes)),i={},r={},o=m[0].morphTargetsRelative,n=new st;let c=0;for(let l=0;l<m.length;++l){const u=m[l];let h=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!a.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;i[f]===void 0&&(i[f]=[]),i[f].push(u.attributes[f]),h++}if(h!==a.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;n.addGroup(c,f,l),c+=f}}if(t){let l=0;const u=[];for(let h=0;h<m.length;++h){const f=m[h].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+l);l+=m[h].attributes.position.count}n.setIndex(u)}for(const l in i){const u=et(i[l]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;n.setAttribute(l,u)}for(const l in r){const u=r[l][0].length;if(u===0)break;n.morphAttributes=n.morphAttributes||{},n.morphAttributes[l]=[];for(let h=0;h<u;++h){const f=[];for(let p=0;p<r[l].length;++p)f.push(r[l][p][h]);const g=et(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;n.morphAttributes[l].push(g)}}return n}function et(m){let e,t,a,s=-1,i=0;for(let c=0;c<m.length;++c){const l=m[c];if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=l.itemSize),t!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(a===void 0&&(a=l.normalized),a!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=l.gpuType),s!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;i+=l.count*t}const r=new e(i),o=new dt(r,t,a);let n=0;for(let c=0;c<m.length;++c){const l=m[c];if(l.isInterleavedBufferAttribute){const u=n/t;for(let h=0,f=l.count;h<f;h++)for(let g=0;g<t;g++){const p=l.getComponent(h,g);o.setComponent(h+u,g,p)}}else r.set(l.array,n);n+=l.count*t}return s!==void 0&&(o.gpuType=s),o}function J(m){let e=m>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const tt=new D(0,1,0);function Yt(m,e,t){const a=J(t),s=document.createElement("canvas");s.width=512,s.height=256;const i=s.getContext("2d");i.fillStyle=m,i.fillRect(0,0,512,256);const r=i.createLinearGradient(0,0,0,256);if(r.addColorStop(0,"rgba(40,32,24,0.05)"),r.addColorStop(.7,"rgba(40,32,24,0.25)"),r.addColorStop(1,"rgba(30,22,14,0.75)"),i.fillStyle=r,i.fillRect(0,0,512,256),e){i.save(),i.translate(150,110),i.rotate(Math.PI/4),i.fillStyle="#c9a12a",i.fillRect(-34,-34,68,68),i.strokeStyle="#1a1a1a",i.lineWidth=5,i.strokeRect(-30,-30,60,60),i.restore(),i.fillStyle="#1a1a1a",i.font="bold 40px sans-serif",i.textAlign="center",i.fillText("!",150,125),i.fillStyle="rgba(225,222,210,0.75)",i.fillRect(230,70,170,80),i.fillStyle="rgba(30,30,30,0.6)";for(let n=0;n<5;n++)i.fillRect(242,82+n*13,60+a()*90,5)}for(let n=0;n<40;n++){const c=a()*512,l=a()*256,u=6+a()*40,h=i.createRadialGradient(c,l,0,c,l,u);h.addColorStop(0,`rgba(${90+a()*40},${40+a()*20},15,${.6+a()*.35})`),h.addColorStop(1,"rgba(90,45,15,0)"),i.fillStyle=h,i.fillRect(c-u,l-u,u*2,u*2),a()<.5&&(i.fillStyle=`rgba(95,45,15,${.3+a()*.4})`,i.fillRect(c,l,2+a()*3,20+a()*90))}i.fillStyle="rgba(20,16,12,0.5)",i.fillRect(0,82,512,5),i.fillRect(0,168,512,5);const o=new xt(s);return o.colorSpace=ot,o.anisotropy=4,o}class li{constructor(e,t={}){this.scene=e,this.o=t;const a=t.envMap;this.bark=new F({color:3815218,roughness:1}),this.sewage=new Xe({color:1710610,roughness:.12,clearcoat:.5,clearcoatRoughness:.08,envMap:a,envMapIntensity:.28,polygonOffset:!0,polygonOffsetFactor:-4}),this.toxic=new Xe({color:3818e3,emissive:1844736,emissiveIntensity:.35,roughness:.18,clearcoat:.5,envMap:a,envMapIntensity:.3,polygonOffset:!0,polygonOffsetFactor:-5}),this.stain=new F({color:3814697,roughness:1,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),this.drums=[["#7a4f2d",!1],["#8a7a3c",!0],["#3a5664",!0],["#2d2e2b",!1],["#6b6e5e",!0]].map(([s,i],r)=>new F({map:Yt(s,i,11+r*7),roughness:.75,metalness:.35,envMap:a,envMapIntensity:.4})),this.hoop=new F({color:4863526,roughness:.8,metalness:.5,envMap:a,envMapIntensity:.4}),this.plastic=[12171437,4153208,10129226].map(s=>new F({color:s,roughness:.6})),this.weed=new F({color:7169616,roughness:1,side:pt}),this.wood=new F({color:5919044,roughness:1});for(const s of[this.sewage,this.toxic,this.stain])this.noShadow.add(s)}scene;o;groups=new Map;noShadow=new Set;bark;sewage;toxic;stain;drums;hoop;plastic;weed;wood;push(e,t){e.index&&(e=e.toNonIndexed()),this.groups.has(t)||this.groups.set(t,[]),this.groups.get(t).push(e)}member(e,t,a,s,i,r=7){const o=t.clone().sub(e),n=o.length(),c=new pe(s,a,n,r,1);c.applyQuaternion(new Ze().setFromUnitVectors(tt,o.normalize()));const l=e.clone().add(t).multiplyScalar(.5);c.translate(l.x,l.y,l.z),this.push(c,i)}tree(e,t,a,s,i,r=.12,o){const n=J(i),c=new D(e,t,a),l=s*.035;for(let f=0;f<(o?0:5);f++){const g=f/5*Math.PI*2+n(),p=c.clone().add(new D(Math.cos(g)*l*4,-.1,Math.sin(g)*l*4));this.member(c.clone().add(new D(0,l*1.5,0)),p,l*.7,l*.15,this.bark,5)}const u=(f,g,p,v,y)=>{let C=f.clone(),M=g.clone();const d=y>3?3:2;for(let S=0;S<d;S++){M.add(new D((n()-.5)*.5,(n()-.35)*.3,(n()-.5)*.5)).normalize();const w=C.clone().addScaledVector(M,p/d),x=v*(1-(S+1)/d*.3);this.member(C,w,v*(1-S/d*.3),x,this.bark,y>2?7:5),C=w}if(y<=0||v<.012)return;if(y<4&&n()<.18){this.member(C,C.clone().addScaledVector(M,p*.15),v*.7,v*.4,this.bark,5);return}const b=y>3?2+Math.floor(n()*2):2;for(let S=0;S<b;S++){const w=.45+n()*.5,x=n()*Math.PI*2,P=new D(Math.cos(x),0,Math.sin(x)),_=M.clone().multiplyScalar(Math.cos(w)).addScaledVector(P,Math.sin(w));_.y+=y<2?-.15:.05,u(C,_.normalize(),p*(.62+n()*.15),v*.62,y-1)}},h=new D((n()-.5)*r,1,(n()-.5)*r);o&&h.applyQuaternion(new Ze().setFromUnitVectors(tt,o.clone().normalize())),h.normalize(),u(c,h,s*.42,l,5)}blob(e,t,a,s=48){const i=J(a),r=[i()*6,i()*6,i()*6],o=new mt;for(let c=0;c<=s;c++){const l=c/s*Math.PI*2,u=1+.18*Math.sin(l*3+r[0])+.1*Math.sin(l*5+r[1])+.06*Math.sin(l*9+r[2]),h=Math.cos(l)*e*u,f=Math.sin(l)*t*u;c===0?o.moveTo(h,f):o.lineTo(h,f)}const n=new vt(o,2);return n.rotateX(-Math.PI/2),n}puddle(e,t,a,s,i,r,o="sewage",n=0){const c=this.blob(s*1.35,i*1.35,r+1);c.rotateY(n),c.translate(e,t+.015,a),this.push(c,this.stain);const l=this.blob(s,i,r);l.rotateY(n),l.translate(e,t+.03,a),this.push(l,o==="toxic"?this.toxic:this.sewage);const u=J(r+9);for(let h=0;h<3;h++){const f=this.blob(s*(.06+u()*.1),i*(.05+u()*.08),r+20+h,16);f.translate(e+(u()-.5)*s,t+.035,a+(u()-.5)*i),this.push(f,this.stain)}}drum(e,t,a,s,i){const n=[],c=new pe(.29,.29,.88,28,1);c.scale(1+i,1,1-i*.6),n.push([c,s]);for(const u of[-.88/6,.88/6]){const h=new qe(.298,.012,5,28);h.rotateX(Math.PI/2),h.translate(0,u,0),n.push([h,this.hoop])}for(const u of[-.88/2,.88/2]){const h=new qe(.29,.018,5,28);h.rotateX(Math.PI/2),h.translate(0,u,0),n.push([h,this.hoop])}const l=new pe(.03,.03,.03,8);l.translate(.15,.88/2+.01,.05),n.push([l,this.hoop]);for(const[u,h]of n)t?(u.rotateZ(Math.PI/2),u.translate(0,.29,0)):u.translate(0,.88/2,0),u.rotateY(a),u.translate(e.x,e.y,e.z),this.push(u,h)}dump(e,t,a,s,i=6,r=!0){const o=J(s),n=t,c=o()*Math.PI,l=(h,f,g,p,v,y)=>{const C=new ee(g,p,v);C.translate(h,y,f),C.rotateY(c),C.translate(e,n,a),this.push(C,this.wood)};for(let h=0;h<5;h++)o()>.2&&l(-.5+h*.25,0,.16,.025,1.2,.14);for(const h of[-.5,0,.5])l(0,h,1.1,.12,.1,.06);const u=[];for(let h=0;h<i;h++){let f=new D;for(let p=0;p<20&&(f.set(e+(o()-.5)*3.2,t,a+(o()-.5)*3.2),!u.every(v=>v.distanceTo(f)>.72));p++);u.push(f);const g=o()<.3;if(this.drum(f,g,o()*Math.PI*2,this.drums[Math.floor(o()*this.drums.length)],o()*.08),g&&r&&o()<.8){const p=o()*Math.PI*2;this.puddle(f.x+Math.cos(p)*.9,t,f.z+Math.sin(p)*.9,.7+o()*.7,.5+o()*.4,s*13+h,"toxic",p)}}for(let h=0;h<4+Math.floor(o()*4);h++){const f=new ee(.22,.34,.14),g=new pe(.025,.025,.04,8);g.translate(.06,.19,0);const p=o()<.5,v=o()*Math.PI*2,y=e+(o()-.5)*4.2,C=a+(o()-.5)*4.2,M=this.plastic[Math.floor(o()*this.plastic.length)];for(const d of[f,g])p?(d.rotateZ(Math.PI/2),d.translate(0,.07,0)):d.translate(0,.17,0),d.rotateY(v),d.translate(y,t,C),this.push(d,M)}r&&this.puddle(e+1.2,t,a+.8,1.4,.9,s+77,"sewage",o())}weeds(e,t,a,s,i,r=40,o=1){const n=J(i);for(let c=0;c<r;c++){const l=n()*Math.PI*2,u=Math.sqrt(n())*s,h=(.25+n()*.6)*o,f=new gt(.018*o,h,3,1);f.translate(0,h/2,0),f.rotateZ((n()-.5)*.9),f.rotateX((n()-.5)*.9),f.translate(e+Math.cos(l)*u,t,a+Math.sin(l)*u),this.push(f,this.weed)}}flush(){for(const[e,t]of this.groups){const a=rt(t,!1);if(!a)continue;const s=new O(a,e),i=this.o.shadows!==!1&&!this.noShadow.has(e);s.castShadow=i,s.receiveShadow=!0,this.noShadow.has(e)&&(s.renderOrder=1),this.scene.add(s)}this.groups.clear()}}class ci extends Mt{constructor(){super();const e=new ee;e.deleteAttribute("uv");const t=new F({side:wt}),a=new F,s=new St(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const i=new O(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);const r=new Tt(e,a,6),o=new bt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),r.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),r.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),r.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),r.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),r.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),r.setMatrixAt(5,o.matrix),this.add(r);const n=new O(e,K(50));n.position.set(-16.116,14.37,8.208),n.scale.set(.1,2.428,2.739),this.add(n);const c=new O(e,K(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const l=new O(e,K(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);const u=new O(e,K(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const h=new O(e,K(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);const f=new O(e,K(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function K(m){return new Pt({color:0,emissive:16777215,emissiveIntensity:m})}const q={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Xt extends ${constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof U?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=L.clone(e.uniforms),this.material=new U({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ee(this.material)}render(e,t,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class it extends ${constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,a){const s=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),i.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(a),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(s.EQUAL,1,4294967295),i.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),i.buffers.stencil.setLocked(!0)}}class Zt extends ${constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class qt{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const a=e.getSize(new N);this._width=a.width,this._height=a.height,t=new te(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ie}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Xt(q),this.copyPass.material.blending=z,this.clock=new Ct}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let a=!1;for(let s=0,i=this.passes.length;s<i;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,a),r.needsSwap){if(a){const o=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}it!==void 0&&(r instanceof it?a=!0:r instanceof Zt&&(a=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new N);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const a=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(a,s),this.renderTarget2.setSize(a,s);for(let i=0;i<this.passes.length;i++)this.passes[i].setSize(a,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class $t extends ${constructor(e,t,a=null,s=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=a,this.clearColor=s,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ve}render(e,t,a){const s=e.autoClear;e.autoClear=!1;let i,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=s}}const Pe={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new N},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new me},cameraProjectionMatrixInverse:{value:new me},cameraWorldMatrix:{value:new me},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ce={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Qe={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Kt(m=5){const e=Math.floor(m)%2===0?Math.floor(m)+1:Math.floor(m),t=Jt(e),a=t.length,s=new Uint8Array(a*4);for(let r=0;r<a;++r){const o=t[r],n=2*Math.PI*o/a,c=new D(Math.cos(n),Math.sin(n),0).normalize();s[r*4]=(c.x*.5+.5)*255,s[r*4+1]=(c.y*.5+.5)*255,s[r*4+2]=127,s[r*4+3]=255}const i=new at(s,e,e);return i.wrapS=ge,i.wrapT=ge,i.needsUpdate=!0,i}function Jt(m){const e=Math.floor(m)%2===0?Math.floor(m)+1:Math.floor(m),t=e*e,a=Array(t).fill(0);let s=Math.floor(e/2),i=e-1;for(let r=1;r<=t;){if(s===-1&&i===e?(i=e-2,s=0):(i===e&&(i=0),s<0&&(s=e-1)),a[s*e+i]!==0){i-=2,s++;continue}else a[s*e+i]=r++;i++,s--}return a}const _e={defines:{SAMPLES:16,SAMPLE_VECTORS:nt(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new N},cameraProjectionMatrixInverse:{value:new me},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function nt(m,e,t){const a=ei(m,e,t);let s="vec3[SAMPLES](";for(let i=0;i<m;i++){const r=a[i];s+=`vec3(${r.x}, ${r.y}, ${r.z})${i<m-1?",":")"}`}return s}function ei(m,e,t){const a=[];for(let s=0;s<m;s++){const i=2*Math.PI*e*s/m,r=Math.pow(s/(m-1),t);a.push(new D(Math.cos(i),Math.sin(i),r))}return a}class ti{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let a,s,i;const r=.5*(Math.sqrt(3)-1),o=(e+t)*r,n=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(n+c)*l,h=n-u,f=c-u,g=e-h,p=t-f;let v,y;g>p?(v=1,y=0):(v=0,y=1);const C=g-v+l,M=p-y+l,d=g-1+2*l,b=p-1+2*l,S=n&255,w=c&255,x=this.perm[S+this.perm[w]]%12,P=this.perm[S+v+this.perm[w+y]]%12,_=this.perm[S+1+this.perm[w+1]]%12;let T=.5-g*g-p*p;T<0?a=0:(T*=T,a=T*T*this._dot(this.grad3[x],g,p));let E=.5-C*C-M*M;E<0?s=0:(E*=E,s=E*E*this._dot(this.grad3[P],C,M));let A=.5-d*d-b*b;return A<0?i=0:(A*=A,i=A*A*this._dot(this.grad3[_],d,b)),70*(a+s+i)}noise3d(e,t,a){let s,i,r,o;const c=(e+t+a)*.3333333333333333,l=Math.floor(e+c),u=Math.floor(t+c),h=Math.floor(a+c),f=1/6,g=(l+u+h)*f,p=l-g,v=u-g,y=h-g,C=e-p,M=t-v,d=a-y;let b,S,w,x,P,_;C>=M?M>=d?(b=1,S=0,w=0,x=1,P=1,_=0):C>=d?(b=1,S=0,w=0,x=1,P=0,_=1):(b=0,S=0,w=1,x=1,P=0,_=1):M<d?(b=0,S=0,w=1,x=0,P=1,_=1):C<d?(b=0,S=1,w=0,x=0,P=1,_=1):(b=0,S=1,w=0,x=1,P=1,_=0);const T=C-b+f,E=M-S+f,A=d-w+f,W=C-x+2*f,V=M-P+2*f,B=d-_+2*f,Q=C-1+3*f,oe=M-1+3*f,R=d-1+3*f,Y=l&255,X=u&255,Z=h&255,xe=this.perm[Y+this.perm[X+this.perm[Z]]]%12,Me=this.perm[Y+b+this.perm[X+S+this.perm[Z+w]]]%12,we=this.perm[Y+x+this.perm[X+P+this.perm[Z+_]]]%12,Se=this.perm[Y+1+this.perm[X+1+this.perm[Z+1]]]%12;let k=.6-C*C-M*M-d*d;k<0?s=0:(k*=k,s=k*k*this._dot3(this.grad3[xe],C,M,d));let H=.6-T*T-E*E-A*A;H<0?i=0:(H*=H,i=H*H*this._dot3(this.grad3[Me],T,E,A));let G=.6-W*W-V*V-B*B;G<0?r=0:(G*=G,r=G*G*this._dot3(this.grad3[we],W,V,B));let j=.6-Q*Q-oe*oe-R*R;return j<0?o=0:(j*=j,o=j*j*this._dot3(this.grad3[Se],Q,oe,R)),32*(s+i+r+o)}noise4d(e,t,a,s){const i=this.grad4,r=this.simplex,o=this.perm,n=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let l,u,h,f,g;const p=(e+t+a+s)*n,v=Math.floor(e+p),y=Math.floor(t+p),C=Math.floor(a+p),M=Math.floor(s+p),d=(v+y+C+M)*c,b=v-d,S=y-d,w=C-d,x=M-d,P=e-b,_=t-S,T=a-w,E=s-x,A=P>_?32:0,W=P>T?16:0,V=_>T?8:0,B=P>E?4:0,Q=_>E?2:0,oe=T>E?1:0,R=A+W+V+B+Q+oe,Y=r[R][0]>=3?1:0,X=r[R][1]>=3?1:0,Z=r[R][2]>=3?1:0,xe=r[R][3]>=3?1:0,Me=r[R][0]>=2?1:0,we=r[R][1]>=2?1:0,Se=r[R][2]>=2?1:0,k=r[R][3]>=2?1:0,H=r[R][0]>=1?1:0,G=r[R][1]>=1?1:0,j=r[R][2]>=1?1:0,Ye=r[R][3]>=1?1:0,De=P-Y+c,Re=_-X+c,Ae=T-Z+c,Ne=E-xe+c,Ue=P-Me+2*c,Ie=_-we+2*c,ze=T-Se+2*c,Fe=E-k+2*c,Oe=P-H+3*c,Le=_-G+3*c,Ve=T-j+3*c,Be=E-Ye+3*c,ke=P-1+4*c,He=_-1+4*c,Ge=T-1+4*c,je=E-1+4*c,ae=v&255,re=y&255,ne=C&255,le=M&255,lt=o[ae+o[re+o[ne+o[le]]]]%32,ct=o[ae+Y+o[re+X+o[ne+Z+o[le+xe]]]]%32,ht=o[ae+Me+o[re+we+o[ne+Se+o[le+k]]]]%32,ut=o[ae+H+o[re+G+o[ne+j+o[le+Ye]]]]%32,ft=o[ae+1+o[re+1+o[ne+1+o[le+1]]]]%32;let ce=.6-P*P-_*_-T*T-E*E;ce<0?l=0:(ce*=ce,l=ce*ce*this._dot4(i[lt],P,_,T,E));let he=.6-De*De-Re*Re-Ae*Ae-Ne*Ne;he<0?u=0:(he*=he,u=he*he*this._dot4(i[ct],De,Re,Ae,Ne));let ue=.6-Ue*Ue-Ie*Ie-ze*ze-Fe*Fe;ue<0?h=0:(ue*=ue,h=ue*ue*this._dot4(i[ht],Ue,Ie,ze,Fe));let fe=.6-Oe*Oe-Le*Le-Ve*Ve-Be*Be;fe<0?f=0:(fe*=fe,f=fe*fe*this._dot4(i[ut],Oe,Le,Ve,Be));let de=.6-ke*ke-He*He-Ge*Ge-je*je;return de<0?g=0:(de*=de,g=de*de*this._dot4(i[ft],ke,He,Ge,je)),27*(l+u+h+f+g)}_dot(e,t,a){return e[0]*t+e[1]*a}_dot3(e,t,a,s){return e[0]*t+e[1]*a+e[2]*s}_dot4(e,t,a,s,i){return e[0]*t+e[1]*a+e[2]*s+e[3]*i}}class I extends ${constructor(e,t,a=512,s=512,i,r,o){super(),this.width=a,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Kt(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new te(this.width,this.height,{type:ie}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new U({defines:Object.assign({},Pe.defines),uniforms:L.clone(Pe.uniforms),vertexShader:Pe.vertexShader,fragmentShader:Pe.fragmentShader,blending:z,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new _t,this.normalMaterial.blending=z,this.pdMaterial=new U({defines:Object.assign({},_e.defines),uniforms:L.clone(_e.uniforms),vertexShader:_e.vertexShader,fragmentShader:_e.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new U({defines:Object.assign({},Ce.defines),uniforms:L.clone(Ce.uniforms),vertexShader:Ce.vertexShader,fragmentShader:Ce.fragmentShader,blending:z}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new U({uniforms:L.clone(q.uniforms),vertexShader:q.vertexShader,fragmentShader:q.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ke,blendDst:be,blendEquation:Te,blendSrcAlpha:$e,blendDstAlpha:be,blendEquationAlpha:Te}),this.blendMaterial=new U({uniforms:L.clone(Qe.uniforms),vertexShader:Qe.vertexShader,fragmentShader:Qe.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:yt,blendSrc:Ke,blendDst:be,blendEquation:Te,blendSrcAlpha:$e,blendDstAlpha:be,blendEquationAlpha:Te}),this._fsQuad=new Ee(null),this._originalClearColor=new ve,this.setGBuffer(i?i.depthTexture:void 0,i?i.normalTexture:void 0),r!==void 0&&this.updateGtaoMaterial(r),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Et,this.depthTexture.format=Dt,this.depthTexture.type=Rt,this.normalRenderTarget=new te(this.width,this.height,{minFilter:Je,magFilter:Je,type:ie,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const a=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=a,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=a,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=nt(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,a){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case I.OUTPUT.Off:break;case I.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=a.texture,this.copyMaterial.blending=z,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case I.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=z,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case I.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=z,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case I.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case I.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=z,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case I.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=a.texture,this.copyMaterial.blending=z,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,a,s,i){e.getClearColor(this._originalClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(a),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(r)}_renderOverride(e,t,a,s,i){e.getClearColor(this._originalClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(a),e.autoClear=!1,s=t.clearColor||s,i=t.clearAlpha||i,s!=null&&(e.setClearColor(s),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(r)}_overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(a){(a.isPoints||a.isLine||a.isLine2)&&a.visible&&(a.visible=!1,t.push(a))})}_restoreVisibility(){const e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){const t=new ti,a=e*e*4,s=new Uint8Array(a);for(let r=0;r<e;r++)for(let o=0;o<e;o++){const n=r,c=o;s[(r*e+o)*4]=(t.noise(n,c)*.5+.5)*255,s[(r*e+o)*4+1]=(t.noise(n+e,c)*.5+.5)*255,s[(r*e+o)*4+2]=(t.noise(n,c+e)*.5+.5)*255,s[(r*e+o)*4+3]=(t.noise(n+e,c+e)*.5+.5)*255}const i=new at(s,e,e,At,Nt);return i.wrapS=ge,i.wrapT=ge,i.needsUpdate=!0,i}}I.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const ii={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ve(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class se extends ${constructor(e,t=1,a,s){super(),this.strength=t,this.radius=a,this.threshold=s,this.resolution=e!==void 0?new N(e.x,e.y):new N(256,256),this.clearColor=new ve(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new te(i,r,{type:ie}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let l=0;l<this.nMips;l++){const u=new te(i,r,{type:ie});u.texture.name="UnrealBloomPass.h"+l,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const h=new te(i,r,{type:ie});h.texture.name="UnrealBloomPass.v"+l,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),i=Math.round(i/2),r=Math.round(r/2)}const o=ii;this.highPassUniforms=L.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new U({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const n=[3,5,7,9,11];i=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let l=0;l<this.nMips;l++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(n[l])),this.separableBlurMaterials[l].uniforms.invSize.value=new N(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=L.clone(q.uniforms),this.blendMaterial=new U({uniforms:this.copyUniforms,vertexShader:q.vertexShader,fragmentShader:q.fragmentShader,blending:Ut,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ve,this._oldClearAlpha=1,this._basic=new It,this._fsQuad=new Ee(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let a=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(a,s);for(let i=0;i<this.nMips;i++)this.renderTargetsHorizontal[i].setSize(a,s),this.renderTargetsVertical[i].setSize(a,s),this.separableBlurMaterials[i].uniforms.invSize.value=new N(1/a,1/s),a=Math.round(a/2),s=Math.round(s/2)}render(e,t,a,s,i){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),i&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[n].uniforms.direction.value=se.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[n]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=se.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[n]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,i&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(a),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){const t=[];for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(e*e))/e);return new U({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new N(.5,.5)},direction:{value:new N(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new U({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}se.BlurDirectionX=new N(1,0);se.BlurDirectionY=new N(0,1);const ye={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class si extends ${constructor(){super(),this.uniforms=L.clone(ye.uniforms),this.material=new zt({name:ye.name,uniforms:this.uniforms,vertexShader:ye.vertexShader,fragmentShader:ye.fragmentShader}),this._fsQuad=new Ee(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ft.getTransfer(this._outputColorSpace)===Ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Lt?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vt?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Bt?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===kt?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ht?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Gt?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===jt&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const oi=new Wt;function hi(m,e=!1){const t=oi.load(m);return t.wrapS=t.wrapT=ge,t.anisotropy=8,e&&(t.colorSpace=ot),t}const ai=`
varying vec3 vCwPos; varying vec3 vCwN;
uniform float uJoints; uniform float uStreaks; uniform float uFloorY; uniform vec2 uCyl; uniform float uWeather;
float cwH(float x){ return fract(sin(x*127.1)*43758.5453); }
float cwN1(float x){ float i=floor(x), f=fract(x); f=f*f*(3.0-2.0*f); return mix(cwH(i), cwH(i+1.0), f); }
float cwH2(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float cwN2(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(cwH2(i), cwH2(i+vec2(1.,0.)), f.x), mix(cwH2(i+vec2(0.,1.)), cwH2(i+vec2(1.,1.)), f.x), f.y); }
float cwFbm(vec2 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * cwN2(p); p = p * 2.03 + vec2(17.1, 9.2); a *= 0.5; } return s; }
// Damp patch from a signed field f (metres, > 0 is wet): crisp tide line plus a faint efflorescence halo.
vec3 cwTide(float f){
  float damp = smoothstep(-0.025, 0.025, f);
  float rim = 1.0 - smoothstep(0.0, 0.05, abs(f));
  float halo = smoothstep(-0.3, -0.04, f) * (1.0 - damp);
  return vec3(damp, rim, halo);
}
`;function ui(m,e={}){return m.onBeforeCompile=t=>{t.uniforms.uJoints={value:e.joints??1},t.uniforms.uStreaks={value:e.streaks??1},t.uniforms.uFloorY={value:e.floorY??0},t.uniforms.uCyl={value:new N(...e.cyl??[0,0])},t.uniforms.uWeather={value:e.weather??1},t.vertexShader=`varying vec3 vCwPos; varying vec3 vCwN;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 cwW = modelMatrix * vec4(transformed, 1.0); vCwPos = cwW.xyz; vCwN = normalize(mat3(modelMatrix) * objectNormal);`),t.fragmentShader=(e.cyl?`#define CW_CYL
`:"")+ai+t.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
    {
      vec3 an = abs(normalize(vCwN));
      float dist = length(vViewPosition);
      float near = 1.0 - smoothstep(70.0, 200.0, dist);
      float close = 1.0 - smoothstep(12.0, 45.0, dist);
      vec2 big = an.y > 0.5 ? vCwPos.xz : (an.x > an.z ? vCwPos.zy : vCwPos.xy);
      vec3 tint = vec3(mix(0.86, 1.06, cwN2(big * 0.05)) * mix(0.93, 1.03, cwN2(big * 0.45)));
      float rust = 0.0;
      const vec3 DAMP = vec3(0.64, 0.62, 0.575);      // wet concrete: darker and slightly warm
      if (an.y < 0.5) {
        #ifdef CW_CYL
          vec2 rel = vCwPos.xz - uCyl;
          vec2 p = vec2(atan(rel.x, -rel.y) * length(rel), vCwPos.y);
        #else
          vec2 p = an.x > an.z ? vCwPos.zy : vCwPos.xy;
        #endif
        // precast panel joints and formwork tie holes
        vec2 g = p / vec2(3.0, 1.5);
        vec2 fd = min(fract(g), 1.0 - fract(g)) * vec2(3.0, 1.5);
        float joint = 1.0 - smoothstep(0.012, 0.045, min(fd.x, fd.y));
        tint *= 1.0 - 0.3 * joint * near * uJoints;
        vec2 th = (fract(p / 0.75) - 0.5) * 0.75;
        float hole = 1.0 - smoothstep(0.028, 0.048, length(th));
        tint *= 1.0 - 0.45 * hole * near * uJoints;
        // seepage streaks under every 4.5 m line
        float below = fract((0.0 - vCwPos.y) / 4.5);
        float col = cwN1(p.x * 1.7) * cwN1(p.x * 0.31 + 7.0);
        float streak = smoothstep(0.18, 0.7, col) * exp(-below * 2.2) * (0.55 + 0.45 * cwN2(vec2(p.x * 3.0, vCwPos.y * 0.25)));
        tint *= mix(vec3(1.0), DAMP, 0.75 * streak * uStreaks);
        // damp washes hanging from each ledge line: length varies along the wall, ragged lower edge
        float lvl = floor(vCwPos.y / 4.5);
        float d = below * 4.5;                                              // metres below the line above
        float Lx = max(0.0, 5.0 * cwFbm(vec2(p.x * 0.09, lvl * 3.7)) - 2.0);
        float jag = (cwFbm(vec2(p.x * 0.8, vCwPos.y * 0.5)) - 0.5) * 1.1 + (cwN2(vec2(p.x * 3.5, vCwPos.y * 1.5)) - 0.5) * 0.25;
        vec3 tide = cwTide(Lx + jag * step(0.01, Lx) - d);
        float inner = tide.x * mix(0.45, 1.0, exp(-d * 0.35)) * mix(0.75, 1.0, cwN2(p * 1.1));
        tint *= mix(vec3(1.0), DAMP, inner * uWeather);
        tint *= 1.0 - 0.22 * tide.y * near * uWeather;
        tint *= 1.0 + 0.08 * tide.z * uWeather;
        // rust bleeding from a few tie holes
        vec2 hc = floor(p / 0.75);
        for (int k = 0; k < 4; k++) {
          vec2 c = hc + vec2(0.0, float(k));
          float pick = cwH2(c * 1.37 + 3.1);
          if (pick > 0.86) {
            vec2 hp = (c + 0.5) * 0.75;
            float len = 0.4 + 2.6 * cwH2(c + 11.0);
            float dy = hp.y - p.y;
            float w = 0.016 + 0.035 * clamp(dy / len, 0.0, 1.0);
            float dx = abs(p.x - hp.x + 0.02 * sin(p.y * 7.0 + pick * 20.0));
            float s = (1.0 - smoothstep(w * 0.5, w, dx)) * step(0.0, dy) * (1.0 - smoothstep(len * 0.3, len, dy));
            s = max(s, (1.0 - smoothstep(0.04, 0.09, length(p - hp))) * 0.8);
            rust = max(rust, s * (0.55 + 0.45 * cwN2(vec2(p.x * 20.0, p.y * 3.0))) * uJoints);
          }
        }
        // rust dripping from steel at ledge lines (rails, sills, fixings)
        float cx = floor(p.x / 0.9);
        float pk = cwH(cx * 3.7 + 1.3);
        if (pk > 0.8) {
          float xc = (cx + 0.5) * 0.9 + (cwH(cx) - 0.5) * 0.5;
          float L = 0.6 + 2.4 * cwH(cx + 7.0), dy = below * 4.5;
          float w = 0.03 + 0.05 * clamp(dy / L, 0.0, 1.0);
          rust = max(rust, (1.0 - smoothstep(w * 0.5, w, abs(p.x - xc))) * (1.0 - smoothstep(L * 0.4, L, dy)) * 0.75);
        }
        // pitting (bug holes) visible up close
        vec2 pc = floor(p * 14.0); vec2 pf = fract(p * 14.0) - 0.5;
        float pit = step(0.93, cwH2(pc)) * (1.0 - smoothstep(0.12, 0.3, length(pf)));
        tint *= 1.0 - 0.35 * pit * close;
        // grime rising from the ground
        tint *= mix(0.78, 1.0, smoothstep(0.0, 6.0, vCwPos.y - uFloorY));
      } else {
        // horizontal surfaces: occasional dried puddle marks with tide lines
        vec2 q = vCwPos.xz * 0.08;
        float warp = cwFbm(q * 1.3 + 2.0);
        float field = (cwFbm(q + warp * 0.8) + 0.08 * cwN2(big * 0.015) - 0.66) * 12.0;
        vec3 tide = cwTide(field);
        tint *= mix(vec3(1.0), DAMP * 1.08, tide.x * mix(0.5, 0.85, cwN2(vCwPos.xz * 0.7)) * uWeather);
        tint *= 1.0 - 0.16 * tide.y * near * uWeather;
        tint *= 1.0 + 0.05 * tide.z * uWeather;
        vec2 pc = floor(vCwPos.xz * 12.0); vec2 pf = fract(vCwPos.xz * 12.0) - 0.5;
        tint *= 1.0 - 0.3 * step(0.95, cwH2(pc)) * (1.0 - smoothstep(0.12, 0.3, length(pf))) * close;
      }
      diffuseColor.rgb *= tint;
      vec3 rustCol = diffuseColor.rgb * vec3(1.18, 0.66, 0.4);
      diffuseColor.rgb = mix(diffuseColor.rgb, rustCol, clamp(rust * near * uWeather, 0.0, 1.0));
    }`)},m.customProgramCacheKey=()=>`cw-${e.joints??1}-${e.streaks??1}-${e.floorY??0}-${e.cyl?"c":"p"}-${e.weather??1}`,m}const ri=new D(0,1,0);class fi{constructor(e=9){this.tile=e}tile;groups=new Map;push(e,t){this.groups.has(t)||this.groups.set(t,[]),this.groups.get(t).push(e)}worldUV(e,t,a,s,i){const r=e.attributes.uv,o=[[s,a],[s,a],[t,s],[t,s],[t,a],[t,a]];for(let n=0;n<6;n++)for(let c=0;c<4;c++){const l=n*4+c;r.setXY(l,r.getX(l)*o[n][0]/this.tile+i*.37,r.getY(l)*o[n][1]/this.tile+i*.23)}}box(e,t,a,s,i,r,o){const n=new ee(s,i,r);this.worldUV(n,s,i,r,e*.031+t*.017+a*.023),n.translate(e,t,a),this.push(n,o)}slab(e,t,a,s,i){const r=t.clone().sub(e),o=r.length(),n=r.clone().normalize();let c=new D().crossVectors(n,ri);c.lengthSq()<1e-6&&(c=new D(1,0,0)),c.normalize();const l=new D().crossVectors(c,n).normalize(),u=new ee(a,o,s);this.worldUV(u,a,o,s,e.x*.03+e.z*.05),u.applyMatrix4(new me().makeBasis(c,n,l));const h=e.clone().add(t).multiplyScalar(.5);u.translate(h.x,h.y,h.z),this.push(u,i)}rail(e,t,a,s=1.05,i=1.6){const r=e.distanceTo(t),o=Math.max(1,Math.round(r/i));for(let c=0;c<=o;c++){const l=e.clone().lerp(t,c/o);this.box(l.x,l.y+s/2,l.z,.05,s,.05,a)}const n=(c,l)=>c.clone().add(new D(0,l,0));this.slab(n(e,s),n(t,s),.06,.06,a),this.slab(n(e,s*.5),n(t,s*.5),.035,.035,a)}boxRot(e,t,a,s,i,r,o,n){const c=new ee(s,i,r);this.worldUV(c,s,i,r,e*.031+t*.017+a*.023),c.rotateY(o),c.translate(e,t,a),this.push(c,n)}arc(e,t,a,s,i,r,o,n,c,l=2.5){const u=Math.max(6,Math.ceil(Math.abs(r-i)*s/l)),h=[],f=[],g=[],p=this.tile,v=(d,b,S)=>[e+Math.sin(b)*d,S,t-Math.cos(b)*d],y=(d,b,S,w,x,P)=>{const _=typeof x=="function"?x(d):x,T=[b[0]-d[0],b[1]-d[1],b[2]-d[2]],E=[S[0]-d[0],S[1]-d[1],S[2]-d[2]],A=[T[1]*E[2]-T[2]*E[1],T[2]*E[0]-T[0]*E[2],T[0]*E[1]-T[1]*E[0]],W=A[0]*_[0]+A[1]*_[1]+A[2]*_[2]>=0?[[0,d],[1,b],[2,S],[0,d],[2,S],[3,w]]:[[0,d],[2,S],[1,b],[0,d],[3,w],[2,S]];for(const[V,B]of W){h.push(...B);const Q=typeof x=="function"?x(B):x;f.push(...Q),g.push(P[V][0],P[V][1])}},C=d=>b=>{const S=b[0]-e,w=b[2]-t,x=Math.hypot(S,w)||1;return[d*S/x,0,d*w/x]};for(let d=0;d<u;d++){const b=i+(r-i)*d/u,S=i+(r-i)*(d+1)/u,w=Math.min(b,S),x=Math.max(b,S);y(v(s,w,o),v(s,x,o),v(s,x,n),v(s,w,n),C(1),[[w*s/p,o/p],[x*s/p,o/p],[x*s/p,n/p],[w*s/p,n/p]]),y(v(a,x,o),v(a,w,o),v(a,w,n),v(a,x,n),C(-1),[[x*a/p,o/p],[w*a/p,o/p],[w*a/p,n/p],[x*a/p,n/p]]);const P=[v(a,w,n),v(a,x,n),v(s,x,n),v(s,w,n)];y(P[0],P[3],P[2],P[1],[0,1,0],[P[0],P[3],P[2],P[1]].map(T=>[T[0]/p,T[2]/p]));const _=[v(a,w,o),v(a,x,o),v(s,x,o),v(s,w,o)];y(_[0],_[1],_[2],_[3],[0,-1,0],_.map(T=>[T[0]/p,T[2]/p]))}for(const[d,b]of[[Math.min(i,r),-1],[Math.max(i,r),1]]){const S=[b*Math.cos(d),0,b*Math.sin(d)],w=v(a,d,o),x=v(s,d,o),P=v(s,d,n),_=v(a,d,n),T=[[a/p,o/p],[s/p,o/p],[s/p,n/p],[a/p,n/p]];b>0?y(w,x,P,_,S,T):y(x,w,_,P,S,[T[1],T[0],T[3],T[2]])}const M=new st;M.setAttribute("position",new We(h,3)),M.setAttribute("normal",new We(f,3)),M.setAttribute("uv",new We(g,2)),this.pushNonIndexed(M,c)}cylinder(e,t,a,s,i,r,o=64){const n=new pe(s,s,i,o,1,!0),c=n.attributes.uv;for(let l=0;l<c.count;l++)c.setXY(l,c.getX(l)*(2*Math.PI*s)/this.tile,c.getY(l)*i/this.tile);n.translate(e,t+i/2,a),this.push(n,r),this.disc(e,a,s,t+i,r,1),this.disc(e,a,s,t,r,-1)}disc(e,t,a,s,i,r){const o=new Qt(a,96);o.rotateX(r>0?-Math.PI/2:Math.PI/2),o.translate(e,s,t);const n=o.attributes.position,c=o.attributes.uv;for(let l=0;l<n.count;l++)c.setXY(l,n.getX(l)/this.tile,n.getZ(l)/this.tile);this.push(o,i)}curvedRibbon(e,t,a,s,i,r,o,n,c,l,u=1.8){const h=M=>a+s*M,f=(M,d)=>[Math.min(M,d),Math.max(M,d)],g=f(h(.01),h(.05));this.arc(e,t,g[0],g[1],i,r,o,o+u,n);const p=f(h(-.05),h(.45));this.arc(e,t,p[0],p[1],i-.004,r+.004,o-.2,o,c);const v=f(h(-.05),h(.28));this.arc(e,t,v[0],v[1],i,r,o+u,o+u+.28,c);const y=f(h(.03),h(.09));this.arc(e,t,y[0],y[1],i,r,o+1.17,o+1.23,l);const C=Math.max(2,Math.round(Math.abs(r-i)*a/1.25));for(let M=1;M<C;M++){const d=i+(r-i)*M/C,b=h(.06);this.boxRot(e+Math.sin(d)*b,o+u/2,t-Math.cos(d)*b,.07,u,.08,-d,l)}for(const M of[i,r]){const d=h(.14);this.boxRot(e+Math.sin(M)*d,o+u/2,t-Math.cos(M)*d,.24,u,.28,-M,c)}}railArc(e,t,a,s,i,r,o,n=1.05){const c=Math.max(2,Math.round(Math.abs(i-s)*a/1.7));for(let l=0;l<=c;l++){const u=s+(i-s)*l/c;this.boxRot(e+Math.sin(u)*a,r+n/2,t-Math.cos(u)*a,.05,n,.05,-u,o)}this.arc(e,t,a-.03,a+.03,s,i,r+n-.03,r+n+.03,o,2),this.arc(e,t,a-.02,a+.02,s,i,r+n*.5-.02,r+n*.5+.02,o,2)}pushNonIndexed(e,t){this.push(e,t)}flush(e,t=[]){for(const[a,s]of this.groups){const i=rt(s.map(o=>o.index?o.toNonIndexed():o),!1);if(!i)continue;const r=new O(i,a);r.castShadow=!t.includes(a),r.receiveShadow=!0,e.add(r)}this.groups.clear()}}function di(m,e,t,a=2.5,s=.9,i){const r=new qt(m);r.addPass(new $t(e,t));const o=new I(e,t,innerWidth,innerHeight);return o.updateGtaoMaterial({radius:a,distanceExponent:1.4,thickness:3,scale:1.2,samples:16}),o.blendIntensity=s,location.search.includes("noao")&&(o.enabled=!1),r.addPass(o),i&&r.addPass(new se(new N(innerWidth,innerHeight),i.strength,i.radius,i.threshold)),r.addPass(new si),addEventListener("resize",()=>r.setSize(innerWidth,innerHeight)),r}const pi=(m,e,t)=>new D(m,e,t);export{fi as B,li as D,qt as E,I as G,si as O,ci as R,di as a,$t as b,ui as d,rt as m,hi as t,pi as v};
