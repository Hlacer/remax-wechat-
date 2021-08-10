import { createHostComponent } from '@remax/runtime';
/** @see https://developers.weixin.qq.com/miniprogram/dev/component/share-element.html */
export var ShareElement = createHostComponent('share-element');
ShareElement.defaultProps = {
    transform: false,
    duration: 300,
    easingFunction: 'ease-out',
};
