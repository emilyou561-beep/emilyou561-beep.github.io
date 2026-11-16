// Emily Ou — a late-night desk.
// The scene is modelled in code below; the words come from content.js.

import * as C from './content.js'

const $ = (s, r = document) => r.querySelector(s)
const $$ = (s, r = document) => [...r.querySelectorAll(s)]
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])
const PAGES = ['projects', 'experience', 'about']
const TEST = new URLSearchParams(location.search).has('test')

/* ---------------------------------------------------------------- pages */

let projIndex = 0
function renderProjects() {
  const p = C.projects[projIndex]
  const n = C.projects.length
  $('#projects').innerHTML = `
    <div class="bar"><span class="dots"><i></i><i></i><i></i></span><b>projects</b><span>~/emily/${esc(p.id)}</span><span class="sp"></span>
      <span class="pager"><button class="ib" data-step="-1" aria-label="Previous project">←</button><span class="n">${projIndex + 1} / ${n}</span><button class="ib" data-step="1" aria-label="Next project">→</button></span>
      <button class="ib" data-go="home" aria-label="Close">✕</button></div>
    <div class="proj">
      <figure><img src="${p.image}" alt="${esc(p.alt)}"></figure>
      <div class="txt scroll">
        <p class="ctx">${esc(p.org)} · ${esc(p.period)}</p>
        <h2>${esc(p.title)}</h2>
        <p>${esc(p.pitch)}</p>
        <div class="mets">${p.metrics.map((m) => `<div><b>${esc(m.value)}</b><span>${esc(m.label)}</span></div>`).join('')}</div>
        <div class="chips">${p.stack.map((s) => `<span>${esc(s)}</span>`).join('')}</div>
        <div class="lnks">${p.links.map((l) => `<a href="${l.href}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('')}</div>
      </div>
    </div>`
}
function stepProject(d) {
  projIndex = (projIndex + d + C.projects.length) % C.projects.length
  renderProjects()
}

function renderExperience() {
  const s = C.site
  $('#experience').innerHTML = `
    <div class="bar"><span class="dots"><i></i><i></i><i></i></span><b>resume.md</b><span class="sp"></span><button class="ib" data-go="home" aria-label="Close">✕</button></div>
    <div class="cv scroll">
      <h3>// experience</h3>
      ${C.experience.map((j) => `<div class="job"><h4>${esc(j.role)} · ${esc(j.org)}</h4><p class="meta">${esc(j.period)} · ${esc(j.place)}</p><ul>${j.points.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>`).join('')}
      <h3>// education</h3>
      <div class="edu">${C.education.map((e) => `<div><b>${esc(e.school)}</b><em>${esc(e.period)}</em><span>${esc(e.degree)}</span></div>`).join('')}</div>
      <h3>// skills</h3>
      <dl class="sk">${C.skills.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl>
      <div class="lnks"><a href="mailto:${s.email}">${esc(s.email)}</a>${s.links.map((l) => `<a href="${l.href}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('')}</div>
    </div>`
}

function renderAbout() {
  const a = C.about, s = C.site
  $('#about').innerHTML = `
    <div class="journal"><div class="scroll">
      <div class="hello"><img src="img/portrait.jpg" alt="Emily Ou"><h2>${esc(a.hello)}</h2></div>
      ${a.body.map((p) => `<p>${esc(p)}</p>`).join('')}
      <dl class="facts">${a.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
      <p class="small">Photos on the wall · tap to open</p>
      <div class="thumbs">${C.photos.map((p, i) => `<button data-photo="${i}" aria-label="${esc(p.caption)}"><img src="img/thumbs/${p.id}.jpg" alt="${esc(p.caption)}" loading="lazy"></button>`).join('')}</div>
      <p class="small">Say hi</p>
      <div class="contact">${s.links.map((l) => `<a href="${l.href}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join('')}<a href="mailto:${s.email}">Email</a></div>
      <p class="mail">${esc(s.email)}</p>
    </div></div>`
}

function openPhoto(i) {
  const p = C.photos[i]
  $('#lbimg').src = `img/photos/${p.id}.jpg`
  $('#lbimg').alt = p.caption
  $('#lbcap').textContent = p.caption
  $('#lb').classList.add('show')
  $('#lbx').focus()
}
const closePhoto = () => $('#lb').classList.remove('show')

let toastTimer
function toast(text, action) {
  const t = $('#toast')
  t.innerHTML = `<span>${esc(text)}</span>${action ? `<button>${esc(action.label)}</button>` : ''}`
  if (action) t.querySelector('button').onclick = () => { t.classList.remove('show'); action.run() }
  t.classList.add('show')
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => t.classList.remove('show'), 5200)
}

renderProjects()
renderExperience()
renderAbout()

/* ---------------------------------------------------------------- routing */

let page = 'home'
let started = false
const pageFromHash = () => (PAGES.includes(location.hash.slice(1)) ? location.hash.slice(1) : 'home')
function go(p) {
  if (p === 'home') {
    if (location.hash) history.replaceState(null, '', location.pathname + location.search)
    setPage('home')
  } else if (location.hash.slice(1) !== p) location.hash = p
  else setPage(p)
}
window.addEventListener('hashchange', () => setPage(pageFromHash()))
let onPage = () => {}
function setPage(p) {
  if (!started) return
  page = p
  document.body.classList.toggle('home', p === 'home')
  document.body.classList.toggle('in-page', p !== 'home')
  $$('nav a').forEach((a) => (a.dataset.go === p ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current')))
  $$('.page').forEach((el) => el.classList.remove('show'))
  onPage(p)
}

document.addEventListener('click', (e) => {
  const g = e.target.closest('[data-go]')
  if (g) { e.preventDefault(); go(g.dataset.go); return }
  const s = e.target.closest('[data-step]')
  if (s) { stepProject(+s.dataset.step); return }
  const ph = e.target.closest('[data-photo]')
  if (ph) { openPhoto(+ph.dataset.photo); return }
  if (e.target.id === 'lb' || e.target.closest('#lbx')) closePhoto()
})
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { if ($('#lb').classList.contains('show')) closePhoto(); else if (page !== 'home') go('home') }
  if (page === 'projects' && !e.target.closest('input,textarea')) {
    if (e.key === 'ArrowRight') stepProject(1)
    if (e.key === 'ArrowLeft') stepProject(-1)
  }
})

/* ---------------------------------------------------------------- boot */

const bootLines = [
  ['EO-BIOS v6.3  ·  late-night edition', ''],
  ['', ''],
  ['Detecting home drives ....... ', 'Beijing · Chicago (South Loop) · Ann Arbor'],
  ['Loading desk.scene .......... ', '__LOAD__'],
  ['Checking caffeine ........... ', 'low, ramen instead'],
  ['Room lights ................. ', "off — it's 1 a.m."],
]
let bootReady = false, sceneReady = false, wantStart = false, loadPct = 0
function drawBoot(n) {
  const out = bootLines.slice(0, n).map(([a, b]) => {
    if (b === '__LOAD__') b = sceneReady ? 'ok' : `${Math.round(loadPct * 100)}%`
    return esc(a) + (b ? `<span class="ok">${esc(b)}</span>` : '')
  })
  if (n >= bootLines.length) out.push(`<div class="go">${sceneReady ? 'Press any key or click to power on' : 'Warming up the GPU'} <span class="cur"></span></div>`)
  $('#bootTxt').innerHTML = out.join('\n')
}
let bootN = 0
const bootTick = setInterval(() => {
  bootN++
  drawBoot(bootN)
  if (bootN >= bootLines.length) { bootReady = true; clearInterval(bootTick); maybeStart() }
}, 260)
setInterval(() => { if (bootReady && !started) drawBoot(bootN) }, 300)
function requestStart() { wantStart = true; maybeStart() }
$('#boot').addEventListener('click', requestStart)
window.addEventListener('keydown', (e) => { if (!started && e.key !== 'Tab') requestStart() })

let powerOn = () => {}
function maybeStart() {
  if (!wantStart || !sceneReady || started) return
  started = true
  $('#boot').classList.add('gone')
  document.body.classList.add('on')
  powerOn()
  setTimeout(() => setPage(pageFromHash()), 1100)
}

/* grain texture for the film overlay */
{
  const c = document.createElement('canvas'); c.width = c.height = 160
  const g = c.getContext('2d'), d = g.createImageData(160, 160)
  for (let i = 0; i < d.data.length; i += 4) { const v = Math.random() * 255; d.data[i] = d.data[i + 1] = d.data[i + 2] = v; d.data[i + 3] = 255 }
  g.putImageData(d, 0, 0)
  $('#grain').style.backgroundImage = `url(${c.toDataURL()})`
}

/* ---------------------------------------------------------------- 3D */

function goFlat() {
  started = true
  clearInterval(bootTick)
  document.body.classList.add('flat', 'on')
  document.body.classList.remove('home')
  $$('.page').forEach((el) => el.classList.add('show'))
}

let THREE
try {
  const probe = document.createElement('canvas')
  if (!(probe.getContext('webgl2') || probe.getContext('webgl'))) throw new Error('no webgl')
  THREE = await import('three')
  await buildScene()
} catch (err) {
  console.error(err)
  goFlat()
}

async function buildScene() {
  const { RoundedBoxGeometry } = await import('three/addons/geometries/RoundedBoxGeometry.js')
  const { EffectComposer } = await import('three/addons/postprocessing/EffectComposer.js')
  const { RenderPass } = await import('three/addons/postprocessing/RenderPass.js')
  const { UnrealBloomPass } = await import('three/addons/postprocessing/UnrealBloomPass.js')
  const { OutputPass } = await import('three/addons/postprocessing/OutputPass.js')
  const { RectAreaLightUniformsLib } = await import('three/addons/lights/RectAreaLightUniformsLib.js')
  RectAreaLightUniformsLib.init()

  const V3 = THREE.Vector3
  const canvas = $('#gl')
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' })
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.3
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x05030a)
  scene.fog = new THREE.Fog(0x07040e, 7, 14)
  const camera = new THREE.PerspectiveCamera(45, 1, 0.03, 40)

  const loading = new THREE.LoadingManager()
  loading.onProgress = (_u, a, b) => (loadPct = a / b)
  const texLoader = new THREE.TextureLoader(loading)

  try { await Promise.race([Promise.all(['600 40px Geist', '400 20px "Geist Mono", ui-monospace, monospace', '500 40px Caveat, cursive'].map((f) => document.fonts.load(f))), new Promise((r) => setTimeout(r, 2500))]) } catch {}

  /* ---- helpers */
  const rbox = (w, h, d, r, mat) => new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 2, Math.min(r, Math.min(w, h, d) / 2 - 1e-4)), mat)
  const add = (parent, mesh, x = 0, y = 0, z = 0) => { mesh.position.set(x, y, z); parent.add(mesh); return mesh }
  function ctex(w, h, draw) {
    const c = document.createElement('canvas'); c.width = w; c.height = h
    draw(c.getContext('2d'), w, h)
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    t.anisotropy = renderer.capabilities.getMaxAnisotropy()
    return t
  }
  const std = (color, roughness = 0.6, metalness = 0, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra })
  const rnd = (() => { let s = 63; return () => ((s = (s * 16807) % 2147483647) / 2147483647) })()

  // things that brighten when the power comes on
  const glows = [] // { mat, base: Color }
  const lights = [] // { light, base }
  const glow = (mat) => { glows.push({ mat, base: mat.color.clone() }); return mat }
  const lit = (light) => { lights.push({ light, base: light.intensity }); return light }
  const hot = (r, g, b) => glow(new THREE.MeshBasicMaterial({ color: new THREE.Color(r, g, b) }))

  const M = {
    desk: std(0x0f1012, 0.42, 0.15),
    black: std(0x101113, 0.6, 0.1),
    soft: std(0x18191c, 0.9),
    metal: std(0x34373c, 0.35, 0.85),
    key: std(0x1b1c20, 0.7),
  }

  /* ---- room */
  const room = new THREE.Group(); scene.add(room)
  const floorTex = ctex(1024, 1024, (g, w, h) => {
    g.fillStyle = '#2a2019'; g.fillRect(0, 0, w, h)
    const n = 8, pw = w / n
    for (let i = 0; i < n; i++) for (let j = 0; j < 4; j++) {
      const y0 = ((j + (i % 2) * 0.5) * h) / 4
      const l = 22 + rnd() * 14
      g.fillStyle = `hsl(24 22% ${l * 0.55}%)`
      g.fillRect(i * pw + 1, y0 + 1, pw - 2, h / 4 - 2)
      g.fillRect(i * pw + 1, y0 + 1 - h, pw - 2, h / 4 - 2)
      for (let k = 0; k < 14; k++) { g.strokeStyle = `rgba(0,0,0,${0.08 + rnd() * 0.1})`; g.beginPath(); const x = i * pw + rnd() * pw; g.moveTo(x, y0); g.lineTo(x + rnd() * 6 - 3, y0 + h / 4); g.stroke() }
    }
  })
  floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping; floorTex.repeat.set(3, 3)
  const floor = add(room, new THREE.Mesh(new THREE.PlaneGeometry(6.2, 10), std(0xffffff, 0.75, 0, { map: floorTex })), 0.7, 0, 5)
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true
  const wallMat = std(0x30333a, 0.95)
  add(room, new THREE.Mesh(new THREE.PlaneGeometry(6.2, 2.8), wallMat), 0.7, 1.4, 0).receiveShadow = true
  const lw = add(room, new THREE.Mesh(new THREE.PlaneGeometry(10, 2.8), wallMat), -2.4, 1.4, 5); lw.rotation.y = Math.PI / 2
  const rw = add(room, new THREE.Mesh(new THREE.PlaneGeometry(10, 2.8), wallMat), 3.8, 1.4, 5); rw.rotation.y = -Math.PI / 2
  const ceil = add(room, new THREE.Mesh(new THREE.PlaneGeometry(6.2, 10), std(0x141518, 1)), 0.7, 2.8, 5); ceil.rotation.x = Math.PI / 2
  add(room, new THREE.Mesh(new THREE.BoxGeometry(6.2, 0.08, 0.015), M.black), 0.7, 0.04, 0.008)
  const rug = add(room, new THREE.Mesh(new THREE.CircleGeometry(1.15, 64), std(0x17181b, 1)), 0.15, 0.004, 1.5); rug.rotation.x = -Math.PI / 2; rug.receiveShadow = true

  /* ---- window with the skyline (left wall) */
  const sky = ctex(1024, 1024, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#04060f'); gr.addColorStop(0.6, '#140f33'); gr.addColorStop(1, '#3a1442')
    g.fillStyle = gr; g.fillRect(0, 0, w, h)
    for (let i = 0; i < 140; i++) { g.fillStyle = `rgba(255,255,255,${rnd() * 0.7})`; g.fillRect(rnd() * w, rnd() * h * 0.5, 1.5, 1.5) }
    const mg = g.createRadialGradient(760, 190, 10, 760, 190, 160); mg.addColorStop(0, 'rgba(220,230,255,.35)'); mg.addColorStop(1, 'rgba(220,230,255,0)')
    g.fillStyle = mg; g.fillRect(560, 0, 400, 400)
    g.fillStyle = '#e8ecf5'; g.beginPath(); g.arc(760, 190, 38, 0, 7); g.fill()
    let x = -10
    while (x < w) {
      const bw = 40 + rnd() * 90
      let bh = 220 + rnd() * 380
      if (x > 380 && x < 470) bh = 820
      const top = h - bh
      g.fillStyle = '#05040b'; g.fillRect(x, top, bw, bh)
      if (rnd() < 0.35) { const nc = rnd() < 0.5 ? '#ff3fb4' : '#3fe8ff'; g.fillStyle = nc; g.shadowColor = nc; g.shadowBlur = 14; g.fillRect(x + 4, top + 20 + rnd() * 80, Math.max(6, bw * 0.25), 26 + rnd() * 50); g.shadowBlur = 0 }
      if (bh === 820) { g.fillRect(x + 12, top - 70, 5, 70); g.fillRect(x + bw - 18, top - 60, 5, 60) }
      for (let yy = top + 12; yy < h - 6; yy += 14) for (let xx = x + 6; xx < x + bw - 8; xx += 11) {
        if (rnd() < 0.24) { g.fillStyle = rnd() < 0.75 ? `rgba(255,200,130,${0.4 + rnd() * 0.5})` : `rgba(170,210,255,${0.4 + rnd() * 0.4})`; g.fillRect(xx, yy, 5, 7) }
      }
      x += bw + 4 + rnd() * 10
    }
  })
  const win = new THREE.Group(); win.position.set(-2.39, 1.6, 1.25); win.rotation.y = Math.PI / 2; room.add(win)
  const skyMat = glow(new THREE.MeshBasicMaterial({ map: sky, color: 0xb0b6c8 }))
  add(win, new THREE.Mesh(new THREE.PlaneGeometry(1.3, 1.15), skyMat), 0, 0, 0.005)
  for (const [w, h, x, y] of [[1.42, 0.06, 0, 0.6], [1.42, 0.06, 0, -0.6], [0.06, 1.26, 0.68, 0], [0.06, 1.26, -0.68, 0], [0.03, 1.15, 0, 0], [1.3, 0.03, 0, 0.12]]) add(win, rbox(w, h, 0.05, 0.01, M.black), x, y, 0.025)
  add(win, rbox(1.5, 0.035, 0.16, 0.01, M.black), 0, -0.64, 0.08)
  const moon = lit(new THREE.DirectionalLight(0x8ea4ff, 0.55)); moon.position.set(-3.5, 2.6, 1.0); moon.target.position.set(0.5, 0.6, 1.2); scene.add(moon, moon.target)
  const winGlow = lit(new THREE.RectAreaLight(0x6f86d8, 1.6, 1.3, 1.15)); winGlow.position.set(-2.37, 1.6, 1.25); winGlow.lookAt(0, 1.4, 1.25); scene.add(winGlow)
  const hits = []
  const hit = (obj, kind, label) => { obj.userData.hit = { kind, label }; hits.push(obj); return obj }
  hit(win, 'window', 'Chicago, 1 a.m.')

  /* ---- desk */
  const desk = new THREE.Group(); scene.add(desk)
  const top = add(desk, rbox(2.0, 0.04, 0.75, 0.012, M.desk), 0, 0.73, 0.425); top.castShadow = top.receiveShadow = true
  for (const x of [-0.97, 0.97]) add(desk, rbox(0.045, 0.71, 0.66, 0.008, M.black), x, 0.355, 0.42).castShadow = true
  add(desk, rbox(1.9, 0.05, 0.03, 0.008, M.black), 0, 0.66, 0.12)
  const led = add(desk, new THREE.Mesh(new THREE.BoxGeometry(1.92, 0.008, 0.01), hot(2.8, 0.35, 2.0)), 0, 0.708, 0.06)
  const ledWash = lit(new THREE.RectAreaLight(0xff3fb4, 9, 1.9, 0.12)); ledWash.position.set(0, 0.7, 0.05); ledWash.lookAt(0, 1.6, -0.6); scene.add(ledWash)
  const underLed = add(desk, new THREE.Mesh(new THREE.BoxGeometry(1.86, 0.006, 0.01), hot(0.4, 2.2, 2.0)), 0, 0.706, 0.79)
  const underWash = lit(new THREE.RectAreaLight(0x5fe0d2, 3, 1.8, 0.1)); underWash.position.set(0, 0.7, 0.78); underWash.lookAt(0, 0, 0.9); scene.add(underWash)
  const mat = add(desk, rbox(1.1, 0.004, 0.36, 0.0015, std(0x0a0a0b, 1)), -0.12, 0.752, 0.6); mat.receiveShadow = true

  /* ---- main monitor: projects */
  const MC = new V3(-0.12, 1.12, 0.3)
  const mon = new THREE.Group(); mon.position.copy(MC); scene.add(mon)
  add(mon, rbox(0.84, 0.375, 0.03, 0.008, M.black)).castShadow = true
  add(mon, rbox(0.4, 0.2, 0.05, 0.02, M.black), 0, 0, -0.03)
  add(mon, rbox(0.05, 0.33, 0.025, 0.006, M.metal), 0, -0.2, -0.055)
  add(mon, rbox(0.3, 0.012, 0.2, 0.005, M.metal), 0, -0.364, -0.02).castShadow = true
  const farm = ctex(1024, 448, (g, w, h) => {
    const s = 6, W = Math.ceil(w / s), H = Math.ceil(h / s)
    const px = (x, y, c, ww = 1, hh = 1) => { g.fillStyle = c; g.fillRect(x * s, y * s, ww * s, hh * s) }
    for (let y = 0; y < H; y++) px(0, y, `rgb(${10 + y * 0.4},${12 + y * 0.5},${34 + y * 0.9})`, W, 1)
    for (let i = 0; i < 60; i++) px(Math.floor(rnd() * W), Math.floor(rnd() * H * 0.45), rnd() < 0.3 ? '#fff' : '#8d9cc9')
    px(140, 8, '#eef0f7', 6, 6); px(139, 9, '#eef0f7', 8, 4); px(142, 9, '#c9cfe0', 2, 2)
    for (let x = 0; x < W; x++) { const y = Math.floor(H * 0.48 + Math.sin(x * 0.07) * 3 + Math.sin(x * 0.19) * 1.5); px(x, y, '#141d2a', 1, H - y) }
    for (let x = 0; x < W; x++) { const y = Math.floor(H * 0.58 + Math.sin(x * 0.05 + 2) * 2); px(x, y, '#1a2a22', 1, H - y) }
    for (let r = 0; r < 6; r++) { const y = Math.floor(H * 0.66) + r * 4; px(14, y, '#2b2016', 92, 2); for (let x = 16; x < 104; x += 4) px(x, y - 1, r % 2 ? '#4f8a4a' : '#6aa25a', 2, 2) }
    px(120, 36, '#3a1f22', 26, 14); px(118, 32, '#22191c', 30, 5); px(127, 40, '#ffc875', 4, 4); px(136, 40, '#ffc875', 4, 4); px(131, 44, '#140c0d', 5, 6)
    for (let x = 10; x < 112; x += 6) px(x, Math.floor(H * 0.62), '#5a4632', 1, 4); px(10, Math.floor(H * 0.63), '#5a4632', 102, 1)
  })
  const synth = ctex(1024, 448, (g, w, h) => {
    const hz = h * 0.58
    const sk = g.createLinearGradient(0, 0, 0, hz); sk.addColorStop(0, '#07041a'); sk.addColorStop(1, '#3b0f4a'); g.fillStyle = sk; g.fillRect(0, 0, w, hz)
    for (let i = 0; i < 70; i++) { g.fillStyle = `rgba(255,255,255,${rnd() * 0.6})`; g.fillRect(rnd() * w, rnd() * hz * 0.7, 2, 2) }
    const sg = g.createLinearGradient(0, hz - 170, 0, hz); sg.addColorStop(0, '#ffd36b'); sg.addColorStop(1, '#ff3fb4')
    g.save(); g.beginPath(); g.arc(w / 2, hz, 150, Math.PI, 0); g.clip(); g.fillStyle = sg; g.fillRect(w / 2 - 150, hz - 150, 300, 150)
    g.fillStyle = '#2a0b38'; for (let i = 0; i < 7; i++) g.fillRect(w / 2 - 150, hz - 60 + i * 9, 300, 2 + i * 0.8); g.restore()
    let x = 0; g.fillStyle = '#0a0614'
    while (x < w) { const bw = 20 + rnd() * 50, bh = 30 + rnd() * 110; if (x < w / 2 - 170 || x > w / 2 + 150) g.fillRect(x, hz - bh, bw, bh); x += bw + 2 }
    g.fillStyle = '#05030a'; g.fillRect(0, hz, w, h - hz)
    g.strokeStyle = '#3fe8ff'; g.shadowColor = '#3fe8ff'; g.shadowBlur = 8; g.lineWidth = 1.5
    for (let i = 1; i < 12; i++) { const y = hz + (h - 30 - hz) * (i / 11) ** 2; g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke() }
    for (let i = -14; i <= 14; i++) { g.beginPath(); g.moveTo(w / 2 + i * 12, hz); g.lineTo(w / 2 + i * 110, h - 30); g.stroke() }
    g.shadowBlur = 0
    g.fillStyle = 'rgba(8,9,11,.88)'; g.fillRect(0, h - 30, w, 30)
    g.fillStyle = '#e9ecee'; g.font = '500 15px "Geist Mono", ui-monospace, monospace'; g.textBaseline = 'middle'
    g.fillText('emily@desk', 14, h - 15); g.textAlign = 'right'; g.fillText('1:07 AM', w - 14, h - 15)
    g.fillStyle = '#ff3fb4'; g.fillRect(w / 2 - 40, h - 20, 10, 10); g.fillStyle = '#3fe8ff'; g.fillRect(w / 2 - 20, h - 20, 10, 10); g.fillStyle = '#9aa1a8'; g.fillRect(w / 2, h - 20, 10, 10); g.fillRect(w / 2 + 20, h - 20, 10, 10)
  })
  const mainScreen = add(mon, new THREE.Mesh(new THREE.PlaneGeometry(0.81, 0.345), glow(new THREE.MeshBasicMaterial({ map: synth, color: 0xd8d8d8 }))), 0, 0, 0.0155)
  const monLight = lit(new THREE.RectAreaLight(0xaec4ff, 2.2, 0.8, 0.34)); monLight.position.set(MC.x, MC.y, MC.z + 0.02); monLight.lookAt(MC.x, MC.y - 0.2, MC.z + 2); scene.add(monLight)
  // light bar on top of the monitor
  add(mon, new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.46, 16), M.metal), 0, 0.2, 0.01).rotation.z = Math.PI / 2
  add(mon, new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.003, 0.012), hot(1.1, 1.0, 0.85)), 0, 0.188, 0.018)
  const bar = lit(new THREE.SpotLight(0xffe7cc, 3.2, 2.2, 0.95, 0.75, 1.6))
  bar.position.set(MC.x, MC.y + 0.19, MC.z + 0.04); bar.target.position.set(MC.x, 0.75, MC.z + 0.36)
  bar.castShadow = true; bar.shadow.mapSize.set(1024, 1024); bar.shadow.bias = -0.0004; bar.shadow.radius = 4
  scene.add(bar, bar.target)
  hit(mon, 'projects', 'Projects')

  /* ---- side monitor (portrait): experience */
  const VC = new V3(0.63, 1.15, 0.34), VR = -0.38
  const side = new THREE.Group(); side.position.copy(VC); side.rotation.y = VR; scene.add(side)
  add(side, rbox(0.36, 0.62, 0.03, 0.008, M.black)).castShadow = true
  add(side, rbox(0.04, 0.3, 0.025, 0.006, M.metal), 0, -0.25, -0.04)
  add(side, rbox(0.2, 0.012, 0.18, 0.005, M.metal), 0, -0.394, -0.03).castShadow = true
  const term = ctex(512, 896, (g, w, h) => {
    g.fillStyle = '#07080a'; g.fillRect(0, 0, w, h)
    g.fillStyle = '#121418'; g.fillRect(0, 0, w, 34)
    g.fillStyle = '#9aa1a8'; g.font = '400 15px "Geist Mono", ui-monospace, monospace'; g.fillText('resume.md — zsh', 16, 22)
    const lines = [
      ['#7fe6dc', '>>> emily.status()'], ['', ''],
      ['#e9ecee', 'role       : data analyst'], ['#e9ecee', 'studying   : M.S. Information'], ['#e9ecee', '             @ UMich'],
      ['#e9ecee', 'based in   : Ann Arbor / Chicago'], ['#e9ecee', 'building   : bike-share forecast'], ['#e9ecee', 'playing    : Stardew Valley'],
      ['#e9ecee', 'rooting for: #63'], ['', ''], ['#7fe6dc', '>>> open("resume.md")'], ['#9aa1a8', '# experience'],
      ['#c9ced3', '- Rackham Graduate School'], ['#c9ced3', '- Wefluens'], ['#c9ced3', '- Woooly.ai'], ['', ''], ['#9aa1a8', '# education'],
      ['#c9ced3', '- University of Michigan'], ['#c9ced3', '- University of Chicago'], ['#c9ced3', '- Univ. of Intl Relations'], ['', ''], ['#7fe6dc', '>>> _'],
    ]
    g.font = '400 19px "Geist Mono", ui-monospace, monospace'
    lines.forEach(([c, t], i) => { g.fillStyle = c || '#fff'; g.fillText(t, 22, 80 + i * 33) })
  })
  const sideScreen = add(side, new THREE.Mesh(new THREE.PlaneGeometry(0.335, 0.595), glow(new THREE.MeshBasicMaterial({ map: term, color: 0xd0d0d0 }))), 0, 0, 0.0155)
  const sideLight = lit(new THREE.RectAreaLight(0xb8ccff, 1.4, 0.33, 0.59)); side.add(sideLight); sideLight.position.set(0, 0, 0.02); sideLight.rotation.y = Math.PI
  hit(side, 'experience', 'Experience')

  /* ---- keyboard, mouse, headphones */
  const kb = new THREE.Group(); kb.position.set(-0.14, 0.752, 0.6); scene.add(kb)
  add(kb, rbox(0.37, 0.022, 0.125, 0.006, M.black), 0, 0.011, 0).castShadow = true
  add(kb, new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.002, 0.11), hot(1.6, 0.25, 1.4)), 0, 0.0225, 0)
  const keyGeo = new RoundedBoxGeometry(0.0175, 0.011, 0.0175, 1, 0.003)
  const keys = new THREE.InstancedMesh(keyGeo, M.key, 15 * 5)
  { const m4 = new THREE.Matrix4(); let i = 0; for (let r = 0; r < 5; r++) for (let c = 0; c < 15; c++) { m4.makeTranslation(-0.154 + c * 0.022, 0.028, -0.044 + r * 0.022); keys.setMatrixAt(i++, m4) } }
  keys.castShadow = true; kb.add(keys)
  const mouse = add(scene, new THREE.Mesh(new THREE.SphereGeometry(1, 24, 16), M.black), 0.2, 0.762, 0.61); mouse.scale.set(0.032, 0.018, 0.058); mouse.castShadow = true
  add(scene, new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.002, 0.012), hot(0.4, 2, 1.8)), 0.2, 0.7805, 0.585)
  const hp = new THREE.Group(); hp.position.set(-0.6, 0.75, 0.66); scene.add(hp)
  add(hp, new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.06, 0.012, 32), M.black), 0, 0.006, 0)
  add(hp, new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.26, 12), M.metal), 0, 0.13, 0)
  const band = add(hp, new THREE.Mesh(new THREE.TorusGeometry(0.075, 0.012, 12, 40, Math.PI), M.soft), 0, 0.22, 0)
  for (const x of [-0.078, 0.078]) { const cup = add(hp, new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.03, 32), M.soft), x, 0.2, 0); cup.rotation.z = Math.PI / 2; cup.castShadow = true }
  band.castShadow = true
  hit(hp, 'headphones', 'Lo-fi, low volume')

  /* ---- PC tower */
  const pc = new THREE.Group(); pc.position.set(-0.78, 0.75, 0.38); scene.add(pc)
  add(pc, rbox(0.22, 0.46, 0.44, 0.01, M.black), 0, 0.23, 0).castShadow = true
  const glass = add(pc, new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.42), new THREE.MeshPhysicalMaterial({ color: 0x0a0c0f, roughness: 0.08, metalness: 0, transparent: true, opacity: 0.55, clearcoat: 1 })), 0.1105, 0.23, 0)
  glass.rotation.y = Math.PI / 2
  add(pc, new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.06, 0.28), hot(0.25, 1.2, 1.1)), 0.06, 0.2, 0.02)
  const fans = []
  for (const [i, y] of [0.1, 0.23, 0.36].entries()) {
    add(pc, new THREE.Mesh(new THREE.TorusGeometry(0.052, 0.005, 10, 48), i === 1 ? hot(2.8, 0.4, 2.2) : hot(0.6, 2.5, 2.8)), 0, y, 0.2215)
    const blades = add(pc, new THREE.Mesh(new THREE.CircleGeometry(0.046, 5), std(0x15171a, 0.5)), 0, y, 0.221)
    fans.push(blades)
  }
  const pcGlow = lit(new THREE.PointLight(0xb05cff, 0.6, 1.4, 2)); pcGlow.position.set(-0.6, 1.0, 0.45); scene.add(pcGlow)
  hit(pc, 'pc', 'The rig')

  /* ---- #63, a little black race car */
  const car = new THREE.Group(); car.position.set(0.4, 0.75, 0.66); car.rotation.y = 0.55; scene.add(car)
  const carBody = new THREE.Group(); car.add(carBody)
  const num = ctex(256, 128, (g, w, h) => { g.fillStyle = '#0d0e10'; g.fillRect(0, 0, w, h); g.fillStyle = '#c9ced3'; g.fillRect(0, h - 14, w, 4); g.fillStyle = '#fff'; g.font = '700 84px Geist, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('63', w / 2, h / 2) })
  const carMat = std(0x0e0f11, 0.25, 0.6)
  const sideDecal = new THREE.MeshStandardMaterial({ map: num, roughness: 0.3, metalness: 0.4 })
  add(carBody, rbox(0.16, 0.02, 0.045, 0.008, carMat), 0, 0.02, 0)
  add(carBody, new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.012, 0.0451), [carMat, carMat, carMat, carMat, sideDecal, sideDecal]), 0.0, 0.026, 0)
  add(carBody, rbox(0.04, 0.018, 0.03, 0.006, carMat), -0.01, 0.036, 0)
  add(carBody, rbox(0.012, 0.004, 0.09, 0.002, M.metal), 0.085, 0.012, 0)
  add(carBody, rbox(0.014, 0.024, 0.07, 0.003, carMat), -0.082, 0.038, 0)
  const wheels = []
  for (const [x, z] of [[0.055, 0.035], [0.055, -0.035], [-0.05, 0.035], [-0.05, -0.035]]) { const w = add(carBody, new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.014, 20), std(0x08080a, 0.8)), x, 0.014, z); w.rotation.x = Math.PI / 2; wheels.push(w) }
  carBody.traverse((o) => (o.castShadow = true))
  hit(car, 'car', '#63')

  /* ---- handheld console, Stardew farm on screen */
  const sw = new THREE.Group(); sw.position.set(0.82, 0.75, 0.6); sw.rotation.y = 0.2; sw.scale.setScalar(1.35); scene.add(sw)
  const swTilt = new THREE.Group(); swTilt.position.y = 0.045; swTilt.rotation.x = -0.32; sw.add(swTilt)
  add(swTilt, rbox(0.15, 0.085, 0.012, 0.004, std(0x0c0d0f, 0.35, 0.3)))
  const swScreen = add(swTilt, new THREE.Mesh(new THREE.PlaneGeometry(0.128, 0.072), glow(new THREE.MeshBasicMaterial({ map: farm, color: 0xe6e6e6 }))), 0, 0, 0.0062)
  for (const [x, c] of [[-0.092, [2.6, 0.35, 1.9]], [0.092, [0.35, 2.4, 2.6]]]) {
    add(swTilt, rbox(0.034, 0.085, 0.016, 0.008, std(0x111215, 0.5, 0.1)), x, 0, 0)
    add(swTilt, new THREE.Mesh(new THREE.BoxGeometry(0.003, 0.07, 0.003), hot(...c)), x + Math.sign(x) * 0.0165, 0, 0.004)
    add(swTilt, new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.006, 16), M.key), x, 0.018 * Math.sign(-x), 0.009).rotation.x = Math.PI / 2
    for (const [dx, dy] of [[0, 0.009], [0, -0.009], [0.009, 0], [-0.009, 0]]) add(swTilt, new THREE.Mesh(new THREE.CylinderGeometry(0.0028, 0.0028, 0.004, 10), M.key), x + dx, -0.016 * Math.sign(-x) + dy, 0.009).rotation.x = Math.PI / 2
  }
  add(sw, rbox(0.06, 0.01, 0.05, 0.003, M.black), 0, 0.005, -0.02)
  add(sw, rbox(0.05, 0.045, 0.008, 0.003, M.black), 0, 0.025, -0.035).rotation.x = -0.32
  const swLight = lit(new THREE.PointLight(0xc0a0ff, 0.25, 0.6, 2)); swLight.position.set(0.84, 0.85, 0.66); scene.add(swLight)
  sw.traverse((o) => (o.castShadow = true))
  hit(sw, 'switch', 'Stardew Valley, my favorite game for now')

  /* ---- neon sign on the wall (neonArt.js) */
  const { drawNeonSign } = await import('./neonArt.js')
  const neonTex = ctex(1200, 800, drawNeonSign)
  const neon = new THREE.Group(); neon.position.set(-1.42, 1.78, 0.03); neon.scale.setScalar(1.25); scene.add(neon)
  add(neon, rbox(0.68, 0.46, 0.008, 0.003, new THREE.MeshPhysicalMaterial({ color: 0x15121c, roughness: 0.15, transparent: true, opacity: 0.35 })), 0, 0, -0.008)
  for (const [x, y] of [[-0.31, 0.2], [0.31, 0.2], [-0.31, -0.2], [0.31, -0.2]]) add(neon, new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.03, 10), M.metal), x, y, -0.01).rotation.x = Math.PI / 2
  const neonMat = glow(new THREE.MeshBasicMaterial({ map: neonTex, transparent: true, depthWrite: false, color: new THREE.Color(1.7, 1.7, 1.7) }))
  add(neon, new THREE.Mesh(new THREE.PlaneGeometry(0.64, 0.427), neonMat), 0, 0, 0.002)
  const neonLight = lit(new THREE.RectAreaLight(0xff3fb4, 4, 0.6, 0.4)); neonLight.width = 0.75; neonLight.height = 0.5; neonLight.position.set(-1.42, 1.78, 0.05); neonLight.lookAt(-1.42, 1.7, 2); scene.add(neonLight)
  hit(neon, 'neon', 'Finding a job')

  /* ---- tennis racket + ball */
  const strings = ctex(256, 256, (g, w, h) => { g.clearRect(0, 0, w, h); g.strokeStyle = 'rgba(225,228,232,.9)'; g.lineWidth = 2; for (let i = 8; i < w; i += 16) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, h); g.stroke(); g.beginPath(); g.moveTo(0, i); g.lineTo(w, i); g.stroke() } })
  const racket = new THREE.Group(); racket.position.set(1.12, 0, 0.6); racket.rotation.set(0, -0.2, -0.16); scene.add(racket)
  add(racket, new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.016, 0.2, 12), std(0x1a1b1e, 0.9)), 0, 0.1, 0)
  for (const s of [-1, 1]) { const th = add(racket, new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.16, 8), M.black), s * 0.028, 0.27, 0); th.rotation.z = -s * 0.33 }
  const head = add(racket, new THREE.Mesh(new THREE.TorusGeometry(0.115, 0.011, 10, 48), std(0x111214, 0.35, 0.4)), 0, 0.47, 0); head.scale.set(1, 1.3, 1)
  add(racket, new THREE.Mesh(new THREE.TorusGeometry(0.115, 0.0035, 6, 48), std(0xc9ced3, 0.4, 0.6)), 0, 0.47, 0.009).scale.set(1, 1.3, 1)
  const net = add(racket, new THREE.Mesh(new THREE.CircleGeometry(0.11, 40), new THREE.MeshStandardMaterial({ map: strings, transparent: true, alphaTest: 0.3, side: THREE.DoubleSide, roughness: 0.6 })), 0, 0.47, 0); net.scale.set(1, 1.3, 1)
  racket.traverse((o) => (o.castShadow = true))
  hit(racket, 'racket', 'Tennis, my favorite sport')
  const ball = add(scene, new THREE.Mesh(new THREE.SphereGeometry(0.033, 24, 16), std(0xc8dc3c, 0.95)), 1.0, 0.033, 1.05); ball.castShadow = true
  hit(ball, 'ball', 'Tennis ball')

  /* ---- chair */
  const chair = new THREE.Group(); chair.position.set(-1.45, 0, 1.6); chair.rotation.y = -0.8; scene.add(chair)
  for (let i = 0; i < 5; i++) { const leg = add(chair, new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.025, 0.04), M.black), 0, 0.07, 0); leg.rotation.y = (i / 5) * Math.PI * 2; leg.translateX(0.15); const wheel = add(chair, new THREE.Mesh(new THREE.SphereGeometry(0.025, 12, 8), M.black), 0, 0.025, 0); wheel.position.set(Math.cos(-leg.rotation.y) * 0.29, 0.025, Math.sin(-leg.rotation.y) * 0.29) }
  add(chair, new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.36, 12), M.metal), 0, 0.26, 0)
  add(chair, rbox(0.54, 0.09, 0.5, 0.03, M.soft), 0, 0.48, 0)
  const back = add(chair, rbox(0.52, 0.82, 0.09, 0.04, M.soft), 0, 0.93, 0.25); back.rotation.x = 0.14
  add(chair, rbox(0.3, 0.16, 0.08, 0.03, std(0x232428, 0.9)), 0, 1.24, 0.31).rotation.x = 0.14
  add(chair, new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.6, 0.004), hot(2.4, 0.3, 1.8)), -0.2, 0.95, 0.205).rotation.x = 0.14
  for (const x of [-0.29, 0.29]) { add(chair, rbox(0.05, 0.03, 0.26, 0.01, M.black), x, 0.69, 0.02); add(chair, new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.18, 0.025), M.black), x, 0.59, 0.05) }
  chair.traverse((o) => (o.castShadow = true))

  /* ---- poster on the wall: the title slide */
  const poster = ctex(2048, 940, (g, w, h) => {
    g.fillStyle = '#0a0b0d'; g.fillRect(0, 0, w, h)
    g.strokeStyle = 'rgba(255,255,255,.12)'; g.lineWidth = 3; g.strokeRect(60, 60, w - 120, h - 120)
    g.font = '700 300px Geist, system-ui, sans-serif'; g.textBaseline = 'alphabetic'
    g.fillStyle = 'rgba(255,63,180,.85)'; g.fillText(C.site.name, 122, 466)
    g.fillStyle = 'rgba(63,232,255,.85)'; g.fillText(C.site.name, 138, 474)
    g.fillStyle = '#f4f5f7'; g.fillText(C.site.name, 130, 470)
    g.fillStyle = 'rgba(0,0,0,.25)'; for (let y = 0; y < h; y += 6) g.fillRect(0, y, w, 2)
    g.fillStyle = '#5ff0ff'; g.font = '500 66px Geist, system-ui, sans-serif'; g.fillText(C.site.caption, 138, 610)
    g.fillStyle = '#a7aeb5'; g.font = '400 50px "Geist Mono", ui-monospace, monospace'; g.fillText(C.site.place, 140, 720)
    g.textAlign = 'right'; g.fillStyle = '#5b6168'; g.font = '400 40px "Geist Mono", ui-monospace, monospace'; g.fillText('2026', w - 140, 170)
  })
  const post = new THREE.Group(); post.position.set(-0.12, 1.86, 0.02); scene.add(post)
  add(post, rbox(1.36, 0.64, 0.025, 0.006, M.black), 0, 0, 0)
  add(post, new THREE.Mesh(new THREE.PlaneGeometry(1.3, 0.597), glow(new THREE.MeshBasicMaterial({ map: poster, color: 0xbdbdbd }))), 0, 0, 0.0135)

  /* ---- bed corner: nightstand, lamp, journal, bed */
  const ns = new THREE.Group(); ns.position.set(1.42, 0, 0.27); scene.add(ns)
  add(ns, rbox(0.44, 0.54, 0.4, 0.01, M.black), 0, 0.27, 0).castShadow = true
  add(ns, new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.004, 0.004), M.metal), 0, 0.36, 0.201)
  add(ns, new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.06, 0.03, 24), M.black), 0.08, 0.555, -0.06)
  add(ns, new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.2, 8), M.metal), 0.08, 0.66, -0.06)
  const shade = add(ns, new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.1, 0.13, 32, 1, true), new THREE.MeshStandardMaterial({ color: 0x1a1a1c, emissive: 0xffb36b, emissiveIntensity: 0.0, side: THREE.DoubleSide, roughness: 0.9 })), 0.08, 0.79, -0.06)
  glows.push({ mat: shade.material, base: new THREE.Color(0x1a1a1c), emissive: 0.9 })
  const bulb = add(ns, new THREE.Mesh(new THREE.SphereGeometry(0.03, 16, 12), hot(3.5, 2.3, 1.2)), 0.08, 0.77, -0.06)
  const lamp = lit(new THREE.PointLight(0xffb06a, 1.6, 4, 1.8)); lamp.position.set(1.5, 0.82, 0.25); scene.add(lamp)
  const lampDown = lit(new THREE.SpotLight(0xffb06a, 3, 2, 1.1, 0.6, 1.5)); lampDown.position.set(1.5, 0.74, 0.21); lampDown.target.position.set(1.5, 0, 0.3); lampDown.castShadow = true; lampDown.shadow.mapSize.set(512, 512); scene.add(lampDown, lampDown.target)
  const journal = add(ns, rbox(0.16, 0.024, 0.22, 0.004, std(0x0c0c0d, 0.55)), -0.07, 0.552, 0.06); journal.rotation.y = 0.3; journal.castShadow = true
  add(journal, new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.0255, 0.222), std(0x2e3034, 0.6)), 0.05, 0, 0)
  hit(ns, 'about', 'About me')
  const bed = new THREE.Group(); bed.position.set(2.62, 0, 0); scene.add(bed)
  add(bed, rbox(1.64, 1.0, 0.07, 0.02, std(0x1d1e22, 0.95)), 0, 0.5, 0.04).castShadow = true
  add(bed, rbox(1.64, 0.3, 2.0, 0.02, M.black), 0, 0.15, 1.05)
  add(bed, rbox(1.56, 0.2, 1.94, 0.04, std(0x2b2c30, 0.95)), 0, 0.4, 1.05)
  const duvet = add(bed, rbox(1.66, 0.09, 1.45, 0.04, std(0x111214, 0.95)), 0, 0.52, 1.32); duvet.receiveShadow = true
  add(bed, rbox(1.66, 0.1, 0.25, 0.045, std(0x111214, 0.95)), 0, 0.56, 0.66).rotation.x = 0.1
  for (const x of [-0.38, 0.38]) add(bed, rbox(0.66, 0.13, 0.38, 0.06, std(0x55575c, 0.95)), x, 0.56, 0.3).rotation.x = -0.25
  bed.traverse((o) => { if (o.isMesh) o.receiveShadow = true })

  /* ---- string lights + six photos over the bed */
  const wall = new THREE.Group(); scene.add(wall)
  const sx0 = 1.72, sx1 = 3.52, scx = (sx0 + sx1) / 2
  const sy = (x) => 1.95 - 0.13 * (1 - ((x - scx) / ((sx1 - sx0) / 2)) ** 2)
  const pts = []; for (let i = 0; i <= 40; i++) { const x = sx0 + (i / 40) * (sx1 - sx0); pts.push(new V3(x, sy(x), 0.03)) }
  add(wall, new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 80, 0.0022, 6), std(0x0a0a0a, 0.6)))
  const bulbs = []
  for (let i = 0; i < 26; i++) { const x = sx0 + 0.03 + (i / 25) * (sx1 - sx0 - 0.06); const b = add(wall, new THREE.Mesh(new THREE.SphereGeometry(0.011, 10, 8), hot(4, 2.6, 1.3)), x, sy(x) - 0.012, 0.035); b.userData.ph = rnd() * 6; bulbs.push(b) }
  const fairy = lit(new THREE.PointLight(0xffb46e, 1.6, 2.4, 1.5)); fairy.position.set(scx, 1.7, 0.45); scene.add(fairy)
  const polaroids = []
  C.photos.forEach((p, i) => {
    const x = 1.9 + i * 0.29
    const g = new THREE.Group(); g.position.set(x, sy(x) - 0.012, 0.03); g.rotation.z = (rnd() - 0.5) * 0.14; wall.add(g)
    const cap = ctex(512, 620, (c, w, h) => { c.fillStyle = '#ece9e3'; c.fillRect(0, 0, w, h); c.fillStyle = '#1b1c1e'; c.font = '500 46px Caveat, cursive'; c.textAlign = 'center'; c.fillText(p.caption, w / 2, h - 48) })
    add(g, new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.266), std(0xffffff, 0.9, 0, { map: cap })), 0, -0.15, 0).castShadow = true
    const ptex = texLoader.load(`img/thumbs/${p.id}.jpg`, (t) => {
      const a = t.image.width / t.image.height
      if (a < 1) { t.repeat.set(1, a); t.offset.set(0, (1 - a) / 2 + (1 - a) * 0.12) } else { t.repeat.set(1 / a, 1); t.offset.set((1 - 1 / a) / 2, 0) }
    })
    ptex.colorSpace = THREE.SRGBColorSpace
    add(g, new THREE.Mesh(new THREE.PlaneGeometry(0.19, 0.19), std(0xffffff, 0.75, 0, { map: ptex })), 0, -0.13, 0.001)
    add(g, new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.03, 0.008), std(0xb89a6a, 0.6)), 0, -0.005, 0.006)
    g.userData.photo = i
    hit(g, 'photo', p.caption)
    polaroids.push(g)
  })

  /* ---- base light */
  scene.add(lit(new THREE.HemisphereLight(0x6a58b0, 0x1a0e18, 1.0)))
  const fill = lit(new THREE.PointLight(0x8090c0, 1.6, 7, 1.4)); fill.position.set(0.6, 2.4, 3.6); scene.add(fill)

  /* ---- post */
  const composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))
  const bloom = new UnrealBloomPass(new THREE.Vector2(512, 512), 0.75, 0.6, 0.8)
  composer.addPass(bloom)
  composer.addPass(new OutputPass())

  /* ---- camera shots */
  const narrowQ = matchMedia('(max-width:760px),(max-aspect-ratio:1/1)')
  let narrow = narrowQ.matches
  const T = Math.tan
  const rad = THREE.MathUtils.degToRad
  function fitDist(w, h, fov, aspect, frac) {
    const t = T(rad(fov / 2))
    return Math.max(h / (2 * t * frac), w / (2 * t * aspect * frac))
  }
  function shot(p) {
    const aspect = innerWidth / innerHeight
    const fov = narrow ? 52 : 42
    if (p === 'home') {
      const tgt = new V3(narrow ? 0.05 : 0.5, 1.1, 0.6)
      const d = narrow ? fitDist(2.2, 1.2, fov, aspect, 0.98) : Math.max(4.4, fitDist(6.0, 2.4, fov, aspect, 1))
      return { tgt, pos: tgt.clone().add(new V3(narrow ? 0.05 : 1.15, 0.5 + d * 0.06, d)), fov }
    }
    const spec = {
      projects: { c: MC, n: new V3(0, 0, 1), w: 0.84, h: 0.375 },
      experience: { c: VC, n: new V3(Math.sin(VR), 0, Math.cos(VR)), w: 0.36, h: 0.62 },
      about: { c: new V3(scx, 1.66, 0.03), n: new V3(0, 0, 1), w: 1.85, h: 0.5 },
    }[p]
    let d, tgt
    if (narrow) {
      d = fitDist(spec.w, spec.h * 2.6, fov, aspect, 0.95)
      const visH = 2 * d * T(rad(fov / 2))
      tgt = spec.c.clone().add(new V3(0, -0.3 * visH, 0))
    } else if (p === 'about') {
      d = fitDist(spec.w, spec.h, fov, aspect * 0.55, 0.9)
      const visW = 2 * d * T(rad(fov / 2)) * aspect
      tgt = spec.c.clone().add(new V3(0.2 * visW, -0.12, 0))
    } else {
      d = fitDist(spec.w, spec.h, fov, aspect, p === 'projects' ? 0.84 : 0.86)
      tgt = spec.c.clone()
    }
    return { tgt, pos: tgt.clone().addScaledVector(spec.n, d).add(new V3(0, 0, 0)), fov }
  }

  const cam = { pos: new V3(0.6, 1.3, 7), tgt: new V3(0.4, 1.0, 0.5), fov: 42 }
  const goal = { pos: new V3(), tgt: new V3(), fov: 42 }
  const orbit = { yaw: 0, pitch: 0, gy: 0, gp: 0 }
  function aim(p) { const s = shot(p); goal.pos.copy(s.pos); goal.tgt.copy(s.tgt); goal.fov = s.fov }
  aim('home')
  cam.pos.copy(goal.pos).add(new V3(0, 0.25, 1.4)); cam.tgt.copy(goal.tgt)

  onPage = (p) => { orbit.gy = orbit.gp = 0; aim(p) }

  /* ---- resize */
  function resize() {
    narrow = narrowQ.matches
    const w = innerWidth, h = innerHeight
    renderer.setSize(w, h, false)
    composer.setSize(w, h)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    aim(page)
  }
  addEventListener('resize', resize)
  resize()

  /* ---- pointer: drag to look, hover, click */
  const ray = new THREE.Raycaster()
  const ndc = new THREE.Vector2()
  let down = null, hovered = null
  const tip = $('#tip')
  function pick(e) {
    ndc.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1)
    ray.setFromCamera(ndc, camera)
    const hit0 = ray.intersectObjects(hits, true)[0]
    if (!hit0) return null
    let o = hit0.object
    while (o && !o.userData.hit) o = o.parent
    return o
  }
  canvas.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY, yaw: orbit.gy, pitch: orbit.gp, moved: false }; canvas.setPointerCapture(e.pointerId) })
  canvas.addEventListener('pointermove', (e) => {
    if (!started) return
    if (down) {
      const dx = e.clientX - down.x, dy = e.clientY - down.y
      if (Math.hypot(dx, dy) > 6) down.moved = true
      if (down.moved && page === 'home') {
        orbit.gy = THREE.MathUtils.clamp(down.yaw - dx * 0.004, -0.55, 0.55)
        orbit.gp = THREE.MathUtils.clamp(down.pitch + dy * 0.002, -0.12, 0.2)
      }
    }
    if (e.pointerType === 'mouse') {
      const o = pick(e)
      hovered = o
      canvas.classList.toggle('hover', !!o)
      if (o && page === 'home' || (o && o.userData.hit.kind === 'photo' && page === 'about')) {
        tip.textContent = o.userData.hit.label; tip.style.left = e.clientX + 14 + 'px'; tip.style.top = e.clientY + 14 + 'px'; tip.classList.add('show')
      } else tip.classList.remove('show')
    }
  })
  canvas.addEventListener('pointerup', (e) => {
    if (!down) return
    const wasDrag = down.moved
    down = null
    if (!started || wasDrag) return
    const o = pick(e)
    if (!o) return
    const k = o.userData.hit.kind
    if (k === 'photo') return page === 'about' ? openPhoto(o.userData.photo) : go('about')
    if (PAGES.includes(k)) return go(k)
    if (page !== 'home') return
    egg(k)
  })
  canvas.addEventListener('pointerleave', () => tip.classList.remove('show'))

  /* ---- little things to click */
  const anim = { car: -1, ball: -1, cup: 0 }
  function egg(k) {
    if (k === 'car') { anim.car = 0; toast('#63 · George Russell is my favorite driver. Lights out and away we go.') }
    if (k === 'ball' || k === 'racket') { anim.ball = 0; toast('Tennis is my favorite sport. Up for a hit in Ann Arbor?') }
    if (k === 'switch') toast('Stardew Valley is my favorite game, for now.')
    if (k === 'pc') toast('The rig. Yes, the fans match the desk.')
    if (k === 'neon') toast('Yes, really. I’m looking for data analyst roles.', { label: 'See my experience', run: () => go('experience') })
    if (k === 'window') toast('From Beijing, now between Chicago’s South Loop and Ann Arbor.')
    if (k === 'headphones') toast('Lo-fi at low volume. Roommates are asleep.')
  }

  /* ---- tags pinned to objects */
  const tags = [
    { el: $('#tag-projects'), at: new V3(MC.x, MC.y + 0.03, MC.z + 0.02) },
    { el: $('#tag-experience'), at: new V3(VC.x, VC.y + 0.12, VC.z + 0.02) },
    { el: $('#tag-about'), at: new V3(scx, 1.98, 0.05) },
  ]
  const proj = new V3()
  function screenRect(mesh) {
    const g = mesh.geometry.parameters, hw = g.width / 2, hh = g.height / 2
    let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9
    for (const [x, y] of [[-hw, -hh], [hw, -hh], [hw, hh], [-hw, hh]]) {
      proj.set(x, y, 0); mesh.localToWorld(proj); proj.project(camera)
      const sx = (proj.x * 0.5 + 0.5) * innerWidth, sy2 = (-proj.y * 0.5 + 0.5) * innerHeight
      x0 = Math.min(x0, sx); x1 = Math.max(x1, sx); y0 = Math.min(y0, sy2); y1 = Math.max(y1, sy2)
    }
    return { x: x0, y: y0, w: x1 - x0, h: y1 - y0 }
  }
  function placeOn(el, mesh, minFs, maxFs, div) {
    if (narrow) { el.style.cssText = ''; el.style.removeProperty('--fs'); return }
    const r = screenRect(mesh)
    el.style.left = r.x + 'px'; el.style.top = r.y + 'px'; el.style.width = r.w + 'px'; el.style.height = r.h + 'px'
    el.style.setProperty('--fs', Math.max(minFs, Math.min(maxFs, r.h / div)) + 'px')
  }

  /* ---- power */
  let power = 0, powerT = -1
  powerOn = () => { powerT = 0 }
  function applyPower(pw, flick) {
    for (const g of glows) {
      if (g.emissive != null) g.mat.emissiveIntensity = g.emissive * pw
      else g.mat.color.copy(g.base).multiplyScalar(pw * flick)
    }
    for (const l of lights) l.light.intensity = l.base * (0.12 + 0.88 * pw)
  }
  applyPower(0, 1)

  /* ---- loop */
  const clock = new THREE.Clock()
  const tmp = new V3()
  sceneReady = true
  maybeStart()
  renderer.setAnimationLoop(() => {
    const dt = Math.min(clock.getDelta(), TEST ? 2 : 0.1), t = clock.elapsedTime
    if (powerT >= 0 && power < 1) {
      powerT += dt
      power = Math.min(1, powerT / 1.6)
      const flick = powerT < 0.5 ? (Math.sin(powerT * 70) > 0 ? 1 : 0.3) : 1
      applyPower(power, flick)
    }
    // camera
    orbit.yaw += (orbit.gy - orbit.yaw) * (1 - Math.exp(-dt * 6))
    orbit.pitch += (orbit.gp - orbit.pitch) * (1 - Math.exp(-dt * 6))
    const k = 1 - Math.exp(-dt * (started ? 3.0 : 0.6))
    let gp = goal.pos
    if (page === 'home') {
      tmp.copy(goal.pos).sub(goal.tgt)
      tmp.applyAxisAngle(new V3(0, 1, 0), orbit.yaw)
      tmp.y += orbit.pitch * tmp.length()
      gp = tmp.add(goal.tgt)
    }
    cam.pos.lerp(gp, k); cam.tgt.lerp(goal.tgt, k); cam.fov += (goal.fov - cam.fov) * k
    camera.position.copy(cam.pos); camera.lookAt(cam.tgt)
    if (Math.abs(camera.fov - cam.fov) > 1e-3) { camera.fov = cam.fov; camera.updateProjectionMatrix() }
    camera.updateMatrixWorld()
    const settled = cam.pos.distanceTo(gp) < 0.03

    // pages ride on the screens
    if (started && page !== 'home') {
      const el = $('#' + page)
      if (page === 'projects') placeOn(el, mainScreen, 10, 16, 27)
      if (page === 'experience') placeOn(el, sideScreen, 10, 15, 42)
      if (settled || cam.pos.distanceTo(gp) < 0.15) el.classList.add('show')
    }
    for (const tg of tags) {
      proj.copy(tg.at).project(camera)
      tg.el.style.transform = `translate(${(proj.x * 0.5 + 0.5) * innerWidth}px,${(-proj.y * 0.5 + 0.5) * innerHeight}px) translate(-50%,-100%)`
      tg.el.classList.toggle('show', page === 'home' && settled && power > 0.9)
    }

    // life on the desk
    for (const f of fans) f.rotation.z -= dt * 9
    if (power >= 1) { const fl = Math.sin(t * 0.7) > 0.97 && Math.random() < 0.5 ? 0.35 : 1; neonMat.color.setScalar(1.7 * fl); neonLight.intensity = 4 * fl }
    for (const b of bulbs) { const v = 0.85 + 0.15 * Math.sin(t * 1.3 + b.userData.ph); b.material.color.setRGB(4 * v * power, 2.6 * v * power, 1.3 * v * power) }
    if (anim.car >= 0) {
      anim.car += dt
      const u = Math.min(anim.car / 1.8, 1)
      carBody.position.x = Math.sin(u * Math.PI) * 0.12
      for (const w of wheels) w.rotation.y += dt * 30 * Math.cos(u * Math.PI)
      if (u >= 1) { anim.car = -1; carBody.position.x = 0 }
    }
    if (anim.ball >= 0) {
      anim.ball += dt
      const u = anim.ball
      ball.position.y = 0.033 + Math.abs(Math.sin(u * 7)) * 0.35 * Math.exp(-u * 1.6)
      if (u > 3) { anim.ball = -1; ball.position.y = 0.033 }
    }

    composer.render()
  })
}
