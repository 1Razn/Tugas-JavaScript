import { index, store, destroy } from "./controller.js";

const view = () => {
  // Menampilkan semua data
  console.log("Data Awal Users:");
  index();

  // Menambah data baru
  const newUser = [
    {
      nama: "Diana",
      umur: 28,
      alamat: "Jl. Mawar 11",
      email: "diana@mail",
    },
    {
      nama: "Al",
      umur: 20,
      alamat: "Jl. Melati 12",
      email: "al@mail",
    }
  ];
  console.log("Menampilkan Data Setelah Menambahkan Data Baru:");
  newUser.forEach((user) => store(user));
  index();

  // Menghapus data
  console.log("Menampilkan Data Setelah Menghapus Data:");
  destroy(0);
  index();
}

view();