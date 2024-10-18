<template>
    <section id="invoice">
        <div class="container my-5 py-5">
            <div class="text-center">
                <img width="300px" src="https://trangchudulich.com/wp-content/uploads/2023/11/logo-img.png" alt="">
            </div>
            <div class="text-center border-top border-bottom my-5 py-3">
                <h2 class="display-5 fw-bold">Hóa Đơn Thanh Toán </h2>
                <p class="m-0">Bàn :  <b class="text-danger">{{ hoa_don.ten_ban }}</b>, Ngày: <b class="text-danger">{{ date }}</b></p>
            </div>
            <table class="table border my-5">
                <thead>
                    <tr class="bg-primary-subtle ">
                        <th scope="col" class="text-center">#</th>
                        <th scope="col">Tên Món</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Số Lượng</th>
                        <th scope="col">Phần Trăm Giảm</th>
                        <th scope="col">Thành Tiền</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(value, index) in list_chi_tiet_hoa_don">
                        <tr>
                            <th scope="row" class="text-center">{{ index + 1 }}</th>
                            <td>{{ value.ten_mon }}</td>
                            <td>{{ formatToVND(value.don_gia) }}</td>
                            <td>{{ value.so_luong }}</td>
                            <td>{{ value.phan_tram_giam }}</td>
                            <td>{{ formatToVND(value.thanh_tien) }}</td>
                        </tr>
                    </template>
                    <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="">Tổng Tiền Hóa Đơn</td>
                        <td>{{ formatToVND(hoa_don.tong_tien_truoc_giam) }}</td>
                    </tr>
                    <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="">Phần Trăm Giảm</td>
                        <td>{{ hoa_don.phan_tram_giam }}</td>
                    </tr>
                    <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="text-primary fw-bold">Tổng Tiền Thanh Toán</td>
                        <td class="text-primary fw-bold">{{ formatToVND(hoa_don.tien_thuc_nhan) }}</td>
                    </tr>
                </tbody>
            </table>

            <div class="d-md-flex justify-content-between my-5">
                <div>
                    <h5 class="fw-bold my-4">Contact Us</h5>
                    <ul class="list-unstyled">
                        <li><iconify-icon class="social-icon text-primary fs-5 me-2" icon="ic:baseline-email"
                                style="vertical-align:text-bottom"></iconify-icon> Nhà Hàng DZFullStack</li>
                        <li><iconify-icon class="social-icon text-primary fs-5 me-2" icon="mdi:location"
                                style="vertical-align:text-bottom"></iconify-icon> 32 Xuân Diệu, Thuận Phước, Hải Châu, Đà Nẵng</li>
                        <li><iconify-icon class="social-icon text-primary fs-5 me-2" icon="solar:phone-bold"
                                style="vertical-align:text-bottom"></iconify-icon> 0935532543</li>
                        <li><iconify-icon class="social-icon text-primary fs-5 me-2" icon="ic:baseline-email"
                                style="vertical-align:text-bottom"></iconify-icon> dzfullstack@gmail.com</li>
                        
                    </ul>
                </div>
                <div>
                    <h5 class="fw-bold my-4">Thông Tin Thanh Toán</h5>
                    <ul class="list-unstyled">
                        <li><span class="fw-semibold">Account No: </span> 1910061030119</li>
                        <li><span class="fw-semibold">Account Name: </span> LE THANH TRUONG</li>
                        <li><span class="fw-semibold">Bank Name: </span> MB Bank </li>
                    </ul>
                </div>
            </div>
            <div id="footer-bottom">
                <div class="container border-top">
                    <div class="row mt-3">
                        <div class="col-md-6 copyright">
                            <p>© 2024 dzfullstack. <a href="#" target="_blank" class="text-decoration-none text-black-50">Terms
                                    & Support</a> </p>
                        </div>
                        <div class="col-md-6 text-md-end">
                            <p>Design By: <a href="https://templatesjungle.com/" target="_blank"
                                    class="text-decoration-none text-black-50">
                                    DZFullStack Company</a> </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>
<script>
import baseRequest from '../../core/baseRequest';

export default {
    data() {
        return {
            list_chi_tiet_hoa_don : [],
            hoa_don               : {},
            date                  : '',
            id_hoa_don_ban_hang   : this.$route.params.id,
        }
    },
    mounted() {
        this.getData();
        this.date     = new Date().toISOString().slice(0, 10);
    },
    methods: {
        formatToVND(number) {
            number = parseInt(number);
            return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        },

        getData() {
            const payload = {
                'id_hoa_don_ban_hang' : this.id_hoa_don_ban_hang,
            }
            baseRequest
                .post('admin/hoa-don/data-bill', payload)
                .then((res) => {
                    this.list_chi_tiet_hoa_don = res.data.data;
                    this.hoa_don                   = res.data.hoa_don;
                })
        }
    },
}
</script>
<style></style>