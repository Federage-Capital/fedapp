import { FunctionComponent } from "react";

const Bouton: FunctionComponent = () => {
  return (
    <div className="rounded-lg bg-gray-100 flex flex-row items-start justify-start py-3.5 px-4">
      <img
        className="relative w-[5.7px] h-[9.5px] object-cover"
        alt=""
        src="/icon1211.png"
      />
    </div>
  );
};

export default Bouton;
