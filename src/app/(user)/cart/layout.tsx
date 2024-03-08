import NavbarUser from "../(component)/navbar"

export default function LayoutCart({
  children
}:{
  children:React.ReactNode
}){
  return(<>
    <NavbarUser/>
    <div className="mt-10">
      {children}
    </div>
  </>)
}