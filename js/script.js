document.addEventListener("DOMContentLoaded", function() {
    // Contoh: Menambahkan interaksi saat tombol diklik
    const buttons = document.querySelectorAll('.btn-dark');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Udah dibilang gausah dipencet TOLOL!');
        });
    });
});
