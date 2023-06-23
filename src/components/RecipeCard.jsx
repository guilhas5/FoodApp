function RecipeCard({ searchQuery, setSelectedRecipe, handleFilter }) {
  const [recipeData, setRecipeData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_SOME_KEY}&query=${searchQuery}&diet=${handleFilter()}`
        );
        const fetchedRecipeData = response.data;
        setRecipeData(fetchedRecipeData);
        setError(false);
      } catch (error) {
        console.log('Error fetching recipe data:', error);
        setError(true);
      }
    };

    fetchRecipeData();
  }, [searchQuery, handleFilter]);

  const renderRecipeCard = () => {
    if (error) {
      return (
        <h1 className="error--message">
          We are sorry but our website is under maintenance.
        </h1>
      );
    }

    if (recipeData) {
      if (recipeData.results.length > 0) {
        return recipeData.results.map((recipe) => (
          <div key={recipe.id} onClick={() => setSelectedRecipe(recipe)}>
            <div className="card">
              <h1 className="title--recipe">{recipe.title}</h1>
              <img className="img--recipe" src={recipe.image} alt={recipe.title} />
            </div>
          </div>
        ));
      } else {
        return (
          <h1 className="error--message">We are sorry but we can't find a recipe.</h1>
        );
      }
    }

    return <h1 className="loading">Loading...</h1>;
  };

  return (
    <div className="container--card">
      {renderRecipeCard()}
    </div>
  );
}
