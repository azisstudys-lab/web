// pastikan DOM siap
$(function() {
  // event click pada #buttonTambah
  $("#buttonTambah").on("click", function() {
    // this mengacu ke elemen DOM; $(this) jadi jQuery object
    const $btn = $(this);

    // baca atribut biasa (mis. role)
    const role = $btn.attr("role"); // "action"

    // baca atribut custom menggunakan .attr
    const idAttr = $btn.attr("data-id"); // "42" (string)

    // baca data-* menggunakan .data (otomatis konversi tipe bila memungkinkan)
    const idData = $btn.data("id"); // 42 (number)
    const nama = $btn.data("nama"); // "Produk A"
    const harga = $btn.data("harga"); // 150000 (number jika bisa dikonversi)

    // contoh penggunaan
    console.log("role:", role);
    console.log("data-id (attr):", idAttr);
    console.log("data-id (data):", idData);
    console.log("nama:", nama);
    console.log("harga:", harga);

    // menampilkan ke user
    alert(`Menambahkan ${nama} (id ${idData}) seharga Rp ${harga}`);
  });
});
