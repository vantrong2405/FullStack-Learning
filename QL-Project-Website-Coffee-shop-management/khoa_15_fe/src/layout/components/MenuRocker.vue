<template>
<div class="nav-container primary-menu">
    <div class="mobile-topbar-header">
        <div>
            <img src="/assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
        </div>
        <div>
            <h4 class="logo-text">Rukada</h4>
        </div>
        <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
        </div>
    </div>
    <nav class="navbar navbar-expand-xl w-100">
        <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
            <li class="nav-item dropdown">
                <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    data-bs-toggle="dropdown">
                    <div class="parent-icon"><i class='bx bx-home-circle'></i>
                    </div>
                    <div class="menu-title">Dashboard</div>
                </a>
                <ul class="dropdown-menu">
                    <li> <a class="dropdown-item" href="index.html"><i
                                class="bx bx-right-arrow-alt"></i>Default</a>
                    </li>
                    <li> <a class="dropdown-item" href="index2.html"><i
                                class="bx bx-right-arrow-alt"></i>Alternate</a>
                    </li>
                    <li> <a class="dropdown-item" href="index3.html"><i
                                class="bx bx-right-arrow-alt"></i>Graphical</a>
                    </li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    data-bs-toggle="dropdown">
                    <div class="parent-icon"><i class="fa-solid fa-plate-wheat"></i>
                    </div>
                    <div class="menu-title">Quản Lý Món Ăn</div>
                </a>
                <ul class="dropdown-menu">
                    <li> 
                        <router-link to="/admin/nguyen-lieu">
                            <a class="dropdown-item" href="/admin/nguyen-lieu">
                                <i class="bx bx-right-arrow-alt"></i>Nguyên Liệu
                            </a>
                        </router-link>
                    </li>
                    <router-link to="/admin/mon-an">
                        <a class="dropdown-item" href="/admin/mon-an">
                            <i class="bx bx-right-arrow-alt"></i>Món Ăn
                        </a>
                    </router-link>
                    <li> 
                        <router-link to="/admin/danh-muc">
                            <a class="dropdown-item" href="/admin/danh-muc">
                                <i class="bx bx-right-arrow-alt"></i>Danh Mục Món Ăn
                            </a>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    data-bs-toggle="dropdown">
                    <div class="parent-icon"><i class="fa-solid fa-file-invoice-dollar"></i>
                    </div>
                    <div class="menu-title">Quản Lý Nhập Kho</div>
                </a>
                <ul class="dropdown-menu">
                    <li> 
                        <router-link to="/admin/nhap-kho">
                            <a class="dropdown-item" href="/admin/nhap-kho">
                                <i class="bx bx-right-arrow-alt"></i>Nhập Kho
                            </a>
                        </router-link>
                    </li>
                    <router-link to="/admin/hoa-don-nhap-kho">
                        <a class="dropdown-item" href="/admin/hoa-don-nhap-kho">
                            <i class="bx bx-right-arrow-alt"></i>Hóa Đơn Nhập Kho
                        </a>
                    </router-link>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    data-bs-toggle="dropdown">
                    <div class="parent-icon"><i class="fa-solid fa-file-invoice-dollar"></i>
                    </div>
                    <div class="menu-title">Quản Lý Bán Hàng</div>
                </a>
                <ul class="dropdown-menu">
                    <li> 
                        <router-link to="/admin/su-dung-dich-vu">
                            <a class="dropdown-item" href="/admin/su-dung-dich-vu">
                                <i class="bx bx-right-arrow-alt"></i>Sử Dụng Dịch Vụ
                            </a>
                        </router-link>
                    </li>
                    <router-link to="/admin/hoa-don-ban-hang">
                        <a class="dropdown-item" href="/admin/hoa-don-ban-hang">
                            <i class="bx bx-right-arrow-alt"></i>Hóa Đơn Bán Hàng
                        </a>
                    </router-link>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    data-bs-toggle="dropdown">
                    <div class="parent-icon"><i class="fa-solid fa-person"></i>
                    </div>
                    <div class="menu-title">Quản Lý Nhân Sự</div>
                </a>
                <ul class="dropdown-menu">
                    <li> 
                        <router-link to="/admin/chuc-vu">
                            <a class="dropdown-item" href="/admin/chuc-vu">
                                <i class="bx bx-right-arrow-alt"></i>Chức Vụ
                            </a>
                        </router-link>
                    </li>
                    <router-link to="/admin/nhan-vien">
                        <a class="dropdown-item" href="/admin/nhan-vien">
                            <i class="bx bx-right-arrow-alt"></i>Nhân Viên
                        </a>
                    </router-link>
                </ul>
            </li>
            <li class="nav-item">
                <router-link to="/admin/ban">
                    <a href="/admin/ban" class="nav-link">
                        <div class="parent-icon">
                            <i class="fa-solid fa-inbox"></i>
                        </div>
                        <div class="menu-title">Bàn</div>
                    </a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/admin/khu-vuc">
                    <a href="/admin/khu-vuc" class="nav-link">
                        <div class="parent-icon">
                            <i class="fa-solid fa-map"></i>
                        </div>
                        <div class="menu-title">Khu Vực</div>
                    </a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/admin/nha-cung-cap">
                    <a href="/admin/nha-cung-cap" class="nav-link">
                        <div class="parent-icon">
                            <i class="fa-solid fa-house"></i>
                        </div>
                        <div class="menu-title">Nhà Cung Cấp</div>
                    </a>
                </router-link>
            </li>
            
            <li class="nav-item">
                <router-link to="/admin/chuyen-muc">
                    <a href="/admin/chuyen-muc" class="nav-link">
                        <div class="parent-icon">
                            <i class="fa-solid fa-bars"></i>
                        </div>
                        <div class="menu-title">Chuyên Mục</div>
                    </a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/admin/bai-viet">
                    <a href="/admin/bai-viet" class="nav-link">
                        <div class="parent-icon">
                            <i class="fa-solid fa-newspaper"></i>
                        </div>
                        <div class="menu-title">Bài Viết</div>
                    </a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/admin/phan-quyen">
                    <a href="/admin/phan-quyen" class="nav-link">
                        <div class="parent-icon">
                            <i class="fa-solid fa-user-shield"></i>
                        </div>
                        <div class="menu-title">Phân Quyền</div>
                    </a>
                </router-link>
            </li>
            <li class="nav-item dropdown">
                <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    data-bs-toggle="dropdown">
                    <div class="parent-icon"><i class="fa-solid fa-chart-simple"></i>
                    </div>
                    <div class="menu-title">Thống Kê</div>
                </a>
                <ul class="dropdown-menu">
                    <li> 
                        <router-link to="/admin/thong-ke/thong-ke-1">
                            <a class="dropdown-item" href="/admin/thong-ke/thong-ke-1">
                                <i class="bx bx-right-arrow-alt"></i>Thống Kê 1
                            </a>
                        </router-link>
                    </li>
                    <router-link to="/admin/thong-ke/thong-ke-2">
                        <a class="dropdown-item" href="/admin/thong-ke/thong-ke-2">
                            <i class="bx bx-right-arrow-alt"></i>Thống Kê 2
                        </a>
                    </router-link>
                    <router-link to="/admin/thong-ke/thong-ke-3">
                        <a class="dropdown-item" href="/admin/thong-ke/thong-ke-3">
                            <i class="bx bx-right-arrow-alt"></i>Thống Kê 3
                        </a>
                    </router-link>
                </ul>
            </li>
        </ul>
    </nav>
</div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>