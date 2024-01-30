import { toast } from "@/components/ui/use-toast";

const callToast = (
  title:string,
  description: string,
  isDestructive?: boolean
) => {
  toast({
    title: title,
    description: description,
    variant: isDestructive ? 'destructive' : 'default',
    duration: 2500
  })
}

export default callToast;