import { Fragment, useContext } from "react";
import NewRecipe from "./components/NewRecipe/NewRecipe";
import RecipeFilter from "./components/RecipeFilter/RecipeFilter";
import RecipeModal from "./components/RecipeModal/RecipeModal";
import Recipes from "./components/Recipes/Recipes";
import RecipesContext from "./store/recipes-context";

export default function App() {
  const ctx = useContext(RecipesContext);

  function closeModalHandler() {
    ctx.onActivateRecipe(null);
  }
  return (
    <Fragment>
      <NewRecipe />
      <RecipeFilter />
      <Recipes />
      {ctx.activatedRecipe && (
        <RecipeModal
          recipe={ctx.activatedRecipe}
          onCloseModal={closeModalHandler}
        />
      )}
    </Fragment>
  );
}
