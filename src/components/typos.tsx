interface TyposProps {
  header: string;
}

export default function Typos({ header }: TyposProps) {
  return (
    <div className="bg-white text-black text-center text-sm rounded-lg flex flex-row items-center justify-center w-20 h-8">
      {header}
    </div>
  );
}
