import React from "react";
import Doritos from '../../Assets/Images/Doritos.jpg';

const InsertFoodComponent = ({setFoodList, setFoodName, foodName, nextFoodId, foodList, foodDescription, setFoodDescription}) =>{
    

    return(        
        <div className="card mt-4 col-md border rounded shadow flex-row justify-content-evenly">
            <div className="col-md-8">
                <label htmlFor="foodListItem" className="form-label text-start">Menu item</label>
                <input type="text" name=""  value={foodName} className="form-control" id="foodListItem" placeholder="Food List Item"
                    onChange={e => setFoodName(e.target.value) } />             

                <label htmlFor="foodListItemDescription" className="form-label">Notes</label>
                <textarea className="form-control" id="foodListItemDescription" rows="3" onChange={ e => setFoodDescription(e.target.value)}></textarea>   
                <button type="button" className="btn btn-primary"
                    onClick={
                        () => {                                                        
                                setFoodList([
                                    ...foodList,
                                    {id: nextFoodId++, foodName: foodName, foodDescription: foodDescription}                                
                                ])
                                setFoodName('');                            
                                setFoodDescription('');   
                                console.log(foodList)
                        }
                    }>Primary</button>
            </div>
            <div className="col-md-4">
                <img src={Doritos} alt="Snacks" className="img-fluid rounded-end"/>
            </div>
        </div>
    )
}

export default InsertFoodComponent;