function toggleDropdown(dropdownName) {
    let dropdown = document.getElementById(dropdownName);
    dropdown.style.display = (dropdown.style.display == 'flex') ? 'none' : 'flex';
};

function openForm(formName) {
    let form = document.getElementById(formName);
    form.style.display = 'flex';
};