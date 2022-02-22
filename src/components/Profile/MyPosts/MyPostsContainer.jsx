import MyPosts from "./MyPosts";
import { addPost, inputPost, likePost } from "../../../redux/profileReducer";
import { connect } from "react-redux";
// function MyPostsContainer() {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let data = store.getState();
//         let handleChangeInput = (text) => {
//           store.dispatch(inputPostRequest(text));
//         };

//         let handleAddPost = () => {
//           store.dispatch(addPostRequest());
//         };
//         return (
//           <MyPosts
//             postsData={data.profileData.postsData}
//             addPost={handleAddPost}
//             changeInput={handleChangeInput}
//           ></MyPosts>
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// }
let mapStateToProps = (state) => {
  return {
    postsData: state.profileData.postsData,
    author: state.profileData.author,
    userProfile: state.profileData.user,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  inputPost,
  likePost,
})(MyPosts);

export default MyPostsContainer;
