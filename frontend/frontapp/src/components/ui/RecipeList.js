import '../../assets/styles/myRecipes.css';
import { Button, Container } from 'react-bootstrap';
import axios from 'axios';

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
                        <button className="custom-style" onClick={async () => {
                                const itemId = item._id;
                                console.log('info za item', itemId);
                                await axios.delete(`/recipes/${item._id}`)
                                .then((response) => {
                                    console.log(response.data);
                                })
                                .catch((err) => {
                                    console.log(err);
                                })
                                window.location.reload();
                            }
                        }> Delete </button>
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