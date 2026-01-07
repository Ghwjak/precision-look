// Variables used by Scriptable.
// icon-color: blue; icon-glyph: magic;

let html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
* {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  margin: 0;
  background: radial-gradient(circle at top, #001a33, #000);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.panel {
  width: 330px;
  background: #0b1625;
  border-radius: 18px;
  padding: 16px;
  box-shadow: 0 0 30px #1e90ff;
}

.title {
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
}

.line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #1e90ff, transparent);
  margin: 12px 0;
}

.tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.tab {
  flex: 1;
  text-align: center;
  padding: 8px;
  border-radius: 10px;
  background: #14233b;
  color: #aaa;
  cursor: pointer;
}

.tab.active {
  background: #1e90ff;
  color: #fff;
  box-shadow: 0 0 10px #1e90ff;
}

.content {
  display: none;
}

.content.active {
  display: block;
}

.option {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 10px 0;
}

input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: #1e90ff;
}

.slider {
  margin: 12px 0;
}

.slider input {
  width: 100%;
  accent-color: #1e90ff;
}

.select {
  margin: 12px 0;
}

select {
  width: 100%;
  height: 46px;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #1e90ff;
  background: #14233b;
  color: #fff;
  font-size: 14px;
}

.radio-group {
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
}

.radio-group input {
  accent-color: #1e90ff;
}

.button {
  margin-top: 14px;
  padding: 13px;
  text-align: center;
  background: #1e90ff;
  border-radius: 12px;
  font-weight: bold;
  box-shadow: 0 0 18px #1e90ff;
}

.info-box {
  background: #14233b;
  border-radius: 12px;
  padding: 14px;
  line-height: 1.6;
  box-shadow: inset 0 0 10px #1e90ff;
}
</style>
</head>

<body>

<div class="panel">
  <div class="title">PRECISION BY @GHZINSENSI</div>

  <div class="tabs">
    <div class="tab active" onclick="openTab('aimbot')">Aimbot</div>
    <div class="tab" onclick="openTab('info')">Info</div>
  </div>

  <!-- AIMBOT -->
  <div id="aimbot" class="content active">
    <div class="option">
      <input type="checkbox">
      <span>Ativar Precision</span>
    </div>

    <div class="option">
      <input type="checkbox">
      <span>Ativar FOV</span>
    </div>

    <div class="line"></div>

    <div class="slider">
      <input 
        type="range" 
        min="0" 
        max="10" 
        value="0"
        oninput="updateFov(this.value)"
      >
      <div id="fovValue" style="text-align:right;font-size:12px;">
        Fov 0
      </div>
    </div>

    <div class="select">
      <select>
        <option>Auxílio Head</option>
        <option>Auxílio Body</option>
        <option>Auxílio Dinâmico</option>
      </select>
    </div>

    <div class="radio-group">
      <label>
        <input type="radio" name="tipo" checked>
        Ao Atirar
      </label>

      <label>
        <input type="radio" name="tipo">
        Ao Olhar
      </label>
    </div>

    <div class="button">INJETAR FUNÇÕES NO JOGO</div>
  </div>

  <!-- INFO -->
  <div id="info" class="content">
    <div class="info-box">
      <strong>Criador:</strong> @GHZIN SENSI<br>
      <strong>Validade:</strong> 30 Dias<br>
      <strong>Status:</strong> <span style="color:#00ff99;">Online</span>
    </div>
  </div>
</div>

<script>
function openTab(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));

  if (tab === 'aimbot') {
    document.querySelectorAll('.tab')[0].classList.add('active');
    document.getElementById('aimbot').classList.add('active');
  } else {
    document.querySelectorAll('.tab')[1].classList.add('active');
    document.getElementById('info').classList.add('active');
  }
}

function updateFov(value) {
  document.getElementById('fovValue').innerText = 'Fov ' + value;
}
</script>

</body>
</html>
`;

let web = new WebView();
await web.loadHTML(html);
await web.present(false);
