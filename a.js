var kelamin="";
var kos = 0, lt = 0, km = 0, ks = 0, mj = 0, lm = 0, wf = 0;
var pa="",pb="",pc="",pd="",pe="";
var kamarmandi="";
var lokasi="";
var lantaii="";

function kosan(){
  var x = document.getElementById("kosan").value;
  if(x=="1"){
    kos = 5000000;
    lokasi = "Kosan Haji Simin";
  }
  else if(x=="2"){
    kos = 7000000;
    lokasi = "Kosan Haji Murot";
  }
  else if(x=="3"){
    kos = 9000000;
    lokasi = "Kosan Haji Naim";
  }
  else {
    kos = 0;
  }
  var total = kos + lt + km + ks + mj + lm + wf;
  document.getElementById("pharga").innerHTML = "Rp. " + total;
}
function lantai(){
  var x = document.getElementById("lantai").value;
  if(x=="1"){
    lt =300000;
    lantaii = "Lantai 1";
  }
  else if(x=="2"){
    lt =200000;
    lantaii = "Lantai 2";
  }
  else if(x=="3"){
    lt =100000;
    lantaii = "Lantai 3";
  }
  else{
    lt =0;
  }
  var total = kos + lt + km + ks + mj + lm + wf;
  document.getElementById("pharga").innerHTML = "Rp. " + total;
}

function kamarMandi(){
  var x = document.getElementById("kamarMandi").value;
  if(x==1){
    km =100000;
    kamarmandi = "Kamar Mandi Luar";
  }
  else if(x==2){
    km =200000;
    kamarmandi = "Kamar Mandi Dalam";
  }
  else{
    km =0;
  }
    var total = kos + lt + km + ks + mj + lm + wf;
    document.getElementById("pharga").innerHTML = "Rp. " + total;
}

function kasur(){
  var x = document.getElementById("kasur");
  if(x.checked==true){
    ks =200000;
    pa = "kasur, ";
  }
  else if(x.checked==false){
    ks =0;
    pa = "";
  }
  var total = kos + lt + km + ks + mj + lm + wf;
  document.getElementById("pharga").innerHTML = "Rp. " + total;
}

function meja(){
  var x = document.getElementById("meja");
  if(x.checked==true){
    mj =300000;
    pb = "meja, ";
  }
  else if(x.checked==false){
    mj =0;
    pb = "";
  }
  var total = kos + lt + km + ks + mj + lm + wf;
  document.getElementById("pharga").innerHTML = "Rp. " + total;
}

function lemari(){
  var x = document.getElementById("lemari");
  if(x.checked==true){
    lm = 400000;
    pc = "lemari, ";
  }
  else if(x.checked==false){
    lm =0;
    pc = "";
  }
  var total = kos + lt + km + ks + mj + lm + wf;
  document.getElementById("pharga").innerHTML = "Rp. " + total;
}

function wifi(){
  var x = document.getElementById("wifi");
  if(x.checked==true){
    wf =100000;
    pd = "wifi";
  }
  else if(x.checked==false){
    wf =0;
    pd = "";
  }
  var total = kos + lt + km + ks + mj + lm + wf;
  document.getElementById("pharga").innerHTML = "Rp. " + total;
}

function jkl(){
  kelamin= "Laki-Laki";
}
function jkp(){
  kelamin= "Perempuan";
}


function submit(){
    var total = kos + lt + km + ks + mj + lm + wf;
    if(total<5000000){
      alert("Pesanan anda gagal!!!!");
    }
    else{
      alert("selamat pesanan anda berhasil");
      var nama = document.getElementsByName("n1")[0].value;
      var alamat = document.getElementsByName("alamat")[0].value;

      document.getElementById("sbm").innerHTML =
      "<h1>Pemesanan</h1>" +
      "<table>" +
        "<tr>" +
          "<td>Nama Pemesan:&nbsp;&nbsp;&nbsp;</td>" +
          "<td>" + nama +"</td>" +
        "</tr>" +
        "<tr>" +
          "<td>Alamat Rumah:</td>" +
          "<td>" + alamat + "</td>" +
        "</tr>" +
        "<tr>" +
          "<td>Lokasi Kos:</td>" +
          "<td>" + lokasi + "</td>" +
        "</tr>" +
        "<tr>" +
          "<td>Lantai:</td>" +
          "<td>" + lantaii + "</td>" +
        "<tr>" +
          "<td>Jenis Kosan:</td>" +
          "<td>Kosan " + kelamin + "</td>" +
        "</tr>" +
        "<tr>" +
          "<td>Fasilitas: </td>" +
          "<td>" + kamarmandi + ", " + pa + pb + pc + pd + "</td>" +
        "<tr>" +
          "<td>Harga Kosan/tahun:</td>" +
          "<td>" + "Rp. " + total + "</td>" +
        "</tr>" +
      "</table>";
    }

}
