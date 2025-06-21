const Hamburger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="group duration-500 rounded-lg">
      <div className="grid justify-items-center gap-1.5">
        <span
          className={`h-1 w-8 rounded-none bg-white transition-all duration-500 transform ${
            isOpen ? 'rotate-45 translate-y-2.5' : ''
          }`}
        ></span>
        <span
          className={`h-1 w-8 rounded-none bg-white transition-all duration-500 transform ${
            isOpen ? 'scale-0' : ''
          }`}
        ></span>
        <span
          className={`h-1 w-8 rounded-none bg-white transition-all duration-500 transform ${
            isOpen ? '-rotate-45 -translate-y-2.5' : ''
          }`}
        ></span>
      </div>
    </div>
  );
};

export default Hamburger;