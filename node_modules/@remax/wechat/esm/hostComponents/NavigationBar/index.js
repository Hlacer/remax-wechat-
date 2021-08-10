import { createHostComponent } from '@remax/runtime';
/**
 * 页面导航条配置节点，用于指定导航栏的一些属性。只能是 page-meta 组件内的第一个节点，需要配合它一同使用。
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html
 */
export var NavigationBar = createHostComponent('navigation-bar');
NavigationBar.defaultProps = {
    loading: false,
    colorAnimationDuration: 0,
    colorAnimationTimingFunc: 'linear',
};
