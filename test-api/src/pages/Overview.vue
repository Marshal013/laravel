<template>
  <div class="overview">
    <div class="section">
      <h2>Mendapatkan Daftar Kota berdasarkan ID Provinsi</h2>
      <input type="text" v-model="provinceId" placeholder="Masukkan ID Provinsi">
      <button @click="getCities">Tampilkan Daftar Kota</button>
      <div v-if="cities.length">
        <h3>Daftar Kota:</h3>
        <ul>
          <li v-for="city in cities" :key="city.id">{{ city.name }}</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h2>Mendapatkan Nama Provinsi berdasarkan ID Kota</h2>
      <input type="text" v-model="cityId" placeholder="Masukkan ID Kota">
      <button @click="getProvinceName">Tampilkan Nama Provinsi</button>
      <div v-if="provinceName">
        <h3>Nama Provinsi:</h3>
        <p>{{ provinceName }}</p>
      </div>
    </div>

    <div class="section">
      <h2>Mengurutkan Array Provinsi</h2>
      <button @click="sortProvinces('asc')">Urutkan Ascending</button>
      <button @click="sortProvinces('desc')">Urutkan Descending</button>
      <div v-if="sortedProvinces.length">
        <h3>Array Provinsi yang Sudah Diurutkan:</h3>
        <ul>
          <li v-for="province in sortedProvinces" :key="province.id">{{ province.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getCitiesByProvinceId, getProvinceNameByCityId, sortProvinces } from '../province.js';

export default {
  data() {
    return {
      provinceId: '',
      cityId: '',
      cities: [],
      provinceName: '',
      provinces: [/* array provinsi */],
      sortedProvinces: []
    };
  },
  methods: {
    getCities() {
      this.cities = getCitiesByProvinceId(this.provinceId);
    },
    getProvinceName() {
      this.provinceName = getProvinceNameByCityId(this.cityId);
    },
    sortProvinces(order) {
      this.sortedProvinces = sortProvinces(this.provinces, order);
    }
  }
};
</script>

<style scoped>
.overview {
  padding: 20px;
}

.section {
  margin-bottom: 20px;
}
</style>
