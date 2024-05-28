Panduan Penggunaan Repository
Berikut adalah panduan lengkap untuk mengkloning dan menjalankan repository ini di lingkungan lokal Anda.
Prasyarat

Pastikan Anda memiliki Node.js dan npm (Node Package Manager) terinstal di sistem Anda. Anda dapat mengunduh dan menginstal Node.js dan npm dari situs resmi Node.js.

Langkah 1: Kloning Repository
Untuk mengkloning repository ini, buka terminal atau command prompt dan jalankan perintah berikut:

git clone <URL_REPOSITORY_ANDA>

Gantikan <URL_REPOSITORY_ANDA> dengan URL repository GitHub Anda.

Langkah 2: Instalasi Dependensi
Setelah mengkloning repository, masuk ke direktori project:

cd nama-folder-repository

Instal semua dependensi yang diperlukan dengan menjalankan:

npm install

Langkah 3: Konfigurasi Database
Pastikan Anda memiliki MySQL terinstal dan berjalan di sistem Anda. Buat database yang diperlukan dan sesuaikan konfigurasi database di file config/dbConfig.js sesuai dengan pengaturan MySQL Anda:

const sequelize = new Sequelize('NAMA_DATABASE', 'USERNAME_DATABASE', 'PASSWORD_DATABASE', {

Gantikan NAMA_DATABASE, USERNAME_DATABASE, dan PASSWORD_DATABASE dengan detail yang sesuai.

Langkah 4: Menjalankan Aplikasi

npm start

Untuk menjalankan server, gunakan perintah berikut di terminal:
Ini akan menjalankan server di port yang ditentukan di file server.js. Secara default, aplikasi akan berjalan di port 3000.

Langkah 5: Akses Aplikasi
Buka browser dan akses aplikasi melalui:
http://localhost:3000/
Anda sekarang dapat berinteraksi dengan API sesuai dengan rute yang telah ditentukan di dalam aplikasi.

Cara Menggunakan Login dan Register di Postman
Register
Untuk mendaftarkan pengguna baru, Anda perlu mengirimkan permintaan POST ke endpoint /api/register dengan data pengguna.
1. Buka Postman dan pilih metode POST.
2. Masukkan URL endpoint untuk register:   http://localhost:3000/api/register
3. Pada tab Body, pilih raw dan set format ke JSON.
4. Masukkan data pengguna seperti berikut:   
{
     "username": "nama_pengguna",
     "email": "email@contoh.com",
     "password": "passwordkuat"
   }

5. Klik Send. Jika berhasil, Anda akan menerima respons yang menunjukkan bahwa pengguna telah terdaftar.

Login
Setelah mendaftar, pengguna dapat login dengan mengirimkan permintaan POST ke endpoint /api/login.
1. Buka Postman dan pilih metode POST.
2. Masukkan URL endpoint untuk login:   http://localhost:3000/api/login
3. Pada tab Body, pilih raw dan set format ke JSON.
4. Masukkan kredensial pengguna:
   {
     "email": "email@contoh.com",
     "password": "passwordkuat"
   }

5. Klik Send. Jika kredensial benar, Anda akan menerima respons yang menunjukkan bahwa pengguna telah berhasil login.

