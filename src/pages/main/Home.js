import React, { Component } from 'react'
import { Flex, Carousel, Grid } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import { guessYouLikeApi } from '../../apis/apis';



// const data = Array.from(new Array(9)).map((_val, i) => ({
//     icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
//     text: `name${i}`,
//   }));

// const data = [
//     {
//         icon:require('../../assets/imgs/new_house.png'),
//         text:'新房'
//     },
//     {
//         icon:require('../../assets/imgs/new_house.png'),
//         text:'二手房'
//     },
//     {
//         icon:require('../../assets/imgs/new_house.png'),
//         text:'租房'
//     },
//     {
//         icon:require('../../assets/imgs/new_house.png'),
//         text:'买房'
//     },
//     {
//         icon:require('../../assets/imgs/new_house.png'),
//         text:'买房'
//     },
//     {
//         icon:require('../../assets/imgs/new_house.png'),
//         text:'商铺出租'
//     },
//     {
//         icon:require('../../assets/imgs/new_house.png'),
//         text:'写字楼'
//     },
//     {
//         icon:require('../../assets/imgs/new_house.png'),
//         text:'海外房产'
//     },
//     {
//         icon:require('../../assets/imgs/new_house.png'),
//         text:'问答'
//     },
// ]

//定义数据的时候推荐采用这种方式，而不上面的，因为项目的可维护性要高一点
const data = [
    {
        icon: 'new_house.png',
        text: '新房'
    },
    {
        icon: 'new_house.png',
        text: '二手房'
    },
    {
        icon: 'new_house.png',
        text: '租房'
    },
    {
        icon: 'new_house.png',
        text: '买房'
    },
    {
        icon: 'new_house.png',
        text: '买房'
    },
    {
        icon: 'new_house.png',
        text: '商铺出租'
    },
    {
        icon: 'new_house.png',
        text: '写字楼'
    },
    {
        icon: 'new_house.png',
        text: '海外房产'
    },
    {
        icon: 'new_house.png',
        text: '问答'
    },
].map((item) => ({
    icon: require(`../../assets/imgs/${item.icon}`),
    text: item.text
}))


class Home extends Component {
    state = {
        city: '定位中...',
        data: ['carousel_1.jpg', 'carousel_2.jpg', 'carousel_3.jpg'],
        imgHeight: 176,
        list: []
    }
    componentDidMount() {
        console.log('window', window)
        window.AMap.plugin('AMap.CitySearch', () => {
            var citySearch = new window.AMap.CitySearch()
            citySearch.getLocalCity((status, result) => {
                if (status === 'complete' && result.info === 'OK') {
                    console.log('result', result)
                    const { city } = result;
                    this.setState({ city });
                    // 查询成功，result即为当前所在城市信息
                }
            })
        })
        this.getHouseListHandler();
    }

    //获取猜你喜欢列表
    getHouseListHandler = () => {
        guessYouLikeApi()
            .then((res) => {
                console.log('res:', res);
                this.setState({ list: res.data });

            })
            .catch((e) => {
                console.log('e:', e);

            })
    }


    goToCityList = () => {
        this.props.history.push('/cityList');
    };
    goToSearch = () => {
        this.props.history.push('/search')
    }
    goToMap = () => {
        this.props.history.push('/mapPage')
    }
    render() {
        console.log('this', this)
        const { list } = this.state;
        return (
            <div>
                <Flex style={{ background: 'green', height: 50 }}>
                    <Flex justify="center" style={{ width: 80, color: '#fff' }} onClick={this.goToCityList}>
                        {this.state.city} ▼
                   </Flex>
                    <Flex style={{ flex: 1, background: '#fff', borderRadius: 20, padding: 5 }} onClick={this.goToSearch}>
                        <img src={require('../../assets/imgs/search.png')} style={{ width: 25, height: 25 }} />
                        <span style={{ marginLeft: 10, color: '#ccc' }}>挑好房，上源码房产APP</span>
                    </Flex>
                    <Flex align="center" justify="center" style={{ width: 50 }} onClick={this.goToMap}>
                        <img src={require('../../assets/imgs/map.png')} style={{ width: 25, height: 25 }} />
                    </Flex>
                </Flex>

                <Carousel
                    autoplay={true}
                    infinite
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}

                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={require(`../../assets/imgs/${val}`)}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}

                            />
                        </a>
                    ))}
                </Carousel>

                {/**宫格 */}
                <Grid
                    data={data}
                    isCarousel
                    onClick={_el => console.log(_el)} />
                {/**猜你喜欢 */}
                {
                    list.map((item) => {
                        return (
                            <Flex key={item.id} style={{ backgroundColor: '#fff', marginBottom: 10 }}>
                                <img style={{ width: 100, height: 100, marginRight: 10 }} src={item.pic} />
                                <div style={{ flex: 1, paddingRight: 10 }}>
                                    <div style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</div>
                                    <Flex justify="between" style={{ margin: '10px 0' }}>
                                        <div>{item.address}</div>
                                        <div style={{ color: 'red' }}>{item.price}/平米</div>
                                    </Flex>

                                </div>
                            </Flex>
                        )
                    })
                }

            </div>
        )
    }
}
// function test(InnerComp){
//     return <Home history={{push:()=>{}}}/>
// }
export default withRouter(Home);
