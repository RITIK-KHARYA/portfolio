import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./ui/button";
import { Loader } from "lucide-react";

interface LoadingButtonProps extends ButtonProps {
  loading: boolean;
}

export default function LoadingButton({
  className,
  loading,
  disabled,
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      className={cn(`flex items-center gap-2 w-24 h-10`, className)}
      disabled={loading || disabled}
      {...props}
    >
      {loading && <Loader className="animate-spin gap-2 size-5" />}
      {props.children}
    </Button>
  );
}
