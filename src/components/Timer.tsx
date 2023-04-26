import playIcon from "../assets/play.svg"

const Timer = () => {
  return (
    <div>
      <div className="flex justify-center">
        <p className="text-xs p-4 w-[100%]">
          Vou trabalhar em{" "}
          <input
            placeholder="Qual o nome do seu projeto"
            type="text"
            className=" border-b-[1px] border-b-[#7C7C8A] bg-transparent text-xs "
          ></input>{" "}
          durante{" "}
          <input
            placeholder="00 "
            type="number"
            className="w-9 border-b-[1px] border-b-[#7C7C8A] bg-transparent text-xs"
          ></input> minutos.
        </p>
      </div>

      <div className=" font-bold flex w-full p-2 items-center justify-center h-[10rem] text-[6rem] gap-4">
        <div className="bg-[#29292E] rounded-lg w-[4rem] text-center"> 0 </div>
        <div className="bg-[#29292E] rounded-lg w-[4rem] text-center"> 0 </div>
        <div className="text-[#00875F]"> :</div>
        <div className="bg-[#29292E] rounded-lg w-[4rem] text-center"> 0 </div>
        <div className="bg-[#29292E] rounded-lg w-[4rem] text-center"> 0 </div>
      </div>
      <div className="flex w-full justify-center p-4 h-[4.5rem]">
        <button className="gap-2 rounded-lg flex justify-center items-center text-center w-10/12 bg-[#00875F] "> <img src={playIcon} width={15} alt="" /> Começar</button>
      </div>
    </div>
  );  
};

export default Timer;
  