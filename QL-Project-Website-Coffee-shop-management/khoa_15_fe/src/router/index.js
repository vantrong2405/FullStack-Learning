import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import checkLogin from "./checkLogin";
const routes = [
  {
    path: "/auth",
    component: () => import("../components/Auth/index.vue"),
  },

  //Login
  {
    path: "/login",
    component: () => import("../components/Login/index.vue"),
    meta: { layout: "new" },
  },
  {
    path: "/register",
    component: () => import("../components/Register/index.vue"),
    meta: { layout: "new" },
  },

  
 //admin
  {
    path: "/admin/danh-muc",
    component: () => import("../components/DanhMuc/index.vue"),
    beforeEnter: checkLogin,
  },

  {
    path: "/admin/su-dung-dich-vu",
    component: () => import("../components/SuDungDichVu/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/hoa-don-ban-hang",
    component: () => import("../components/HoaDonBanHang/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/chuc-vu",
    component: () => import("../components/ChucVu/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/nhan-vien",
    component: () => import("../components/NhanVien/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/ban",
    component: () => import("../components/Ban/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/khu-vuc",
    component: () => import("../components/KhuVuc/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/nguyen-lieu",
    component: () => import("../components/NguyenLieu/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/nhap-kho",
    component: () => import("../components/NhapKho/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/hoa-don-nhap-kho",
    component: () => import("../components/HoaDonNhapKho/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/mon-an",
    component: () => import("../components/MonAn/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/nha-cung-cap",
    component: () => import("../components/NhaCungCap/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/chuyen-muc",
    component: () => import("../components/ChuyenMuc/index.vue"),
    beforeEnter: checkLogin,
  },
  {
    path: "/admin/bai-viet",
    component: () => import("../components/BaiViet/index.vue"),
    beforeEnter: checkLogin,
  },

  // Quên mật Khẩu
  {
    path: "/dat-lai-mat-khau/:maBiMat",
    component: () => import("../components/DatLaiMatKhau/index.vue"),
    meta: { layout: "new" },
  },

  {
    path: "/quen-mat-khau",
    component: () => import("../components/QuenmatKhau/index.vue"),
    meta: { layout: "new" },
  },

  {
    path: "/admin/phan-quyen",
    component: () => import("../components/PhanQuyen/index.vue"),
  },

  {
    path: "/admin/thong-ke/thong-ke-1",
    component: () => import("../components/ThongKe/thong_ke_1.vue"),
  },

  {
    path: "/admin/thong-ke/thong-ke-2",
    component: () => import("../components/ThongKe/thong_ke_2.vue"),
  },

  {
    path: "/admin/thong-ke/thong-ke-3",
    component: () => import("../components/ThongKe/thong_ke_3.vue"),
  },

  {
    path: "/admin/bill/:id",
    component: () => import("../components/Bill/index.vue"),
    meta : {layout : 'bill'}
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
