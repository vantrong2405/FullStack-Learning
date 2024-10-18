<template>
    <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
        <div class="col mx-auto">
            <div class="my-4 text-center">
                <img src="../../assets/assets_rocker/images/logo-img.png" width="180" alt="" />
            </div>
            <div class="card">
                <div class="card-body">
                    <div class="border p-4 rounded">
                        <div class="text-center">
                            <h3 class="">Sign Up</h3>
                            <p>Already have an account? 
                                <router-link to="/login">
                                    <a href="authentication-signin.html">Sign in here</a>
                                </router-link>
                            </p>
                        </div>
                        
                        <div class="login-separater text-center mb-4"> <span>OR SIGN UP WITH EMAIL</span>
                            <hr />
                        </div>
                        <div class="form-body">
                            <form class="row g-3">
                                <div class="col-12">
                                    <label for="inputFirstName" class="form-label">Họ Và Tên</label>
                                    <input type="text" v-model="dang_ky.ho_va_ten" class="form-control" id="inputFirstName" placeholder="Họ Và Tên">
                                </div>
                                
                                <div class="col-12">
                                    <label for="inputEmailAddress" class="form-label">Email</label>
                                    <input type="email" v-model="dang_ky.email" class="form-control" id="inputEmailAddress"
                                        placeholder="example@user.com">
                                </div>
                                <div class="col-12">
                                    <label for="inputChoosePassword" class="form-label">Password</label>
                                    <input type="password" v-model="dang_ky.password" class="form-control" id=""
                                        placeholder="Password">
                                </div>
                                <div class="col-12">
                                    <div class="d-grid">
                                        <button type="button" @:click="dangKy()" class="btn btn-primary"><i class='bx bx-user'></i>Sign
                                            up</button>
                                    </div>
                                </div>
                            </form>
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
const toaster = createToaster({ position: "top-right" });
export default {
    data(){
        return{
            dang_ky: {},
        }
    },
    methods: {
        dangKy() {
            axios
                .post('http://127.0.0.1:8000/api/register', this.dang_ky)
                .then((res) => {
                    toaster.success('Thông báo<br>' + res.data.message);
                    this.$router.push('/login');
                });
        },
    },
}
</script>
<style></style>