import Image from 'next/image';

export default function DropDown() {
  return (
    <button className="cursor-pointer">
      <Image
        src="/icons/headerKebap.svg"
        alt="header-kebap"
        width={0}
        height={0}
        style={{ width: '32px', height: 'auto' }}
      />
    </button>
  );
}
