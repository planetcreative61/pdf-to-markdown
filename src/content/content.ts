export const tool = {
  PDF_to_Markdown: {
    title: "PDF to Markdown",
    description: "Convert PDF files to Markdown format",
    color: "#FF4136",
    type: ".pdf",
    to: "/pdf-to-markdown",
  },
};
// this edit_page options represents merge pdf i want another similar object but for pdf to markdown
// export const edit_page = {
//   edit_page_titles: {
//     merge_pdf: "Merge PDF options",
//   },
//   loader_text: "please wait...",
//   add_more_button: "Add more files",
//   action_buttons: {
//     merge_pdf: "Merge PDF",
//   },
//   pages: "pages",
//   page: "page",
// };
// please give me this object but translated to ar, es, fr, hi, zh respectively same object same keys but just translate the string values
export const edit_page = {
  edit_page_titles: { pdf_to_markdown: "PDF to Markdown options" },
  loader_text: "please wait…",
  add_more_button: "Add more files",
  action_buttons: { pdf_to_markdown: "Convert to Markdown" },
  pages: "pages",
  page: "page",
};

export const tools = {
  select: "Select",
  or_drop: "or drop files here",
  files: "files",
  drop_files: "Drag files here",
};

export const downloadFile = {
  titles: {
    "pdf-to-markdown": [
      "PDF files have been converted to Markdown!",
      "PDF file has been converted to Markdown!",
    ],
  },

  btnText: {
    "pdf-to-markdown": [
      "Download Converted Markdown files",
      "Download Converted Markdown file",
    ],
  },

  backto: {
    "pdf-to-markdown": "Back To PDF to Markdown",
  },
};

export const errors = {
  EMPTY_FILE: {
    message: "The file is empty. Please choose a valid file.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "The file is too large. Please choose a smaller file, or use our compress-pdf tool to reduce the file size.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "The file is not a supported type.",
    types: {
      PDF: "Please choose a valid PDF file.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "The file is corrupt and cannot be processed. Please choose a valid file.",
    code: "ERR_FILE_CORRUPT",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "You have exceeded the maximum number of files allowed. Please delete some files and try again.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "No files selected. Please select at least one file.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "An unknown error occurred. Please try again later or contact support.",
    code: "ERR_UNKNOWN",
  },
  // i want another error like this but when only one file is uploaded
  ERR_NETWORK: {
    message:
      "A network error occurred. Please check your internet connection and try again.",
    code: "ERR_NETWORK",
  },
};
