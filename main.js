

const tweeter = tweeterModule()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

$("#post").on("click", function(){
    tweeter.addPost($("#input").val())
    console.log($("#input").val())
    renderer.renderPosts(tweeter.getPosts())
})

$("body").on("click",".delete", function(){
    // let thisId = $(this).closest(".post").data()
    // console.log(thisId)
    console.log($(this).closest(".post").data().postid)
    tweeter.removePost($(this).closest(".post").data().postid)
    renderer.renderPosts(tweeter.getPosts())
})

$("body").on("click", ".addComment", function(){
    let position = $(this).closest(".post").data().postid
    let text = $(this).closest(".post").find(".newComment").val()
    // console.log(text)
    tweeter.addComment(position, text)
    renderer.renderPosts(tweeter.getPosts())
    // console.log(position)
})

$(body).on("click", ".delete-comment", function(){
    let position = $(this).closest(".post").data().postid
    commentid= $(this).closest(".post").find()
})