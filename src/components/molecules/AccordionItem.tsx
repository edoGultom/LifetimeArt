import Image from "next/image";

interface AccordionItemProps {
  icon: string;
  label: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  plusIcon: string;
}

export default function AccordionItem({
  icon,
  label,
  children,
  isOpen = false,
  onToggle,
  plusIcon,
}: AccordionItemProps) {
  return (
    <div className="flex flex-col border-b border-[var(--BORDER_2)]">
      <div
        className="flex justify-between py-5 cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex gap-5 items-center">
          <Image src={icon} alt={`Icon ${label}`} width={40} height={40} />
          <span className="text-Title-Accordion-M">{label}</span>
        </div>

        <div
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          <Image src={plusIcon} alt="Toggle" width={18} height={18} />
        </div>
      </div>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-5 text-paragraph text-Desc-Accordion-R">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
