import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import Link from "next/link";


export default function ProjectAlert({component , action}){
    return (
        <AlertDialog>
          <AlertDialogTrigger 
            className="flex w-full items-center justify-center text-black font-bold rounded-lg">
              {component}
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action Redirects you to github.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Link href={(action === "Github")?"https://github.com/Harish-M-2003":"linkedin"}>
                  
                  <AlertDialogAction>{action}</AlertDialogAction>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
          </AlertDialog>
    )
}