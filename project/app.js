const posts = [{
    title: 'Part One', body: 'This is part one'
},
{
    title: 'Part One', body: 'This is part one'
}];

function createPost(post){
    return new Promise(function(resolve, reject){
    setTimeout(function(){
        posts.push(post);
        const error = false;
        if(!error){
            resolve();
        } else{
            reject('Error: Something went wrong')
        }
        
    }, 2000);
});
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);

}
createPost({title: 'Part three', body: 'This is part three'})
.then(getPosts)
.catch(function(err){
    console.log(err);
});


// const http = new easyHTTP;
// http.get('https://jsonplaceholder.typicode.com/posts/1', function( err,posts){
//     if(err){
//         console.log(err)
//     }else{
//     console.log(posts)
// //     }
// // })

// // Crate data
// // const data = {
// //     title: 'Custom Post',
// //     body: 'This is a custom post'
// };
// Create post
// http.post('http://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//     if(err){
//         console.log(err);     
//     }else{
//         console.log(post)
//     }
// });
// Update post
// http.put('http://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
//     if(err){
//         console.log(err)
//     } else{
//         console.log(post);
//     }
// });

