<template>
    <div class="row mb-3">
        <div class="col-12 text-end">
            <button class="btn btn-outline-primary px-5 radius-30" data-bs-toggle="modal" data-bs-target="#themMoiModal">
                <b>Thêm Mới</b>
            </button>
        </div>
    </div>
    <div class="modal fade" id="themMoiModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Món Ăn</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="row">
                            <div class="col-6">
                                <label class="form-label">Tên Món Ăn</label>
                                <input type="text" v-model="create_mon_an.ten_mon" v-on:keyup="addSlug()" v-on:change="kiemTraSlug()" class="form-control mb-3"
                                    placeholder="Nhập tên món ăn">
                            </div>
                            <div class="col-6">
                                <label class="form-label">Slug Món Ăn</label>
                                <input type="text" v-model="create_mon_an.slug_mon" disabled class="form-control mb-3"
                                    placeholder="Nhập slug món ăn">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <label class="form-label">Hình Ảnh</label>
                                <input type="text" v-model="create_mon_an.hinh_anh" class="form-control mb-3"
                                    placeholder="">
                            </div>
                            <div class="col-6">
                                <label class="form-label">Giá Bán</label>
                                <input type="number" v-model="create_mon_an.gia_ban" class="form-control mb-3"
                                    placeholder="Nhập giá bán">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <label class="form-label">Danh Mục</label>
                                <select class="form-select mb-3" v-model="create_mon_an.id_danh_muc">
                                    <template v-for="(v, k) in list_danh_muc">
                                        <option v-bind:value="v.id">{{ v.ten_danh_muc }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="col-6">
                                <label class="form-label">Tình Trạng</label>
                                <select class="form-control mb-3" v-model="create_mon_an.tinh_trang">
                                    <option value="0">Tạm Dừng</option>
                                    <option value="1">Hiển Thị</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="createMonAn()">Thêm
                        Mới</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="card border-top border-0 border-4 border-primary">
            <div class="card-header">
                <h5>Danh Sách Món Ăn</h5>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th colspan="100%">
                                    <div class="input-group mb-3">
                                        <input v-on:keyup.enter="searchMonAn()" v-model="key_search.abc" type="text" class="form-control" placeholder="Nhập thông tin cần tìm">
                                        <button class="btn btn-primary" v-on:click="searchMonAn()">
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
                                    Tên Món Ăn
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Slug Món Ăn
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Hình Ảnh
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Giá Bán
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Danh Mục
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
                            <tr v-for="(v, k) in list_mon_an">
                                <th class="text-center align-middle text-nowrap">
                                    {{ k + 1 }}
                                </th>
                                <td class="text-center align-middle text-nowrap">
                                    {{ v.ten_mon }}
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    {{ v.slug_mon }}

                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    <img v-bind:src="v.hinh_anh" class="img-fluid" style="width: 200px; height: auto;"
                                        alt="">
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    {{ v.gia_ban }}
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    {{ v.ten_danh_muc }}
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    <button @:click="doiTrangThai(v)" v-if="v.tinh_trang == 1" class="btn btn-success" style="width: 100px;">Hiển
                                        Thị</button>
                                    <button @:click="doiTrangThai(v)" v-else class="btn btn-warning" style="width: 100px;">Tạm Dừng</button>
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    <button v-on:click="Object.assign(edit_mon_an,v)" class="btn btn-info" style="width: 100px; margin-right: 4px;" data-bs-toggle="modal"
                                        data-bs-target="#capNhatModal">Cập
                                        Nhật</button>
                                    <button class="btn btn-danger" style="width: 100px;" data-bs-toggle="modal"
                                        data-bs-target="#xoaModal" v-on:click="Object.assign(delete_mon_an,v)">Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="modal fade" id="capNhatModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Món Ăn</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="row">
                                        <div class="col-6">
                                            <label class="form-label">Tên Món Ăn</label>
                                            <input v-model="edit_mon_an.ten_mon" v-on:keyup="addSlugUpdate()" v-on:change="kiemTraSlugUpdate()" type="text" class="form-control mb-3" placeholder="Nhập tên món ăn">
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Slug Món Ăn</label>
                                            <input v-model="edit_mon_an.slug_mon" disabled type="text" class="form-control mb-3" placeholder="Nhập slug món ăn">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <label class="form-label">Hình Ảnh</label>
                                            <input v-model="edit_mon_an.hinh_anh" type="text" class="form-control mb-3" placeholder="">
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Giá Bán</label>
                                            <input v-model="edit_mon_an.gia_ban" type="number" class="form-control mb-3" placeholder="Nhập giá bán">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <label class="form-label">Danh Mục</label>
                                            <select v-model="edit_mon_an.id_danh_muc" class="form-select mb-3">
                                                <template v-for="(v, k) in list_danh_muc">
                                                    <option v-bind:value="v.id">{{ v.ten_danh_muc }}</option>
                                                </template>
                                            </select>
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Tình Trạng</label>
                                            <select v-model="edit_mon_an.tinh_trang" class="form-control mb-3">
                                                <option value="1">Hiển Thị</option>
                                                <option value="0">Tạm Dừng</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                                <button v-on:click="updateMonAn()" v-if="is_update" type="button" class="btn btn-primary" data-bs-dismiss="modal">Cập Nhật</button>
                                <button v-on:click="updateMonAn()" v-else  type="button" class="btn btn-primary" data-bs-dismiss="modal">Cập Nhật</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Món Ăn</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="alert alert-warning border-0 bg-warning">
                                    <div class="d-flex align-items-center">
                                        <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                        </div>
                                        <div class="ms-3">
                                            <h6><b class="text-danger">Warning</b></h6>
                                            <div class="text-dark">
                                                <p>Bạn có muốn xóa món ăn <b>{{ delete_mon_an.ten_mon }}</b> này không?</p>
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
                                <button type="button" class="btn btn-danger" v-on:click="deleteDanhMuc()" data-bs-dismiss="modal">Xóa</button>
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
            list_danh_muc   : [],
            list_mon_an     : [],
            key_search      : {},
            create_mon_an   : {},
            delete_mon_an   : {},
            edit_mon_an     : {},
            is_create       : 0,
            is_update       : 0,
        }
    },
    mounted() {
        this.loadDataDanhMuc();
        this.loadDataMonAn();
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
            this.create_mon_an.slug_mon = this.convertToSlug(this.create_mon_an.ten_mon);
        },

        addSlugUpdate() {
            this.edit_mon_an.slug_mon = this.convertToSlug(this.edit_mon_an.ten_mon);
        },

        kiemTraSlug() {
            var payload = {
                'slug' : this.create_mon_an.slug_mon
            }
            baseRequest
                .post('admin/mon-an/kiem-tra-slug', payload)
                .then((res) => {
                    if(res.data.status) {
                        toaster.success(res.data.message);
                        this.is_create = 1;
                    } else {
                        toaster.error(res.data.message);
                        this.is_create = 0;
                    }
                });
        },  

        kiemTraSlugUpdate() {
            var payload = {
                'slug' : this.edit_mon_an.slug_mon,
                'id'   : this.edit_mon_an.id
            }
            baseRequest
                .post('admin/mon-an/kiem-tra-slug-update', payload)
                .then((res) => {
                    if(res.data.status) {
                        toaster.success(res.data.message);
                        this.is_update = 1;
                    } else {
                        this.is_update = 0;
                        toaster.error(res.data.message);
                    }
                });
        }, 

        loadDataDanhMuc() {
            baseRequest
                .get('admin/danh-muc/lay-du-lieu')
                .then((res) => {
                    this.list_danh_muc = res.data.danh_muc;
                });
        },
        loadDataMonAn() {
            baseRequest
                .get('admin/mon-an/lay-du-lieu')
                .then((res) => {
                    this.list_mon_an = res.data.mon_an;
                });
        },
        searchMonAn(){
            baseRequest
                .post('admin/mon-an/tim-mon-an', this.key_search)
                .then((res) =>  {
                    this.list_mon_an = res.data.mon_an;
                });
        },
        createMonAn() {
            baseRequest
                .post('admin/mon-an/tao-mon-an', this.create_mon_an)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.create_mon_an = {};
                        this.loadDataMonAn();
                    }

                })
                .catch((errors) => {
                    const listErrors = errors.response.data.errors;
                    Object.values(listErrors).forEach((value) => {
                        toaster.error('Thông báo<br>' + value);
                    })
                });

        },
        deleteDanhMuc() {
            baseRequest
                .delete('admin/mon-an/xoa-mon-an/' + this.delete_mon_an.id)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataMonAn();
                    }
                    else {
                        toaster.danger('Thông báo<br>' + res.data.message);

                    }
                });
        },
        updateMonAn() {
            baseRequest
                .put('admin/mon-an/cap-nhat-mon-an', this.edit_mon_an)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataMonAn();
                    } else {
                        toaster.danger('Thông báo<br>' + res.data.message);
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
                .put('admin/mon-an/doi-trang-thai', xyz)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataMonAn();
                    } else {
                        toaster.error(res.data.message);
                    }
                });
        }
    }
}
</script>
<style></style>