<template>
    <div class="row">
        <div class="col-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="pt-3"><b>Thêm Mới Khu Vực</b></h5>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-12">
                            <label for="">Tên Khu Vực</label>
                            <input v-model="create_khu_vuc.ten_khu" v-on:change="kiemTraSlug()" v-on:keyup="addSlug()"  type="text" class="form-control mt-2">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-12">
                            <label for="">Slug Khu Vực</label>
                            <input v-model="create_khu_vuc.slug_khu" disabled type="text" class="form-control mt-2">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-12">
                            <label for="">Tình Trạng</label>
                            <select v-model="create_khu_vuc.tinh_trang" name="" id="" class="form-control mt-2">
                                <option value="1">Hiển Thị</option>
                                <option value="0">Tạm Dừng</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button @:click="createKhuVuc()" class="btn btn-primary" v-if="is_create">Thêm Mới</button>
                    <button class="btn btn-primary" v-else disabled>Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-8">
            <div class="card border-top border-0 border-4 border-primary">
                <div class="card-header">
                    <h5 class="pt-3"><b>Danh Sách Khu Vực</b></h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th colspan="100%">
                                        <div class="input-group mb-3">
                                            <input v-on:keyup.enter="searchKhuVuc()" v-model="key_search.abc" type="text" class="form-control" placeholder="Nhập thông tin cần tìm">
                                            <button class="btn btn-primary" v-on:click="searchKhuVuc()">
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
                                        Tên Khu Vực
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Slug Khu Vực
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
                                <tr v-for="(v, k) in list_khu_vuc">
                                    <th class="text-center align-middle text-nowrap">
                                        {{ k + 1 }}
                                    </th>
                                    <td class="align-middle text-nowrap">
                                        {{ list_khu_vuc[k].ten_khu }}
                                    </td>
                                    <td class="align-middle text-nowrap">
                                        {{ v.slug_khu }}
                                    </td>
                                    <td class="text-center align-middle text-nowrap">
                                        <button @:click="doiTrangThai(v)" v-if="v.tinh_trang == 1" class="btn btn-success" style="width: 100px;">Hiển
                                            Thị</button>
                                        <button @:click="doiTrangThai(v)" v-else class="btn btn-warning" style="width: 100px;">Tạm Dừng</button>
                                    </td>
                                    <td class="text-center align-middle text-nowrap">
                                        <button v-on:click="Object.assign(edit_khu_vuc, v)" class="btn btn-info me-2" style="width: 100px;" data-bs-toggle="modal"
                                            data-bs-target="#capNhatModal">Cập Nhật</button>
                                        <button class="btn btn-danger" style="width: 100px;" data-bs-toggle="modal"
                                            data-bs-target="#xoaModal" v-on:click="Object.assign(delete_khu_vuc,v)">Xóa</button>
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
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Nguyên Liệu</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-12">
                                            <label for="">Tên Khu Vực</label>
                                            <input v-model="edit_khu_vuc.ten_khu" v-on:keyup="addSlugUpdate()" v-on:change="kiemTraSlugUpdate()" type="text" class="form-control mt-2">
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-12">
                                            <label for="">Slug Khu Vực</label>
                                            <input v-model="edit_khu_vuc.slug_khu" disabled type="text" class="form-control mt-2">
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-12">
                                            <label for="">Tình Trạng</label>
                                            <select v-model="edit_khu_vuc.tinh_trang" class="form-control mt-2">
                                                <option value="1">Hiển Thị</option>
                                                <option value="0">Tạm Dừng</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                                    <button v-if="is_update" data-bs-dismiss="modal" @:click="updateKhuVuc()" type="button" class="btn btn-primary">Cập Nhật</button>
                                    <button type="button" v-else disabled class="btn btn-primary">Cập Nhật</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Nguyên Liệu</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                                        <div class="d-flex align-items-center">
                                            <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                            </div>
                                            <div class="ms-3">
                                                <h6 class="mb-0 text-dark">Warning</h6>
                                                <div class="text-dark">
                                                    <p>Bạn có muốn xóa sản phẩm <b> Khu Vực VIP</b> này không?</p>
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
                                    <button type="button" class="btn btn-danger" v-on:click="deleteKhuVuc()" data-bs-dismiss="modal">Xóa</button>
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
import { createToaster } from "@meforma/vue-toaster";
import baseRequest from '../../core/baseRequest';
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            list_khu_vuc   : [],
            key_search     : {},
            create_khu_vuc : {tinh_trang : 1},
            delete_khu_vuc : {},
            edit_khu_vuc   : {},
            is_create      : 0,
            is_update      : 0,
        }
    },
    mounted() {
        this.loadDataKhuVuc();
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
            this.create_khu_vuc.slug_khu = this.convertToSlug(this.create_khu_vuc.ten_khu);
        },

        addSlugUpdate() {
            this.edit_khu_vuc.slug_khu = this.convertToSlug(this.edit_khu_vuc.ten_khu);
        },

        kiemTraSlug() {
            var payload = {
                'slug' : this.create_khu_vuc.slug_khu
            }
            baseRequest
                .post('admin/khu-vuc/kiem-tra-slug', payload)
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
                'slug' : this.edit_khu_vuc.slug_khu,
                'id'   : this.edit_khu_vuc.id
            }
            baseRequest
                .post('admin/khu-vuc/kiem-tra-slug-update', payload)
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

        loadDataKhuVuc() {
            baseRequest
                .get('admin/khu-vuc/lay-du-lieu')
                .then((res) => {
                    this.list_khu_vuc = res.data.khu_vuc;
                });
        },

        searchKhuVuc(){
            baseRequest
                .post('admin/khu-vuc/tim-khu-vuc', this.key_search)
                .then((res) =>  {
                    this.list_khu_vuc = res.data.khu_vuc;
                });
        },

        createKhuVuc() {
            console.log(this.create_khu_vuc);
            baseRequest
                .post('admin/khu-vuc/tao-khu-vuc', this.create_khu_vuc)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success(res.data.message);
                        this.loadDataKhuVuc();
                        this.create_khu_vuc = {tinh_trang : 1};
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

        deleteKhuVuc() {
            baseRequest
                .delete('admin/khu-vuc/xoa-khu-vuc/' + this.delete_khu_vuc.id)
                .then((res) =>  {
                    if(res.data.status == true) {
                        alert(res.data.message);
                        this.loadDataKhuVuc();
                    }
                    else{
                        alert(res.data.message);

                    }
                });
        },

        updateKhuVuc() {
            baseRequest
                .put('admin/khu-vuc/cap-nhat-khu-vuc', this.edit_khu_vuc)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success(res.data.message);
                        this.loadDataKhuVuc();
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

        doiTrangThai(xyz) {
            baseRequest
                .put('admin/khu-vuc/doi-trang-thai', xyz)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataKhuVuc();
                    } else {
                        toaster.error(res.data.message);
                    }
                });
        }
    }
}
</script>
<style></style>