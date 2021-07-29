import '../../assets/styles/myRecipes.css';
import { Button, Container } from 'react-bootstrap';

const RecipeList = (props) => {
    console.log('listaaaaaaaaaaa', props.list);
    console.log('userIDDDDD', props.user_id);

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
                  
                { props.list.map(item => {
                    
                   {if (item.user === props.user_id) {
                    return <tr className="custom-spacing py-5"> 
                         <td className="py-3 color-tr font-weight-bold">{item.title}</td> 
                         <td className="py-3 color-tr">
                         <Button className="custum-font-size-12 custom-btn font-weight-bold">
                         {item.category} 
                        
                        </Button> 
                         </td>
                         <td className="py-3 color-tr font-weight-bold">{item.createdAt}</td>
                         
                        <td className="py-3 color-tr"></td>
                        <td className="py-3 color-tr"></td>
                        <td className="py-3 color-tr">
                        <button className="custom-style"> Delete </button>
                        </td>

                          </tr>
                           }
                        }
                     })}
                </tbody>
                </table>
            </Container>
        </div>
)
}

export default RecipeList;