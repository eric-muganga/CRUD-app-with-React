import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            id: 1,
            name: "Eric",
            email: "eric@gmail.com",
        },

        {
            id: 2,
            name: "Erin",
            email: "erin@gmail.com",
        }
    ]
}
const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload)
        },
        editUser: (state, action) => {
            const { id, name, email } = action.payload;

            const existingUser = state.users.find((user) => user.id === id);

            if (existingUser) {
                existingUser.name = name;
                existingUser.email = email;
            }
        },
        deleteUser: (state, action) => {
            const userId = action.payload;
            const existingUser = state.users.find((user) => user.id === userId);


            if (existingUser) {
                state.users = state.users.filter((user) => user.id !== userId)

            }
        }
    }
});

export const { addUser, editUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;