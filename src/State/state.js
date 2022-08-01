
export const state  = {
    postData : [
        {id  : 1 , message : "Holla" , likes : 12},
        {id  : 2 , message : "OkiDoki" , likes: 22}
    ],
    messagesData : [
        {id: 1, message: "Hola"},
        {id: 2, message: "Hi"},
        {id: 3, message: "How is your day?"},
        {id: 4, message: "How is your day?"},
        {id: 5, message: "Good"}
    ],
    dialogsData : [
        {id: 1, name: "Halk"},
        {id: 2, name: "Tor"},
        {id: 3, name: "Cratos"},
        {id: 4, name: "Loki"},
        {id: 5, name: "Odin"}
    ]
};

export const addPost = (postMassage) => {

    const newPost = {
        id: 0,
        message: postMassage,
        likes: 0
    }
state.postData.push(newPost);
};
