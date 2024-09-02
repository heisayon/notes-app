import Userinput from "./Userinput"
import Button from "./Button"

function Navbar() {
  return (
    <div className="flex justify-center">
    <section className="p-3 left-0 right-0 fixed top-0 backdrop-blur-xl bg-white/5 ">
      <div className="flex justify-center items-center">
        <div className="relative">
          <Userinput />
          <Button />
        </div>
      </div>
    </section>
  </div>
  )
}

export default Navbar
