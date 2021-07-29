import RouteHeader from "../widgets/routeheader";
import { useState, useEffect } from 'react';
import RecipeForm from "../ui/RecipeForm";
import RecipeList from "../ui/RecipeList";
import axios from 'axios';
import { Redirect } from "react-router";



const MyRecipes = (props) => {
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

    const [list, setList] = useState([
        {
            title: 'Homemade Pizza',
            category: 'Breakfast',
            preparation_time: '5',
            people: '4',
            description: 'asd dsa',
            recipe: 'waaa',
            createdAt: new Date().toLocaleDateString()
          }],
    );
    const [form, setForm] = useState([
        {
            title: '',
            category: '',
            preparation_time: 0,
            people: 0,
            description: '',
            recipe: ''
        }
     ] );  
  
    const handleChange = (event) => {
      setForm(state => {
       return   {
           ...state,
           [event.target.name]: event.target.value,
        //    created: new Date().toLocaleDateString()

       }
      } )
     
  };
  
    // const submitForm = (event) => {
    //   event.preventDefault();
    //   const newList =  list.concat(form);
        
    //   setList(newList);
  
      
    //   console.log('form', form);
    // };

    const submitForm = async (event) => {
        event.preventDefault();
        //   const newList =  list.concat(form);
        
          setList(form);
      
        const submitRecipe = async () => {
         await axios.post('/recipes', form)
        .then((response) => {
          console.log('submit recipe response:',response);
        })
         .catch(err => console.log(err))
        }
         submitRecipe()
         console.log('fetchedId', props);
      }



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
        {/* <button onClick={holdButtonClick}>back</button> */}
        <button><a href='/my-recipes' onClick={holdButtonClick}>-</a></button>


        {/* <form className='recipe-form' onSubmit={submitForm}>




        <input type="text" placeholder="Homemade Pizza"  name='title' value={form.title} onChange={handleChange} />
        <select name='category' value={form.category} onChange={handleChange}>
            <option value="breakfast">Breakfast</option>
            <option value="brunch">Brunch</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
        </select>
        <input type="number" placeholder="45" name='preparation_time' value={form.preparation_time} onChange={handleChange} />
        <input type="number" name="people" value={form.people} placeholder="4" onChange={handleChange} />

        <textarea name="description" value={form.description} onChange={handleChange}></textarea>
        <textarea name="recipe" value={form.recipe} onChange={handleChange}></textarea>
        


<button>Create</button>



            </form> */}

            <RecipeForm handleChange={handleChange} form={form} submitForm={submitForm} />
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