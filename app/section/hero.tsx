export default function Hero() {
  return (
    <div className="container flex flex-col items-center mx-auto mb-20 md:mb-60">
      <div className="w-1/2 md:w-1/4">
        <img src="img/hero.png" />
      </div>
      <div className="w-[270px] md:w-[400px] lg:w-[620px]">
        <p className="font-manrope text-sm md:text-xl font-medium text-center">
          Dan hendaklah diantara kamu segolongan umat yang menyeru kepada
          kebajikan, menyuruh kepada yang makruf, dan mencegah dari yang munkar,
          merekalah orang-orang yang beruntung. <br />
          (QS. Ali Imran : 104)
        </p>
      </div>
    </div>
  );
}
