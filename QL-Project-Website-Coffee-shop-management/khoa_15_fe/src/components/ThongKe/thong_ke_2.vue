<template>
    <div class="row">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col">
                        Thống Kê Kiểu Doughnut
                    </div>
                    
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-1 text-end">
                        <p class="mt-2">Từ Ngày:</p>
                    </div>
                    <div class="col-lg-3">
                        <input v-on:change="loadData()" v-model="thong_ke.begin" type="date" class="form-control">
                    </div>
                    <div class="col-lg-1 text-end">
                        <p class="mt-2">Đến Ngày:</p>
                    </div>
                    <div class="col-lg-3">
                        <input v-on:change="loadData()" v-model="thong_ke.end" type="date" class="form-control">
                    </div>
                    <div class="col-lg-2">
                        <button class="btn btn-primary">Thống Kê</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-8">
                        <Doughnut v-if="loaded" :data="chartData" />
                    </div>
                    <div class="col-lg-2"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import baseRequest from '../../core/baseRequest'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
ChartJS.register(ArcElement, Tooltip, Legend)
export default {
    components: { Doughnut },
    data() {
        return {
            loaded      : false,
            chartData   : null,
            thong_ke    :   {begin: '', end : ''},
            chartData   : {
                labels: [],
                datasets: [ 
                    {
                        label: 'Thống Kê',
                        backgroundColor: [
                            "#C0392B", "#1ABC9C", "#F1C40F", "#E67E22", "#8E44AD", "#2980B9", "#27AE60"
                        ],
                        data: []
                    }
                 ]
            },
            chartOptions: {
                responsive: true
            }
        }
    },  
    async mounted () {
        this.loaded = false;
        var date                = new Date();
        var subday              = new Date(date.setDate(date.getDate() - 0));
        this.thong_ke.begin     = subday.toISOString().slice(0, 10);
        this.thong_ke.end       = new Date().toISOString().slice(0, 10);
        this.loadData();
    },
    methods: {
        loadData() {
            this.loaded = false
            baseRequest
                .post('admin/thong-ke/data-thong-ke-2', this.thong_ke)
                .then((res) => {
                    this.chartData.labels           = res.data.list_lable;
                    this.chartData.datasets[0].data = res.data.list_data;
                    this.loaded = true;
                });
        }
    },
}
</script>
<style>
    
</style>
