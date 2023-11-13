import Image from "next/image"

export function LogoBigScreen({changeImage , setChangeImage}){
    return (
        (changeImage)?
                        
            <Image
            alt="img" 
            src={require("../../../pic4.png")} 
            onMouseOut = {() => setChangeImage(false)} 
            className="h-full"
            priority={true}
            />
        :
            <Image
            alt="img" 
            src={require("../../../pic3.png")} 
            priority={true}
            className="h-full " 
            onMouseOver={() => setChangeImage(true)}/>
    )
}

export function LogoSmallScreen(){
    return (
        // <Image style={{zIndex : 0.5}} alt="img" src={require("../../../india.jpg")}  width={800} className="opacity-[0.1] absolute"/>
        <Image alt="img" priority={true} src={require("../../../pic3.png")}  className="h-full opacity-[0.5]"/>

    )
}