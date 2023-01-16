import ListMisi from "../components/listMisi";

export default function Visi() {
  return (
    <div
      className="container mx-auto flex flex-col items-center text-center mb-20"
      id="visi"
    >
      <h3 className="font-manrope font-medium mb-5">| Visi & Misi</h3>
      <div className=" w-1/2 mb-10">
        <h2 className="font-manrope font-semibold text-3xl md:text-5xl">
          Mewujudkan kehidupan Islami di departemen Ilmu Komputer / Informatika
          yang beriman dan beriptek tinggi
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center py-2">
        <div className=" w-full lg:w-1/2 p-20">
          <img
            alt="logo digit dulu"
            src="img/logodigitdulu.png"
            className=" object-cover"
          />
        </div>
        <div className=" w-full lg:w-1/2">
          <ul className="flex flex-col gap-5">
            <li>
              <ListMisi
                no={"01"}
                misi={
                  "Menggali, mengembangkan, dan memantapkan potensi dakwah, intelektual, dan sosial mahasiswa."
                }
              />
            </li>
            <li>
              <ListMisi
                no={"02"}
                misi={
                  "Membina keislaman, keimanan, dan ketaqwaan mahasiswa muslim Ilmu Komputer/ Informatika FSM UNDIP."
                }
              />
            </li>
            <li>
              <ListMisi
                no={"03"}
                misi={
                  "Mencerahkan dan meningkatkan kualitas mahasiswa Ilmu Komputer/Informatika menjadi mahasiswa yang rabbani, madani, adil, dan sejahtera."
                }
              />
            </li>
            <li>
              <ListMisi
                no={"04"}
                misi={
                  "Mengembangkan dakwah yang berbasis kompetensi di Ilmu Komputer/Informatika FSM UNDIP"
                }
              />
            </li>
            <li>
              <ListMisi
                no={"05"}
                misi={
                  "Mensyiarkan isu-isu keislaman di Ilmu Komputer/Informatika FSM UNDIP"
                }
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
