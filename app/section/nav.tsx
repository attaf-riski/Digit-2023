export default function Nav() {
  return (
    <nav className="container mx-auto w-[90%] flex justify-between items-center">
      <div className="w-1/4 md:w-1/12 p-2">
        <img alt="" src="img/minilogo.png" />
      </div>
      <div className="hidden md:inline">
        <ul className="flex justify-center items-center gap-[4vw]">
          <li>
            <a href="#departemen">Departemen</a>
          </li>
          <li>
            <a href="#visi">Visi&Misi</a>
          </li>
          <li>
            <a href="#tentang">Tentang</a>
          </li>
        </ul>
      </div>
      <div>
        <button className="bg-[#C23E56] rounded-lg py-2 px-6 md:py-3 md:px-8 text-white my-2 font-semibold">
          <a href="https://wa.me/6285600088322">Gabung</a>
        </button>
      </div>
    </nav>
  );
}
