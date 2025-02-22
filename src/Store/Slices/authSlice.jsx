
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";

// Thunk for user login
export const loginUser = createAsyncThunk("auth/loginUser", async (userdata, { rejectWithValue }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, userdata.email, userdata.password);
    const user = userCredential.user;

    // Fetch user data from Firestore
    const userDoc = await getDoc(doc(db, "data", user.uid));
    const userData = userDoc.data();

    // Store in local storage
    localStorage.setItem("uid", user.uid);
    localStorage.setItem("userData", JSON.stringify(userData));

    return userData;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Thunk for user registration
export const registerUser = createAsyncThunk("auth/registerUser", async (userdata, { rejectWithValue }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, userdata.email, userdata.password);
    const user = userCredential.user;

    // Save user data in Firestore
    await setDoc(doc(db, "data", user.uid), {
      email: userdata.email,
      username: userdata.username,
      role: userdata.role,
    });

    return { email: userdata.email, username: userdata.username, role: userdata.role };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Authentication slice
const authSlice = createSlice({
  name: "auth",
  initialState: { user: JSON.parse(localStorage.getItem("userData")) || null, loading: false, error: null },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("uid");
      localStorage.removeItem("userData");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
