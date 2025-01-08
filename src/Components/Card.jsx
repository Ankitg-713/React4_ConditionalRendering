function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1512446816042-444d641267d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Amazon Basics",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugit deleniti minima chept.",
      instock: true
    },
    {
      image:
        "https://images.unsplash.com/photo-1503926359680-9ddd5b2bcbdc?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Daily Objects",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugit deleniti minima.",
      instock: false
    },
    {
      image:
        "https://images.unsplash.com/photo-1662946834880-99adabd21f80?q=80&w=2456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Apple",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugit deleniti minima.",
      instock: false
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
      {data.map((elem, index) => (
        // card structure
        <div
          key={index}
          className="w-52 bg-zinc-100 rounded-md overflow-hidden"
        >
          <div className="w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover" 
              src={elem.image}
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="text-xs mt-5  ">{elem.description}</p>
            <button className={`px-2 py-1 ${elem.instock ? "bg-blue-500" : "bg-red-500 "} rounded mt-4 text-sm text-zinc-100`}>{elem.instock ? "In Stock" : "Out of Stock"}</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
