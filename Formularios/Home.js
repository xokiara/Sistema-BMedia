document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');

    toggle.addEventListener('click', function() {
        navigation.classList.toggle('active');
    });

});
