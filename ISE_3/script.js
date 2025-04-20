//// input from fields and generate a download PDF using js PDF
async function generatePDF() {
    const { jsPDF } = window.jspdf;
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const branch = document.getElementById("branch").value;
    const message = document.getElementById("message").value;
  
    const doc = new jsPDF();
  
    doc.setFontSize(16);
    doc.text("PDF Generated from Form", 20, 20);
    doc.setFontSize(12);
    doc.text(`Name: ${name}`, 20, 40);
    doc.text(`Email: ${email}`, 20, 50);
    doc.text(`Phone: ${phone}`, 20, 60);
    doc.text(`Branch: ${branch}`, 20, 70);
    doc.text("Message:", 20, 80);
    doc.text(doc.splitTextToSize(message, 170), 20, 90);
  
    doc.save("form-data.pdf");
  }