const ScrollPageContainer = ({ children, customJustify, customMargin }) => {
  return (
    <>
      <div
        className={`pointer-events-none 
        absolute 
        z-10
        w-screen
        h-screen 
        flex 
        flex-col 
        justify-center 
        items-center} 
        ${(customJustify, customMargin)},
        `}
      >
        {children}
      </div>
    </>
  );
};
export default ScrollPageContainer;
