module.exports = {
	pages: [
		'pages/my/my',
		'pages/index/index',
		'pages/classes/classes',
	],
	window: {
		//navigationBarBackgroundColor: '#282c34'
		navigationBarBackgroundColor: '#ffffff',
		navigationBarTextStyle: 'black'
	},
	tabBar: {
		selectedColor: '#29A1F7',
		list: [
			{
				iconPath:'/images/home.png',
				selectedIconPath:'/images/home-active.png',
				pagePath: 'pages/index/index',
				text: '首页'
			}, {
				iconPath:'/images/class.png',
				selectedIconPath:'/images/class-active.png',
				pagePath: 'pages/classes/classes',
				text: "分类"
			}, {
				iconPath:'/images/user.png',
				selectedIconPath:'/images/user-active.png',
				pagePath: 'pages/my/my',
				text: "我的"
			}
		]
	}
};
