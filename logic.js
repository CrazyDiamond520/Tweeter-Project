const tweeterModule = function(){
    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    let postIdCounter = 2
    let commentIdCount = 6
    const getPosts = ()=> posts
    const addPost = function(text){
        posts.push({
           text: text,
           id: "p" + (postIdCounter+1),
           comments: [] 
        })
        postIdCounter++
    }
    const removePost = function(postID){
        for(let i in posts){
            if(posts[i].id === postID){
                posts.splice(i, 1)
                postIdCounter--
            }
        }
    }
    const addComment = function(postID, text){
        for(let i in posts){
            if(posts[i].id == [postID]){
            posts[i].comments.push({
                id: "c" + (commentIdCount+1),
                text: text
            })
            commentIdCount++
        }
        }
    }
    const removeComment = function(postID, commentID){
        for (let i in posts){
            if(posts[i].id == [postID]){
                let temp = posts[i].comments
                for(let j in temp){
                    if( temp[j].id == [commentID]){
                        temp.splice(j, 1)
                        commentIdCount--
                    }
                }    
            }
        }
    }
    return{
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}

// const test = tweeterModule()
// // test.addPost("this is a test post")
// // test.removePost("p3")
// // test.addComment("p1", "this is a test comment")
// // test.removeComment("p1","c3")
// // console.log(test.getPosts())

// const rendering = renderer()
// rendering.renderPosts(test.getPosts())