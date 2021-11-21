import axios from "axios";

export default class ThesisService {

    /** Auth */

    static AuthRegister(payload) {
        return axios.post("/v1/auth/register", payload);
    }

    static AuthLogin(payload) {
        return axios.post("/v1/auth/login", payload);
    }


    /** Book */

    static GetAllBooks() {
        return axios.get("/v1/books/allbooks/getall")
    }

    static GetMyBooks(username) {
        return axios.get("/v1/books/myBooks/" + username)
    }

    static AddBook(newBook) {
        return axios.post("/v1/books", newBook);
    }


    /** Post */

    static AddPost(newPost) {
        return axios.post("/v1/posts", newPost);
    }


    /** User */

    static FetchUserByUserId(userId) {
        return axios.get(`/v1/users?userId=${userId}`)
    }

    static FetchUserByUsername(username) {
        return axios.get(`/v1/users?username=${username}`)
    }

    static GetUserFriends(userId) {
        return axios.get("/v1/users/friends/" + userId)
    }


    /** Notes */

    static FetchNotes() {
        return axios.get("/v1/notes")
    }

    static AddNotes(newNote) {
        return axios.post("/v1/notes", newNote)
    }


    /** Conversation */

    static GetConversations(userId) {
        return axios.get("/v1/conversations/" + userId);
    }

    static FindConversationsByUserId(currentId, userId) {
        return axios.get(`/v1/conversations/find/${currentId}/${userId}`);
    }


    /** Message */

    static GetMessages(currentChatId) {
        return axios.get("/v1/messages/" + currentChatId)
    }

    static AddMessages(message) {
        return axios.post("/v1/messages", message);
    }


    /** Serie */

    static GetAllSeries() {
        return axios.get("/v1/series/allseries/getall")
    }

    static AddSerie(newSerie){
        return axios.post("/v1/series", newSerie)
    }


    /** Movies */
    static GetMovie(movieId){
        return axios.get(`/v1/users?userId=${movieId}`)
    }

    static GetAllMovies(){
        return axios.get("/v1/movies/allmovies/getall")
    }

    static AddMovie(newMovie){
        return axios.post("/v1/movies", newMovie)
    }


    /** Upload */

    static UploadService(data) {
        return axios.post("/upload", data);
    }
}