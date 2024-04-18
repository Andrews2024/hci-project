function toggleDropdown(dropdownName) {
    let dropdown = document.getElementById(dropdownName);
    dropdown.style.display = (dropdown.style.display == 'flex') ? 'none' : 'flex';
};

function openForm(formName) {
    // Open the form
    let form = document.getElementById(formName);
    form.style.display = 'flex';

    // Disable the forum post area
    let forum = document.getElementById("post-container");
    forum.style.display = 'none';
};

function closeForm(formName) {
    // Close the form
    let form = document.getElementById(formName);
    form.style.display = 'none';

    // Re-enable the forum post area
    let forum = document.getElementById("post-container");
    forum.style.display = 'flex';
}