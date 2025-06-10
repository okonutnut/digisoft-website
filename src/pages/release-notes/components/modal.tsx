import TextArea from "@/components/custom/textarea";
import useReleaseNotes from "@/hooks/read-notes";

interface ViewReleaseNotesTextAreaProps {
  children: React.ReactNode;
  title: string;
  code: string;
}
export default function ViewReleaseNotesTextArea({
  code,
}: ViewReleaseNotesTextAreaProps) {
  const note = useReleaseNotes(code);
  return <TextArea value={note} className="w-full h-[300px]" />;
}
