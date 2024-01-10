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


export default function ProjectAlert({component , action , link} : any){
    return (
        <AlertDialog>
          <AlertDialogTrigger 
            className="flex w-full items-center justify-center text-black font-bold rounded-lg">
              {component}
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>🔍 Explore GitHub Repository</AlertDialogTitle>
              <AlertDialogDescription>
                {/* This action Redirects you to github. */}
                Are you sure you want to visit the GitHub repository for this project?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>Cancel</AlertDialogAction>
              {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
                  <AlertDialogAction>
                      {/* <Link className="max-md:w-screen" href={(action === "Github")?"https://github.com/Harish-M-2003":"linkedin"}>
                          {action}
                      </Link> */}
                      <Link target="_blank" className="max-md:w-screen" href={link}>
                          {/* {action} */}
                          {"Yes"}
                      </Link>
                  </AlertDialogAction>
              
            </AlertDialogFooter>
          </AlertDialogContent>
          </AlertDialog>
    )
}