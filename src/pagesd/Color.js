import ColorBasicList from "./ColorBasicList";
import ColorGrayList from "./ColorGrayList";
import ColorAccentsList from "./ColorAccentsList";

function Color() {
 return (
   <>
     <section className="color mb-30">
       <h2>COLOR</h2>
       <h3>Basic</h3>
       <ColorBasicList />
       <h3>Graybase</h3>
       <ColorGrayList />
       <h3>Accents</h3>
       <ColorAccentsList />
     </section>
   </>
 )
}

export default Color;
