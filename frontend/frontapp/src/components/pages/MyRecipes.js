import RouteHeader from "../widgets/routeheader";
import { useState } from 'react';
import RecipeForm from "../ui/RecipeForm";
import RecipeList from "../ui/RecipeList";



const MyRecipes = () => {
    const [list, setList] = useState([
        {
            recipeTitle: 'Homemade Pizza',
            category: 'Breakfast',
            preparationTime: '5',
            people: '4',
            shortDescription: 'asd dsa',
            recipe: 'waaa',
            createdOn: new Date().toLocaleDateString()
          }],
    );
    const [form, setForm] = useState([
        {
            recipeTitle: '',
            category: '',
            preparationTime: 0,
            people: 0,
            shortDescription: '',
            recipe: '',
            createdOn: ''  
        }
     ] );  
  
    const handleChange = (event) => {
      setForm(state => {
       return   {
           ...state,
           [event.target.name]: event.target.value,
           createdOn: new Date().toLocaleDateString()

       }
      } )
     
  };
  
    const submitForm = (event) => {
      event.preventDefault();
      const newList =  list.concat(form);
        
      setList(newList);
  
      
      console.log('form', form);
    };
   

    const [isPlusClicked, setIsPlusClicked] = useState(false);

    const holdButtonClick = () => {
        setIsPlusClicked(state => {
            return !state
        });
    }

    return (
        <>
        <RouteHeader title='My Recipes' />
        {isPlusClicked ?
        <>
        <button onClick={holdButtonClick}>back</button>
            <RecipeForm submitForm={submitForm} handleChange={handleChange} form={form} />
            </>
            :
            <>
            <p>Recipes list</p>
            <button onClick={holdButtonClick}>+</button>
            <RecipeList list={list} />
            </>
        }
     
        </>
        // <div>
        //     <RecipeForm submitForm={submitForm} handleChange={handleChange} form={form} />
        //     <p>Recipes list</p>
        //    <RecipeList list={list} />
        // </div>
    )
}

export default MyRecipes;