const addMessageRequestText = "ADD_MESSAGE";
const inputMessageRequestText = "INPUT_MESSAGE";

let initialState = {
  dialogData: [
    { id: 1, name: "Simon" },
    { id: 2, name: "Peter" },
    { id: 3, name: "Mary" },
    { id: 4, name: "Pol" },
    { id: 5, name: "Jane" },
    { id: 6, name: "Solomon" },
  ],
  input: "",
  messagesData: [
    { id: 1, message: "Hello wordl" },
    { id: 2, message: "World is fire" },
    { id: 3, message: "What are you doing" },
    { id: 4, message: "You are so lazy" },
    { id: 5, message: "Post malone is not cool" },
    { id: 6, message: "Solomon" },
  ],
};

export default function dialogsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case addMessageRequestText:
      return {
        ...state,
        input: "",
        messagesData: [...state.messagesData, { id: 5, message: state.input }],
      };
    case inputMessageRequestText:
      return {
        ...state,
        input: action.newInput,
      };
    default:
      return state;
  }
}

export const addMessage = () => ({
  type: addMessageRequestText,
});
export const inputMessage = (text) => ({
  type: inputMessageRequestText,
  newInput: text,
});
