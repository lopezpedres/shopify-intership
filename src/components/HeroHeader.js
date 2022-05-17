
import Form from "./Form";

function HeroHeader({setLoading}) {
  
  return (
    <div className=" container grid lg:grid-cols-2 grid-cols-1 gap-0 mx-auto" >
      <div className="mt-16 mx-auto">
        <h1 className="md:text-8xl text-7xl font-rubik font-bold text-shadow-md">Inspiration<br /> is not <br /> a problem<br /><span>anymore!</span></h1>
      </div>
      <Form setLoading={setLoading}/>
    </div>
  );
}

export default HeroHeader;
