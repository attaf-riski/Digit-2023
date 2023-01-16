interface Props {
  no?: string;
  misi?: string;
}

export default function ListMisi({ no, misi }: Props) {
  return (
    <div className="flex w-full justify-center items-center gap-4">
      <div className="w-[70px] h-[70px] rounded-3xl pt-[20px] bg-black bg-opacity-30">
        <h3 className="text-center font-bold text-xl font-manrope text-white">
          {no}
        </h3>
      </div>
      <div className="w-9/12">
        <p className="font-manrope font-medium text-xl text-left">{misi}</p>
      </div>
    </div>
  );
}
