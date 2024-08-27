function MyButton({text, method}) {
    return(
      <>
      <button className={'py-2 px-4 rounded bg-blue-500 text-white font-CandyCore'}onClick={method}>{text}</button>
      </>
    )
  };


export default MyButton