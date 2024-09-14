const ChannelPreview = () => {
  return (
    <div className="w-14 aspect-square rounded-full relative bg-secondaryDarkGray hover:rounded-xl hover:transition-all ease-in-out duration-300 cursor-pointer text-bglightgray flex items-center justify-center">
      <h1>Ns</h1>
      <span className="absolute bg-red-600 text-white aspect-square p-1 rounded-full -bottom-2 font-medium right-0 z-50">
        49
      </span>
    </div>
  );
};

export default ChannelPreview;
