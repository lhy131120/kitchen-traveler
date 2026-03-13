import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "@/services";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get("/products/all");
    return response.data.products; // 後端回傳 { products: { id1: {...}, id2: {...} } }
  } catch (error) {
    return rejectWithValue(error?.response?.data?.message || "取得產品列表失敗");
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = Object.keys(action.payload).map(id => ({ id, ...action.payload[id] }));
      });
  }
});

export default productsSlice.reducer;