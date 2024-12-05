import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function CustomDialog ({ children, title, content, className, dontClose, setOpen } : { children: React.ReactNode, title: string | React.ReactElement, content: React.ReactElement, className?: string, dontClose?: boolean, setOpen?: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <Dialog onOpenChange={setOpen ?? undefined}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent onInteractOutside={(e) => { if (dontClose) { e.preventDefault() } }} className={className}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  )
}