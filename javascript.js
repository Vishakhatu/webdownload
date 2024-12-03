document.getElementById('certificate-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the user's name
    const userName = document.getElementById('name').value;

    // Load the certificate image and overlay the name
    generateCertificate(userName);
});

function generateCertificate(userName) {
    const canvas = document.getElementById('certificate-canvas');
    const ctx = canvas.getContext('2d');
    
    // Load the certificate image
    const certificateImage = new Image();
    certificateImage.onload = function() {
        // Set canvas size to match the certificate image size
        canvas.width = certificateImage.width;
        canvas.height = certificateImage.height;

        // Draw the certificate image on the canvas
        ctx.drawImage(certificateImage, 0, 0);

        // Overlay the user's name on the certificate
        ctx.font = '30px Arial';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.fillText(userName, canvas.width / 2, 1200); // Adjust 400 to your certificate's text position

        // Display the updated image
        const imgElement = document.getElementById('certificate-image');
        imgElement.src = canvas.toDataURL('image/png');
        imgElement.style.display = 'block';

        // Enable the download link
        const downloadLink = document.getElementById('download-link');
        downloadLink.href = canvas.toDataURL('image/png');
        downloadLink.style.display = 'inline';
    };
    
    // Set the source of the image (your certificate image)
    certificateImage.src = '/public/newcertificate.png'; // Replace with the path to your certificate image
}
