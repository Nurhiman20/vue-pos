<template>
  <div class="px-4">
    <v-row v-for="(item, index) in menu" :key="index">
      <v-col cols="2" md="2" lg="2">
        <v-text-field
          v-model="item.qty"
          class="mt-4"
          outlined
          dense
          disabled
        ></v-text-field>
      </v-col>
      <v-col cols="10" md="10" lg="10">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <v-row>
                <v-col cols="6">
                  {{ item.nama }}
                </v-col>
                <v-col cols="6">
                  Rp. {{ item.total }}
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Topping 1</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Topping 2</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Topping 3</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12" lg="12">
        <div class="d-flex flex-row justify-space-between px-6 mt-6">
          <v-btn outlined color="error" @click="confirmDelete">
            <v-icon class="mr-2">mdi-delete</v-icon>
            Hapus
          </v-btn>
          <v-btn outlined color="success">
            <v-icon class="mr-2">mdi-cart-outline</v-icon>
            Simpan
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="12" lg="12" class="pb-0">
        <div class="d-flex flex-row justify-space-between px-6 box-total">
          <p class="mt-2">Bayar</p>
          <div>
            <v-btn text color="white">
              <p class="text-bold mt-4">Rp. {{ total }}</p>
              <v-icon class="mr-2">mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- dialog hapus -->
    <v-dialog persistent v-model="dialogHapus" max-width="400px">
      <v-card class="pt-8 pb-3 px-4">
        <v-card-text>
          <div class='dialog'>
            <v-icon size="140" color="error" class="mb-4">mdi-alert-circle-outline</v-icon>
            <p class="paragraph-3">Oops!</p>
            <p class="paragraph-4">Anda yakin ingin menghapus daftar order?</p>
            <v-btn color="error" @click="actionDelete">
              Ya, Hapus Daftar Order
            </v-btn>
            <v-btn color="warning" text @click="cancelDelete" class="mt-2">
              Batal
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['menu'],
  data() {
    return {
      dialogHapus: false,
      allTotal: []
    }
  },
  computed: {
    total() {
      const totalHarga = this.menu.map(tot => tot.total)
      let totalAll = 0
      totalHarga.forEach(element => {
        totalAll += element
      });
      return totalAll
    },
  },
  methods: {
    cancelDelete() {
      this.dialogHapus = false
    },
    confirmDelete() {
      this.dialogHapus = true
    },
    actionDelete() {
      this.$emit('deleteOrder', [])
      this.dialogHapus = false
    }
  },
}
</script>

<style lang="scss" scoped>
.box-total {
  background-color: #3F51B5;
  color: white;
}

.dialog{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .paragraph-3{
    font-weight: bold;
    font-size: 25px;
    line-height: 18px;
  }
  .paragraph-4{
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
  }
}
</style>
