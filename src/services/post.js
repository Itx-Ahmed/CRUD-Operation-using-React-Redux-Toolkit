import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getAllpost: builder.query({
      query: () => 'posts',
    }),

    getsingleId: builder.query({
      query: (id) => `posts/${id}`,
    }),
    getlimitpost: builder.query({
      query: (limit) => `posts?_limit=5`,
       method:"GET"
    }),

    Deletepost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),


      createPost: builder.mutation({
        query: (newPost) => ({
          url: 'posts',
          method: 'POST',
          body: newPost,
          headers: {
            'Content-Type': 'application/json', 
             name:"ahmad", 
             age:24, 
             Qualification:"Bsse",
          },
        }),
      }),
      
    }),
    

   
    }),
    
     
  })
 
  
  

 
   


export const { useGetAllpostQuery,useGetsingleIdQuery,useGetlimitpostQuery,useDeletepostMutation, } = postApi;