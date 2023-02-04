function card(props) {
  return (
    <>
      <div className="card flex justify-between items-center bg-white text-black m-2 md:m-6 sm:w-[70vw] md:w-[50vw] lg:w-[40vw] rounded-lg">
        <div className="top flex justify-start p-3">
          <img
            src={props.image}
            className="w-[16vw] h-[16vw] object-contain flex justify-start"
            alt=""
          />
        </div>
        <div className="bottom flex flex-col  justify-center m-6 w-[70%]">
          <div className="name font-bold">{props.name}</div>
          <div className="font-light">{props.category}</div>
          <div className="text-orange-300 font-bold" >{props.rating}</div>
          <div className="text-xl font-bold">${props.price}</div>
        </div>
      </div>
    </>
  );
}

export default card;
