<template>
  <div>
    <v-row>
      <v-col cols="12" md="7" lg="7">
        <v-card outlined class="pa-2">
          <!-- judul card -->
          <div class="w-full d-flex box-title pt-2 pb-6">
            <p class="app-title-2 mx-auto text-bold">JENIS ORDER</p>
          </div>

          <!-- menu transaksi -->
          <div class="d-flex flex-row justify-space-between mt-1">
            <div class="d-flex flex-column justify-start box-title pa-3 pb-2 cursor-pointer">
              <v-avatar color="indigo" size="64" class="mx-auto mt-n12">
                <v-icon dark>mdi-handshake-outline</v-icon>
              </v-avatar>
              <p class="mx-auto mt-2 mb-0">Pre Order</p>
            </div>
            <div class="d-flex flex-column justify-start box-title pa-3 pb-2 cursor-pointer">
              <v-avatar color="indigo" size="64" class="mx-auto mt-n12">
                <v-icon dark>mdi-table-chair</v-icon>
              </v-avatar>
              <p class="mx-auto mt-2 mb-0">Dine In</p>
            </div>
            <div class="d-flex flex-column justify-start box-title pa-3 pb-2 cursor-pointer">
              <v-avatar color="indigo" size="64" class="mx-auto mt-n12">
                <v-icon dark>mdi-cart-arrow-up</v-icon>
              </v-avatar>
              <p class="mx-auto mt-2 mb-0">Takeaway</p>
            </div>
            <div class="d-flex flex-column justify-start box-title pa-3 pb-2 cursor-pointer">
              <v-avatar color="indigo" size="64" class="mx-auto mt-n12">
                <v-icon dark>mdi-moped-outline</v-icon>
              </v-avatar>
              <p class="mx-auto mt-2 mb-0">Delivery</p>
            </div>
            <div class="d-flex flex-column justify-start box-title pa-3 pb-2 cursor-pointer">
              <v-avatar color="indigo" size="64" class="mx-auto mt-n12">
                <v-icon dark>mdi-motorbike</v-icon>
              </v-avatar>
              <p class="mx-auto mt-2 mb-0">Ojek Online</p>
            </div>
            <div class="d-flex flex-column justify-start box-title pa-3 pb-2 cursor-pointer">
              <v-avatar color="indigo" size="64" class="mx-auto mt-n12">
                <v-icon dark>mdi-book-open-variant</v-icon>
              </v-avatar>
              <p class="mx-auto mt-2 mb-0">Reservasi</p>
            </div>
          </div>
          <!-- akhir menu transaksi -->

          <div class="d-flex flex-row justify-space-between mt-4 px-3">
            <div class="d-flex flex-column">
              <p class="app-title-2 text-bold mb-0">Transaksi Penjualan</p>
              <p class="app-subtitle">{{ outlet }}</p>
            </div>
            <div class="w-50 mt-3">
              <v-select
                v-model="outlet"
                :items="outlets"
                label="Pilih outlet"
                dense
                outlined
              ></v-select>
            </div>
          </div>

          <div class="d-flex flex-row justify-end w-full px-3">
            <div>
              <v-text-field
                v-model="search"
                label="Search"
                prepend-inner-icon="mdi-magnify"
                outlined
                dense
              ></v-text-field>
            </div>
          </div>

          <div>
            <v-tabs
              v-model="tab"
              background-color="indigo"
              class="elevation-2"
              dark
            >
              <v-tabs-slider></v-tabs-slider>

              <v-tab
                v-for="i in tabs"
                :key="i"
                :href="`#tab-${i}`"
              >
                {{ i }}
              </v-tab>

              <v-tab-item
                :value="'tab-' + tabs[0]"
              >
                <v-card
                  flat
                  tile
                  class="pa-4"
                >
                  <kategori-app :itemProduk="itemKategori1" :search="search"></kategori-app>
                </v-card>
              </v-tab-item>

              <v-tab-item
                :value="'tab-' + tabs[1]"
              >
                <v-card
                  flat
                  tile
                  class="pa-4"
                >
                  <kategori-app :itemProduk="itemKategori2" :search="search"></kategori-app>
                </v-card>
              </v-tab-item>

              <v-tab-item
                :value="'tab-' + tabs[2]"
              >
                <v-card
                  flat
                  tile
                  class="pa-4"
                >
                  <kategori-app :itemProduk="[]" :search="search"></kategori-app>
                </v-card>
              </v-tab-item>

              <v-tab-item
                :value="'tab-' + tabs[3]"
              >
                <v-card
                  flat
                  tile
                  class="pa-4"
                >
                  <kategori-app :itemProduk="[]" :search="search"></kategori-app>
                </v-card>
              </v-tab-item>

              <v-tab-item
                :value="'tab-' + tabs[4]"
              >
                <v-card
                  flat
                  tile
                  class="pa-4"
                >
                  <kategori-app :itemProduk="[]" :search="search"></kategori-app>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="5" lg="5">
        <v-card outlined class="">
          <v-row>
            <v-col cols="10" md="10" lg="10" class="pt-0">
              <div class="w-full d-flex box-title pt-2 pb-0">
                <p class="app-title-2 mx-auto text-bold">DAFTAR ORDER</p>
              </div>
            </v-col>
            <v-col cols="2" md="2" lg="2">
              <v-btn icon color="primary">
                <v-badge
                  :content="notifications"
                  :value="notifications"
                  color="#CA3423"
                  class="mr-2"
                  overlap
                >
                  <v-icon>mdi-bell-outline</v-icon>
                </v-badge>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import kategoriApp from '../components/Kategori'

