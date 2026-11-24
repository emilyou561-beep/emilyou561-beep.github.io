import{Q as x,X as p,V as r,a1 as w,Y as y,x as z,w as b}from"./style-MjI-JEDg.js";const R=`
  attribute vec4 aSeed;
  uniform float uTime, uRadius, uInner, uHeight, uSize, uSpeed, uPx;
  uniform vec2 uWind, uBox;
  uniform float uSpread, uFog;
  uniform vec3 uCenter;
  varying float vAlpha;
  void main() {
    // place flake in an annulus (inner..outer radius), uniform by area
    float r = sqrt(mix(uInner * uInner, uRadius * uRadius, aSeed.x));
    float a = aSeed.z * 6.2831853;
    float fall = uSpeed * (0.65 + 0.7 * aSeed.w);
    float y = mod(aSeed.y * uHeight - uTime * fall, uHeight) - 0.5 * uHeight;
    vec3 p = uCenter + vec3(cos(a) * r, y, sin(a) * r);
    if (uBox.x > 0.0) {
      float t = 0.5 - y / uHeight;                       // 0 at the top, 1 at the bottom
      p = uCenter + vec3((aSeed.x - 0.5) * (uBox.x + uSpread * t), y, (aSeed.z - 0.5) * uBox.y);
    }
    // wind drift (wrapped back into the cylinder) + gentle per-flake flutter
    vec2 drift = uWind * uTime * (0.8 + 0.4 * aSeed.w);
    if (uBox.x > 0.0) p.x += sin(uTime * 0.3 + aSeed.w * 6.0) * uSpread * 0.15;
    else p.xz += drift - 2.0 * uRadius * floor((drift + uRadius) / (2.0 * uRadius));
    float ph = aSeed.w * 40.0 + uTime * (0.6 + aSeed.x);
    p.x += sin(ph) * uSize * 6.0;
    p.z += cos(ph * 0.83) * uSize * 6.0;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    float d = -mv.z;
    float sz = uSize * (0.45 + 2.2 * aSeed.w * aSeed.w * aSeed.w);
    gl_PointSize = clamp(sz * uPx / max(d, 1e-3), 1.2, 64.0);
    // fade in near the eye, out at the edges of the volume and at its top/bottom
    float edge = uBox.x > 0.0 ? 1.0 : 1.0 - smoothstep(0.75, 1.0, length(p.xz - uCenter.xz) / uRadius);
    float cap = 1.0 - smoothstep(0.38, 0.5, abs(y) / uHeight);
    vAlpha = smoothstep(uInner * 0.6, uInner * 1.6, d) * edge * cap * exp(-uFog * uFog * d * d);
    gl_Position = projectionMatrix * mv;
  }`,B=`
  uniform float uOpacity;
  varying float vAlpha;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float m = smoothstep(0.5, 0.0, length(c));
    m = m * m * (3.0 - 2.0 * m);
    float a = m * vAlpha * uOpacity;
    if (a < 0.01) discard;
    gl_FragColor = vec4(vec3(0.93, 0.95, 0.98), a);
  }`;function C(m,d,v,e={}){const s=new URLSearchParams(location.search),h=s.has("nosnow"),l=Math.round((e.count??9e3)*Number(s.get("snow")??1)),u=new Float32Array(l*4);for(let i=0;i<u.length;i++)u[i]=Math.random();const o=new x;o.setAttribute("position",new p(new Float32Array(l*3),3)),o.setAttribute("aSeed",new p(u,4));const a=e.radius??20,f=e.height??a*1.2,n={uTime:{value:0},uRadius:{value:a},uInner:{value:e.innerRadius??a*.04},uHeight:{value:f},uSize:{value:e.size??a*.0025},uSpeed:{value:e.speed??f*.06},uWind:{value:new r(...e.wind??[a*.01,a*.004])},uCenter:{value:(e.center??d.position).clone()},uOpacity:{value:e.opacity??.85},uPx:{value:1},uBox:{value:new r(...e.box??[0,0])},uSpread:{value:e.spread??0},uFog:{value:e.fog??0}},g=new w({vertexShader:R,fragmentShader:B,uniforms:n,transparent:!0,depthWrite:!1}),t=new y(o,g);t.frustumCulled=!1,t.renderOrder=10,t.visible=!h,m.add(t);const c=new r,S=new z;return{points:t,update(){n.uTime.value=S.getElapsedTime(),v.getDrawingBufferSize(c),n.uPx.value=c.y/(2*Math.tan(b.degToRad(d.fov)/2))}}}export{C as a};
