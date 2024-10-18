<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <ul class="nav nav-tabs nav-primary" role="tablist">
                        <li class="nav-item" role="presentation" v-on:click="loadDataBan(v)">
                            <a class="nav-link active" data-bs-toggle="tab" role="tab" aria-selected="true">
                                <div class="d-flex align-items-center">
                                    <div class="tab-icon me-1 text-danger fa-2x">
                                    </div>
                                    <div class="tab-title">Tất cả</div>
                                </div>
                            </a>
                        </li>
                        <template v-for="(v, k) in list_khu_vuc">
                            <li class="nav-item" role="presentation" v-on:click="getBanTheoKhuVuc(v)">
                                <a class="nav-link" data-bs-toggle="tab" v-bind:href="'#primaryhome' + k" role="tab"
                                    aria-selected="false">
                                    <div class="d-flex align-items-center">
                                        <div class="tab-icon me-1 text-danger fa-2x">
                                            <span v-html="v.icon"></span>
                                        </div>
                                        <div class="tab-title">{{ v.ten_khu }}</div>
                                    </div>
                                </a>
                            </li>
                        </template>
                    </ul>
                    <div class="tab-content py-3">
                        <div class="row">
                            <template v-for="(v, k) in list_ban">
                                <template v-if="v.tinh_trang == 1">
                                    <template v-if="v.is_mo_ban == 0">
                                        <div class="col-2">
                                            <div class="tab-pane fade show" id="primaryhome" role="tabpanel">
                                                <div class="card radius-10">
                                                    <div class="card-body">
                                                        <div class="text-center">
                                                            <div
                                                                class="widgets-icons rounded-circle mx-auto bg-light-primary text-primary mb-3">
                                                                <i class="fa-solid fa-couch"></i>
                                                            </div>
                                                            <h4 class="my-1">{{ v.ten_ban }}</h4>
                                                            <button v-if="v.is_mo_ban == 0" v-on:click="moBan(v)"
                                                                class="btn btn-primary" data-bs-toggle="modal"
                                                                data-bs-target="#mobanModal">Mở Bàn</button>
                                                            <button v-else class="btn btn-success" v-on:click="moBan(v)"
                                                                data-bs-toggle="modal" data-bs-target="#mobanModal">Thanh
                                                                Toán</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <div class="col-2">
                                            <div class="tab-pane fade show" id="primaryhome" role="tabpanel">
                                                <div class="card radius-10" style="background-color: rgb(143, 255, 255);">
                                                    <div class="card-body">
                                                        <div class="text-center">
                                                            <div
                                                                class="widgets-icons rounded-circle mx-auto bg-light-primary text-primary mb-3">
                                                                <i class="fa-solid fa-couch"></i>
                                                            </div>
                                                            <h4 class="my-1">{{ v.ten_ban }}</h4>
                                                            <button v-if="v.is_mo_ban == 0" v-on:click="moBan(v)"
                                                                class="btn btn-primary" data-bs-toggle="modal"
                                                                data-bs-target="#mobanModal">Mở Bàn</button>
                                                            <button v-else class="btn btn-success" v-on:click="moBan(v)"
                                                                data-bs-toggle="modal" data-bs-target="#mobanModal">Thanh
                                                                Toán</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </template>
                            </template>
                        </div>
                    </div>
                    <!-- modal -->

                    <div class="modal fade" id="mobanModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-xl" style="max-width: 100%;">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Mở Bàn</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h6>Danh sách món ăn</h6>
                                                </div>
                                                <div class="card-body">
                                                    <div class="mb-3">
                                                        <div class="table-responsive" style="max-height: 450px">
                                                            <table class="table table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th class="align-middle text-center">#</th>
                                                                        <th class="align-middle text-center">Tên Hàng</th>
                                                                        <th class="align-middle text-center">Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <template v-for="(value, key) in list_mon_an">
                                                                        <tr>
                                                                            <td class="align-middle text-center">{{ key + 1
                                                                            }}</td>
                                                                            <td class="align-middle text-center">{{
                                                                                value.ten_mon }}</td>
                                                                            <td class="align-middle text-center">
                                                                                <button v-on:click="themMonAn(value)"
                                                                                    class="btn btn-primary">Thêm</button>
                                                                            </td>
                                                                        </tr>
                                                                    </template>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card">
                                                <div class="card-header">
                                                    Món ăn sử dụng
                                                </div>
                                                <div class="card-body">
                                                    <table class="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th class="text-center align-middle">#</th>
                                                                <th class="text-center align-middle">Tên món ăn</th>
                                                                <th class="text-center align-middle">Số lượng</th>
                                                                <th class="text-center align-middle">Đơn giá</th>
                                                                <th class="text-center align-middle">% giảm giá</th>
                                                                <th class="text-center align-middle">Thành tiền</th>
                                                                <th class="text-center align-middle">Ghi chú</th>
                                                                <th class="text-center align-middle">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <template v-for="(v, k) in list_chi_tiet_ban_hang">
                                                                <tr>
                                                                    <th class="align-middle">{{ k + 1 }}</th>
                                                                    <td class="align-middle">{{ v.ten_mon }}</td>
                                                                    <td class="align-middle">
                                                                        <input v-on:change="updateChiTiet(v)" type="number"
                                                                            class="form-control" v-model="v.so_luong">
                                                                    </td>
                                                                    <td class="align-middle">
                                                                        <input v-on:change="updateChiTiet(v)" type="number"
                                                                            class="form-control" v-model="v.don_gia">
                                                                    </td>
                                                                    <td class="align-middle">
                                                                        <input v-on:change="updateChiTiet(v)" type="number"
                                                                            class="form-control" v-model="v.phan_tram_giam">
                                                                    </td>
                                                                    <td class="align-middle">{{ formatToVND(v.thanh_tien) }}
                                                                    </td>
                                                                    <td class="align-middle">
                                                                        <input v-on:change="updateChiTiet(v)" type="text"
                                                                            class="form-control" v-model="v.ghi_chu">
                                                                    </td>
                                                                    <td class="align-middle">
                                                                        <button v-on:click="xoaChiTiet(v)"
                                                                            class="btn btn-danger">Xóa</button>
                                                                    </td>
                                                                </tr>
                                                            </template>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="card-footer bg-white text-end">
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <textarea v-model="ghi_chu_hoa_don" class="form-control"
                                                                cols="30" rows="4"></textarea>
                                                        </div>
                                                        <div class="col-3">
                                                            <img style="width: 100%;" v-bind:src="link_qr" alt="">
                                                        </div>
                                                        <div class="col-3">
                                                            <div class="row">
                                                                <div class="col-6">
                                                                    <p><b>Tổng thanh toán:</b></p>
                                                                    <p class="mt-3"><b>Phần trăm giảm: </b></p>
                                                                    <p><b>Tiền thực thu: </b></p>
                                                                </div>
                                                                <div class="col-6">
                                                                    <p><b>{{ formatToVND(tong_tien) }}</b></p>
                                                                    <input type="number" class="form-control"
                                                                        v-on:change="updateHoaDon()"
                                                                        v-model="phan_tram_giam_hoa_don">
                                                                    <p class="mt-3"><b>{{ formatToVND(tien_thuc_thu) }}</b>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                    <router-link :to="'/admin/bill/' + id_hoa_don_ban_hang" target="_blank">
                                        <button type="button" class="btn btn-danger"
                                        >In Hóa Đơn</button>
                                    </router-link>
                                    
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                        v-on:click="thanhToan()">Thanh Toán</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import baseRequest from '../../core/baseRequest';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            list_khu_vuc: [],
            list_ban: [],
            list_mon_an: [],
            list_chi_tiet_ban_hang: [],
            id_hoa_don_ban_hang: 0,
            tong_tien: 0,
            phan_tram_giam_hoa_don: 0,
            tien_thuc_thu: 0,
            link_qr: ""
        }
    },
    mounted() {
        this.loadDataKhuVuc();
        this.loadDataBan();
        this.loadMonAn();
    },
    methods: {
        formatToVND(number) {
            number = parseInt(number);
            return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        },

        loadDataKhuVuc() {
            baseRequest
                .get('admin/khu-vuc/lay-du-lieu-hoat-dong')
                .then((res) => {
                    this.list_khu_vuc = res.data.khu_vuc;
                });
        },

        loadDataBan() {
            baseRequest
                .get('admin/ban/lay-du-lieu')
                .then((res) => {
                    this.list_ban = res.data.ban;
                });
        },

        getBanTheoKhuVuc(v) {
            baseRequest
                .post('admin/dich-vu/lay-du-lieu-ban-theo-khu-vuc', v)
                .then((res) => {
                    this.list_ban = res.data.data;
                });

        },

        loadMonAn() {
            baseRequest
                .get('admin/dich-vu/lay-du-lieu-mon-an')
                .then((res) => {
                    this.list_mon_an = res.data.data;
                });
        },

        moBan(v) {
            this.ghi_chu_hoa_don = '';
            this.phan_tram_giam_hoa_don = 0;
            baseRequest
                .post('admin/dich-vu/mo-ban', v)
                .then((res) => {
                    if (res.data.status == 1) {
                        toaster.success(res.data.message);
                        this.id_hoa_don_ban_hang = res.data.id_hoa_don_ban_hang;
                        this.getChiTietHoaDon(this.id_hoa_don_ban_hang);
                        this.loadDataBan();
                    } else if (res.data.status == 2) {
                        this.id_hoa_don_ban_hang = res.data.id_hoa_don_ban_hang;
                        this.tong_tien = res.data.tong_tien;
                        this.tien_thuc_thu = res.data.tong_tien;
                        this.getChiTietHoaDon(this.id_hoa_don_ban_hang);
                    }

                    var amount = this.tien_thuc_thu;
                    var bill_id = "BILL_" + this.id_hoa_don_ban_hang
                    if (amount > 0) {
                        this.link_qr = "https://img.vietqr.io/image/970422-1910061030119-qr_only.jpg?amount=" + amount + "&addInfo=" + bill_id + "&accountName=LE_THANH_TRUONG"
                    } else {
                        this.link_qr = "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                    }

                });
        },

        themMonAn(v) {
            var payload = {
                'id_hoa_don': this.id_hoa_don_ban_hang,
                'id_mon_an': v.id,
                'don_gia': v.gia_ban,
            }
            baseRequest
                .post('admin/dich-vu/them-mon-an', payload)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success(res.data.message);
                        this.tong_tien = res.data.tong_tien;
                        this.tien_thuc_thu = res.data.tong_tien;
                        this.getChiTietHoaDon(this.id_hoa_don_ban_hang);
                    }
                })
                .catch((errors) => {
                    const listErrors = errors.response.data.errors;
                    Object.values(listErrors).forEach((value) => {
                        toaster.error('Thông báo<br>' + value);
                    })
                });
        },

        getChiTietHoaDon(id) {
            var payload = {
                'id_hoa_don': id,
            }
            baseRequest
                .post('admin/dich-vu/get-chi-tiet', payload)
                .then((res) => {
                    this.list_chi_tiet_ban_hang = res.data.data;
                });
        },

        updateChiTiet(v) {
            baseRequest
                .post('admin/dich-vu/update-chi-tiet', v)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success(res.data.message);
                        this.tong_tien = res.data.tong_tien;
                        this.tien_thuc_thu = res.data.tong_tien;
                        this.getChiTietHoaDon(this.id_hoa_don_ban_hang);
                    }
                })
                .catch((errors) => {
                    const listErrors = errors.response.data.errors;
                    Object.values(listErrors).forEach((value) => {
                        toaster.error('Thông báo<br>' + value);
                    })
                });
        },

        updateHoaDon() {
            var tien_giam = this.tong_tien / 100 * this.phan_tram_giam_hoa_don;
            this.tien_thuc_thu = this.tong_tien - tien_giam;
        },

        thanhToan() {
            var payload = {
                'id': this.id_hoa_don_ban_hang,
                'tong_tien_truoc_giam': this.tong_tien,
                'phan_tram_giam': this.phan_tram_giam_hoa_don,
                'tien_thuc_nhan': this.tien_thuc_thu,
                'ghi_chu': this.ghi_chu_hoa_don,
            }
            baseRequest
                .post('admin/dich-vu/thanh-toan', payload)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success(res.data.message);
                        this.loadDataBan();
                    } else {
                        toaster.error(res.data.message);
                        this.loadDataBan();
                    }
                })
                .catch((errors) => {
                    const listErrors = errors.response.data.errors;
                    Object.values(listErrors).forEach((value) => {
                        toaster.error('Thông báo<br>' + value);
                    })
                });
        },

        xoaChiTiet(v) {
            baseRequest
                .post('admin/dich-vu/delete-chi-tiet', v)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success(res.data.message);
                        this.tong_tien = res.data.tong_tien;
                        this.tien_thuc_thu = res.data.tong_tien;
                        this.phan_tram_giam_hoa_don = 0;
                        this.getChiTietHoaDon(this.id_hoa_don_ban_hang);
                    }
                });
        }
    }
}
</script>
<style></style>
