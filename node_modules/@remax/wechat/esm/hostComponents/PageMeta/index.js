import { createHostComponent } from '@remax/runtime';
/**
 * 页面属性配置节点，用于指定页面的一些属性、监听页面事件。只能是页面内的第一个节点。可以配合 navigation-bar 组件一同使用。
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html
 */
export var PageMeta = createHostComponent('page-meta');
PageMeta.defaultProps = {
    scrollDuration: 300,
};
