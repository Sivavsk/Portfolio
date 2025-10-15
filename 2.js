from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfgen import canvas
import qrcode

# --- CONFIG ---
name = "Venkata Siva Krishna Reddy Annapureddy"
linkedin_url = "https://www.linkedin.com/in/sivaa17"
email = "sivakrishna.anna@gmail.com"

# --- FILE OUTPUT ---
doc = SimpleDocTemplate("Venkata_Siva_Krishna_Reddy_Annapureddy_Portfolio.pdf", pagesize=letter)

styles = {
    "title": ParagraphStyle("title", fontSize=18, textColor=colors.HexColor("#0176D3"), leading=22, spaceAfter=10),
    "section": ParagraphStyle("section", fontSize=14, textColor=colors.HexColor("#04844B"), spaceAfter=6, leading=18),
    "body": ParagraphStyle("body", fontSize=10.5, leading=14, spaceAfter=8)
}

# --- QR CODE ---
qr = qrcode.make(linkedin_url)
qr.save("linkedin_qr.png")

# --- BUILD CONTENT ---
content = []
content.append(Image("your_photo.png", width=100, height=100))
content.append(Paragraph(f"<b>{name}</b>", styles["title"]))
content.append(Paragraph("Salesforce-Certified Business Analyst | Service Cloud | Integrations | Data Analytics", styles["body"]))
content.append(Paragraph(f"📧 {email} | LinkedIn: sivaa17", styles["body"]))
content.append(Spacer(1, 10))

# Certifications logos table
cert_table = Table([[Image("admin_logo.png", width=60, height=60),
                     Image("developer_logo.png", width=60, height=60)],
                    [Image("service_logo.png", width=60, height=60), ""]],
                   hAlign='CENTER')
content.append(cert_table)
content.append(Spacer(1, 12))

# Summary
content.append(Paragraph("Professional Summary", styles["section"]))
content.append(Paragraph(
    "Salesforce-certified Business Analyst with 4+ years of experience delivering CRM, data, and integration solutions across healthcare and IT consulting.",
    styles["body"]))

# Divider
content.append(Spacer(1, 4))
content.append(Paragraph("<hr width='100%' color='#DDDDDD'/>", styles["body"]))

# Projects & other sections follow as we designed...
# Add your PDF build logic below as needed.

doc.build(content)
print('✅ Portfolio generated successfully!')
