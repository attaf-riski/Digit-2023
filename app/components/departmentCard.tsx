interface Props {
  title?: string;
  desc?: string;
  imgUrl?: string;
}

export default function DepartemenCard({ title, imgUrl, desc }: Props) {
  return (
    <div
      className={`h-[547px] w-[300px] lg:w-[496px] rounded-[48px] bg-red-50 relative`}
    >
      <div className="bg-yellow-100 overflow-hidden rounded-[48px] absolute z-0">
        <img className="h-[547px] object-cover" src={imgUrl} />
      </div>
      <div className="absolute w-full h-1/2 lg:h-1/3 bottom-0 bg-black bg-opacity-60 z-10 rounded-br-[48px] rounded-bl-[48px] p-4">
        <p className="text-xl text-white font-semibold text-left">{title}</p>
        <p className="text-xs text-white text-left">{desc}</p>
      </div>
    </div>
  );
}
