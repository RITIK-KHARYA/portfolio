interface TyposProps {
  header: string;

}

export default function Typos({ header }: TyposProps) {
  return (
    <div className="bg-neutral-200 hover:opacity-90 cursor-default text-black text-center text-sm font-medium rounded-lg flex flex-row items-center justify-center w-20 h-6">
      {header}
    </div>
  );
}
