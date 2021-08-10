import { createHostComponent } from '@remax/runtime';
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html
 */
export var PageContainer = createHostComponent('page-container');
PageContainer.defaultProps = {
    show: false,
    duration: 300,
    zIndex: 100,
    overlay: true,
    position: 'bottom',
    round: false,
    closeOnSlideDown: false,
};
