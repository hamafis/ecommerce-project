import NavbarUser from "../(component)/navbar"

export default function LayoutStore({
  children
}:{
  children:React.ReactNode
}){
  return(<>
    <NavbarUser/>
    <div className="mt-20">
      {children}
    </div>
  </>)
}