

const Renderer = function(){
    const renderPosts = function(posts){
        $("#posts").empty()
        for(let i in posts){
            let id = posts[i].id
            const div = $(`<div class="post" data-postId="${id}"><div>`)
            // console.log(id)
            div.append(`<div class="post" data-postId="${id}"> ${posts[i].text} <div>`)
            div.append(`<div class="delete" data-postId="${id}">delete post<div>`)
            for(let j in posts[i].comments){
                let commentid = posts[i].comments.id
                let comment = posts[i].comments[j].text
                // console.log(comment)
                div.append(`<div class="comments" data-commentId="${commentid}"> ${comment} <div>`)
                div.append(`<div class="delete-comment">x<div>`)
            }
            div.append(`<input type="text" class="newComment" placeholder="insert comment">`)
            div.append(`<div class="addComment" data-postId="${id}">Add Comment<div>`)
            $("#posts").append(div)
        }


    }
    return {renderPosts}
}

