<template>
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h4>
            products
            <RouterLink to="/create" class="btn btn-primary float-end">Add Products</RouterLink>
          </h4>
        </div>
        <div class="card-body">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Category</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody v-if="products.length > 0">
              <tr v-for="(product, index) in products" :key="index">
                <td>{{ product.name }}</td>
                <td>{{ product.description }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.category }}</td>
                <td>{{ product.image }}</td>
                <td>
                  <RouterLink :to="{ path: '/products/' + product.id + '/edit' }" class="btn btn-success">
                    Edit
                  </RouterLink>
                  <button type="button" @click="deleteProduct(product.id)" class="btn btn-danger mx-2">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td colspan="7">Loading...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  import { authStore } from '../stores/AuthStore';
  
  const useAuth = authStore();
  const products = ref([]);
  
  const deleteProduct = async (productId) => {
    // Implement your delete logic here using axios
    console.log('Deleting product with id:', productId);
  };
  
  onMounted(async () => {
    // Assuming you want to load products on component mount
    const response = await axios.get('/api/products'); // Adjust the API endpoint as needed
    products.value = response.data;
    // Optionally, you can handle errors or loading state here
  });
  
  </script>
  