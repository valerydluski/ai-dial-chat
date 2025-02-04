import { Tags } from '@/src/ui/domData';

export const ConfirmationDialogSelectors = {
  container: '[data-qa="confirmation-dialog"]',
  cancelDialog: '[data-qa="cancel-dialog"]',
  confirm: '[data-qa="confirm"]',
  confirmationMessage: '[data-qa="confirm-message"]',
};

export const Popup = {
  errorPopup: '[style*="animation"]',
};

export const PromptModal = {
  promptModalDialog: '[data-qa="prompt-modal"]',
  promptName: '[data-qa="prompt-name"]',
  promptDescription: '[data-qa="prompt-descr"]',
  promptValue: '[data-qa="prompt-value"]',
  savePrompt: '[data-qa="save-prompt"]',
  fieldLabel: (label: string) => `label[for="${label}"]`,
};

export const PromptPreviewModal = {
  promptPreviewModal: '[data-qa="preview-prompt-modal"]',
  promptPreviewModalTitle: '[data-qa="modal-entity-name"]',
  promptPreviewName: '[data-qa="prompt-name-label"] ~ [data-qa="prompt-name"]',
  promptPreviewDescription:
    '[data-qa="prompt-description-label"] ~ [data-qa="prompt-description"]',
  promptPreviewContent:
    '[data-qa="prompt-content-label"] ~ [data-qa="prompt-content"]',
  promptExportButton: '[data-qa="export-prompt"]',
  promptDeleteButton: '[data-qa="delete-prompt"]',
  promptDuplicateButton: '[data-qa="duplicate-prompt"]',
};

export const VariableModal = {
  variableModalDialog: '[data-qa="variable-modal"]',
  variablePromptName: '[data-qa="variable-prompt-name"]',
  variablePromptDescription: '[data-qa="variable-prompt-descr"]',
  submitVariable: '[data-qa="submit-variable"]',
  variable: '[data-qa="variable"]',
  variableAsterisk: '[data-qa="variable-asterisk"]',
  variableLabel: '[data-qa="variable-label"]',
};

export const ModelDialog = {
  modelDialog: '[data-qa="models-dialog"]',
  talkToGroup: (groupName?: string) => {
    const base = '[data-qa="talk-to-group"]';
    return groupName ? `${base}:has-text('${groupName}')` : base;
  },
  closeDialog: '[data-qa="close-models-dialog"]',
  searchInput: '[name="titleInput"]',
  modelsTab: '[data-qa="models-tab"]',
  assistantsTab: '[data-qa="assistants-tab"]',
  applicationsTab: '[data-qa="applications-tab"]',
};

export const AddonDialog = {
  addonsDialog: '[data-qa="addons-dialog"]',
  addonSearchResults: '[data-qa="addon-search-results"]',
  addonName: '[data-qa="addon-name"]',
  closeDialog: '[data-qa="close-addons-dialog"]',
  applyAddons: '[data-qa="apply-addons"]',
};

export const InfoTooltip = {
  infoTooltip: '[data-qa="chat-info-tooltip"]',
  modelInfo: '[data-qa="model-info"]',
  applicationInfo: '[data-qa="application-info"]',
  assistantInfo: '[data-qa="assistant-info"]',
  assistantModelInfo: '[data-qa="assistant model-info"]',
  promptInfo: '[data-qa="prompt-info"]',
  tempInfo: '[data-qa="temp-info"]',
  addonsInfo: '[data-qa="addons-info"]',
  tooltip: '[data-qa="tooltip"]',
};

export const ShareModalSelectors = {
  modalContainer: '[data-qa="share-modal"]',
  shareLink: '[data-qa="share-link"]',
  copyLink: '[data-qa="copy-link"]',
  entityName: '[data-qa="modal-entity-name"]',
  shareText: ' .text-sm',
};

export const UploadFromDeviceModalSelectors = {
  modalContainer: '[data-qa="pre-upload-modal"]',
  uploadButton: '[data-qa="upload"]',
  uploadedFile: '[data-qa="uploaded-file"]',
  addMoreFiles: '[data-qa="add-more-files"]',
  deleteUploadedFileIcon: `[data-qa="delete-file"] > ${Tags.svg}`,
  fileExtension: '[data-qa="file-extension"]',
  uploadedFiles: '[data-qa="uploaded-files"]',
  uploadTo: '[data-qa="upload-to"]',
  uploadToPath: '[data-qa="upload-to-path"]',
  changeUploadTo: '[data-qa="change-upload-to"]',
};

export const AttachFilesModalSelectors = {
  modalContainer: '[data-qa="file-manager-modal"]',
  allFilesContainer: '[data-qa="all-files"]',
  attachedFile: '[data-qa="attached-file"]',
  attachedFileName: '[data-qa="attached-file-name"]',
  attachedFileIcon: '[data-qa="attached-file-icon"]',
  attachFilesButton: '[data-qa="attach-files"]',
  uploadFromDeviceButton: '[data-qa="upload-from-device"]',
  deleteFilesButton: '[data-qa="delete-files"]',
  downloadFilesButton: '[data-qa="download-files"]',
  newFolderButton: '[data-qa="new-folder"]',
};

export const FilesModalSelectors = {
  supportedAttributesLabel: '[data-qa="supported-attributes"]',
};

export const SelectFolderModalSelectors = {
  modalContainer: '[data-qa="select-folder-modal"]',
  newFolderButton: '[data-qa="new-folder"]',
  selectFolderButton: '[data-qa="select-folder"]',
  uploadFolders: '[data-qa="upload-folders"]',
  allFolders: '[data-qa="all-folders"]',
  uploadRootFolder: '[data-qa="root-folder"]',
};

export const AccountSettingsModalSelector = {
  settingsModal: '[data-qa="settings-modal"]',
  theme: '[data-qa="theme"]',
  fullWidthChatToggle: '[data-qa="toggle-switch"]',
  save: '[data-qa="save"]',
};
