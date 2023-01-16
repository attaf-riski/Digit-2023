import DepartemenCard from "../components/departmentCard";

export default function Departemen() {
  return (
    <div
      className="container mx-auto flex flex-col items-center text-center  mb-20 md:mb-60"
      id="departemen"
    >
      <h3 className="font-manrope font-medium mb-5">| Departemen</h3>
      <div className=" w-1/2 mb-6">
        <h2 className="font-manrope font-semibold text-3xl md:text-5xl">
          DIGIT TIDAK AKAN BERJALAN TANPA DEPARTEMEN
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-9">
        <DepartemenCard
          imgUrl="img/kaderisasi.png"
          title="Kaderisasi"
          desc="Kaderisasi sebagai departemen yang berada di DIGIT yang bertugas mengkader seluruh pengurus DIGIT dan calon pengurus DIGIT yang sifatnya berupa penjagaan."
        />
        <DepartemenCard
          imgUrl="img/syiar.png"
          title="Syiar"
          desc="Syiar kampus merupakan salah satu cara yang digunakan untuk melaksanakan amanah berdakwah. Masyarakat kampus merupakan masyarakat yang cerdas. Tetapi sebaliknya kecerdasan ini akan berbahaya jika tidak diiringi dengan pemahaman tentang agama. Banyak mahasiswa yang cerdas tetapi mereka cenderung belum membarenginya dengan agama secara optimal. Oleh karena itu, syiar kampus ini penting untuk menjadikan masyarakat kampus menjadi pribadi yang cerdas dan paham agama."
        />
      </div>
    </div>
  );
}
