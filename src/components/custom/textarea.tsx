interface TextAreaProps {
  value?: string;
}
export default function TextArea({ value }: TextAreaProps) {
  return (
    <textarea
      className="w-[50%] h-[500px] max-h-[500px] text-sm text-start px-4 py-2 bg-slate-700 text-yellow-300 cursor-default rounded-md shadow-md whitespace-pre-wrap"
      value={value}
      readOnly
    />
  );
}
