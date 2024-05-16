var gridContainer = document.getElementById("grid-container");
var contentSections = gridContainer.querySelectorAll("#content-section");

const transactionDelay = 500; 
var currentIndex = 0;

async function unsubscribeAll() {
  if (currentIndex < contentSections.length) {
    var currentSection = contentSections[currentIndex];
    var currentChannelName = currentSection.querySelectorAll(".style-scope.ytd-channel-name")[1].textContent.trim();
    await openDropdown();
    await handleUnsubscribe(); 
    await confirmUnsubscribe(); 

    console.log(`Unsubscribed from channel: ${currentChannelName}`);
    currentIndex++;
    setTimeout(unsubscribeAll, transactionDelay);
  }
}

async function openDropdown(){
    return new Promise((resolve, reject) => {
        var dropdownButton = document.querySelectorAll(".yt-spec-button-shape-next--icon-leading-trailing")[currentIndex];
        dropdownButton.click();
        setTimeout(resolve, transactionDelay);
    });
}

async function handleUnsubscribe() {
  return new Promise((resolve, reject) => {
    var buttonsWrapper = document.querySelectorAll(
      ".style-scope.ytd-menu-popup-renderer"
    )[0];
    var buttons = buttonsWrapper.querySelectorAll(
      ".style-scope.ytd-menu-popup-renderer"
    );
    var unsubscribeButton = buttons[buttons.length - 1];
    unsubscribeButton.click();
    setTimeout(resolve, transactionDelay);
  });
}

async function confirmUnsubscribe() {
  return new Promise((resolve, reject) => {
    var confirmUnsubscribeButton = document.querySelectorAll(
      ".yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--size-m"
    )[0];
    confirmUnsubscribeButton.click();
    setTimeout(resolve, transactionDelay);
  });
}

unsubscribeAll();
