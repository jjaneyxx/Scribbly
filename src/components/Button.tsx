import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="h-[53px] w-100 cursor-pointer rounded-lg bg-black text-[18px] text-white">
      {children}
    </button>
  );
}
