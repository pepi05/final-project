import RouteHeader from "../widgets/routeheader";
import { useState, useEffect } from 'react';
import RecipeForm from "../ui/RecipeForm";
import RecipeList from "../ui/RecipeList";
import axios from 'axios';


const MyRecipes = (props) => {
  const [list, setList] = useState([]);

  const user_id = props.user.user_id;
  useEffect(() => {
      axios.get('/recipes')
      .then((response) => {
          setList(response.data.data);
          console.log('response od receptite: ',response.data.data);
          console.log('propsot: ', props.user.user_id);
      })
      .catch(err => {
          console.log(err);
      })
  },[])
  
    const [isPlusClicked, setIsPlusClicked] = useState(false);
    const holdButtonClick = () => {
        setIsPlusClicked(state => {
            return !state
        });
    }

    const [recipeImage, setRecipeImage] = useState({
      myFile: "",
    });

    const [recipes, setRecipes] = useState([{
      myFile: '',
      title: 'Homemade Pizza',
      category: 'Breakfast',
      preparation_time: '5',
      people: '4',
      description: 'asd dsa',
      recipe: 'waaa',
      createdAt: new Date().toLocaleDateString()
    }])

    const createRecipe = async () => {
      try {
        await axios.post("/recipes", {...recipes, myFile: recipeImage.myFile})
        .then((response) => {
          console.log('Ovaa respons od kreirana recepta: ', response);
        })
      } catch (error) {
        console.log(error);
      }
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      await createRecipe();
    };

    const convertToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        }
      })
    };

    const handleFileUpload = async (e) => {
      const file = e.target.files[0];
      const base64 = await convertToBase64(file);
      setRecipeImage({...recipeImage, myFile: base64})
    };

    const handleChange = (event) => {
      setRecipes(state => {
        return {
          ...state,
          [event.target.name]: event.target.value,
          myFile: recipeImage.myFile
        }
      })
    };

    return (
        <>
        <RouteHeader title='My Recipes' />
        {isPlusClicked ?
        <>
        <button><a href='/my-recipes' onClick={holdButtonClick}>-</a></button>
            <RecipeForm 
            handleChange={handleChange} 
            recipes={recipes}
            list={list}
            handleSubmit={handleSubmit} 
            handleFileUpload={handleFileUpload}
            recipeImage={recipeImage} 
            />
            </>
            :
            <>
            <p>Recipes list</p>
            <button onClick={holdButtonClick}>+</button>
            <RecipeList list={list}  user_id={user_id} />
            </>
        }
        </>
    )
}

export default MyRecipes;