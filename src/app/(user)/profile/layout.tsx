import NavbarUser from "../(component)/navbar"

export default function LayoutProfile({
  children
}:{
  children:React.ReactNode
}){
  return(<>
    <NavbarUser/>
    <div className="mt-16">
      {children}
    </div>
  </>)
}