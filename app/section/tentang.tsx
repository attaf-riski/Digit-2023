export default function Tentang() {
  return (
    <div
      className="container mx-auto flex flex-col items-center text-center  mb-20 px-2 lg:px-48"
      id="tentang"
    >
      <h3 className="font-manrope font-medium mb-5">| Tentang Digit</h3>
      <div className=" w-1/2 mb-10">
        <h2 className="font-manrope font-semibold text-3xl md:text-5xl">
          Tak Kenal Maka Ta’aruf
        </h2>
      </div>
      <div className="flex items-center justify-center w-full h-[237px] bg-[#D9D9D9] py-6 px-4 md:py-10 md:px-32 rounded-[62px] mb-8 overflow-hidden">
        <p className="font-manrope text-md md:text-xl font-medium text-center leading-loose">
          Organisasi mahasiswa muslim/muslimah Ilmu Komputer/Informatika
          Fakultas Sains dan Matematika Universitas Diponegoro adalah wajihah
          atau wahana yang dibentuk untuk mensyiarkan Islam di departemen Ilmu
          Komputer/Informatika dan mencetak mahasiswa muslim yang peka terhadap
          Islam, berwawasan luas, intelektual, dan profesional
        </p>
      </div>
      <div className="w-full flex flex-col items-end gap-4">
        <div className="flex items-center justify-center w-full md:w-1/2 h-[237px] bg-[#D9D9D9] py-6 px-4 md:py-10 md:px-20 rounded-[62px]">
          <p className="font-manrope text-md md:text-xl font-medium text-center leading-loose">
            Organisasi ini bernama Dakwah Islam Generasi IT Informatika
            Universitas Diponegoro, disingkat DIGIT Informatika UNDIP
          </p>
        </div>
        <div className="flex items-center justify-center w-full md:w-1/2 h-[237px] bg-[#D9D9D9] py-6 px-4 md:py-10 md:px-20 rounded-[62px] self-start">
          <p className="font-manrope text-md md:text-xl font-medium text-center leading-loose">
            DIGIT didirikan di Semarang pada tanggal 15 bulan Desember tahun
            2007
          </p>
        </div>
        <div className="flex items-center justify-center w-full md:w-1/2 h-[237px] bg-[#D9D9D9] py-6 px-4 md:py-10 md:px-20 rounded-[62px]">
          <p className="font-manrope text-md md:text-xl font-medium text-center leading-loose">
            Sekretariat DIGIT bertempat di Gedung E Lantai III di ruang Himpunan
            Mahasiswa Informatika Universitas Diponegoro
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
