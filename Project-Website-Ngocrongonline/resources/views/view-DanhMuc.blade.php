@extends('pages.admin.masterpage')
@section('content')
    <div id="app">
        <div class="row">
            <div class="col-md-12">
                <form action="/add" method="post">
                    <div class="card text-dark border border-2 border-primary">
                        <div class="card-header">
                            <h5 class="text-danger" style="font-weight: bold">Thêm Danh Mục Game</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4">
                                    <label for=""><b>Hình ảnh</b></label>
                                    <div class="input-group mb-2 mt-2">
                                        <span class="input-group-text" id="basic-addon1"><i
                                                class="fa-solid fa-image"></i></span>
                                        <input type="text" class="form-control shadow-none" placeholder="Nhập hình ảnh"
                                            aria-label="Username" aria-describedby="basic-addon1" v-model="list.hinh_anh">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <label for=""><b>Tiêu đề sản phẩm</b></label>
                                    <div class="input-group mb-2 mt-2">
                                        <span class="input-group-text" id="basic-addon1"><i
                                                class="fa-solid fa-staff-snake"></i></span>
                                        <input type="text" class="form-control shadow-none" placeholder="Nhập tiêu đề"
                                            aria-label="Username" aria-describedby="basic-addon1" v-model="list.tieu_de">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <label for=""><b>Số tài khoản</b></label>
                                    <div class="input-group mb-2 mt-2">
                                        <span class="input-group-text" id="basic-addon1"><i
                                                class="fa-solid fa-bookmark"></i></span>
                                        <input type="text" class="form-control shadow-none"
                                            placeholder="Nhập số tài khoản bán" aria-label="Username"
                                            aria-describedby="basic-addon1" v-model="list.so_tai_khoan">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <label for=""><b>Giá cũ</b></label>
                                    <div class="input-group mb-2 mt-2">
                                        <span class="input-group-text" id="basic-addon1"><i
                                                class="fa-solid fa-money-bill"></i></span>
                                        <input type="text" class="form-control shadow-none" placeholder="Nhập giá cũ"
                                            aria-label="Username" aria-describedby="basic-addon1" v-model="list.gia_cu">
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <label for=""><b>Giá hiện tại</b></label>
                                    <div class="input-group mb-2 mt-2">
                                        <span class="input-group-text" id="basic-addon1"><i
                                                class="fa-regular fa-money-bill-1"></i></span>
                                        <input type="text" class="form-control shadow-none"
                                            placeholder="Nhập giá hiện tại" aria-label="Username"
                                            aria-describedby="basic-addon1" v-model="list.gia_moi">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <label for=""><b>Tình trạng</b></label>
                                    <select class="form-select form-control mt-2 mb-2" v-model="list.tinh_trang"
                                        aria-label="Large select example">
                                        <option selected disabled>Mặc định</option>
                                        <option value="1">Hiển thị</option>
                                        <option value="0">Tạm tắt</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer d-flex justify-content-end">
                            <div class="btn btn-primary" v-on:click="themData()">Thêm mới</div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="row d-flex justify-content-between align-items-center">
                            <div class="col-md-6">
                                <h5 class="text-danger mb-0" style="font-weight: bold">Quản lý sản phẩm Danh mục game
                                </h5>
                            </div>
                            <div class="col-md-6">
                                <div class="input-group">
                                    <input type="text" class="form-control shadow-none py-2 my-2 fs-6"
                                        placeholder="Tìm kiếm theo tên!" aria-label="Recipient's username"
                                        v-on:keyup.enter="search() ;  timKiemTT()" aria-describedby="basic-addon2"
                                        v-model = "TT_tim_kiem">
                                    <span v-on:click="search() ; timKiemTT()"
                                        class="input-group-text py-2 my-2 fs-6 btn btn-danger" id="basic-addon2"><i
                                            class="fa-solid fa-magnifying-glass"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center fs-6 align-middle text-dark"><b>#</b></th>
                                    <th class="text-center fs-6 align-middle text-dark" style="width: 20%;"><b>Hình
                                            ảnh</b>
                                    </th>
                                    <th class="text-center fs-6 align-middle text-dark"><b>Tên sản phẩm</b></th>
                                    <th class="text-center fs-6 align-middle text-dark"><b>Số tài khoản</b></th>
                                    <th class="text-center fs-6 align-middle text-dark"><b>Giá cũ</b></th>
                                    <th class="text-center fs-6 align-middle text-dark"><b>Giá mới</b></th>
                                    <th class="text-center fs-6 align-middle text-dark"><b>Tình trạng</b></th>
                                    <th colspan="2" class="text-center fs-6 align-middle text-dark"><b>Action</b></th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(value,key) in list_danh_muc_game">
                                    <tr>
                                        <th class="text-center align-middle">@{{ key + 1 }}</th>
                                        <td class="text-center align-middle"><img v-bind:src="value.hinh_anh"
                                                alt="" width="50%" class="img-thumbnail"></td>
                                        <td class="text-center align-middle" style="width: 200px;">@{{ value.tieu_de }}
                                        </td>
                                        <td class="text-center align-middle">@{{ value.so_tai_khoan }}</td>
                                        <td class="text-center align-middle">@{{ value.gia_cu }}</td>
                                        <td class="text-center align-middle">@{{ value.gia_moi }}</td>
                                        <td class="text-center align-middle">
                                            <div class="btn btn-success" v-if="value.tinh_trang == 1"
                                                v-on:click="value.tinh_trang = 0 ;chuyenDoiTrangThai(value, key)">Hiển thị
                                            </div>
                                            <div class="btn btn-warning" v-if="value.tinh_trang == 0"
                                                v-on:click="value.tinh_trang = 1 ;chuyenDoiTrangThai(value, key)">Tạm tắt
                                            </div>
                                        </td>
                                        <td class="text-center align-middle">
                                            <div><i class="fa-solid fa-trash text-danger fs-4" v-on:click="delte = value"
                                                    data-bs-toggle="modal" data-bs-target="#modalXoa"
                                                    style="cursor: pointer;"></i>
                                                <div>
                                        </td>
                                        <td class="text-center align-middle">
                                            <div style="cursor: pointer;" class="hover-btn btn-opacity"><i
                                                    data-bs-toggle="modal" data-bs-target="#modalUpdate"
                                                    v-on:click="updated_list = Object.assign({}, value)"
                                                    class="fa-solid fa-pen-to-square text-primary fs-4"></i></div>
                                        </td>
                                    </tr>
                                    <div class="modal fade" id="modalXoa" tabindex="-1"
                                        aria-labelledby="modalXoaLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="modalXoaLabel">Xoá Items</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="alert alert-danger" role="alert">
                                                        <i> Bạn có chắc chắn muốn xoá ?</i>
                                                    </div>
                                                    <i class="fa-solid fa-play"></i><i><b> @{{ delte.tieu_de }}</b></i>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-primary"
                                                        data-bs-dismiss="modal">Cancel</button>
                                                    <button type="button" class="btn btn-danger"
                                                        v-on:click="xoaData(delte)">Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {{-- end modal xoá --}}
                                    <!-- Modal Update-->
                                    <div class="modal fade" id="modalUpdate" tabindex="-1"
                                        aria-labelledby="modalUpdateLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-xl">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="modalUpdateLabel">Update Items</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="col-md-12">
                                                        <div class="card text-dark">
                                                            <div class="card-body">
                                                                <div class="row">
                                                                    <div class="col-md-4">
                                                                        <label for=""><b>Hình ảnh</b></label>
                                                                        <div class="input-group mb-2 mt-2">
                                                                            <span class="input-group-text"
                                                                                id="basic-addon1"><i
                                                                                    class="fa-solid fa-image"></i></span>
                                                                            <input type="text"
                                                                                class="form-control shadow-none"
                                                                                placeholder="Nhập hình ảnh"
                                                                                aria-label="Username"
                                                                                aria-describedby="basic-addon1"
                                                                                v-model="updated_list.hinh_anh">
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4">
                                                                        <label for=""><b>Tiêu đề sản
                                                                                phẩm</b></label>
                                                                        <div class="input-group mb-2 mt-2">
                                                                            <span class="input-group-text"
                                                                                id="basic-addon1"><i
                                                                                    class="fa-solid fa-staff-snake"></i></span>
                                                                            <input type="text"
                                                                                class="form-control shadow-none"
                                                                                placeholder="Nhập tiêu đề"
                                                                                aria-label="Username"
                                                                                aria-describedby="basic-addon1"
                                                                                v-model="updated_list.tieu_de">
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4">
                                                                        <label for=""><b>Số lần quay</b></label>
                                                                        <div class="input-group mb-2 mt-2">
                                                                            <span class="input-group-text"
                                                                                id="basic-addon1"><i
                                                                                    class="fa-solid fa-bookmark"></i></span>
                                                                            <input type="text"
                                                                                class="form-control shadow-none"
                                                                                placeholder="Nhập lần quay"
                                                                                aria-label="Username"
                                                                                aria-describedby="basic-addon1"
                                                                                v-model="updated_list.so_tai_khoan">
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4">
                                                                        <label for=""><b>Giá cũ</b></label>
                                                                        <div class="input-group mb-2 mt-2">
                                                                            <span class="input-group-text"
                                                                                id="basic-addon1"><i
                                                                                    class="fa-solid fa-money-bill"></i></span>
                                                                            <input type="text"
                                                                                class="form-control shadow-none"
                                                                                placeholder="Nhập giá cũ"
                                                                                aria-label="Username"
                                                                                aria-describedby="basic-addon1"
                                                                                v-model="updated_list.gia_cu">
                                                                        </div>
                                                                    </div>

                                                                    <div class="col-md-4">
                                                                        <label for=""><b>Giá hiện
                                                                                tại</b></label>
                                                                        <div class="input-group mb-2 mt-2">
                                                                            <span class="input-group-text"
                                                                                id="basic-addon1"><i
                                                                                    class="fa-regular fa-money-bill-1"></i></span>
                                                                            <input type="text"
                                                                                class="form-control shadow-none"
                                                                                placeholder="Nhập giá hiện tại"
                                                                                aria-label="Username"
                                                                                aria-describedby="basic-addon1"
                                                                                v-model="updated_list.gia_moi">
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4">
                                                                        <label for=""><b>Tình trạng</b></label>
                                                                        <select v-model="updated_list.tinh_trang"
                                                                            class="form-select form-control mt-2 mb-2"
                                                                            aria-label="Large select example">
                                                                            <option selected disabled>Mặc định</option>
                                                                            <option value="1">Hiển thị</option>
                                                                            <option value="0">Tạm tắt</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-primary"
                                                        data-bs-dismiss="modal">Cancel</button>
                                                    <button type="button" class="btn btn-success"
                                                        v-on:click="updateData()">Update</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {{-- end modal Update --}}
                                </template>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('contentJS')
    <script>
        new Vue({
            el: '#app',
            data: {
                TT_tim_kiem: '',
                list_danh_muc_game: [],
                list_tim_kiem: [],
                list_clone: [],
                check_search: 0,
                delte: '',
                updated_list: '',
                list: {
                    'hinh_anh': '',
                    'tieu_de': '',
                    'so_tai_khoan': '',
                    'gia_cu': '',
                    'gia_moi': '',
                    'tinh_trang': '',
                },
                newStatus: {}
            },
            created() {
                this.hienThiData();
            },
            methods: {
                timKiemTT() {
                    axios
                        .post('/api/api-addAllData-danhMucgame-nro', this.list_danh_muc_game)
                        .then((res) => {

                        })
                },
                // search() {
                //     console.log(this.list_danh_muc_game);
                //     var x = this.TT_tim_kiem.toLowerCase();
                //     console.log(x);
                //     this.list_danh_muc_game = this.list_danh_muc_game.filter((items) => {
                //         return items.tieu_de.toLowerCase().includes(x); // xoá trên front-end
                //     });

                //     var list_danh_muc_game_new = [...this.list_danh_muc_game]; //lấy data sau khi xoá
                //     console.log(list_danh_muc_game_new);
                //     axios
                //         .post('/api/api-xoaAllData-danhMucgame-nro', list_danh_muc_game_new)
                //         .then((res) => {

                //         })
                //     this.list_danh_muc_game = this.list_danh_muc_game.filter((items) => {
                //         return items.tieu_de.toLowerCase().includes(""); // xoá trên front-end
                //     });

                // },
                search() {
                    // var newValue = {
                    //     'content': 'Thử Vận',
                    // }
                    // axios
                    //     .post('/api/api-chuyenDoiTrangThai-danhMucGame-nro', newValue)
                    //     .then((res) => {
                    //         this.hienThiData();
                    //     })
                    this.list_danh_muc_game = this.list_clone
                    var x = this.TT_tim_kiem.toLowerCase();
                    this.list_tim_kiem = this.list_clone.filter((items) => {
                        return items.tieu_de.toLowerCase().includes(x);
                    });
                    this.list_danh_muc_game = this.list_tim_kiem
                },
                chuyenDoiTrangThai(value, key) {
                    axios
                        .post('/api/api-chuyenDoiTrangThai-danhMucGame-nro', value)
                        .then((res) => {
                            this.hienThiData();
                        })
                },
                themData() {
                    console.log(this.list);
                    axios
                        .post('/api/api-taoData-danhMucGame-nro', this.list)
                        .then((res) => {
                            this.list_danh_muc_game = res.data;
                        })
                    this.hienThiData();
                },
                xoaData(value) {
                    axios
                        .post('/api/api-xoaData-danhMucGame-nro', value)
                        .then((res) => {
                            this.list_mini_game = res.data;
                        })

                    $('#modalXoa').modal('hide'); // Ẩn modal
                    $('body').removeClass('modal-open'); // Loại bỏ lớp modal-open
                    $('.modal-backdrop.show').remove(); // Xóa lớp overlay
                    this.hienThiData();
                },
                updateData() {
                    axios
                        .put('/api/api-updateData-danhMucGame-nro', this.updated_list)
                        .then((res) => {
                            this.hienThiData();
                        })

                    $('#modalUpdate').modal('hide'); // Ẩn modal
                    $('body').removeClass('modal-open'); // Loại bỏ lớp modal-open
                    $('.modal-backdrop.show').remove(); // Xóa lớp overlay
                    this.hienThiData();
                },
                hienThiData() {
                    axios
                        .get('/api/api-danhMucGame-nro')
                        .then((res) => {
                            this.list_danh_muc_game = res.data;
                            this.list_clone = [...this.list_danh_muc_game]
                        });
                },
            },
        });
    </script>
@endsection
