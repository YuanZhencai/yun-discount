import React from 'react';
import { Grid } from '@icedesign/base';

const { Row, Col } = Grid;

export default () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <Row wrap>
          <Col l="18">
            <p style={styles.title}>关于云优惠</p>
            <p style={styles.desc}>
              关于云优惠－云计算、大数据、人工智能等蓬勃发展的科技生态全景。各行各业都需要软件的支持，服务器的支持，共享云的支持。提供丰富的云优惠，节省你的上云成本。
              <a href="https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=36ceuk0k" style={styles.link}>
                <b>阿里云大礼包</b>
              </a>
              、
              <a href="https://promotion.aliyun.com/ntms/act/enterprise-discount.html?userCode=36ceuk0k" target="_blank" style={styles.link}>
                <b>助力企业上云</b>
              </a>
              、
              <a href="https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=36ceuk0k" target="_blank" style={styles.link}>
                <b>全民云计算</b>
              </a>
              、
              <a href="https://www.aliyun.com/jianzhan/?userCode=36ceuk0k" target="_blank" style={styles.link}>
                <b>阿里云自营建站</b>
              </a>
              、
              <a href="https://promotion.aliyun.com/ntms/act/shoppingcart.html?userCode=36ceuk0k" target="_blank" style={styles.link}>
                <b>超高返现</b>
              </a>
               助您一起驱动云中国。
            </p>
          </Col>
          <Col l="6">
            <div style={styles.rightContent}>
              <img
                src={require('./images/qrcode.png')}
                alt=""
                style={styles.qrcode}
              />
              <div style={styles.textBox}>
                <p style={styles.subtit}>阿里云大礼包</p>
                <p style={styles.text}>
                  阿里云大礼包二维码，最高￥1888云产品通用代金券
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: '#0e0e0e',
    padding: '54px 0 70px',
  },
  content: {
    maxWidth: '1200px',
    margin: ' 0 auto',
  },
  title: {
    fontSize: '18px',
    lineHeight: '26px',
    color: '#fff',
  },
  desc: {
    fontSize: '12px',
    lineHeight: '20px',
    color: '#fff',
    textAlign: 'justify',
    marginTop: '14px',
    maxWidth: '830px',
  },
  link: {
    color: '#00b7d3',
  },
  rightContent: {
    position: 'relative',
  },
  textBox: {
    paddingLeft: '100px',
  },
  qrcode: {
    width: '82px',
    height: '82px',
    position: 'absolute',
    top: '0',
    left: '0',
  },
  subtit: {
    fontWeight: '400',
    fontSize: '16px',
    color: '#fff',
    lineHeight: '22px',
  },
  text: {
    fontSize: '12px',
    color: '#666',
    lineHeight: '18px',
    marginTop: '6px',
  },
};
