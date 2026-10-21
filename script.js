// Validasi Form Login & Pengalihan ke Beranda
const formLogin = document.getElementById('formLogin');
if (formLogin) {
    formLogin.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah halaman dimuat ulang
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const pesan = document.getElementById('pesan');
        
        pesan.innerHTML = '';
        let adaKesalahan = false;
        
        // Validasi Email/Nama Pengguna
        if (username === '') {
            pesan.innerHTML += `<div class="alert alert-danger">Nama pengguna atau email tidak boleh kosong!</div>`;
            adaKesalahan = true;
        } else if (username.includes('@')) {
            const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!polaEmail.test(username)) {
                pesan.innerHTML += `<div class="alert alert-danger">Format email tidak valid!</div>`;
                adaKesalahan = true;
            }
        }
        
        // Validasi Kata Sandi
        if (password === '') {
            pesan.innerHTML += `<div class="alert alert-danger">Kata sandi tidak boleh kosong!</div>`;
            adaKesalahan = true;
        } else if (password.length < 6) {
            pesan.innerHTML += `<div class="alert alert-danger">Kata sandi minimal 6 karakter!</div>`;
            adaKesalahan = true;
        }
        
        // Jika Semua Validasi Berhasil
        if (!adaKesalahan) {
            pesan.innerHTML = `<div class="alert alert-success">
                ✅ Selamat datang, ${username}! <br>
                Anda akan diarahkan ke halaman Beranda dalam 3 detik...
            </div>`;
            
            // Mengalihkan ke halaman beranda setelah 3 detik
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 3000); // 3000 milidetik = 3 detik
        }
    });
}