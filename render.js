

const Renderer = function(){
    const renderPosts = function(posts){
        $("#posts").empty()
        for(let i in posts){
            let id = posts[i].id
            const div = $(`<div class="post" data-postId="${id}"></div>`)
            // console.log(id)
            div.append(`<div class="post" data-postId="${id}"> ${posts[i].text} </div>`)
            div.append(`<div class="delete" data-postId="${id}"><i class="fas fa-trash"></i></div>`)
            for(let j in posts[i].comments){
                const commentid = posts[i].comments[j].id
                const comment = posts[i].comments[j].text
                // console.log(comment)
                div.append(`<div class="comments" data-commentId="${commentid}"><span class="delete-comment"><i class="far fa-trash-alt"></i></span>${comment} </div>`)
                div.append()
            }
            div.append(`<input type="text" class="newComment" placeholder="insert comment"><span class="addComment" data-postId="${id}">Add Comment</span>`)
            
            $("#posts").append(div)
        }


    }
    return {renderPosts}
}

