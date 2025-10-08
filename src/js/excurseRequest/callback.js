
const posts =[
    {
        title: "post 1",
        body: "inhalt post 1"
    },
    {
        title: "post2",
        body: "inhalt post 2"
    }
]

function getPosts(){
    setTimeout(()=>{

        let output = ""
        posts.forEach((post)=>{

            output += `<li>${post.title}</li>`
        })

        document.body.innerHTML = output

    },1000)
}

function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post)
        callback()
    },2000)
}

const newPost = { title: "post3", body: "inhalt post 3" }
createPost(newPost, getPosts)