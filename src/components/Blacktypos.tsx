interface TyposProps {
  header: string;
}

export default function BlackTypos({ header }: TyposProps) {
  return (
    <div className="bg-neutral-900/90 w-20 hover:opacity-90 cursor-default text-neutral-300 text-center text-sm font-normal rounded-sm  items-center justify-center h-6">
      {header}
    </div>
  );
}
