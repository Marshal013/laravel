<template>

    <div class="container mt-5">
            <div class="card">
                <div class="card-header">
                    <h4>Add Products</h4>
                </div>
                <div class="card-body">
                   
                    <div class="mb-3">
                        <label for="">Name</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="mb-3">
                        <label for="">Discription</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="mb-3">
                        <label for="">Price</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="mb-3">
                        <label for="">Category</label>
                        <input type="text"  class="form-control"/>
                    </div>
                    <div class="mb-3">
                        <label for="">Image</label>
                        <div>
                            <input type="file" ref="fileInput" @change="handleFileChange" style="display: none" />
                            <button @click="openFileInput">Pilih Gambar</button>
                            <img v-if="selectedImage" :src="selectedImage" alt="Selected Image" style="max-width: 300px; margin-top: 10px;" />
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                        <Button type="button" @click="saveProduct" class="btn btn-primary">save</Button>
                </div>
            </div>
        </div>
    </template>

<script>
import axios from 'axios';

export default {
    data() {
    return {
      selectedImage: null,
        };
    },
    name: 'productscreate',
    Data(){
        return{
            errorList: '', 
            model: {
                product: {
                    name:'',
                    description:'',
                    price:'',
                    category:'',
                    image:'',
                }
            }
        }
    },
    methods: {
        openFileInput() {
      this.$refs.fileInput.click();
         },
     handleFileChange(event) {
      const file = event.target.files[0];

      if (file) {
        // Handle the selected file, for example, display it as an image
        this.selectedImage = URL.createObjectURL(file);
                    }
      },
        saveProduct(){

            var mythis = this ;
            axios.post('', this.model.product)
            .then(res => {
                console.log(res.data)
                alert(res.data.message);
                
                this.model.product = {
                    name:'',
                    description:'',
                    price:'',
                    category:'',
                    image:''
                }
                this.errorList = '';
            })
            .Catch(function (error) {
                if (error.response) {
                    if(error.response.status == 422){
                        mythis.errorList = error.response.data.errors;    
                    }              
                    //console.log(error.response.data);
                    //console.log(error.response.status);
                    //console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            });
        }
    }
}
</Script>