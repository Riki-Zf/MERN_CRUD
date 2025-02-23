import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  // Error ada di baris ini:
  // setProduct: (products = set({ products })),
  // Seharusnya:
  setProducts: (products) => set({ products }),

  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "please fill in all fields" };
    }

    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Ada typo di "aplication"
      },
      body: JSON.stringify(newProduct), // Seharusnya newProduct, bukan products
    });

    const data = await res.json();
    set((state) => ({ products: [...state.products, data.newProduct] }));
    return { success: true, message: "product created successfully" }; // Typo di "create"
  },
}));
