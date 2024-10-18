<template>
<div class="row">
    <div class="col-5">
        <div class="card border-primary border-bottom border-3 border-0">
            <div class="card-header">
                Thêm Mới Chức Năng
            </div>
            <div class="card-body">
                <label class="mb-1 mt-1">Tên Chức Vụ</label>
                <input v-model="create_chuc_vu.ten_chuc_vu" class="form-control" type="text">
                <label class="mb-1 mt-1">Tình Trạng</label>
                <select v-model="create_chuc_vu.tinh_trang" class="form-control">
                    <option value="1">
                        Hoạt Động
                    </option>
                    <option value="0">
                        Tạm Dừng
                    </option>
                </select>
            </div>
            <div @:click="createChucVu()" class="card-footer text-end">
                <button class="btn btn-primary">Thêm Mới</button>
            </div>
        </div>
    </div>
    <div class="col-7">
        <div class="card border-primary border-bottom border-3 border-0">
            <div class="card-header">
                Danh Sách Chức Vụ
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th colspan="100%">
                                <div class="input-group mb-3">
                                    <input v-on:keyup.enter="searchChucVu()" v-model="key_search.abc" type="text" class="form-control" placeholder="Nhập thông tin cần tìm">
                                    <button class="btn btn-primary" v-on:click="searchChucVu()">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th class="align-middle text-center">#</th>
                            <th class="align-middle text-center">Tên Chức Vụ</th>
                            <th class="align-middle text-center">Tình Trạng</th>
                            <th class="align-middle text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(v, k) in list_chuc_vu">
                            <th class="align-middle text-center">{{ k + 1 }}</th>
                            <td class="align-middle">{{ v.ten_chuc_vu }}</td>
                            <td class="align-middle text-center">
                                <button @:click="doiTrangThai(v)" v-if="v.tinh_trang == 1" class="btn btn-success">Hoạt động</button>
                                <button @:click="doiTrangThai(v)" v-else class="btn btn-warning">Tạm Dừng</button>
                            </td>
                            <td class="align-middle text-center">
                                <button v-on:click="Object.assign(edit_chuc_vu, v)" style="margin-right: 4px;" class="btn btn-warning" data-bs-toggle="modal"
                                    data-bs-target="#capNhatModal">Cập Nhật</button>
                                <button class="btn btn-danger" data-bs-toggle="modal"
                                    data-bs-target="#xoaModal" v-on:click="Object.assign(delete_chuc_vu,v)">Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="modal fade" id="capNhatModal" tabindex="-1"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Chức Vụ</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <label class="mb-1 mt-1">Tên Chức Vụ</label>
                                <input v-model="edit_chuc_vu.ten_chuc_vu" class="form-control" type="text">
                                <label class="mb-1 mt-1">Tình Trạng</label>
                                <select v-model="edit_chuc_vu.tinh_trang" class="form-control">
                                    <option value="1">
                                        Hoạt Động
                                    </option>
                                    <option value="0">
                                        Tạm Tắt
                                    </option>
                                </select>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary"
                                    data-bs-dismiss="modal">Thoát</button>
                                <button v-on:click="updateChucVu()" type="button" data-bs-dismiss="modal" class="btn btn-danger">Cập Nhật</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Chức Vụ</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div
                                    class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                                    <div class="d-flex align-items-center">
                                        <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                        </div>
                                        <div class="ms-3">
                                            <h6 class="mb-0 text-dark">Warning</h6>
                                            <div class="text-dark">
                                                <p>Bạn có muốn xóa danh mục <b>{{ delete_chuc_vu.ten_chuc_vu }}</b> này không?
                                                </p>
                                                <p>
                                                    <b>Lưu ý:</b> Điều này không thể hoàn tác!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary"
                                    data-bs-dismiss="modal">Thoát</button>
                                <button type="button" class="btn btn-danger" v-on:click="deleteChucVu()" data-bs-dismiss="modal">Xóa</button>
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
            list_chuc_vu   : [],
            key_search     : {},
            create_chuc_vu : {},
            delete_chuc_vu : {},
            edit_chuc_vu   : {},
        }
    },
    mounted() {
        this.loadDataChucVu();
    },
    methods: {
        loadDataChucVu()   {
            baseRequest
                .get('admin/chuc-vu/lay-du-lieu')
                .then((res) =>  {
                    this.list_chuc_vu = res.data.chuc_vu;
                });
        },

        searchChucVu(){
            baseRequest
                .post('admin/chuc-vu/tim-chuc-vu', this.key_search)
                .then((res) =>  {
                    this.list_chuc_vu = res.data.chuc_vu;
                });
        },

        createChucVu() {
            console.log(this.create_chuc_vu);
            baseRequest
                .post('admin/chuc-vu/tao-chuc-vu', this.create_chuc_vu)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.create_chuc_vu = "";
                        this.loadDataChucVu();
                    }
                })
                .catch((errors) => {
                    const listErrors = errors.response.data.errors;
                    Object.values(listErrors).forEach((value) => {
                        toaster.error('Thông báo<br>' + value);
                    })
                });
        },
        deleteChucVu() {
            baseRequest
                .delete('admin/chuc-vu/xoa-chuc-vu/' + this.delete_chuc_vu.id)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataChucVu();
                    }
                    else{
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },
        updateChucVu() {
            baseRequest
                .put('admin/chuc-vu/cap-nhat-chuc-vu', this.edit_chuc_vu)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataChucVu();
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
                .put('admin/chuc-vu/doi-trang-thai', xyz)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataChucVu();
                    } else {
                        toaster.error(res.data.message);
                    }
                });
        }
    }
}
</script>
<style>
    
</style>