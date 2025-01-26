// script.js

// Array simbol untuk mesin slot
const symbols = ['🍒', '🍋', '🍊', '🍉', '🍇'];

// Fungsi untuk menghasilkan hasil acak pada gulungan
function spinReels() {
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const resultText = document.getElementById('result');

    // Memilih simbol acak untuk setiap gulungan
    const result1 = symbols[Math.floor(Math.random() * symbols.length)];
    const result2 = symbols[Math.floor(Math.random() * symbols.length)];
    const result3 = symbols[Math.floor(Math.random() * symbols.length)];

    // Menampilkan hasil pada gulungan
    reel1.textContent = result1;
    reel2.textContent = result2;
    reel3.textContent = result3;

    // Cek apakah ada kombinasi yang sama
    if (result1 === result2 && result2 === result3) {
        resultText.textContent = "Anda Menang!";
    } else {
        resultText.textContent = "Coba Lagi!";
    }
}

// Event listener untuk tombol putar
document.getElementById('spinButton').addEventListener('click', spinReels);
// script.js

// Array simbol untuk mesin slot
const symbols = ['🍒', '🍋', '🍊', '🍉', '🍇'];

// Fungsi untuk menghasilkan hasil acak pada gulungan
function spinReels() {
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const resultText = document.getElementById('result');

    // Menambahkan kelas 'spinning' untuk memulai animasi putaran
    reel1.classList.add('spinning');
    reel2.classList.add('spinning');
    reel3.classList.add('spinning');

    // Setelah animasi selesai, hentikan animasi dan tampilkan hasil
    setTimeout(() => {
        // Memilih simbol acak untuk setiap gulungan
        const result1 = symbols[Math.floor(Math.random() * symbols.length)];
        const result2 = symbols[Math.floor(Math.random() * symbols.length)];
        const result3 = symbols[Math.floor(Math.random() * symbols.length)];

        // Menampilkan hasil pada gulungan
        reel1.textContent = result1;
        reel2.textContent = result2;
        reel3.textContent = result3;

        // Menghentikan animasi dengan menghapus kelas 'spinning'
        reel1.classList.remove('spinning');
        reel2.classList.remove('spinning');
        reel3.classList.remove('spinning');

        // Cek apakah ada kombinasi yang sama
        if (result1 === result2 && result2 === result3) {
            resultText.textContent = "Anda Menang!";
        } else {
            resultText.textContent = "Coba Lagi!";
        }
    }, 1000); // Sesuaikan waktu animasi dengan waktu yang diperlukan
}

// Event listener untuk tombol putar
document.getElementById('spinButton').addEventListener('click', spinReels);

// script.js

// Array simbol untuk mesin slot
const symbols = ['🍒', '🍋', '🍊', '🍉', '🍇'];

// Fungsi untuk menghasilkan hasil acak pada gulungan
function spinReels() {
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const resultText = document.getElementById('result');
    const jackpotText = document.getElementById('jackpotResult');

    // Menambahkan kelas 'spinning' untuk memulai animasi putaran
    reel1.classList.add('spinning');
    reel2.classList.add('spinning');
    reel3.classList.add('spinning');

    // Setelah animasi selesai, hentikan animasi dan tampilkan hasil
    setTimeout(() => {
        // Memilih simbol acak untuk setiap gulungan
        const result1 = symbols[Math.floor(Math.random() * symbols.length)];
        const result2 = symbols[Math.floor(Math.random() * symbols.length)];
        const result3 = symbols[Math.floor(Math.random() * symbols.length)];

        // Menampilkan hasil pada gulungan
        reel1.textContent = result1;
        reel2.textContent = result2;
        reel3.textContent = result3;

        // Menghentikan animasi dengan menghapus kelas 'spinning'
        reel1.classList.remove('spinning');
        reel2.classList.remove('spinning');
        reel3.classList.remove('spinning');

        // Cek apakah ada kombinasi yang sama
        if (result1 === result2 && result2 === result3) {
            resultText.textContent = "Anda Menang!";
            if (result1 === '🍒') {
                jackpotText.textContent = "Jackpot! Anda Mendapatkan Hadiah Besar!";
            } else {
                jackpotText.textContent = "";
            }
        } else {
            resultText.textContent = "Coba Lagi!";
            jackpotText.textContent = "";
        }
    }, 1000); // Sesuaikan waktu animasi dengan waktu yang diperlukan
}

// Event listener untuk tombol putar
document.getElementById('spinButton').addEventListener('click', spinReels);

// script.js

// Array simbol untuk mesin slot
const symbols = ['🍒', '🍋', '🍊', '🍉', '🍇'];

// Saldo awal pemain
let balance = 1000;

// Menampilkan saldo awal
document.getElementById('balance').textContent = balance;

// Fungsi untuk menghasilkan hasil acak pada gulungan
function spinReels() {
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const resultText = document.getElementById('result');
    const jackpotText = document.getElementById('jackpotResult');
    const betAmountInput = document.getElementById('betAmount');
    const betAmount = parseInt(betAmountInput.value, 10);

    // Validasi taruhan
    if (isNaN(betAmount) || betAmount <= 0 || betAmount > balance) {
        resultText.textContent = "Masukkan taruhan yang valid!";
        return;
    }

    // Mengurangi saldo berdasarkan taruhan
    balance -= betAmount;
    document.getElementById('balance').textContent = balance;

    // Menambahkan kelas 'spinning' untuk memulai animasi putaran
    reel1.classList.add('spinning');
    reel2.classList.add('spinning');
    reel3.classList.add('spinning');

    // Setelah animasi selesai, hentikan animasi dan tampilkan hasil
    setTimeout(() => {
        // Memilih simbol acak untuk setiap gulungan
        const result1 = symbols[Math.floor(Math.random() * symbols.length)];
        const result2 = symbols[Math.floor(Math.random() * symbols.length)];
        const result3 = symbols[Math.floor(Math.random() * symbols.length)];

        // Menampilkan hasil pada gulungan
        reel1.textContent = result1;
        reel2.textContent = result2;
        reel3.textContent = result3;

        // Menghentikan animasi dengan menghapus kelas 'spinning'
        reel1.classList.remove('spinning');
        reel2.classList.remove('spinning');
        reel3.classList.remove('spinning');

        // Cek apakah ada kombinasi yang sama dan update saldo
        if (result1 === result2 && result2 === result3) {
            resultText.textContent = "Anda Menang!";
            if (result1 === '🍒') {
                // Jackpot jika mendapatkan 3 simbol '🍒'
                balance += betAmount * 10; // Jackpot besar
                jackpotText.textContent = "Jackpot! Anda Mendapatkan Hadiah Besar!";
            } else {
                // Kemenangan biasa, tambahkan 2x taruhan
                balance += betAmount * 2;
                jackpotText.textContent = "";
            }
        } else {
            resultText.textContent = "Coba Lagi!";
            jackpotText.textContent = "";
        }

        // Update saldo
        document.getElementById('balance').textContent = balance;

        // Cek jika saldo pemain habis
        if (balance <= 0) {
            resultText.textContent = "Saldo Anda Habis! Silakan muat ulang halaman untuk bermain lagi.";
            document.getElementById('spinButton').disabled = true;
        }
    }, 1000); // Sesuaikan waktu animasi dengan waktu yang diperlukan
}

// Event listener untuk tombol putar
document.getElementById('spinButton').addEventListener('click', spinReels);

