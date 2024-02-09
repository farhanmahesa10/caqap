import React from "react";
import { useCollapse } from "react-collapsed";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
const Accordion = (props) => {
  const {
    children,
    head,
    title,
    className,
    openIcon,
    closeIcon,
    titleClassName,
  } = props;

  const [isOpen, setExpanded] = React.useState(false);
  const { getToggleProps, getCollapseProps } = useCollapse({
    isOpen,
  });

  return (
    <div
      className={`w-full p-4 rounded-[4px] ${
        isOpen && "bg-white border border-[#D1E4EA] "
      }`}
    >
      <button
        className={`flex items-center text-neutral-black justify-between w-full gap-2 ${titleClassName}`}
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <span className={`${isOpen && "text-primary"} text-start`}>
          {" "}
          {title}
        </span>
        {isOpen ? (
          <>{openIcon || <FaCaretUp />}</>
        ) : (
          <>{closeIcon || <FaCaretDown />}</>
        )}
      </button>
      <section {...getCollapseProps()} className="w-full">
        <div className="mt-4">{children}</div>
      </section>
    </div>
  );
};

export default Accordion;
