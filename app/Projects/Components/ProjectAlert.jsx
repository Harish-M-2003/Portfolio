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


export default function ProjectAlert({component , action , link}){
    return (
        <AlertDialog>
          <AlertDialogTrigger 
            className="flex w-full items-center justify-center text-black font-bold rounded-lg">
              {component}
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Site Under Construction</AlertDialogTitle>
              <AlertDialogDescription>
                {/* This action Redirects you to github. */}
                Site Under Development, please try again later.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>Cancel</AlertDialogAction>
              {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
                  {/* <AlertDialogAction> */}
                      {/* <Link className="max-md:w-screen" href={(action === "Github")?"https://github.com/Harish-M-2003":"linkedin"}>
                          {action}
                      </Link> */}
                      {/* <Link target="_blank" className="max-md:w-screen" href={link}>
                          {action}
                      </Link>
                  </AlertDialogAction> */}
              
            </AlertDialogFooter>
          </AlertDialogContent>
          </AlertDialog>
    )
}