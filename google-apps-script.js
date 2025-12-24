// Google Apps Script Code for Google Sheets Integration
// Instructions:
// 1. Go to https://script.google.com
// 2. Create a new project
// 3. Replace the default code with this code
// 4. Update the SPREADSHEET_ID with your Google Sheet ID
// 5. Save the project
// 6. Click "Deploy" > "New deployment"
// 7. Select "Web app" as the type
// 8. Set "Execute as" to "Me"
// 9. Set "Who has access" to "Anyone"
// 10. Click "Deploy" and copy the Web App URL
// 11. Replace 'YOUR_GOOGLE_SCRIPT_URL_HERE' in index.html with this URL

const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'; // Replace with your Google Sheet ID

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    
    // Parse the JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Prepare row data
    const rowData = [
      new Date(), // Timestamp
      data.formType || '',
      data.fullName || '',
      data.email || '',
      data.mobile || '',
      data.qualification || '',
      data.state || '',
      data.city || '',
      data.ipAddress || '',
      data.timestamp || ''
    ];
    
    // Append data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Function to set up headers in the sheet (run this once)
function setupSheet() {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
  const headers = [
    'Timestamp',
    'Form Type',
    'Full Name',
    'Email',
    'Mobile Number',
    'Qualification',
    'State',
    'City',
    'IP Address',
    'Submission Time'
  ];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
}

