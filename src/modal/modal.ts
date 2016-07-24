import {TemplateRef} from '@angular/core';

import {PopupService} from '../util/popup';

/**
 * A context object with data accessible to modal content templates.
 */
class ModalContentTplCtx {
  constructor(private onClose: (result: any) => void, private onDismiss: (reason: any) => void, public resolve = {}) {
  }

  close(result) {
    this.onClose(result);
  }

  dismiss(reason) {
    this.onDismiss(reason);
  }
}

class ModalOpenResult {
  constructor(private onClose: (result: any) => void, private onDismiss: (reason: any) => void, public result: Promise<any>) {
  }

  close(result) {
    this.onClose(result);
  }

  dismiss(reason) {
    this.onDismiss(reason);
  }
}

/**
 * Modal options available to clients opening new instances of modals.
 */
export interface ModalOptions {
  backdrop?: boolean;
  keyboard?: boolean;
  size?: string;
  resolve?: Object;
}


/**
 * A service dedicated to opening new modal windows.
 */
export class NgbModalService {

  constructor() {
  }

  /**
   * Opens new modal window with the specified content and options.
   */
  open(content: string | TemplateRef<ModalContentTplCtx>, options?: ModalOptions) {
    //TODO: open backdrop (only if specified)
    //TODO: open modal window


    return new ModalOpenResult();
  }
}
