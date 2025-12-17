document.addEventListener("DOMContentLoaded", function () {
    const plotContainers = document.querySelectorAll('.plot-container');
    plotContainers.forEach(container => {
        const iframe = container.querySelector('iframe');

        if (iframe) {
            const loader = document.createElement('div');
            loader.className = 'loader';
            container.insertBefore(loader, iframe);
            iframe.onload = function () {
                loader.style.display = 'none';
                iframe.classList.add('loaded');
            };
        }
    });
});