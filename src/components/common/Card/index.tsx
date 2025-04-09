'use client';

import { cardStyles } from './styes';

type CardProps = {
  title: string;
  content: string;
  createAt: string;
  likes: number;
  onClick: () => void;
};

export default function Card({ title, content, createAt, likes, onClick }: CardProps) {
  return (
    <article className={cardStyles} onClick={onClick}>
      <div className="flex flex-col gap-2">
        <span className="text-[13px] text-[#666666]">익명</span>
        <header className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold">{title}</h2>
        </header>
        <p className="truncate">{content}</p>
        <footer className="flex justify-between">
          <span className="text-[13px]">{createAt}</span>
          <div>🖤{likes}</div>
        </footer>
      </div>
    </article>
  );
}
