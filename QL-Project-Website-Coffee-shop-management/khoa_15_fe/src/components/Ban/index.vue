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
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Bàn</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="row">
                            <div class="col-6">
                                <label class="form-label">Tên Bàn</label>
                                <input v-model="create_ban.ten_ban" v-on:keyup="addSlug()" type="text" class="form-control" placeholder="Nhập tên bàn">
                            </div>
                            <div class="col-6">
                                <label class="form-label">Slug Bàn</label>
                                <input v-model="create_ban.slug_ban" disabled type="text" class="form-control" placeholder="Nhập slug bàn">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <label class="form-label mt-3">Khu Vực</label>
                                <select v-model="create_ban.id_khu_vuc" class="form-select">
                                    <template v-for="(v, k) in list_khu_vuc">
                                        <option v-bind:value="v.id">{{ v.ten_khu }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="col-6">
                                <label class="form-label mt-3">Tình Trạng</label>
                                <select v-model="create_ban.tinh_trang" class="form-control">
                                    <option value="1">Mở</option>
                                    <option value="0">Đóng</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                    <button @:click="createBan()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Thêm Mới</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="card border-top border-0 border-4 border-primary">
            <div class="card-header">
                <h5>Danh Sách Bàn</h5>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th colspan="100%">
                                    <div class="input-group mb-3">
                                        <input v-on:keyup.enter="searchBan()" v-model="key_search.abc" type="text" class="form-control" placeholder="Nhập thông tin cần tìm">
                                        <button class="btn btn-primary" v-on:click="searchBan()">
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
                                    Tên Bàn
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Slug Bàn
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Khu Vực
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
                            <tr v-for="(v, k) in list_ban">
                                <th class="text-center align-middle text-nowrap">
                                    {{ k + 1 }}
                                </th>
                                <td class="align-middle text-nowrap">
                                    {{ v.ten_ban }}
                                </td>
                                <td class="align-middle text-nowrap">
                                    {{ v.slug_ban }}
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    {{ v.ten_khu }}
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    <button @:click="doiTrangThai(v)" v-if="v.tinh_trang == 1" class="btn btn-success" style="width: 100px;">Mở</button>
                                    <button @:click="doiTrangThai(v)" v-else class="btn btn-warning" style="width: 100px;">Đóng</button>
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    <button v-on:click="Object.assign(edit_ban,v)" class="btn btn-info" style="width: 100px; margin-right: 4px;" data-bs-toggle="modal"
                                        data-bs-target="#capNhatModal">Cập
                                        Nhật</button>
                                    <button class="btn btn-danger" style="width: 100px;" data-bs-toggle="modal"
                                        data-bs-target="#xoaModal" v-on:click="Object.assign(delete_ban,v)">Xóa</button>
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
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Bàn</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="row">
                                        <div class="col-6">
                                            <label class="form-label">Tên Bàn</label>
                                            <input v-model="edit_ban.ten_ban"  v-on:keyup="addSlugUpdate()" type="text" class="form-control" placeholder="Nhập tên bàn">
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Slug Bàn</label>
                                            <input v-model="edit_ban.slug_ban" disabled type="text" class="form-control" placeholder="Nhập slug bàn">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <label class="form-label mt-3">Khu Vực</label>
                                            <select v-model="edit_ban.id_khu_vuc" class="form-select">
                                                <template v-for="(v, k) in list_khu_vuc">
                                                    <option v-bind:value="v.id">{{ v.ten_khu }}</option>
                                                </template>
                                            </select>
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label mt-3">Tình Trạng</label>
                                            <select v-model="edit_ban.tinh_trang" class="form-control">
                                                <option value="1">Mở</option>
                                                <option value="0">Đóng</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                                <button v-on:click="updateBan()" type="button" data-bs-dismiss="modal" class="btn btn-primary">Cập Nhật</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Bàn</h1>
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
                                                <p>Bạn có muốn xóa bàn <b>{{ delete_ban.ten_ban }}</b> này không?</p>
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
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" v-on:click="deleteBan()">Xóa</button>
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
            list_ban        :   [],
            list_khu_vuc    :   [],
            key_search      :   {},
            create_ban      :   {},
            delete_ban      :   {},
            edit_ban        :   {},
        }
    },
    mounted() {
        this.loadDataBan();
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
            this.create_ban.slug_ban = this.convertToSlug(this.create_ban.ten_ban);
        },

        addSlugUpdate() {
            this.edit_ban.slug_ban = this.convertToSlug(this.edit_ban.ten_ban);
        },

        loadDataBan() {
            baseRequest
                .get('admin/ban/lay-du-lieu')
                .then((res) => {
                    this.list_ban = res.data.ban;
                });
        },

        loadDataKhuVuc() {
            baseRequest
                .get('admin/khu-vuc/lay-du-lieu')
                .then((res) => {
                    this.list_khu_vuc = res.data.khu_vuc;
                });
        },

        searchBan(){
            baseRequest
                .post('admin/ban/tim-ban', this.key_search)
                .then((res) =>  {
                    this.list_ban = res.data.ban;
                });
        },

        createBan() {
            console.log(this.create_ban);
            baseRequest
                .post('admin/ban/tao-ban', this.create_ban)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.create_ban = {};
                        this.loadDataBan();
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
        deleteBan() {
            baseRequest
                .delete('admin/ban/xoa-ban/'+ this.delete_ban.id)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataBan();
                    }
                    else{
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },
        updateBan() {
            baseRequest
                .put('admin/ban/cap-nhat-ban', this.edit_ban)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataBan();
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
                .put('admin/ban/doi-trang-thai', xyz)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataBan();
                    } else {
                        toaster.error(res.data.message);
                    }
                });
        }
    }
}
</script>
<style></style>