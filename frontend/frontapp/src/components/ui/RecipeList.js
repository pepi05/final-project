import '../../assets/styles/myRecipes.css';
import { Button, Container } from 'react-bootstrap';

const RecipeList = (props) => {
    

    return (
        <div>
            <Container>
            <table className="table-light" responsive style={{marginTop: '2.5rem', width: '100%' }}>
                <thead>
                    <tr style={{color:'#F0972A', backgroundColor:'#F8F7F2'}} className="custom-spacing py-5">
                        <th>Recipe Name</th>
                        <th>Category</th>
                        <th>Created On</th>
                        <th></th>
                        <th></th>
                        <th>Delete</th>
                    </tr>
                </thead>
                    <tbody>
                        
                    {props.list.map((listItem, index) => {
             return   <tr className="custom-spacing py-5">
                     <td className="py-3 color-tr font-weight-bold" key={listItem.id}> {listItem.recipeTitle} </td>
                     <td className="py-3 color-tr" key={listItem.id}>
                         <Button className="custum-font-size-12 custom-btn font-weight-bold">
                         {listItem.category} 
                         {/* .toUpperCase() */}
                        </Button> 
                    </td>
                     <td className="py-3 color-tr font-weight-bold" key={listItem.id}> {listItem.createdOn} </td>
                     <td className="py-3 color-tr"></td>
                     <td className="py-3 color-tr"></td>
                     <td className="py-3 color-tr">
                     <button className="custom-style"> Delete </button>
                    </td>
          
        
             </tr>
             
                        
             })}
             
                    </tbody>
            </table>

            </Container>
        </div>




//         <div>
// <ul>
// {props.list.map((listItem, index) => {
//              return    <li key={listItem.id}> {listItem.recipeTitle} {listItem.category} {listItem.createdOn} </li>
//             })}
// </ul>

//         </div>
        
        
            
          
        
        
    )
}

export default RecipeList;