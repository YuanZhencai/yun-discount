import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import ScrollAnim from 'rc-scroll-anim';

const ScrollOverPack = ScrollAnim.OverPack;

export default class AboutGeek extends Component {
    static displayName = 'AboutGeek';

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.content}>
                    <ScrollOverPack>
                        <QueueAnim delay={200} duration={1000} interval={300} type="bottom">
                            <div key="summary" style={styles.summary}>
                                <div style={styles.num}>01_</div>
                                <div style={styles.title}>Discount</div>
                                <div style={styles.subtitle}>云优惠</div>
                            </div>
                            <div key="introOne" style={{...styles.item, ...styles.introOne}}>
                                <div style={styles.itemTitle}><a href="https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=36ceuk0k" target="_blank">阿里云大礼包</a> 最高￥1888云产品通用代金券</div>
                                <div style={styles.itemDesc}>
                                    阿里云活动贴心大礼包1888元代金券免费赠送，领券买产品更优惠！
                                </div>
                            </div>
                            <div key="introTwo" style={{...styles.item, ...styles.introTwo}}>
                                <div style={styles.itemTitle}>
                                    <a href="https://promotion.aliyun.com/ntms/act/enterprise-discount.html?userCode=36ceuk0k" target="_blank">全民云计算</a>云主机低至2折
                                </div>
                                <div style={styles.itemDesc}>
                                    爆款云服务器低至2折，1核1G¥293/元
                                </div>
                            </div>
                            <div key="introThree" style={{...styles.item, ...styles.introTwo}}>
                                <div style={styles.itemTitle}>
                                    <a href="https://www.aliyun.com/jianzhan/?userCode=36ceuk0k" target="_blank">阿里云自营建站</a>千套模板 品质保证
                                </div>
                                <div style={styles.itemDesc}>
                                    千套精美模板 轻松建站：邀请好友和我一样建一个小站
                                </div>
                            </div>
                            <div key="introFour" style={{...styles.item, ...styles.introTwo}}>
                                <div style={styles.itemTitle}>
                                    <a href="https://promotion.aliyun.com/ntms/act/enterprise-discount.html?userCode=36ceuk0k" target="_blank">助力企业上云</a>性能级主机2-5折
                                </div>
                                <div style={styles.itemDesc}>
                                    首次购买高性能云服务器，享低至2折优惠
                                </div>
                            </div>
                            <div key="introFive" style={{...styles.item, ...styles.introTwo}}>
                                <div style={styles.itemTitle}>
                                    <a href="https://promotion.aliyun.com/ntms/act/shoppingcart.html?userCode=36ceuk0k" target="_blank">超高返现</a>购物车全产品返25%
                                </div>
                                <div style={styles.itemDesc}>
                                    新客每满1000立减50元叠加代金券，老客也可一次性采购多种产品
                                </div>
                            </div>
                        </QueueAnim>
                    </ScrollOverPack>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        height: '100%',
        background: `url(${require('./images/bg.jpg')})`,
        backgroundSize: 'contain',
    },
    content: {
        position: 'relative',
        width: '1200px',
        margin: '0 auto',
        paddingTop: '180px',
    },
    summary: {
        marginRight: '100px',
        display: 'inline-block',
    },
    num: {
        fontSize: '64px',
        color: '#fff',
        lineHeight: '56px',
        marginBottom: '30px',
        fontWeight: '700',
    },
    title: {
        fontSize: '42px',
        color: '#fff',
        lineHeight: '42px',
        marginBottom: '15px',
        fontWeight: '700',
    },
    subtitle: {
        fontSize: '20px',
        color: '#fff',
        lineHeight: '20px',
        marginBottom: '15px',
    },
    introOne: {
        marginBottom: '20px',
    },
    introTwo: {
        left: '40%',
    },
    item: {
        display: 'inline-block',
        width: '720px',
        position: 'relative',
    },
    itemTitle: {
        fontSize: '32px',
        lineHeight: '32px',
        paddingBottom: '20px',
        fontWeight: '700',
        letterSpacing: '2px',
        color: '#fff',
    },
    itemDesc: {
        fontSize: '14px',
        lineHeight: '25px',
        color: '#fff',
        fontWeight: '400',
    },
};
