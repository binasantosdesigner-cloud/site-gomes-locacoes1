import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface LegalModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  content: React.ReactNode;
}

export function LegalModal({ isOpen, onOpenChange, title, content }: LegalModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader className="border-b pb-4 mb-4">
          <DialogTitle className="text-2xl font-bold text-[#0E33AD]">{title}</DialogTitle>
        </DialogHeader>
        <div className="text-[#1A1A1A] text-base leading-relaxed space-y-4 whitespace-pre-wrap">
          {content}
        </div>
        <div className="mt-8 pt-4 border-t text-sm text-slate-500 italic">
          A Gomes Locações preza pela transparência e segurança jurídica em todas as suas operações.
        </div>
      </DialogContent>
    </Dialog>
  );
}
