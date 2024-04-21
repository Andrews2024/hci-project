function toggleDropdown(dropdownName) {
    let dropdown = document.getElementById(dropdownName);
    dropdown.style.display = (dropdown.style.display == 'flex') ? 'none' : 'flex';
};

function openForm(formName) {
    // Close any open forms
    closeForm("lost-form");
    closeForm("found-form");

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

function validateFoundForm(description, location, image) {
    let valid = true;

    // Check that each input is valid
    // For each invalid input, unhide the error message
    if (description == '') {
        document.getElementById('found-desc-error').style.display = 'block';
        valid = false;
    } else { document.getElementById('found-desc-error').style.display = 'none'; } // Hide error message if input is good
    
    if (location == '') {
        document.getElementById('location-found-error').style.display = 'block';
        valid = false;
    } else { document.getElementById('location-found-error').style.display = 'none'; } // Hide error message if input is good
    
    if (image == '') {
        document.getElementById('found-img-error').style.display = 'block';
        valid = false;
    } else { document.getElementById('found-img-error').style.display = 'none'; } // Hide error message if input is good
    
    // Return False for invalid, True for valid
    return valid;
};

var idNum = 0;
function postFoundItem() {
    // Get inputs as strings
    let itemText = document.getElementById("item-desc");
    let foundLocation = document.getElementById("location-found");
    let image = document.getElementById("found-img");

    // Strip "C:\fakepath\" from input image"
    let imageFile = image.value.replace("C:\\fakepath\\", '');

    // Validate form entries before continuing
    if (!validateFoundForm(itemText.value, foundLocation.value, imageFile)) {
        return;
    }

    // Get today's date in M/D/YYYY format
    let date = new Date().toLocaleDateString();

    // Make forum-post div and add to Found Items
    // NOTE: NOT GOOD PRACTICE -- LEADS TO XSS ATTACKS
    // Currently ignoring because this is a project to be locally hosted only
    let newItem = `<div class="forum-item" id="post-${idNum}">
                    <img class="delete" src="images/cross.svg" onclick="removePost('post-${idNum}');">
                    <div class="forum-image">
                        <img src="images/${imageFile}">
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
    idNum++; // Increment idNum for next post
    itemText.value = '';
    foundLocation.value = '';
    image.value = '';
    closeForm("found-form");
};

function validateLostForm(description, location) {
    let valid = true;

    // Check that each input is valid
    // For each invalid input, unhide the error message
    if (description == '') {
        document.getElementById('lost-desc-error').style.display = 'block';
        valid = false;
    } else { document.getElementById('lost-desc-error').style.display = 'none'; } // Hide error message if input is good
    
    if (location == '') {
        document.getElementById('last-seen-error').style.display = 'block';
        valid = false;
    } else { document.getElementById('last-seen-error').style.display = 'none'; } // Hide error message if input is good
    
    // Return False for invalid, True for valid
    return valid;
};

function postLostItem() {
    // Get inputs as strings
    let itemText = document.getElementById("item-desc-lost");
    let lostLocation = document.getElementById("last-seen");
    let image = document.getElementById("lost-img");

    // Validate form input before continuing
    if (!validateLostForm(itemText.value, lostLocation.value)) {
        return;
    }

    // Get today's date in M/D/YYYY format
    let date = new Date().toLocaleDateString();

    // Strip "C:\fakepath\" from input image"
    let imageFile = image.value.replace("C:\\fakepath\\", 'images/');

    if (imageFile == '') { // Use placeholder image
        imageFile = 'images/gallery.svg';
    }

    // Make forum-post div and add to Lost Items
    // NOTE: NOT GOOD PRACTICE -- LEADS TO XSS ATTACKS
    // Currently ignoring because this is a project to be locally hosted only
    let newItem = `<div class="forum-item" id="post-${idNum}">
                    <img class="delete" src="images/cross.svg" onclick="removePost('post-${idNum}');">
                    <div class="forum-image">
                        <img src="${imageFile}">
                    </div>
                    <div class="forum-labels">
                        <label><b>Item</b>: ${itemText.value}</label><br>
                        <label><b>Last Seen</b>: ${lostLocation.value}</label><br>
                        <label><b>Lost On</b>: ${date}</label><br>
                        <label><b>Email Me</b>: tester@wpi.edu</label>
                    </div>
                </div>`;

    let foundContainer = document.getElementById("lost-header");
    foundContainer.insertAdjacentHTML("afterend", newItem);

    // Reset fields and close the form
    idNum++; // Increment idNum
    itemText.value = '';
    lostLocation.value = '';
    image.value = '';
    closeForm("lost-form");
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

function removePost(postID) {
    document.getElementById(postID).remove();
}