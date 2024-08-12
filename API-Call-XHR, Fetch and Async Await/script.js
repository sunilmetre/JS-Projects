const postListContainer = document.querySelector(".posts-list-container");

//fetch using XHR

// const fetchUsingXHR = () =>{
//    const xhr = new XMLHttpRequest();
//     xhr.open("GET", 'https://jsonplaceholder.typicode.com/posts');
//     xhr.responseType= 'json';
//     xhr.send()

//     xhr.onload = () =>{
//         if(xhr.status === 200){
//             // console.log(xhr.response);
//             displayResults(xhr.response);

//         }else{
//             console.log('some Error Occured');
//         }
//     }

     const displayResults = (posts) =>{
       
        postListContainer.innerHTML = 
         posts.map((postItem) =>
        `
             <div  class="post-item">
                 <h3>${postItem.title}</h3>
                 <p>${postItem.body}</p>
             </div>
         `
    )
     }

//  }

// fetchUsingXHR()


//FetchUsing-FetchMethod

// const fetchUsingFetchMethod = () =>{
//     const fetchdata = fetch('https://jsonplaceholder.typicode.com/posts');
//     fetchdata
//     .then((res) => res.json())
//     .then((result) => displayResults(result))
//     .catch((error) => console.log(error))
// }

// fetchUsingFetchMethod();



//fetchUsing-Asyncawaitmethod

// async function fetchUsingAsyncAwaitMethod(){
//    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//    const result = await response.json()
//    displayResults(result);
// }

// fetchUsingAsyncAwaitMethod()


// fetchusing- XHR and AsyncAwait 



function helperMethod(method, url){
    const promise = new Promise((resolve,reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType = 'json'
        xhr.send();

        xhr.onload = ()=>{
            if(xhr.status === 200){
               resolve(xhr.response)

            }else{
                reject(xhr.response)

            }
        }

    })

    return promise;
}

async function fetchUsingXHRandAsyncAwait(){
    const response = await helperMethod('GET', 'https://jsonplaceholder.typicode.com/posts');
    displayResults(response)
    console.log(response);
    
}

fetchUsingXHRandAsyncAwait()