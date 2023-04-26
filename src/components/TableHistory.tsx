const TableHistory = ()=>{
  return(
    <>
      <h1 className="flex justify-center items-center"> Meu Histórico</h1>
      <table className="flex flex-col w-[calc(100vw-30px)] mt-4">
        <thead className="p-2">
          <tr className="flex justify-between">
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Início</th>
            <th>Status</th>
          </tr>
        </thead>
        <tr className="w-full text-xs ml-2">
          <td className="">Conserto de débitos técnicos</td>
          <td className="">25 minutos</td>
          <td className="">Há cerca de 2 meses</td>
          <td className="">Em andamento</td>
        </tr>
      </table> 
    </>
  )
}

export default TableHistory;