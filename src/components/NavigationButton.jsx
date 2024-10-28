export const NavigationButton = ({ label, active, onClick }) => {
  const buttonClasses = `
    relative flex justify-center items-end 
    w-fit block after:block after:content-[''] after:absolute
    after:h-[2px] after:bg-black after:w-full
    after:scale-x-0 after:transition after:duration-300 after:origin-left
    mx-2 p-2 after:bottom-[calc(3px)] uppercase font-semibold
    ${active ? "after:scale-x-100" : "hover:after:scale-x-100"}
  `;

  return (
    <button className={buttonClasses.trim()} onClick={onClick}>
      {label}
    </button>
  );
};
