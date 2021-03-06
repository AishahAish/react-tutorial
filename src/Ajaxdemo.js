import React from 'react';
import axios from 'axios';


class Ajaxdemo extends React.Component
{

constructor(){
    super();
   
    this.state = {
        posts : []
    }
   
};

componentDidMount()
{
    axios.get("https://jsonplaceholder.typicode.com/posts") .then(response => {
             // console.log(response.data);
              this.setState({posts:response.data})
      })
}


render()
{
    return (

     
        <table>
        <thead>
        <tr>
        <th>Id</th>
        <th>Title</th>
        </tr>
        </thead>
        <tbody>
       {this.state.posts.map((itm, k)=>{
           return(
               <tr>
               <td>{itm.id}</td>
               <td>{itm.title}</td>
               </tr>
           )
       })}
        </tbody>
        </table>

    );
}

}
export default Ajaxdemo;
