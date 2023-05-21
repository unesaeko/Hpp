const form = document.getElementById("form")
const persediaan = document.getElementById("persediaan")
const pembelian = document.getElementById("pembelian")
const biayaAngkut = document.getElementById("biaya_angkut")
const retur = document.getElementById("retur")
const potongan = document.getElementById("potongan")
const akhir = document.getElementById("akhir")
const jual = document.getElementById("jual")
const div = document.getElementById("hasil")
const reset = document.getElementById("reset").addEventListener("click",function(){
    window.location.reload()
})
form.addEventListener("submit", function (e) {
    e.preventDefault()
    let pembelianBersih = parseInt(pembelian.value) + parseInt(biayaAngkut.value)
    let potonganPembelian = parseInt(retur.value) + parseInt(potongan.value)
    let totalPembelianBersih = pembelianBersih - potonganPembelian
    let barangTersedia = totalPembelianBersih + parseInt(persediaan.value)

    let hasil = barangTersedia - parseInt(akhir.value)
    let hpp = hasil * ((100 + parseInt(jual.value))/100)
    const p = document.createElement("p")
    const p2 = document.createElement("p")
    const p3 = document.createElement("p")
    const p4 = document.createElement("p")
    p.innerText = `: ${pembelianBersih}`
    p2.innerText=`: ${potonganPembelian}`
    p3.innerText=`: ${hasil}`
    p4.innerText=`: ${hpp}`
    div.append(p,p2,p3,p4)
})
