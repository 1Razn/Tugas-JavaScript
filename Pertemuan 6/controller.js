// Import data dari file data.js
import users from "./data.js";

// Menampilkan semua data
const index = () => {
    // Tampilkan data menggunakan map()
    console.log("=======Data Users:=======");
    users.map((user, i) => {
        console.log(`${i + 1}. ${user.nama} - ${user.umur} tahun - ${user.email}`);
    });
    console.log("==========================\n");
};

// Menambah data baru
const store = (user) => {
    users.push(user);
    console.log(`Data '${user.nama}' berhasil ditambahkan!`);
};

// Menghapus data
const destroy = (index) => {
    const nama = users[index].nama;
    users.splice(index, 1);
    console.log(`Data '${nama}' berhasil dihapus!`);
};

// Export semua fungsi
export { index, store, destroy };