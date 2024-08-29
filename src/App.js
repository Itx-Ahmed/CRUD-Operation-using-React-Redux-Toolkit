import logo from './logo.svg';
import './App.css';
import { useGetAllpostQuery,useGetsingleIdQuery,useCreatePostMutation,useDeletepostMutation} from './services/post'; 

function App() {

    // get all post
  // const responseInfo  = useGetAllpostQuery(); 
  //  console.log("data is here",responseInfo)

  //  Get Single Id
    //  const responseInfo = useGetsingleIdQuery(5); 
    //  console.log("Get Single Id",responseInfo.data);

      // limitted post

      // const responseInfo = useGetlimitpostQuery (5); 
      //  console.log("Get limitted post",responseInfo.data);
   
      // Delete post 
      const [deletepost,responseInfo] = useDeletepostMutation();
      console.log(deletepost); 
      console.log("Data",responseInfo)
       console.log("Success",responseInfo.isSuccess)



      // create post 

      //update post
      

   

   
  
 

  

   return (
    // <div className="App">
    //    <h1>Crud Operation using Redux Toolkit...</h1>

    //      calling to All post 
    //     {responseInfo.data?.map((singlepost) => {
    //        return (
    //          <>
    //           <h1>{singlepost.id}</h1>
    //            <h1>{singlepost.title}</h1>
    //            <p>{singlepost.body}</p>
    //           <h2>{singlepost.userId}</h2>
    //          </>
    //        )
           
    //     })}
        
          
       


         

        
       





       
    // </div>

    //  <div className='App'>
    //    {/* Get single id */}
    //    <h1>Get a Single Id</h1>
    //        <h1>{responseInfo.data.id}</h1>
    //        <h2>{responseInfo.data.title}</h2>
    //        <p>{responseInfo.data.body}</p>
          
          
    //  </div>
    
      //  <div className='App'>
      //     <h1>Get Limited Post </h1>

      //     {responseInfo.data.map((singlepost) => {
      //        return (
      //          <>
      //           <h1>{singlepost.id}</h1>
      //           <h2>{singlepost.title}</h2>
      //           <p>{singlepost.body}</p>
      //           <h3>{singlepost.userId}</h3>
                 
      //          </>
      //        )
      //     })}
         
      //  </div>

      
    <div className='App'>
      <h1>Delete Post</h1>
         <button onClick={() => deletepost(2)}>Delete Post</button>
        </div>
 




);


}
        
        
           

 



export default App;
