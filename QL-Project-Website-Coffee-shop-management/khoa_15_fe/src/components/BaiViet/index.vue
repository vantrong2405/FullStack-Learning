<template>
    <div class="row mb-3">
        <div class="col-12 text-end">
            <button class="btn btn-outline-primary px-5 radius-30" data-bs-toggle="modal" data-bs-target="#themMoiModal">
                <b>Thêm Mới</b>
            </button>
        </div>
    </div>
    <div class="modal fade" id="themMoiModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Bài Viết</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="row">
                            <div class="col-4">
                                <label class="form-label">Tiêu Đề</label>
                                <input type="text" v-model="create_tin_tuc.tieu_de_tin_tuc" v-on:keyup="addSlug()" class="form-control"
                                    placeholder="Nhập Tiêu Đề">
                            </div>
                            <div class="col-4">
                                <label class="form-label">Slug Tiêu Đề</label>
                                <input type="text" v-model="create_tin_tuc.slug_tin_tuc" disabled class="form-control"
                                    placeholder="Nhập Slug Tiêu Đề">
                            </div>
                            <div class="col-4">
                                <label class="form-label">Hình Ảnh</label>
                                <input type="text" v-model="create_tin_tuc.hinh_anh_tin_tuc" class="form-control"
                                    placeholder="Nhập Hình Ảnh">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <label class="form-label mt-3">Mô Tả Ngắn</label>
                                <input type="text" v-model="create_tin_tuc.mo_ta_ngan_tin_tuc" class="form-control"
                                    placeholder="Nhập Mô Tả Ngắn">
                            </div>
                            <div class="col-6">
                                <label class="form-label mt-3">Chuyên Mục</label>
                                <select class="form-select mb-3" v-model="create_tin_tuc.id_chuyen_muc_tin_tuc">
                                    <template v-for="(v, k) in list_chuyen_muc">
                                        <option v-bind:value="v.id">{{ v.ten_chuyen_muc }}</option>
                                    </template>
                                </select>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-6">
                                <label class="form-label mt-3">Mô Tả Chi Tiết</label>
                                <textarea class="form-control" v-model="create_tin_tuc.mo_ta_chi_tiet_tin_tuc"
                                    id="exampleFormControlTextarea1" rows="3"></textarea>

                            </div>
                            <div class="col-6">
                                <label class="form-label mt-3">Tình Trạng</label>
                                <select class="form-control" v-model="create_tin_tuc.tinh_trang">
                                    <option value="0">Tạm Dừng</option>
                                    <option value="1">Hoạt Động</option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                    <button type="button" class="btn btn-primary" v-on:click="createBaiViet()" data-bs-dismiss="modal">Thêm
                        Mới</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="card border-top border-0 border-4 border-primary">
            <div class="card-header">
                <h5>Danh Sách Bài Viết</h5>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th colspan="100%">
                                    <div class="input-group mb-3">
                                        <input v-on:keyup.enter="searchBaiViet()" v-model="key_search.abc" type="text"
                                            class="form-control" placeholder="Nhập thông tin cần tìm">
                                        <button class="btn btn-primary" v-on:click="searchBaiViet()">
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                        </button>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th class="text-center align-middle text-nowrap">
                                    #
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Tiêu Đề
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Hình Ảnh
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Mô Tả Ngắn
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Mô Tả Chi Tiết
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Chuyên Mục
                                </th>

                                <th class="text-center align-middle text-nowrap">
                                    Tình Trạng
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(v, k) in list_tin_tuc">
                                <th class="text-center align-middle text-nowrap">
                                    {{ k + 1 }}
                                </th>
                                <td class="text-center align-middle text-nowrap">
                                    {{ v.tieu_de_tin_tuc }}
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    <img v-bind:src="v.hinh_anh_tin_tuc" height="50" alt="">
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    {{ v.mo_ta_ngan_tin_tuc }}
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#moTaChiTietModal" v-on:click="mo_ta_chi_tiet_tin_tuc = v">
                                        <i class="fa-solid fa-circle-info"></i>
                                    </button>
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    {{ v.ten_chuyen_muc }}
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    <button @:click="doiTrangThai(v)" v-if="v.tinh_trang == 1" class="btn btn-success">Hoạt
                                        Động</button>
                                    <button @:click="doiTrangThai(v)" v-else class="btn btn-warning">Tạm Dừng</button>
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    <button v-on:click="Object.assign(edit_tin_tuc, v)" class="btn btn-info"
                                        style="width: 100px; margin-right: 4px;" data-bs-toggle="modal"
                                        data-bs-target="#capNhatModal">Cập
                                        Nhật</button>
                                    <button class="btn btn-danger" style="width: 100px;" data-bs-toggle="modal"
                                        data-bs-target="#xoaModal"
                                        v-on:click="Object.assign(delete_tin_tuc, v)">Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="modal fade" id="capNhatModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Bài Viết</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="row">
                                        <div class="col-4">
                                            <label class="form-label">Tiêu Đề</label>
                                            <input type="text" v-model="edit_tin_tuc.tieu_de_tin_tuc" v-on:keyup="addSlugUpdate()" class="form-control"
                                                placeholder="Nhập Tiêu Đề">
                                        </div>
                                        <div class="col-4">
                                            <label class="form-label">Slug Tiêu Đề</label>
                                            <input type="text" v-model="edit_tin_tuc.slug_tin_tuc" disabled class="form-control"
                                                placeholder="Nhập Slug Tiêu Đề">
                                        </div>
                                        <div class="col-4">
                                            <label class="form-label">Hình Ảnh</label>
                                            <input type="text" v-model="edit_tin_tuc.hinh_anh_tin_tuc" class="form-control"
                                                placeholder="Nhập Hình Ảnh">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <label class="form-label mt-3">Mô Tả Ngắn</label>
                                            <input type="text" v-model="edit_tin_tuc.mo_ta_ngan_tin_tuc"
                                                class="form-control" placeholder="Nhập Mô Tả Ngắn">
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label mt-3">Chuyên Mục</label>
                                            <select class="form-select mb-3" v-model="edit_tin_tuc.id_chuyen_muc_tin_tuc">
                                                <template v-for="(v, k) in list_chuyen_muc">
                                                    <option v-bind:value="v.id">{{ v.ten_chuyen_muc }}</option>
                                                </template>
                                            </select>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <label class="form-label mt-3">Mô Tả Chi Tiết</label>
                                            <textarea class="form-control" v-model="edit_tin_tuc.mo_ta_chi_tiet_tin_tuc"
                                                id="exampleFormControlTextarea1" rows="3"></textarea>

                                        </div>
                                        <div class="col-6">
                                            <label class="form-label mt-3">Tình Trạng</label>
                                            <select class="form-control" v-model="edit_tin_tuc.tinh_trang">
                                                <option value="0">Tạm Dừng</option>
                                                <option value="1">Hoạt Động</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                                <button v-on:click="updateTinTuc()" type="button" data-bs-dismiss="modal"
                                    class="btn btn-primary">Cập Nhật</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Bài Viết</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                                    <div class="d-flex align-items-center">
                                        <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                        </div>
                                        <div class="ms-3">
                                            <h6 class="mb-0 text-dark">Warning</h6>
                                            <div class="text-dark">
                                                <p>Bạn có muốn xóa Bài Viết <b>{{ delete_tin_tuc.slug_tin_tuc }}</b>
                                                    này
                                                    không?</p>
                                                <p>
                                                    <b>Lưu ý:</b> Điều này không thể hoàn tác!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                                    v-on:click="deleteBaiViet()">Xóa</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="moTaChiTietModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Địa Chỉ Bài Viết</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                {{ mo_ta_chi_tiet_tin_tuc.mo_ta_chi_tiet_tin_tuc }}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
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
            list_tin_tuc: [],
            key_search: {},
            create_tin_tuc: {},
            delete_tin_tuc: {},
            edit_tin_tuc: {},
            list_chuyen_muc: [],
            mo_ta_chi_tiet_tin_tuc: {},
        }
    },
    mounted() {
        this.loadDataTinTuc();
        this.loadDataChuyenMuc();
    },
    methods: {
        convertToSlug(str) {
            str = str.toLowerCase();     
            str = str
                .normalize('NFD') 
                .replace(/[\u0300-\u036f]/g, '');
            str = str.replace(/[đĐ]/g, 'd');
            str = str.replace(/([^0-9a-z-\s])/g, '');
            str = str.replace(/(\s+)/g, '-');
            str = str.replace(/-+/g, '-');
            str = str.replace(/^-+|-+$/g, '');
            return str;
        },

        addSlug() {
            this.create_tin_tuc.slug_tin_tuc = this.convertToSlug(this.create_tin_tuc.tieu_de_tin_tuc);
        },

        addSlugUpdate() {
            this.edit_tin_tuc.slug_tin_tuc = this.convertToSlug(this.edit_tin_tuc.tieu_de_tin_tuc);
        },
        
        loadDataChuyenMuc() {
            baseRequest
                .get('admin/chuyen-muc/lay-du-lieu')
                .then((res) => {
                    this.list_chuyen_muc = res.data.chuyen_muc;
                });
        },
        loadDataTinTuc() {
            baseRequest
                .get('admin/tin-tuc/lay-du-lieu',{
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                })
                .then((res) => {
                    this.list_tin_tuc = res.data.tin_tuc;
                });
        },

        searchBaiViet() {
            baseRequest
                .post('admin/tin-tuc/tim-tin-tuc', this.key_search,{
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                })
                .then((res) => {
                    this.list_tin_tuc = res.data.tin_tuc;
                });
        },
        createBaiViet() {
            baseRequest
                .post('admin/tin-tuc/tao-tin-tuc', this.create_tin_tuc, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                })
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.create_tin_tuc = {};
                        this.loadDataTinTuc();
                    } else {
                        toaster.error(res.data.message);
                    }
                })
                .catch((errors) => {
                    const listErrors = errors.response.data.errors;
                    Object.values(listErrors).forEach((value) => {
                        toaster.error('Thông báo<br>' + value);
                    })
                });

        },
        deleteBaiViet() {
            baseRequest
                .delete('admin/tin-tuc/xoa-tin-tuc/' + this.delete_tin_tuc.id,{
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                })
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataTinTuc();
                    }
                    else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                });
        },
        updateTinTuc() {
            baseRequest
                .put('admin/tin-tuc/cap-nhat-tin-tuc', this.edit_tin_tuc,{
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                })
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataTinTuc();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                })
                .catch((errors) => {
                    const listErrors = errors.response.data.errors;
                    Object.values(listErrors).forEach((value) => {
                        toaster.error('Thông báo<br>' + value);
                    })
                });
        },

        doiTrangThai(xyz) {
            baseRequest
                .put('admin/tin-tuc/doi-trang-thai', xyz,{
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                })
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataTinTuc();
                    } else {
                        toaster.error(res.data.message);
                    }
                });
        }

    }
}
</script>
<style></style>