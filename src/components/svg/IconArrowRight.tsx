import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

function IconArrowRight({ ...props }: Props) {
  return (
    <svg
      width="29"
      height="30"
      viewBox="0 0 29 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.6073 19.2273L18.8569 10.9777M18.8569 10.9777H10.6073M18.8569 10.9777V19.2273"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconArrowRight;
