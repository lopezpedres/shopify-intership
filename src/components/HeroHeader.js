
import Form from "./Form";

function HeroHeader() {
  
  return (
    <div className=" grid lg:grid-cols-2 grid-cols-1 gap-4" >
      <div className="mt-16 mx-auto">
        <h1 className="md:text-8xl text-7xl font-rubik font-bold text-shadow-md">Type<br /> anything<br /> you can<br /><span>imagine</span></h1>
      </div>
      <Form/>
    </div>
  );
}

export default HeroHeader;
