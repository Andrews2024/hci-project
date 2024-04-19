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
};

function postFoundItem() {
    // Get inputs as strings
    let itemText = document.getElementById("item-desc");
    let foundLocation = document.getElementById("location-found");
    let image = document.getElementById("found-img");
    console.log(itemText.value, foundLocation.value, image.value);

    // Get today's date in M/D/YYYY format
    let date = new Date().toLocaleDateString();

    // Strip "C:\fakepath\" from input image"
    let imageFile = image.value.replace("C:\\fakepath\\", '');

    // Make forum-post div and add to Found Items
    // NOTE: NOT GOOD PRACTICE -- LEADS TO XSS ATTACKS
    // Currently ignoring because this is a project to be locally hosted only
    let newItem = `<div class="forum-item">
                    <div class="forum-image">
                        <img src="${imageFile}">
                    </div>
                    <div class="forum-labels">
                        <label><b>Item</b>: ${itemText.value}</label><br>
                        <label><b>Location</b>: ${foundLocation.value}</label><br>
                        <label><b>Found On</b>: ${date}</label><br>
                        <label><b>Email Me</b>: tester@wpi.edu</label>
                    </div>
                </div>`;
    
    let foundContainer = document.getElementById("found-header");
    foundContainer.insertAdjacentHTML("afterend", newItem);

    // Reset fields and close the form
    itemText.value = '';
    foundLocation.value = '';
    image.value = '';
    closeForm("found-form");
};

function postLostItem() {
    // Get inputs as strings
    let itemText = document.getElementById("item-desc-lost");
    let foundLocation = document.getElementById("last-seen");
    let image = document.getElementById("lost-img");
    console.log(itemText.value, foundLocation.value, image.value);

    // Get today's date in M/D/YYYY format
    let date = new Date().toLocaleDateString();

    // Strip "C:\fakepath\" from input image"
    let imageFile = image.value.replace("C:\\fakepath\\", '');

    // Make forum-post div and add to Lost Items
    // NOTE: NOT GOOD PRACTICE -- LEADS TO XSS ATTACKS
    // Currently ignoring because this is a project to be locally hosted only
    let newItem = `<div class="forum-item">
                    <div class="forum-image">
                        <img src="${imageFile}">
                    </div>
                    <div class="forum-labels">
                        <label><b>Item</b>: ${itemText.value}</label><br>
                        <label><b>Last Seen</b>: ${foundLocation.value}</label><br>
                        <label><b>Lost On</b>: ${date}</label><br>
                        <label><b>Email Me</b>: tester@wpi.edu</label>
                    </div>
                </div>`;

    let foundContainer = document.getElementById("lost-header");
    foundContainer.insertAdjacentHTML("afterend", newItem);

    // Reset fields and close the form
    itemText.value = '';
    foundLocation.value = '';
    image.value = '';
    closeForm("found-form");
};

function resetAllForms() {
    // Get all fields from found item form
    let itemText = document.getElementById("item-desc");
    let foundLocation = document.getElementById("location-found");
    let image = document.getElementById("found-img");

    // Get all fields from lost item form
    let lostItemText = document.getElementById("item-desc-lost");
    let lastSeen = document.getElementById("last-seen");
    let lostImage = document.getElementById("lost-img");

    // Reset fields
    itemText.value = '';
    foundLocation.value = '';
    image.value = '';
    lostItemText.value = '';
    lastSeen.value = '';
    lostImage.value = '';
};