import RouteHeader from "../widgets/routeheader";
import { useState, useEffect } from 'react';
import RecipeForm from "../ui/RecipeForm";
import RecipeList from "../ui/RecipeList";
import axios from 'axios';

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
           [event.target.name]: event.target.value
       }
      } )
  };
 
    const submitForm = async (event) => {
        event.preventDefault();
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
        <button><a href='/my-recipes' onClick={holdButtonClick}>-</a></button>
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