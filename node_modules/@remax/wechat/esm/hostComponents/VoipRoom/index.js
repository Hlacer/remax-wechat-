import { createHostComponent } from '@remax/runtime';
/**
 * 多人音视频对话。需用户授权 scope.camera、scope.record。
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html
 */
export var VoipRoom = createHostComponent('voip-room');
VoipRoom.defaultProps = {
    mode: 'camera',
    devicePosition: 'front',
};
