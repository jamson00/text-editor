const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default browser install prompt
  event.preventDefault();

  // Store the event for later use
  deferredPrompt = event;

  // Show your custom install button or UI element
  // You can make the `butInstall` button visible at this point
  butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the browser's install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;

    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    // Clear the deferredPrompt so it won't be shown again
    deferredPrompt = null;

    // Hide the custom install button
    butInstall.style.display = 'none';
  }
});

// TODO: Add an event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA was installed successfully');
});
