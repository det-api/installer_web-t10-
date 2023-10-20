import React from "react";
import { TankProps } from "../../types/Tank.types";

const TankDrop: React.FC<TankProps> = ({ setValue, value }) => {
  return (
    <div className=" w-[200px]">
      <label className=" text-slate-200  ">Tank No</label>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name="languages"
        id="lang"
        className=" mt-4 h-[45px] rounded-md p-2 px-1 w-[100%]"
      >
        <option value="none">None</option>
        <option value="1">Tank 1</option>
        <option value="2">Tank 2</option>
        <option value="3">Tank 3</option>
        <option value="4">Tank 4</option>
        <option value="5">Tank 5</option>
        <option value="6">Tank 6</option>
        <option value="7">Tank 7</option>
        <option value="8">Tank 8</option>
        <option value="9">Tank 9</option>
        <option value="10">Tank 10</option>
      </select>
    </div>
  );
};

export default TankDrop;
