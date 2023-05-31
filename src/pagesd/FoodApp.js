import items from '../mock.json'
import FoodList from "./FoodList";

function FoodApp() {
 return (
   <div>
     <FoodList items={items} />
   </div>
 )
}

export default FoodApp;
