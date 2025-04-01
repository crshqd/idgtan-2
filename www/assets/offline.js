async function req() {
    const status = (a)=>{document.getElementById("status").innerText=a};
    try {
        const registration = await navigator.serviceWorker.register(
            '/sw.js',
            {
                scope: '/',
            }
        );
        if (registration.installing) {
            status('Service worker installing');
        } else if (registration.waiting) {
            status('Service worker installed');
        } else if (registration.active) {
            status('Service worker active');
        }
    } catch (error) {
        status(`! ! ! Service worker registration failed with ${error}`);
    }
}