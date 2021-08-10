import * as React from 'react';
import { View,Text,Image } from 'remax/wechat';
import "./my.css"

const My = () => {
	const defaultUrl = '/images/default-avatar.png'
	const defaultName = ''
	const [name,setName] = React.useState(defaultName)
	const [avatar,setAvatar] = React.useState(defaultUrl)
	const login = () =>{
	    wx.getUserProfile({
		    desc:"获取头像，用户名",
		    success:(res)=>{
			    wx.setStorageSync("user", {
				    name: res.userInfo.nickName,
				    url: res.userInfo.avatarUrl
			    })
			    wx.showToast({
				    title: '授权成功',
				    icon: 'success',
				    duration: 2000,
				    success() {
					    const user = wx.getStorageSync("user");
					    setName(user.name)
					    setAvatar(user.url)
				    }
			    })
		    }
	    })
	}
	const LOGOUT = () =>{
		wx.clearStorageSync()
		const userLength = Object.keys(wx.getStorageSync("user")).length
		console.log(userLength)
		userLength===0?
			(
				setName(defaultName),
				setAvatar(defaultUrl),
				wx.showToast({
					title: '注销成功',
					icon: 'success',
					duration: 1000,
					success() {
						setTimeout(()=>{
							wx.switchTab({
								url:'/pages/index/index'
							})
						},1000)
					}
				})
			):
			wx.showToast({
				title:'注销失败',
				icon:'error',
				duration:1000
			})
	}
	return (
		<View className="root">
			<View className="topBar">
				<View className="user">
					<Image className="default"  src={avatar} />
					{
						name!==''?
							<Text className="name">{name}</Text>:
							<Text onTap={login}>Hi！请点我登录</Text>
					}
				</View>
			</View>
			{name!==''?<Text onTap={LOGOUT}>退出</Text>:null}
		</View>
	);
};
export default My
