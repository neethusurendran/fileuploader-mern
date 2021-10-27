import React from 'react';


export const Createfile=({})=> {

    // const [file,setFile]=useState( initialState: null);
    // const onInputChange =(e)=>{
    //     console.log(e.target.value)
    // };
    return (
        <form method="post" action="#" id="#">
            <div className="form-group files">
                <label>Upload Your Files</label>
                <input type="file"
                
                className="form-control"
                // onChange={onInputChange}
                >

                </input>
                </div>
                <button>Submit</button>

            
            
        </form>
    )
}

export default Createfile
