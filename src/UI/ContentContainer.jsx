const ContentContainer = ({ children, customClassName }) => {
  return (
    <div
      className={`w-90
       bg-sky-500/50
        text-white 
        text-center 
        rounded-3xl 
        light-shadow
			${customClassName}`}
    >
      {children}
    </div>
  );
};
export default ContentContainer;
