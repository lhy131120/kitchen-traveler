import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "@/services";

// 這裡的 slice 主要是為了存放產品詳情的資料，因為產品列表和產品詳情的資料結構可能不太一樣，所以分開管理會比較清晰。
export const fetchProduct = createAsyncThunk("productDetail/fetchProduct", async (id, { rejectWithValue }) => {
  try {
    const response = await api.get(`product/${id}`);
    return response.data.product;
  } catch (error) {
    return rejectWithValue(error?.response?.data?.message || "取得產品詳情失敗");
  }
});

// 這裡的 slice 主要是為了存放產品詳情的資料，因為產品列表和產品詳情的資料結構可能不太一樣，所以分開管理會比較清晰。
const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: {
    selectedProduct: null,
  },
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.selectedProduct = null; // 失敗的話就清空選中的產品資料，避免顯示錯誤的資訊 
      });
  }
});

export const { clearSelectedProduct } = productDetailSlice.actions;
export default productDetailSlice.reducer;