const posts = [
    {
        title: "post 1",
        body: "inhalt post 1"
    },
    {
        title: "post2",
        body: "inhalt post 2"
    }
]

function getPosts() {
    setTimeout(() => {

        let output = ""
        posts.forEach((post) => {

            output += `<li>${post.title}</li>`
        })

        document.body.innerHTML = output

    }, 1000)
}

function createPost(post) {

    return new Promise((resolve, reject) => {

        const error = false;

        setTimeout(() => {
            posts.push(post)

            if (!error) {
                resolve()
            } else {
                reject("error: something went wrong")
            }
        }, 2000)

    })

}

const newPost = { title: "post3async", body: "inhalt post 3" };

async function init(){

    try{

        await createPost(newPost)
        getPosts()

    }catch(err){

        console.log("something went wrong", err)

    }

}

init()