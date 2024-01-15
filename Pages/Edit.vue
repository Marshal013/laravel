<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Edit Products</h4>
            </div>
            <div class="card-body">

                <div class="mb-3">
                    <label for="productName">Name</label>
                    <input type="text" v-model="model.product.name" id="productName" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="productDescription">Description</label>
                    <input type="text" v-model="model.product.description" id="productDescription" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="productPrice">Price</label>
                    <input type="text" v-model="model.product.price" id="productPrice" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="productCategory">Category</label>
                    <input type="text" v-model="model.product.category" id="productCategory" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="productImage">Image</label>
                    <div>
                        <input type="file" ref="fileInput" @change="handleFileChange" style="display: none" />
                        <button @click="openFileInput">Choose Image</button>
                        <img v-if="selectedImage" :src="selectedImage" alt="Selected Image"
                            style="max-width: 300px; margin-top: 10px;" />
                    </div>
                </div>

            </div>
            <div class="mb-3">
                <Button type="button" @click="updateProduct" class="btn btn-primary">update</Button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ProductsEdit',
    data() {
        return {
            productId: '',
            errorList: '',
            model: {
                product: {
                    name: '',
                    description: '',
                    price: '',
                    category: '',
                    selectedImage: '',
                }
            }
        };
    },
    mounted() {
        this.productId = this.$route.params.id;
        this.getProductData(this.$route.params.id);
    },
    methods: {
        getProductData(productId) {
            axios.get(`http://127.0.0.1:8000/products/${productId}/edit`)
                .then(res => {
                    this.model.product = res.data.product;
                })
                .catch(function (error) {
                    if (error.response) {
                        if (error.response.status == 404) {
                            alert(error.response.data.message);
                        }
                    }
                });
        },
        updateProduct() {
            var mythis = this;
            axios.put(`http://127.0.0.1:8000/products/${this.productId}/edit`, this.model.product)
                .then(res => {
                    console.log(res.data);
                    alert(res.data.message);
                    this.errorList = '';
                })
                .catch(function (error) {
                    if (error.response) {
                        if (error.response.status == 422) {
                            mythis.errorList = error.response.data.errors;
                        }
                        if (error.response.status == 404) {
                            alert(error.response.data.message);
                        }
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                });
        },
        handleFileChange(event) {
        const file = event.target.files[0];
        this.model.product.selectedImage = URL.createObjectURL(file);
    }
    }
}
</script>