export default {
  components: {
    kategoriApp
  },
  data() {
    return {
      notifications: 14,
      tab: null,
      tabs: ['Kategori 1', 'Kategori 2', 'Kategori 3', 'Kategori 4', 'Kategori 5'],
      outlets: ['Cilok Pelakor', 'Odading Mang Oleh', 'Seblak Seuhah'],
      outlet: 'Cilok Pelakor',
      search: null,
      itemKategori1: [
        {
          nama: 'Cilok Kuah Spesial',
          deskripsi: 'Cilok yang pakai kuah spesial',
          foto: 'https://s1.bukalapak.com/uploads/content_attachment/1d02de4707c1647d811a49b5/w-744/resep_cilok_goang_2.jpg',
          harga: 10000,
          check: false
        },
        {
          nama: 'Cilok Kuah Spesial 2',
          deskripsi: 'Cilok yang pakai kuah spesial',
          foto: 'https://s1.bukalapak.com/uploads/content_attachment/1d02de4707c1647d811a49b5/w-744/resep_cilok_goang_2.jpg',
          harga: 12000,
          check: false
        },
        {
          nama: 'Cilok Kuah Biasa',
          deskripsi: 'Cilok yang pakai kuah biasa',
          foto: 'https://s1.bukalapak.com/uploads/content_attachment/1d02de4707c1647d811a49b5/w-744/resep_cilok_goang_2.jpg',
          harga: 8000,
          check: false
        },
        {
          nama: 'Cilok Kuah Biasa Banget',
          deskripsi: 'Cilok yang pakai kuah biasa banget',
          foto: 'https://s1.bukalapak.com/uploads/content_attachment/1d02de4707c1647d811a49b5/w-744/resep_cilok_goang_2.jpg',
          harga: 5000,
          check: false
        }
      ],
      itemKategori2: [
        {
          nama: 'Es Teh Manis',
          deskripsi: 'Air pakai teh, gula, es batu',
          foto: 'https://awsimages.detik.net.id/community/media/visual/2020/05/14/0af32d8b-36b7-4555-8e79-4fd54c98f795.jpeg?w=700&q=90',
          harga: 5000,
          check: false
        },
        {
          nama: 'Jasjus Mangga',
          deskripsi: 'Air pakai jasjus',
          foto: 'https://d1sag4ddilekf6.cloudfront.net/item/IDITE2020022713091426321/photos/menueditor_item_b842ca6544764df1857c7114d0c1d6cf_1582808872099842379.jpg',
          harga: 2000,
          check: false
        },
        {
          nama: 'Air Putih',
          deskripsi: 'Untuk yang berhemat',
          foto: 'https://image-cdn.medkomtek.com/Q4a3dSLSLDRujQ_W6X5MLe09etc=/1200x675/smart/klikdokter-media-buckets/medias/1994866/original/062103000_1521023795-Mana-Lebih-Aman-Air-Mineral-Kemasan-atau-Air-Rebusan-By-Tendo-shutterstock.jpg',
          harga: 1000,
          check: false
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.box-title {
  // background-color: #32297C;
  background-color: #DEE3EE;
}

.v-avatar {
  border: 3px solid white !important;
}
</style>
