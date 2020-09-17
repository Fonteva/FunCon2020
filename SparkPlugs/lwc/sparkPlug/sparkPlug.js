/**
 * Created by avisser on 9/16/20.
 */

import {LightningElement, api} from 'lwc';

export default class SparkPlug extends LightningElement {
    @api plugData;
    @api extensionPoint;

    extension
    handleClick() {
        const changeEvent = new CustomEvent('click', {
            detail: {}
        });
        this.dispatchEvent(changeEvent);
    }
}