function toggleDisplay(dropdownID){
    let dropdown_div = document.getElementById(dropdownID);
    let allDropdowns = document.querySelectorAll('.dropdown_options');

    allDropdowns.forEach(dropdown => {
        if (dropdown !== dropdown_div) {
            dropdown.classList.add('hidden');
        };
    });
    dropdown_div.classList.toggle('hidden');
};

// Eventlisteners for the dropdown buttons
document.getElementById('year_btn').addEventListener('click', function(){
    toggleDisplay('yearSelect_Dd');
});
document.getElementById('category_btn').addEventListener('click', function(){
    toggleDisplay('categorySelect_Dd');
});