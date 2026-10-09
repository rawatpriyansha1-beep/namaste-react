# namaste food ordering app structure


/* // Food Ordering app - Planning and wire frame designing 
1. Header
-logo
-nav {menu items [home,about,cart]}
2. Body
-search bar (input)
-RestrauntContainer containing -->card container for restraunt or cuisine [img, name of restraunt, star rating, cuisine, delivery time , distance]
3. Footer
-Copyright
-Links
-Address
-Contact
*/

Two types of import and export :
1. Default import/export
- export default ComponentName;
- import ComponentName from "path";

2. Named import/export
- export const ComponentName; or export const variableName;
- import {ComponentName} from "path"; or import {variableName} from "path"; 