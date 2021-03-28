function luasSilinder() {
  var r = document.getElementById("jariSilinder").value;
  var t = document.getElementById("tinggiSilinder").value;
  var hasilLuasS = 2 * Math.PI * r * r + 2 * Math.PI * r * t;
  document.getElementById("hasilLuasSilinder").innerHTML = hasilLuasS.toFixed(2);
}
function volumeSilinder() {
  var r = document.getElementById("jariSilinder").value;
  var t = document.getElementById("tinggiSilinder").value;
  var hasilVolumeS = Math.PI * (r * r) * t;
  document.getElementById("hasilVolumeSilinder").innerHTML = hasilVolumeS.toFixed(2);
}

function luasKerucut() {
  var r = document.getElementById("jariKerucut").value;
  var pelukis = document.getElementById("pelukisKerucut").value;
  var hasilLuasK = Math.PI * r * r + Math.PI * r * pelukis;
  document.getElementById("hasilLuasKerucut").innerHTML = hasilLuasK.toFixed(2);
}

function volumeKerucut() {
  var r = document.getElementById("jariKerucut").value;
  var t = document.getElementById("tinggiKerucut").value;
  var hasilVolumeK = (1 / 3) * Math.PI * (r * r) * t;
  document.getElementById("hasilVolumeKerucut").innerHTML = hasilVolumeK.toFixed(2);
}

function luasBola() {
  var r = document.getElementById("jariBola").value;
  var hasilLuasB = 4 * Math.PI * r * r;
  document.getElementById("hasilLuasBola").innerHTML = hasilLuasB.toFixed(2);
}

function volumeBola() {
  var r = document.getElementById("jariBola").value;
  var hasilVolumeB = (4 / 3) * Math.PI * r * r * r;
  document.getElementById("hasilVolumeBola").innerHTML = hasilVolumeB.toFixed(2);
}
