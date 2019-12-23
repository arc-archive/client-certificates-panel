/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   src/CertificateDetails.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {LitElement, html, css} from 'lit-element';

export {CertificateDetails};

declare namespace UiElements {

  /**
   * A view that render a certificate details.
   *
   * Set `certId` proeprty to certificate's identifier and the element
   * queries for the details and populates the view.
   */
  class CertificateDetails extends LitElement {

    /**
     * The ID of the certificate to render.
     * It should not be set when setting `certificate` object.
     */
    certId: string|null|undefined;

    /**
     * Enables compatibility with Anypoint components.
     */
    compatibility: boolean|null|undefined;

    /**
     * True when currently querying for the certificate
     */
    querying: boolean|null|undefined;

    /**
     * A certificate
     */
    certificate: object|null|undefined;
    constructor();
    render(): any;
    queryCertInfo(id: any): any;
    dispatchQueryDetail(id: any): any;
    _deleteCertificateHandler(): void;
    _headerTemplate(certificate: any): any;
    _timeTemplate(label: any, value: any): any;
    _actionsTemplate(certificate: any): any;
    _detailsTemplate(certificate: any): any;
    _busyTemplate(): any;
  }
}