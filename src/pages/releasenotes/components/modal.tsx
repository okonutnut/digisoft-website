import TextArea from "@/components/custom/textarea";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import useReleaseNotes from "@/hooks/useReleaseNotes";

interface ViewReleaseNotesModalProps {
  children: React.ReactNode;
  title: string;
  code: string;
}
export default function ViewReleaseNotesModal({
  children,
  title,
  code,
}: ViewReleaseNotesModalProps) {
  const note = useReleaseNotes(code);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="xs:min-w-screen md:2xl:min-w-[700px] lg:2xl:min-w-[700px] xl:2xl:min-w-[700px] 2xl:min-w-[700px] p-2">
        <AlertDialogHeader>
          <AlertDialogTitle className="xs:text-md">
            {title}&apos;s Release Notes
          </AlertDialogTitle>
        </AlertDialogHeader>
        <TextArea value={note} className="w-full h-full" />
        <AlertDialogFooter>
          <AlertDialogCancel className="w-full">Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
