<template>
  <div>
    <p v-if="resultSearch.length === 0">Item tidak ditemukan</p>
    <v-row v-else>
      <v-col cols="12" md="4" lg="4" v-for="(item, index) in resultSearch" :key="index">
        <v-card outlined class="cursor-pointer" @click="addMenu(item)">
          <v-img :src="item.foto" :aspect-ratio="4/3"></v-img>
          <div class="px-2 mt-2">
            <p class="text-bold mb-0">{{ item.nama }}</p>
            <p>{{ item.deskripsi }}</p>
            <p class="text-green">Rp. {{ item.harga}}</p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ['itemProduk', 'search'],
  data() {
    return {
      check: false
    }
  },
  computed: {
    resultSearch() {
      if(this.search) {
        return this.itemProduk.filter((item) => {
          return this.search.toLowerCase().split(' ').every(v => item.nama.toLowerCase().includes(v))
        })
      } else {
        return this.itemProduk;
      }
    }
  },
  methods: {
    addMenu(val) {
      const selectedItem = {
        nama: val.nama,
        harga: val.harga,
        foto: val.foto,
        deskripsi: val.deskripsi,
        qty: val.qty,
        total: val.harga * val.qty
      }
      this.$emit('selectItem', selectedItem)
    }
  },
}
</script>
