import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
@customElement('u-atom-svg')
export class UAtomSVG extends LitElement{
override render(){
    return html`
   <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="30" height="30" rx="15" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2_524" transform="scale(0.00444444)"/>
</pattern>
<image id="image0_2_524" width="225" height="225" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>

    `
}
}
declare global {
    interface HTMLElementTagNameMap {
        "u-atom-svg": UAtomSVG
    }
}