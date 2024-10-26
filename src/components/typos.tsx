interface TyposProps {
  header: string;

}

export default function Typos({ header }: TyposProps) {
  return (
    <div className="bg-white hover:opacity-90 cursor-default text-black text-center text-sm font-medium rounded-md flex flex-row items-center justify-center w-20 h-6">
      {header}
    </div>
  );
}
