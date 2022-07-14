// // document.getElementById('button1').addEventListener('click', getText);
// // document.getElementById('button2').addEventListener('click', getJson);
// // document.getElementById('button3').addEventListener('click', getExternal);
// // // get local text data
// // function getText(){
// //     fetch('text.txt')
// //     .then(function(res){
// //         return res.text();
// //     })
// //     .then(function(data){
// //         console.log(data);
// //         document.getElementById('output').innerHTML = data;
// //     })
// //     .catch(function(err){
// //         console.log(err);
// //     });
// // }
// // // get local json file
// // function getJson(){
// //     fetch('post.json')
// //     .then(function(res){
// //         return res.json();
// //     })
// //     .then(function(data){
// //         console.log(data);
// //         let output = '';
// //         data.forEach(function(post){
// //             output+= `<li>${post.title}</li>`;
// //         });
// //         document.getElementById('output').innerHTML = output;
// //     })
// //     .catch(function(err){
// //         console.log(err);
// //     });
// // }
// // // get from external
// // function getExternal(){
// //     fetch('https://api.github.com/users')
// //     .then(function(res){
// //         return res.json();
// //     })
// //     .then(function(data){
// //         console.log(data);
// //         let output = '';
// //         data.forEach(function(user){
// //             output+= `<li>${user.login}</li>`;
// //         });
// //         document.getElementById('output').innerHTML = output;
// //     })
// //     .catch(function(err){
// //         console.log(err);
// //     });
// // }
// const users = ['Nathan', 'John', 'William'];
// // const nameLengths = users.map(function(name){
// //     return name.length;
// // });
// const nameLengths = users.map(name => name.length)
// console.log(nameLengths)


// async function myFunc(){
//     const reponse = await fetch('')
// }
// const promise = new Promise((resolve, reject) => {
//     setTimeout(()=> resolve('Hello'), 1000);
// });

// const error = true;
// if(!error){
//     const res = await promise;
//     return res;
// } else{
//     await Promise.reject(new Error('Something went wrong'))
// }
// }
// myFunc()
// .then(res => console.log(res))
// .catch(err => console.log(err))