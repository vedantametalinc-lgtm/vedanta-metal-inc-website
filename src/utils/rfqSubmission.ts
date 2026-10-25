const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxZGsIEIuPTSZ8iKzDCc0tDauB6JUiPjqYwNIxbdx7cE2UK0l5GQp2uWzq4kDMz9ORL/exec';

export interface RfqSubmission {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phoneWhatsapp: string;
  country: string;
  productCategory: string;
  materialGrade: string;
  quantity: string;
  sizeSpec: string;
  message: string;
  fileData: string | null;
  fileName: string | null;
  fileMimeType: string | null;
}

export const readFileAsBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== 'string') {
        reject(new Error('The selected file could not be read.'));
        return;
      }
      const base64Data = reader.result.split(',')[1];
      if (!base64Data) {
        reject(new Error('The selected file could not be encoded.'));
        return;
      }
      resolve(base64Data);
    };
    reader.onerror = () => reject(new Error('The selected file could not be read.'));
    reader.readAsDataURL(file);
  });

export const submitRfq = async (submission: RfqSubmission): Promise<void> => {
  const response = await fetch(SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(submission),
  });

  let result: unknown;
  try {
    result = await response.json();
  } catch {
    throw new Error('The enquiry service returned an invalid response. Please try again.');
  }

  if (!response.ok) {
    throw new Error(`The enquiry could not be submitted (HTTP ${response.status}). Please try again.`);
  }

  if (typeof result !== 'object' || result === null || !('status' in result)) {
    throw new Error('The enquiry service returned an unexpected response. Please try again.');
  }

  if (result.status !== 'success') {
    const message = 'message' in result && typeof result.message === 'string'
      ? result.message
      : 'The enquiry could not be submitted. Please try again.';
    throw new Error(message);
  }
};
