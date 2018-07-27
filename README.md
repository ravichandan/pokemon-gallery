# Pokemon Gallery
##Problem description 
Pokemon character figure image are to be displayed in a gallery.

The page should adapt to mobile, tablet and desktop
screen widths.
* `Mobile`: 1 Pokemon per row
* `Tablet`: 2 Pokemon per row
* `Desktop and larger`: 4 Pokemon per row
 
A maximum of 20 Pokemon should be displayed at once. The
page should have a Previous / Next control for
pagination.
Provide a search box to filter all Pokemon by name. The
search term should be case insensitive and match any part
of the name. For example, searching “Rat” will display
Rattata, Raticate, Poliwrath, Dratini.

### Prerequisites
node ">= 8.9.0".

### How to run
* Step 1: **`npm install` or `yarn`**
* Step 2: **`npm run build:ssr && npm run serve:ssr`**  **or**
**`yarn build:ssr && yarn serve:ssr`** 

Above steps compiles and spins up the application on `http://localhost:4000`.


### Testing
Spec classes have been added for all services and components. TestCases for node middleware have been added.  

---
### Developer
Ravi Chandan Sithiraju (s.ravichandan@gmail.com)
