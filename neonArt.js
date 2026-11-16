// The neon sign on the wall: "Finding a job", in glowing script.
// Drawn on a transparent 1200 x 800 canvas so only the tubes show.

export function drawNeonSign(g, w, h, lines = ['Finding', 'a job']) {
  g.clearRect(0, 0, w, h)
  const tube = (text, x, y, font, color, glow) => {
    g.save()
    g.font = font; g.textAlign = 'center'; g.textBaseline = 'middle'; g.lineJoin = 'round'
    // wide soft glow, then the tube, then its hot white core
    g.shadowColor = glow; g.shadowBlur = 60; g.strokeStyle = color; g.lineWidth = 16; g.globalAlpha = 0.55; g.strokeText(text, x, y)
    g.globalAlpha = 1; g.shadowBlur = 24; g.lineWidth = 9; g.strokeText(text, x, y)
    g.shadowBlur = 6; g.strokeStyle = '#fff3fb'; g.lineWidth = 3; g.strokeText(text, x, y)
    g.restore()
  }
  const script = '500 230px Caveat, cursive'
  const fit = (t) => { g.font = script; const m = g.measureText(t).width; return m > w - 120 ? `500 ${Math.floor(230 * (w - 120) / m)}px Caveat, cursive` : script }
  tube(lines[0], w / 2, 270, fit(lines[0]), '#ff4fc8', '#ff2fae')
  tube(lines[1], w / 2 + 40, 520, fit(lines[1]), '#ff4fc8', '#ff2fae')
  // a small cyan underline swoosh with a dot, like the tail of a neon tube
  g.save()
  g.strokeStyle = '#4ff0ff'; g.shadowColor = '#4ff0ff'; g.lineCap = 'round'
  g.shadowBlur = 30; g.lineWidth = 9
  g.beginPath(); g.moveTo(330, 680); g.bezierCurveTo(520, 720, 760, 715, 930, 660); g.stroke()
  g.shadowBlur = 6; g.strokeStyle = '#effeff'; g.lineWidth = 3; g.stroke()
  g.fillStyle = '#effeff'; g.shadowBlur = 24; g.shadowColor = '#4ff0ff'
  g.beginPath(); g.arc(975, 640, 13, 0, 7); g.fill()
  g.restore()
}
